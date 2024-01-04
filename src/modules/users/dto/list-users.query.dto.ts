import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  ValidateIf,
} from "class-validator";

//
import {
  SORT_DIRECTION,
  USERS_COLUMNS,
} from "../../../constants/order-by.enum";

//
export class ListUsersQueryDto {
  @ApiProperty({ type: "number", example: 10, required: false })
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  limit?: number;

  @ApiProperty({ type: "number", example: 0, required: false })
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  offset?: number;

  //
  @ApiProperty({ type: "string", example: "User", required: false })
  @IsString()
  @IsOptional()
  search?: string;

  //
  @ApiProperty({
    description: "The column to order the result by",
    type: "enum",
    enum: USERS_COLUMNS,
    example: USERS_COLUMNS.username,
    required: false,
  })
  @IsOptional()
  @IsEnum(USERS_COLUMNS)
  orderBy?: string;

  @ValidateIf((o) => o.orderBy)
  @ApiProperty({
    description: "The direction to sort the result by",
    type: "enum",
    enum: SORT_DIRECTION,
    example: SORT_DIRECTION.ASC,
    required: false,
  })
  @IsOptional()
  @IsEnum(SORT_DIRECTION)
  sort?: SORT_DIRECTION;
}
