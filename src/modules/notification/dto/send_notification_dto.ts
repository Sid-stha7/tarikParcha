import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SendNotificationDto {
  @ApiProperty({ example: 'Important Update', description: 'The title of the notification' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ example: 'Please update your app to the latest version.', description: 'The body content of the notification' })
  @IsNotEmpty()
  @IsString()
  body: string;
}
