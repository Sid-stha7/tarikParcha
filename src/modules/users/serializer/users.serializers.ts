import { ApiProperty } from "@nestjs/swagger";
import { Expose, Transform, Type } from "class-transformer";
import { BaseUserSerializer } from "./base-user.serializers";

class Pagination {
  @ApiProperty({
    description: "page number",
    example: 1,
  })
  @Expose()
  @Transform((data) => Number(data.value))
  page: number;

  @ApiProperty({
    description: "count total",
    example: 10,
  })
  @Expose()
  @Transform((data) => Number(data.value))
  count: number;

  @ApiProperty({
    description: "per page",
    example: 20,
  })
  @Expose()
  @Transform((data) => Number(data.value))
  perPage: number;
}

export class UsersSerializer {
  @ApiProperty({
    description: "Message",
    type: String,
    example: "User fetch success",
  })
  @Expose()
  message: string;

  @ApiProperty({
    description: "pagination",
    type: Pagination,
  })
  @Expose()
  @Type(() => Pagination)
  pagination: Pagination;

  @ApiProperty({
    description: "data",
    type: BaseUserSerializer,
    isArray: true,
  })
  @Expose()
  @Type(() => BaseUserSerializer)
  data: BaseUserSerializer[];
}
