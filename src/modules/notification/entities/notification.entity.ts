import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { DATABASE_TABLES } from '../../../constants/database.enum';
import { NotificationToken } from './notificationToken.entity';
import { BaseEntity } from '../../../models/BaseEntity';

@Entity({ name: DATABASE_TABLES.NOTIFICATION })
export class Notification extends BaseEntity {
  @Column()
  notificationTokenId: number;
  @JoinColumn({ name: 'notificationTokenId', referencedColumnName: 'id' })
  @ManyToOne(() => NotificationToken)
  notificationToken: NotificationToken;

  @Column()
  title: string;

  @Column({ type: 'longtext', nullable: true })
  body: any;

  @Column()
  created_by: string;

  @Column({
    default: 'ACTIVE',
  })
  status: string;
}
