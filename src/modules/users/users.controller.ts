import { plainToClass } from 'class-transformer';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiSecurity,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';

import type { Request } from 'express';

//
import { UsersService } from '../users/users.service';

import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

import { AccessPermissions } from 'src/decorators/petmission.decorator';
import { PERMISSIONS } from 'src/constants/permission.enum';
import { ErrorResponse } from 'src/ResponseDocs/ErrorResponse';

//
import { UserSerializer } from './serializer/user.serializer';
import { MeUserSerializer } from './serializer/me.serializer';
import { UsersSerializer } from './serializer/users.serializers';
import { UpdateUserSerializer } from './serializer/user-update.serializer';
import { UserDeleteSerializer } from './serializer/delet-user.serializers';
import { CreateUserSerializer } from './serializer/user-created.serializer';

//
import { UpdateMeDTO } from './dto/update-me.dto';

import { UpdateUserDto } from './dto/update-user.dto';
import { UserPagination } from './dto/pagination-user.dto';
import { ListUsersQueryDto } from './dto/list-users.query.dto';
import { CreateUserDto } from '../auth/dto/create-user.dto';

@UseGuards(JwtAuthGuard)
@ApiSecurity('access-token')
@ApiBearerAuth()
@Controller('')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @ApiTags('Users')
  @Get('/users/me')
  @ApiOkResponse({
    description: 'Get Me User',
    type: MeUserSerializer,
  })
  @ApiBadRequestResponse({
    description: 'Unable to get',
    type: ErrorResponse,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorize Access',
    type: ErrorResponse,
  })
  async getOne(@Req() req: Request) {
    const userInfo = await this.userService.getUserInfo(req.user.id);

    return plainToClass(
      MeUserSerializer,

      { data: userInfo },
      { strategy: 'excludeAll' },
    );
  }

  @ApiTags('Users')
  @Put('/users/update-me')
  @ApiOkResponse({
    description: 'Update User Details',
    type: MeUserSerializer,
  })
  @ApiBadRequestResponse({
    description: 'Unable to add',
    type: ErrorResponse,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorize Access',
    type: ErrorResponse,
  })
  async updateMe(
    @Body() body: UpdateMeDTO,
    @Req() req: Request,
  ): Promise<MeUserSerializer> {
    const out = await this.userService.updateMe(req.user.id, body);

    return plainToClass(MeUserSerializer, out, {
      strategy: 'excludeAll',
    });
  }

  @ApiTags('Users')
  @Post('/users')
  @AccessPermissions(PERMISSIONS.PLATFORM_USER_CREATE)
  @ApiCreatedResponse({
    description: 'Create User',
    type: CreateUserDto,
  })
  @ApiBadRequestResponse({
    description: 'Unable to add',
    type: ErrorResponse,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorize Access',
    type: ErrorResponse,
  })
  async createUser(
    @Body() body: CreateUserDto,

    @Req() req: Request,
  ): Promise<CreateUserSerializer> {
    console.log('controller', body);
    const { data, message } = await this.userService.createNewUser(body);

    return plainToClass(
      CreateUserSerializer,
      { data, message },
      { strategy: 'excludeAll' },
    );
  }

  @ApiTags('Users')
  @Get('/users')
  @AccessPermissions(PERMISSIONS.PLATFORM_USER_READ)
  @ApiOkResponse({
    description: ' Users',
    type: UsersSerializer,
  })
  @ApiBadRequestResponse({
    description: 'Unable to fetch',
    type: ErrorResponse,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorize Access',
    type: ErrorResponse,
  })
  async getAllUserOrg(
    @Query() query: UserPagination,
  ): Promise<UsersSerializer> {
    const { data, total } = await this.userService.fetchAllUser(query);

    return plainToClass(
      UsersSerializer,
      {
        data,
        pagination: {
          pageNumber: query.pageNumber,
          pageSize: query.pageSize,
          count: total,
        },
      },
      { strategy: 'excludeAll' },
    );
  }

  @ApiTags('Users')
  @Put('/users/update-details')
  @AccessPermissions(PERMISSIONS.PLATFORM_USER_UPDATE)
  @ApiOkResponse({
    description: 'Update manufacture',
    type: UpdateUserSerializer,
  })
  @ApiBadRequestResponse({
    description: 'Unable to add',
    type: ErrorResponse,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorize Access',
    type: ErrorResponse,
  })
  async update(@Body() body: UpdateUserDto): Promise<UpdateUserSerializer> {
    const out = await this.userService.updateUser(body.id, body);

    return plainToClass(UpdateUserSerializer, out, {
      strategy: 'excludeAll',
    });
  }

  @ApiTags('Users')
  @Delete('/users/:id')
  @AccessPermissions(PERMISSIONS.PLATFORM_USER_DELETE)
  @ApiOkResponse({
    description: 'Soft Delete manufacture',
    type: UpdateUserSerializer,
  })
  @ApiBadRequestResponse({
    description: 'Unable to add',
    type: ErrorResponse,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorize Access',
    type: ErrorResponse,
  })
  async remove(@Param('id') id: number): Promise<UserDeleteSerializer> {
    const { message } = await this.userService.toggleRemove(+id);

    return plainToClass(
      UserDeleteSerializer,
      { message },
      { strategy: 'excludeAll' },
    );
  }

  @ApiParam({
    name: 'manufacturerId',
    type: 'number',
    required: true,
    description: 'Manufacture ID',
  })
  @ApiTags('Manufacturer Users')
  @Post('/manufacturers/:manufacturerId/users')
  @AccessPermissions(PERMISSIONS.USER_CREATE)
  async createManufacturerUser(
    @Req() request: Request,
    @Body() data: CreateUserDto,
  ) {
    console.log(data);
    const newUser = await this.userService.createNewUser(data);

    return {
      message: 'Successfully created user!',
      data: newUser,
    };
  }

  @ApiTags('Users')
  @Get('/users/:id')
  @AccessPermissions(PERMISSIONS.USER_READ)
  @ApiOkResponse({
    description: 'All manufacture With Pagination',
    type: UserSerializer,
  })
  @ApiBadRequestResponse({
    description: 'Unable to add',
    type: ErrorResponse,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorize Access',
    type: ErrorResponse,
  })
  async findOne(@Param('id') id: number): Promise<UserSerializer> {
    const result = await this.userService.findOne(id);

    return plainToClass(
      UserSerializer,
      { data: result.data },
      {
        strategy: 'excludeAll',
      },
    );
  }
}
