import { ApiProperty } from "@nestjs/swagger";
import { Expose, Transform, Type } from "class-transformer";
import { RoleSerializerUser } from "./user-role.serializer";

export class BaseUserSerializer {
  @ApiProperty({
    description: "id",
    example: 123,
  })
  @Expose()
  id: number;

  @ApiProperty({
    description: "First Name",
    example: "Roman",
  })
  @Expose()
  firstName: string;

  @ApiProperty({
    description: "MIDDLE NAME",
    example: "parsad",
  })
  @Expose()
  middleName: string;

  @ApiProperty({
    description: "Last Name",
    example: "soti",
  })
  @Expose()
  lastName: string;

  @ApiProperty({
    description: "email",
    example: "hello@gmail.com",
  })
  @Expose()
  email: string;

  @ApiProperty({
    description: "Username",
    example: "hello123",
  })
  @Expose()
  username: string;

  @ApiProperty({
    description: "Mobile Number",
    example: "999999999999",
  })
  @Expose()
  phone: string;

  @ApiProperty({
    description: "Telephone Number",
    example: "06667766",
  })
  @Expose()
  telephone: string;

  @ApiProperty({
    description: "Organization Status",
    example: "active",
  })
  @Expose()
  status: string;

  @ApiProperty({
    description: "Role Id",
    example: 1121,
  })
  @Expose()
  @Type(() => RoleSerializerUser)
  role: RoleSerializerUser;
}
