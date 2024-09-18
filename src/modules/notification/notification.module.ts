import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationToken } from './entities/notificationToken.entity';
import { Notification } from './entities/notification.entity';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';

@Module({
  imports: [TypeOrmModule.forFeature([NotificationToken, Notification])],
  controllers: [NotificationController],
  providers: [NotificationService],
  exports: [NotificationService],
})
export class NotificationsModule {}
