import { ApiProperty } from "@nestjs/swagger";
import { Expose, Transform, Type } from "class-transformer";
import { BaseCaseSerializer } from "./base-case.serializer";

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
  total: number;

  @ApiProperty({
    description: "per page",
    example: 20,
  })
  @Expose()
  @Transform((data) => Number(data.value))
  perPage: number;
}

export class FetchALlCasesSerializer {
  @ApiProperty({
    description: "Fetch Brand Message",
    example: "Brand Abc is Fetch.",
    type: String,
  })
  @Expose()
  message: string;

  @ApiProperty({
    description: "",
    type: Pagination,
  })
  @Expose()
  @Type(() => Pagination)
  pagination: Pagination;

  @ApiProperty({
    description: "Base Brand Data",
    type: BaseCaseSerializer,
    isArray: true,
  })
  @Expose()
  @Type(() => BaseCaseSerializer)
  data: BaseCaseSerializer[];
}
