import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';

//
import { BaseEntity } from '../../../models/BaseEntity';
import { AuthRoleEntity } from '../../roles/entities/role.entity';
//
import { DATABASE_TABLES } from '../../../constants/database.enum';
import UserCase from './userCase.entity';

//
export enum UserStatusType {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}
export enum UserType {
  LAWYER = 'lawyer',
  BASIC = 'basic',
}

@Entity({ name: DATABASE_TABLES.USERS })
export class UserEntity extends BaseEntity {
  @Column({ unique: true })
  lawyerCode: string;

  @Column({ unique: true })
  username: string;

  @Column('varchar')
  firstName: string;

  @Column({ type: 'varchar', nullable: true })
  middleName?: string;

  @Column('varchar')
  lastName: string;

  @Column({ nullable: true })
  telephone?: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true })
  profilePicture?: string;

  //
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  isVerified!: boolean;

  @Column('varchar', { default: UserType.LAWYER })
  userType: UserType;
  // @Column("varchar", { default: UserStatusType.ACTIVE })
  // status: UserStatusType;

  // @Column({ type: "varchar", default: UserType.USER })
  // type: UserType;

  // // Special column
  // @Column({ type: "timestamp", nullable: true })
  // lastActiveDate?: Date;

  // @Column({ nullable: true })
  // roleId?: number;

  @OneToMany(() => UserCase, (caseEntity) => caseEntity.user, {
    nullable: true,
    cascade: ['insert', 'update', 'soft-remove'],
    eager: true,
  })
  cases: UserCase[];
}
