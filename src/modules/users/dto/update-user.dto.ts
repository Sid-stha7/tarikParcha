import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, Matches } from "class-validator";
import { i18nValidationMessage } from "nestjs-i18n";
import { IsUserEmailAlreadyExistUpdate } from "src/validator/user-update-email.validator";
import { IsUsernameAlreadyExistUpdate } from "src/validator/username-update-email.validator";

//
export class UpdateUserDto {
  @ApiProperty({
    description: "id",
    example: 123,
  })
  @IsNotEmpty({ message: i18nValidationMessage("validation.NOT_EMPTY") })
  id: number;

  @ApiProperty({
    description: "First Name",
    example: "Roman",
  })
  @IsOptional()
  firstName: string;

  @ApiProperty({
    description: "MIDDLE NAME",
    example: "parsad",
  })
  @IsOptional()
  middleName: string;

  @ApiProperty({
    description: "Last Name",
    example: "soti",
  })
  @IsOptional()
  lastName: string;

  @ApiProperty({
    description: "email",
    example: "hello@gmail.com",
  })
  @IsOptional()
  @IsEmail({}, { message: i18nValidationMessage("validation.INVALID") })
  @IsUserEmailAlreadyExistUpdate("id", {
    message: i18nValidationMessage("validation.ALREADY_EXIST"),
  })
  email: string;

  @ApiProperty({
    description: "Username",
    example: "hello123",
  })
  @IsOptional()
  @IsUsernameAlreadyExistUpdate("id", {
    message: i18nValidationMessage("validation.ALREADY_EXIST"),
  })
  username: string;

  @ApiProperty({
    description: "Mobile Number",
    example: "999999999999",
  })
  @IsOptional()
  // @Matches(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/)
  phone: string;

  @ApiProperty({
    description: "Telephone Number",
    example: "06667766",
  })
  @IsOptional()
  telephone: string;

  @ApiProperty({
    description: "Manufacture Id",
    example: 1121,
  })
  @IsOptional()
  manufactureId: number;

  @ApiProperty({
    description: "Role Id",
    example: 1121,
  })
  @IsOptional()
  roleId: number;

  // @ApiProperty({
  //   description: "User Status",
  //   example: true,
  //   type: Boolean,
  // })
  // @IsBoolean({ message: i18nValidationMessage("validation.INVALID") })
  // status: boolean;
  //   @IsString()
  //   @IsOptional()
  //   @ApiProperty({ type: "string", format: "binary", required: false })
  //   readonly profilePicture?: string;
}
