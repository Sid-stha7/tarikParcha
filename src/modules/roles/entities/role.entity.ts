import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";



//
import { BaseEntity } from "../../../models/BaseEntity";

//
import { DATABASE_TABLES } from "../../../constants/database.enum";

//
@Entity({ name: DATABASE_TABLES.ROLES })
export class AuthRoleEntity extends BaseEntity {
  @Column("varchar")
  label: string;

  @Column("varchar")
  accessPermissions: string;

  /**
   * !!! NOTE !!!
   * Role with manufacturer value "null" indicates that this role is for the platform and not a specific manufacturer
   */
  @Column({ nullable: true })
  manufacturerId?: number;

  @Column({ default: true })
  editable: boolean;

 
}
