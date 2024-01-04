import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class UserDeleteSerializer {
  @ApiProperty({
    description: "Message",
    type: String,
    example: "User  success",
  })
  @Expose()
  message?: string;
}
