import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";
import { BaseUserSerializer } from "./base-user.serializers";

export class UserSerializer {
  @ApiProperty({
    description: "Message",
    type: String,
    example: "User Fetch success",
  })
  @Expose()
  message?: string;

  @ApiProperty({
    description: "data",
    type: BaseUserSerializer,
  })
  @Expose()
  @Type(() => BaseUserSerializer)
  data: BaseUserSerializer;
}
