import { Expose, Type } from "class-transformer";

import { ApiProperty } from "@nestjs/swagger";
import { BaseCaseSerializer } from "./base-case.serializer";


export class CreateCaseSerializer {
  @ApiProperty({
    description: "Create Category Message",
    example: "Category Abc is Created.",
    type: String,
  })
  @Expose()
  message: string;

  @ApiProperty({
    description: "Base Category Data",
    type: BaseCaseSerializer,
  })
  @Expose()
  @Type(() => BaseCaseSerializer)
  data: BaseCaseSerializer;
}
