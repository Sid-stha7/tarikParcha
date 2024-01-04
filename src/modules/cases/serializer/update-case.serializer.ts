import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";
import { BaseCaseSerializer } from "./base-case.serializer";

export class UpdateCaseSerializer {
  @ApiProperty({
    description: "Update Case Message",
    example: "Case Abc is Updated.",
    type: String,
  })
  @Expose()
  message: string;

  @ApiProperty({
    description: "Base Case Data",
    type: BaseCaseSerializer,
  })
  @Expose()
  @Type(() => BaseCaseSerializer)
  data: BaseCaseSerializer;
}
