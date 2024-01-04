import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";
import { BaseUserSerializer } from "./base-user.serializers";

export class CreateUserSerializer {
  @ApiProperty({
    description: "Message",
    type: String,
    example: "User Created success",
  })
  @Expose()
  message: string;

  @ApiProperty({
    description: "data",
    type: BaseUserSerializer,
  })
  @Expose()
  @Type(() => BaseUserSerializer)
  data: BaseUserSerializer;
}
