import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";

export class DeletedCaseSerializer {
  @ApiProperty({
    description: "Delete Case Message",
    example: "Case Abc is Deleted.",
    type: String,
  })
  @Expose()
  message: string;
}
