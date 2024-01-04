import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

//
import { DATABASE_FK, DATABASE_TABLES } from "../../constants/database.enum";

//
export class CreateRole1684078384286 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const rolesTable = new Table({
      name: DATABASE_TABLES.ROLES,
      columns: [
        // Common columns for every entity
        {
          name: "id",
          type: "int",
          isPrimary: true,
          isUnique: true,
          isGenerated: true,
          generationStrategy: "increment",
        },
        {
          name: "created_at",
          type: "timestamp",
          default: "now()",
        },
        {
          name: "updated_at",
          type: "timestamp",
          default: "now()",
          isNullable: true,
        },
        {
          name: "deleted_at",
          type: "timestamp",
          isNullable: true,
        },
        // Entity specific columns
        {
          name: "label",
          type: "varchar",
        },
        {
          name: "accessPermissions",
          type: "varchar",
        },
        {
          name: "editable",
          type: "boolean",
          default: true,
        },
        // Relational ID
        {
          name: "manufacturerId",
          type: "int",
          isNullable: true,
        },
      ],
    });

    // Creating role table
    await queryRunner.createTable(rolesTable, true);

    //
   

   
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Droping foreign key of Manufacturer
   

    // Dropping table
    await queryRunner.dropTable(DATABASE_TABLES.ROLES, true);
  }
}
