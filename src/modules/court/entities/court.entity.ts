import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CaseEntity } from '../../cases/entities/case.entity';
import { BaseEntity } from '../../../models/BaseEntity';

@Entity()
export class CourtEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Column({ type: 'text' })
  court_name: string;

  @Column({ type: 'text' })
  court_level: string;

  @Column({ type: 'text', nullable: true })
  court_address: string;

  @Column({ type: 'text', nullable: true })
  court_website: string;

  @OneToMany(() => CaseEntity, (courtCase) => courtCase.court)
  cases: CaseEntity[];
}
