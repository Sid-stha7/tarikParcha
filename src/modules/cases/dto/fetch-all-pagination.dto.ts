import { IsNotEmpty, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { i18nValidationMessage } from "nestjs-i18n";

export class CasePagination {
  @ApiProperty({
    description: "PageNumber of Data",
    example: 1,
    required: false,
  })
  @IsOptional()
  pageNumber: number;

  @ApiProperty({
    description: "Page Size of Role",
    example: 10,
    required: false,
  })
  @IsOptional()
  pageSize: number;

  @ApiProperty({
    description: "search property",
    example: "admin",
    type: String,
    required: false,
  })
  @IsOptional()
  search: string;
}
