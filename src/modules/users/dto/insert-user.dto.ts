import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';
import { IsEmailAlreadyExist } from 'src/validator/email.validator';
import { IsUsernameAlreadyExist } from 'src/validator/username.validator';

export class InsertUserDto {
  @ApiProperty({
    description: 'First Name',
    example: 'Roman',
  })
  @IsNotEmpty({ message: i18nValidationMessage('validation.NOT_EMPTY') })
  firstName: string;

  @ApiProperty({
    description: 'MIDDLE NAME',
    example: 'parsad',
  })
  @IsOptional()
  middleName: string;

  @ApiProperty({
    description: 'Last Name',
    example: 'soti',
  })
  @IsNotEmpty({ message: i18nValidationMessage('validation.NOT_EMPTY') })
  lastName: string;

  @ApiProperty({
    description: 'email',
    example: 'hello@gmail.com',
  })
  @IsNotEmpty({ message: i18nValidationMessage('validation.NOT_EMPTY') })
  @IsEmail({}, { message: i18nValidationMessage('validation.INVALID') })
  @IsEmailAlreadyExist({
    message: i18nValidationMessage('validation.ALREADY_EXIST'),
  })
  email: string;

  @ApiProperty({
    description: 'Username',
    example: 'hello123',
  })
  @IsNotEmpty({ message: i18nValidationMessage('validation.NOT_EMPTY') })
  @IsUsernameAlreadyExist({
    message: i18nValidationMessage('validation.ALREADY_EXIST'),
  })
  username: string;

  @ApiProperty({
    description: 'Mobile Number',
    example: '999999999999',
  })
  @IsNotEmpty({ message: i18nValidationMessage('validation.NOT_EMPTY') })
  phone: string;

  @ApiProperty({
    description: 'Telephone Number',
    example: '06667766',
  })
  @IsOptional()
  telephone: string;

  // @ApiProperty({
  //   description: "Role Id",
  //   example: 1121,
  // })
  // @IsNumber()
  // roleId: number;
}
