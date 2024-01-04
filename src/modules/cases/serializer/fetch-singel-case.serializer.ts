import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";
import { BaseCaseSerializer } from "./base-case.serializer";

export class FetchSingleCaseSerializer {
  @ApiProperty({
    description: "Fetch Brand Message",
    example: "Brand Abc is Fetch.",
    type: String,
  })
  @Expose()
  message: string;

  @ApiProperty({
    description: "Base Brand Data",
    type: BaseCaseSerializer,
  })
  @Expose()
  @Type(() => BaseCaseSerializer)
  data: BaseCaseSerializer;
}
