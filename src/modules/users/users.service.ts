const argon2 = require('argon2');
import { I18nService } from 'nestjs-i18n';
import { InjectRepository } from '@nestjs/typeorm';
import { MailerService } from '@nestjs-modules/mailer';
import { FindManyOptions, ILike, Repository } from 'typeorm';
import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

//
import { UpdateMeDTO } from './dto/update-me.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserPagination } from './dto/pagination-user.dto';

//
import { UserEntity, UserType } from './entities/user.entity';

//
import { RolesService } from '../roles/roles.service';

//
import { UserHelper } from './helper/user.helper';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { SendPasswordEmail } from './events/send-password.events';
import { CreateUserDto } from '../auth/dto/create-user.dto';

//
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    //
    private readonly i18Service: I18nService,
    //
    //

    private readonly eventEmitter: EventEmitter2,
    //
    private readonly userHelper: UserHelper,
    @Inject(forwardRef(() => RolesService))
    private roleService: RolesService,
    private readonly mailService: MailerService,
  ) {}

  /**
   * Count user based on filters
   */
  async count(options: FindManyOptions<UserEntity>): Promise<number> {
    const value = await this.userRepository.count(options);
    return value;
  }

  /**
   * Create new User
   */
  async createNewUser(
    data: CreateUserDto,
    // creatorId: number,
    // isPlatform?: boolean,
  ): Promise<{ message: string; data: any }> {
    // Checking if creator exists

    // Checking if manufactuerer exists

    // Checking if role exists
    // if (data.roleId) {
    //   const roleExists = await this.roleService.count({
    //     where: { id: data.roleId },
    //   });
    //   if (!roleExists) {
    //     throw new BadRequestException("Role doesn't exist!");
    //   }
    // }

    const findEmail = await this.userRepository.findOne({
      where: {
        email: data.email,
      },
    });

    if (findEmail) {
      throw new BadRequestException('Email already exist');
    }
    // Creating user

    // Creating new user
    const newUser = new UserEntity();
    newUser.email = data.email;
    newUser.username = data.username;
    newUser.password = await argon2.hash(data.password);

    // Relations

    // Password generation
    const password = Math.random().toString(36).slice(-8);
    const users = await this.userRepository.save(newUser, { reload: true });

    const emailPassword = new SendPasswordEmail();
    emailPassword.email = users.email;
    emailPassword.name = users.username;
    emailPassword.password = password;

    this.eventEmitter.emit('password', emailPassword);
    //
    return {
      message: this.i18Service.t('messages.USER_CREATED_ORG'),
      data: users,
    };
  }

  //
  @OnEvent('password')
  sendPasswordMail(payload: SendPasswordEmail) {
    this.mailService
      .sendMail({
        to: payload.email,
        subject: 'New Password',
        template: 'new-password',
        context: { name: payload.name, password: payload.password },
      })
      .then()
      .catch();
  }

  async changePassword(userId: number, newPassword: string) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });
    const hashedPassword = await argon2.hash(newPassword);
    user.password = hashedPassword;

    await this.userRepository.save(user);

    return 'Password changed successfully';
  }

  /**
   *
   */
  async findOneById(id: number): Promise<UserEntity> {
    const userInfo = await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.role', 'role')
      .leftJoinAndSelect('role.permissions', 'permissions')
      .where('user.id = :id', { id: id })
      .andWhere('role.deleted_at = :value', { value: null })
      .getOne();

    if (!userInfo) {
      throw new NotFoundException(
        this.i18Service.t('error.NOT_FOUND_IN_DATABASE', {
          args: { label: 'User' },
        }),
      );
    }

    return userInfo;
  }

  /**
   *
   */
  async findOneByEmail(email: string): Promise<UserEntity> {
    const userInfo = await this.userRepository.findOne({
      where: { email },
      withDeleted: false,
    });

    return userInfo;
  }

  async validationWitEmail(email: string): Promise<UserEntity> {
    return this.userRepository.findOne({
      where: { email },
      withDeleted: true,
    });
  }

  async validationWithUsername(username: string): Promise<UserEntity> {
    return this.userRepository.findOne({
      where: { username },
      withDeleted: true,
    });
  }

  /**
   *
   */
  async getUserInfo(id: number): Promise<UserEntity> {
    const userInfo = await this.userRepository.findOne({
      where: { id },
      withDeleted: false,
    });

    return userInfo;
  }

  async fetchAllUser(query: UserPagination): Promise<{ data: UserEntity[]; total: number }> {
    const take = Number(query.pageSize) || 10;
    const skip = (Number(query.pageNumber) - 1) * take || 0;
    let condition = [] || {};

    if (query.search) {
      const searchParams = query.search.trim();
      condition = [
        { firstName: ILike(`%${searchParams}%`), type: UserType.BASIC },
        { username: ILike(`%${searchParams}%`), type: UserType.BASIC },
        { email: ILike(`%${searchParams}%`), type: UserType.BASIC },
      ];
    } else {
      condition = { type: UserType.BASIC };
    }

    const [result, total] = await this.userRepository.findAndCount({
      where: condition,

      order: { created_at: 'DESC' },
      take: take,
      skip: skip < 0 ? 0 : skip,
      withDeleted: false,
    });

    return {
      total,
      data: result,
    };
  }

  async findOne(userId: number): Promise<{ data: UserEntity }> {
    const data = await this.userRepository.findOne({
      where: { id: userId },

      withDeleted: false,
    });

    return { data };
  }

  async updateUser(
    id: number,
    data: UpdateUserDto,
  ): Promise<{ message: string; data: UserEntity }> {
    const user = await this.userRepository.findOne({
      where: {
        id: id,
      },

      withDeleted: false,
    });

    const mappedUser = this.userHelper.updateUser(user, data);

    // if (data.roleId)
    //   mappedUser.role = await this.roleService.fetchSingleRolePlatform(
    //     data.roleId,
    //   );

    const result = await this.userRepository.save(mappedUser, { reload: true });
    return {
      data: result,
      message: this.i18Service.t('messages.USER_UPDATED_ORG'),
    };
  }

  async updateAdminUser(
    id: number,
    orgId: number,
    data: UpdateUserDto,
  ): Promise<{ message: string; data: UserEntity }> {
    const user = await this.userRepository.findOne({
      where: {
        id: id,
      },

      withDeleted: false,
    });

    if (!user) {
      throw new BadRequestException(
        this.i18Service.t('error.NOT_FOUND_IN_DATABASE', {
          args: { label: 'User' },
        }),
      );
    }
    const mappedUser = this.userHelper.updateUser(user, data);
    // mappedUser.role = await this.roleService.fetchSingleRole(
    //   data.roleId,
    //   orgId,
    // );

    const result = await this.userRepository.save(mappedUser, { reload: true });
    return {
      data: result,
      message: this.i18Service.t('messages.USER_UPDATED_ORG'),
    };
  }

  async updateAdminPlatform(
    id: number,
    data: UpdateUserDto,
  ): Promise<{ message: string; data: UserEntity }> {
    const user = await this.userRepository.findOne({
      where: {
        id: id,
      },

      withDeleted: false,
    });

    if (!user) {
      throw new BadRequestException(
        this.i18Service.t('error.NOT_FOUND_IN_DATABASE', {
          args: { label: 'User' },
        }),
      );
    }
    const mappedUser = this.userHelper.updateUser(user, data);
    // mappedUser.role = await this.roleService.fetchSingleRolePlatform(
    //   data.roleId,
    // );

    const result = await this.userRepository.save(mappedUser, { reload: true });
    return {
      data: result,
      message: this.i18Service.t('messages.USER_UPDATED_ORG'),
    };
  }

  async findOrgAdmin(orgId: number): Promise<UserEntity> {
    return await this.userRepository.findOne({
      where: {},
      withDeleted: false,
    });
  }

  async toggleRemove(id: number): Promise<{ message: string }> {
    const user = await this.userRepository.findOne({
      where: { id: id },

      withDeleted: false,
    });

    console.log(user);
    if (!user) {
      throw new BadRequestException(
        this.i18Service.t('error.NOT_FOUND_IN_DATABASE', {
          args: { label: 'User' },
        }),
      );
    }
    // if (user.role) {
    //   if (!user.role.editable)
    //     throw new HttpException('Cannot Delete Super Admin', 401);
    // }
    await this.userRepository.softDelete({ id });

    return {
      message: this.i18Service.t('messages.USER_DELETED', {
        args: { label: user.username },
      }),
    };
  }

  async updateMe(id: number, data: UpdateMeDTO): Promise<{ data: UserEntity; message: string }> {
    const user = await this.userRepository.findOne({
      where: {
        id: id,
      },

      withDeleted: true,
    });

    if (!user) {
      throw new BadRequestException(
        this.i18Service.t('error.NOT_FOUND_IN_DATABASE', {
          args: { label: 'User' },
        }),
      );
    }
    const mappedUser = this.userHelper.updateMeUser(user, data);

    const result = await this.userRepository.save(mappedUser, { reload: true });
    return {
      data: result,
      message: this.i18Service.t('messages.USER_UPDATED'),
    };
  }

  async findOneUser(manufacturerId: number, userId: number): Promise<{ data: UserEntity }> {
    const data = await this.userRepository.findOne({
      where: {
        id: userId,
      },

      withDeleted: false,
    });

    return { data };
  }

  async removeUser(id: number, manufactureId: number): Promise<{ message: string }> {
    const user = await this.userRepository.findOne({
      where: {
        id: id,
      },
      withDeleted: false,
    });

    if (!user) {
      throw new BadRequestException(
        this.i18Service.t('error.NOT_FOUND_IN_DATABASE', {
          args: { label: 'User' },
        }),
      );
    }

    await this.userRepository.softDelete({ id: id });

    return {
      message: this.i18Service.t('messages.DELETED_SUCCESS', {
        args: { label: 'User' },
      }),
    };
  }
}
