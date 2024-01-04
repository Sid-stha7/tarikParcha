import { verify } from 'argon2';
import { PinoLogger } from 'nestjs-pino';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { MailerService } from '@nestjs-modules/mailer';
import { BadRequestException, Injectable } from '@nestjs/common';

//
import { UsersService } from '../users/users.service';
import { ChangePassworDto } from './dto/change-password.dto';
import { UserEntity } from '../users/entities/user.entity';
import { RegisterDto } from './dto/register.dto';
import { InsertUserDto } from '../users/dto/insert-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

//
@Injectable()
export class AuthService {
  constructor(
    private logger: PinoLogger,
    private jwtService: JwtService,
    private usersService: UsersService,
    private mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}

  /**
   *
   */
  async validateUser(email: string, pass: string): Promise<IAuthUser> {
    const user = await this.usersService.findOneByEmail(email);

    //
    if (!user) {
      throw new BadRequestException('User is not yet registered!');
    }

    //
    const isPasswordMatched = await verify(user.password, pass);
    if (!isPasswordMatched) {
      throw new BadRequestException('Invalid email or password!');
    }

    //
    return {
      id: user.id,

      email: user.email,
      username: user.username,
    };
  }

  /**
   * Register a new user
   */

  async register(details: CreateUserDto) {
    const user = await this.usersService.createNewUser(details);
    const token = this.login(user);

    return token;
  }
  /**
   *
   */
  async login(user: any) {
    console.log(
      '🚀 ~ file: auth.service.ts:67 ~ AuthService ~ login ~ user:',
      user,
    );

    const payload = {
      sub: user.id,
      email: user.email,
      username: user.username,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async changePassword(dto: ChangePassworDto, user: IAuthUser) {
    const userInfo = await this.validateUser(user.email, dto.currentPassword);
    if (userInfo) {
      return this.usersService.changePassword(user.id, dto.newPassword);
    }
  }

  /**
   *
   */
  // async register(user: RegisterDto) {
  //   const newUser = await this.usersService.registerNewUser(user);

  //   //
  //   this.sendSignupEmail(newUser.email, newUser.username);

  //   //
  //   return {
  //     success: true,
  //     message: "User registered successfully!",
  //   };
  // }

  /**
   *
   */
  // async forgetPasword(input: ForgetPasswordDto) {
  //   const otp = await this.usersService.forgetPassword(input);

  //   //
  //   const resetLink = this.formatResetLink(otp.code);

  //   //
  //   await this.sendResetPasswordMail(
  //     otp.user.email,
  //     otp.user.username,
  //     resetLink,
  //   );

  //   //
  //   return {
  //     success: true,
  //     message: "Reset link has been sent to your email!",
  //   };
  // }

  /**
   *
   */
  // async resetPasword(user: ResetPasswordDto) {
  //   await this.usersService.resetPassword(user);

  //   //
  //   return {
  //     success: true,
  //     message: "Password reset successfully!",
  //   };
  // }

  //
  private async sendSignupEmail(email: string, name: string) {
    try {
      await this.mailerService.sendMail({
        to: email,
        subject: 'Welcome to Seveti',
        template: 'signup',
        context: { name },
      });
    } catch (err) {
      this.logger.error(err);
    }
  }

  //
  async sendResetPasswordMail(email: string, name: string, resetLink: string) {
    try {
      await this.mailerService.sendMail({
        to: email,
        subject: 'Reset Password',
        template: 'forget-password',
        context: { name, resetLink },
      });
    } catch (err) {
      this.logger.error(err);
    }
  }

  /**
   *
   */
  formatResetLink(otp: string) {
    const webUrl = this.configService.get('app.webUrl');

    return `${webUrl}/reset-password/?code=${otp}`;
  }
}
