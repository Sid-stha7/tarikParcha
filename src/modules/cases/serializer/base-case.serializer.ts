import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class BaseCaseSerializer {
  @ApiProperty({
    description: "id of Case",
    example: 1,
    type: Number,
  })
  @Expose()
  id: number;

  @ApiProperty({
    description: "Serial Number",
    example: 111,
  })
  @Expose()
  serial_number: number;

  @ApiProperty({
    description: "Location",
    example: "Some Location",
  })
  @Expose()
  location: string;

  @ApiProperty({
    description: "Registration Date",
    example: "2022-01-01T00:00:00.000Z",
  })
  @Expose()
  registration_date: Date;

  @ApiProperty({
    description: "Issue",
    example: "Some issue",
  })
  @Expose()
  issue: string;

  @ApiProperty({
    description: "Issue Number",
    example: "ISS-001",
  })
  @Expose()
  issue_number: string;

  @ApiProperty({
    description: "Party Opposition",
    example: "Some party",
  })
  @Expose()
  party_opposition: string;

  @ApiProperty({
    description: "Code Number",
    example: "CODE-001",
  })
  @Expose()
  code_number: string;

  @ApiProperty({
    description: "Indication",
    example: "Some indication",
  })
  @Expose()
  indication: string;

  @ApiProperty({
    description: "Attorney's View",
    example: "Attorney's view",
  })
  @Expose()
  attorneys_view: string;

  @ApiProperty({
    description: "Details",
    example: "Some details",
  })
  @Expose()
  details: string;

  @ApiProperty({
    description: "Is Verified",
    example: true,
  })
  @Expose()
  isverified: boolean;

  @ApiProperty({
    description: "Role ID",
    example: 1,
  })
  @Expose()
  roleId: number;
}
