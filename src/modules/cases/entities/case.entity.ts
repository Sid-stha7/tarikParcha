import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CourtEntity } from '../../court/entities/court.entity';
import { HearingEntity } from '../../hearing/entities/hearing.entity';
import { BaseEntity } from '../../../models/BaseEntity';

@Entity()
export class CaseEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Column({ type: 'int' })
  case_number: number;

  @Column({ type: 'text' })
  case_type: string;

  @Column({ type: 'text' })
  case_title: string;

  @Column({ type: 'date' })
  case_date: Date;

  @ManyToOne(() => CourtEntity, (court) => court.cases)
  court: CourtEntity;

  @Column({ type: 'uuid' })
  judge_id: string;

  @Column({ type: 'text' })
  case_status: string;

  @Column({ type: 'text', nullable: true })
  remarks: string;

  @Column({ type: 'uuid', array: true, nullable: true })
  hearings: string[];

  @OneToMany(() => HearingEntity, (hearing) => hearing.case)
  case_hearings: HearingEntity[];
}
