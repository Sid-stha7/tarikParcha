import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { DATABASE_TABLES } from '../../../constants/database.enum';
import { BaseEntity } from '../../../models/BaseEntity';
import { UserEntity } from '../../users/entities/user.entity';

@Entity({ name: DATABASE_TABLES.NOTIFICATION_TOKEN })
export class NotificationToken extends BaseEntity {
  @Column()
  userId: number;
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  @ManyToOne(() => UserEntity)
  user: UserEntity;

  @Column()
  deviceType: string;

  @Column()
  uniqueToken: string;

  @Column({
    default: 'ACTIVE',
  })
  status: string;
}
