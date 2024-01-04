import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  // RelationId,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { CaseEntity } from 'src/modules/cases/entities/case.entity';

@Entity()
export default class UserCase extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  /**
   * RELATIONS
   */
  @ManyToOne(() => UserEntity, (user) => user.cases, {
    onDelete: 'SET NULL',
  })
  @JoinColumn()
  user: UserEntity;

  //   @RelationId((userSkill: UserSkill) => userSkill.userDetail)
  //   userDetailId: number;
  @ManyToOne(() => CaseEntity, (caseEntity) => caseEntity.userCase, {
    cascade: ['insert', 'update', 'soft-remove'],
    onDelete: 'SET NULL',
  })
  @JoinColumn()
  caseEntity: CaseEntity;

  //   @RelationId((userSkill: UserSkill) => userSkill.skill)
  //   skillId: number;
}
