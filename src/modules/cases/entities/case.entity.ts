import { DATABASE_TABLES } from 'src/constants/database.enum';
import { BaseEntity } from 'src/models/BaseEntity';
import UserCase from 'src/modules/users/entities/userCase.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity({ name: DATABASE_TABLES.CASE })
export class CaseEntity extends BaseEntity {
  @Column({ type: 'int' })
  serial_number: number;

  @Column({ type: 'varchar' })
  location: string;

  @Column({ type: 'timestamp' })
  registration_date: Date;

  @Column({ type: 'varchar' })
  issue: string;

  @Column({ type: 'varchar' })
  issue_number: string;

  @Column({ type: 'varchar' })
  party_opposition: string;

  @Column({ type: 'varchar' })
  code_number: string;

  @Column({ type: 'varchar' })
  indication: string;

  @Column({ type: 'varchar' })
  attorneys_view: string;

  @Column({ type: 'varchar' })
  details: string;

  // Add more attributes as needed
  @Column({ type: 'boolean', default: false, nullable: true })
  isverified: boolean | null;

  @Column({ type: 'int', nullable: true })
  roleId: number | null;

  @OneToMany(() => UserCase, (userCase) => userCase.caseEntity, {
    eager: true,
  })
  userCase: UserCase[];
}
