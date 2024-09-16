import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CaseEntity } from '../../cases/entities/case.entity';
import { BaseEntity } from '../../../models/BaseEntity';

@Entity()
export class HearingEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @ManyToOne(() => CaseEntity, (courtCase) => courtCase.case_hearings)
  case: CaseEntity;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'time' })
  time: string;

  @Column({ type: 'text', nullable: true })
  remarks: string;

  @Column({ type: 'text' })
  type: string;
}
