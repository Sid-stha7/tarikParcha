import { DATABASE_FK, DATABASE_TABLES } from 'src/constants/database.enum';
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateUserCaseRelation1704282483824 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const caseUserRelationTable = new Table({
      name: DATABASE_TABLES.USERCASERELATION,
      columns: [
        {
          name: 'userId',
          type: 'int',
          isPrimary: true,
        },
        {
          name: 'caseId',
          type: 'int',
          isPrimary: true,
        },
      ],
    });

    // Creating your entity table
    await queryRunner.createTable(caseUserRelationTable, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(DATABASE_TABLES.USERCASERELATION, true);
  }
}
