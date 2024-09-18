import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Notification } from './entities/notification.entity';
import { NotificationToken } from './entities/notificationToken.entity';
import { Repository } from 'typeorm';
import { UpdateNotificationTokenDto } from './dto/update-notification-token.dto';
import * as firebase from 'firebase-admin';
import { SendNotificationDto } from './dto/send_notification_dto';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(Notification) private readonly notificationsRepo: Repository<Notification>,
    @InjectRepository(NotificationToken)
    private readonly notificationTokenRepo: Repository<NotificationToken>,
  ) {}

  async acceptPushNotification(userId: number, tokenDto: UpdateNotificationTokenDto) {
    console.log(userId);
    console.log(tokenDto);
    await this.notificationTokenRepo.softDelete({ userId: userId });
    // save to db
    return await this.notificationTokenRepo.save({
      userId: userId,
      deviceType: tokenDto.deviceType,
      uniqueToken: tokenDto.uniqueToken,
      status: 'ACTIVE',
    });
  }

  async disableNotification(userId: number, updateDto: UpdateNotificationTokenDto) {
    try {
      await this.notificationTokenRepo.update(
        { userId: userId, deviceType: updateDto.deviceType },
        {
          status: 'INACTIVE',
        },
      );
    } catch (error) {
      return error;
    }
  }

  async getAllNotifications() {
    return await this.notificationsRepo.find();
  }

  sendPush = async (
    userId: number,
    sendData: SendNotificationDto,
  ): Promise<{ message: string } | Error> => {
    try {
      const { title, body } = sendData;
      const notificationToken = await this.notificationTokenRepo.findOne({
        where: { userId: userId, status: 'ACTIVE' },
      });
      if (notificationToken) {
        await this.notificationsRepo.save({
          notificationTokenId: notificationToken.userId,
          title,
          body,
          status: 'ACTIVE',
        });
        await firebase
          .messaging()
          .send({
            notification: { title, body },
            token: notificationToken.uniqueToken,
            android: { priority: 'high' },
          })
          .catch((error: any) => {
            console.error(error);
          });
        return { message: 'successfully sent notification' };
      }
    } catch (error) {
      return error;
    }
  };
}
