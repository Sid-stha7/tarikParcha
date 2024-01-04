import { ApiProperty } from "@nestjs/swagger";
import { i18nValidationMessage } from "nestjs-i18n";
import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";

//
import { PERMISSIONS } from "../../../constants/permission.enum";

export class UpdateRoleDto {
  @ApiProperty({
    description: "View label of Role",
    example: "Add User",
  })
  @IsString({ message: i18nValidationMessage("validation.INVALID") })
  @IsNotEmpty({ message: i18nValidationMessage("validation.NOT_EMPTY") })
  label: string;

  @ApiProperty({
    description: "permission id list",
    example: [PERMISSIONS.ROLES_CREATE],
    isArray: true,
    type: [String],
  })
  @IsOptional()
  @IsArray({ message: i18nValidationMessage("validation.INVALID") })
  permissions: string[];
}
