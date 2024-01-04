import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsOptional,
  MinLength,
  IsNumber,
  IsEnum,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({ example: 'tarikhparcha' })
  readonly username!: string;

  @IsEmail({}, { message: 'Please enter a valid email address' })
  @ApiProperty({ example: 'contact@tarikhparcha.com.np' })
  readonly email!: string;

  // @IsOptional()
  // @IsString()
  // @ApiProperty({ example: 'john' })
  // readonly firstName!: string;

  // @IsOptional()
  // @IsString()
  // @ApiProperty({ example: 'smith' })
  // readonly lastName: string;

  // @IsOptional()
  // @IsString()
  // @ApiProperty({ example: 'smith' })
  // middleName: string;

  // @IsOptional()
  // @IsString()
  // @ApiProperty({ example: '+977-9800000000' })
  // readonly mobile: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: '+977-010000000' })
  readonly telephone!: string;

  @IsString()
  @MinLength(8)
  @ApiProperty({ minLength: 8, example: 'Secret@123' })
  readonly password!: string;

  //   @IsEnum(UserRole)
  //   @ApiProperty({ example: 'user' })
  //   readonly role: any;
}
