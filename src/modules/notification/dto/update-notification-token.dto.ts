import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { CreateNotificationTokenDto } from './create_notification_token.dto';

export class UpdateNotificationTokenDto extends PartialType(CreateNotificationTokenDto) {}
