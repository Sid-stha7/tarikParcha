import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class RoleSerializerUser {
  @ApiProperty({
    description: "role id",
    type: Number,
    example: 111112,
  })
  @Expose()
  id: number;

  @ApiProperty({
    description: "role label",
    type: String,
    example: "MANAGER",
  })
  @Expose()
  label: string;
}
