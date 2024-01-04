import { DATABASE_FK, DATABASE_TABLES } from 'src/constants/database.enum';
import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class FKUserCaseRelationTable1704295525699
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const caseFk = new TableForeignKey({
      name: DATABASE_FK.FK_CASE_RELATION_CASE,
      columnNames: ['caseId'],
      referencedColumnNames: ['id'],
      referencedTableName: DATABASE_TABLES.CASE,
      onDelete: 'CASCADE',
    });

    // Add foreign keys
    const userFk = new TableForeignKey({
      name: DATABASE_FK.FK_CASE_RELATION_USER,
      columnNames: ['userId'],
      referencedColumnNames: ['id'],
      referencedTableName: DATABASE_TABLES.USERS,
      onDelete: 'CASCADE',
    });

    await queryRunner.createForeignKeys(DATABASE_TABLES.USERCASERELATION, [
      userFk,
      caseFk,
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      DATABASE_TABLES.USERCASERELATION,
      DATABASE_FK.FK_CASE_RELATION_USER,
    );

    await queryRunner.dropForeignKey(
      DATABASE_TABLES.USERCASERELATION,
      DATABASE_FK.FK_CASE_RELATION_CASE,
    );
  }
}
