import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { UserEntity } from '../../users/entities/user.entity';
import { BaseEntity } from '../../../models/BaseEntity';

@Entity()
export class LawyerEntity extends BaseEntity {
  @OneToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity;

  @Column({ type: 'text', unique: true })
  bar_number: string;

  @Column({ type: 'text', array: true })
  specialization: string[];

  @Column({ type: 'int' })
  years_of_experience: number;

  @Column({ type: 'text', nullable: true })
  title: string;
}
