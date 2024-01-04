import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";

class ManufactureSerializer {
  @ApiProperty({
    description: "Manufacture id",
    example: 123,
    type: Number,
  })
  @Expose()
  id: number;

  @ApiProperty({
    description: "Manufacture Name",
    example: "ABC Company",
  })
  @Expose()
  name: string;

  @ApiProperty({
    description: "Manufacture Logo Name",
    example: "/upload/logo.png",
  })
  @Expose()
  logo: string;

  @ApiProperty({
    description: "Bitwise string for accessible modules",
    example: "123",
  })
  @Expose()
  accessModules: string;
}

class RoleSerializer {
  @ApiProperty({
    description: "role id",
    example: 123,
    type: Number,
  })
  @Expose()
  id: number;

  @ApiProperty({
    description: "label",
    example: "Manager",
  })
  @Expose()
  label: string;

  @ApiProperty({
    description: "Permission bitwise string",
    example: "5444517870735015415413993718908291383295",
  })
  @Expose()
  accessPermissions: string;
}

class UserSerializer {
  @ApiProperty({
    description: "User Id",
    example: 1122,
  })
  @Expose()
  id: number;

  @ApiProperty({
    description: "user name",
    example: "user111",
  })
  @Expose()
  username: string;

  @ApiProperty({
    description: "first_name",
    example: "prabhaw",
  })
  @Expose()
  firstName: string;

  @ApiProperty({
    description: "last Name",
    example: "soti",
  })
  @Expose()
  lastName: string;

  @ApiProperty({
    description: "middle name",
    example: "prashad",
  })
  @Expose()
  middleName: string;

  @ApiProperty({
    description: "telephone",
    example: "056-9999",
  })
  @Expose()
  telephone: string;

  @ApiProperty({
    description: "email",
    example: "hello@gmail.com",
  })
  @Expose()
  email: string;

  @ApiProperty({
    description: "pone number",
    example: "+977-986757765466",
  })
  @Expose()
  phone: string;

  @ApiProperty({
    description: "profile picture",
    example: "profilepicture.png",
  })
  @Expose()
  profilePicture: string;

  @ApiProperty({
    description: "Role listing",
    example: "Admin",
    type: RoleSerializer,
  })
  @Type(() => RoleSerializer)
  @Expose()
  role: RoleSerializer;

  @ApiProperty({
    description: "Organization",
  })
  @Expose()
  @Type(() => ManufactureSerializer)
  manufacturer: ManufactureSerializer;

  @ApiProperty({ description: "Manufacturer ID" })
  @Expose()
  manufacturerId: number;

  @ApiProperty({ description: "Type of user" })
  @Expose()
  type: string;
}

export class MeUserSerializer {
  @ApiProperty({
    description: "Message",
    type: String,
    example: "Manufacture fetch success",
  })
  @Expose()
  message: string;

  @ApiProperty({
    description: "data",
    type: UserSerializer,
  })
  @Expose()
  @Type(() => UserSerializer)
  data: UserSerializer;
}
