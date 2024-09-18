import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateNotificationTokenDto {
  @ApiProperty({
    description: 'The ID of the user',
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @ApiProperty({
    description: 'The type of the device',
    example: 'iOS',
  })
  @IsString()
  @IsNotEmpty()
  deviceType: string;

  @ApiProperty({
    description: 'The unique token for the device',
    example: 'abcd1234token',
  })
  @IsString()
  @IsNotEmpty()
  uniqueToken: string;

  @ApiPropertyOptional({
    description: 'The status of the notification token',
    example: 'ACTIVE',
    default: 'ACTIVE',
  })
  @IsString()
  @IsOptional()
  status?: string;
}
