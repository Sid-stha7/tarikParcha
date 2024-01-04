import { DATABASE_TABLES } from 'src/constants/database.enum';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCaseTable1704193055696 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const yourEntityTable = new Table({
      name: DATABASE_TABLES.CASE,
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isUnique: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()',
          isNullable: true,
        },
        {
          name: 'deleted_at',
          type: 'timestamp',
          isNullable: true,
        },
        // Entity specific columns
        {
          name: 'serial_number',
          type: 'int',
        },
        {
          name: 'location',
          type: 'varchar',
        },
        {
          name: 'registration_date',
          type: 'timestamp',
        },
        {
          name: 'issue',
          type: 'varchar',
        },
        {
          name: 'issue_number',
          type: 'varchar',
        },
        {
          name: 'party_opposition',
          type: 'varchar',
        },
        {
          name: 'code_number',
          type: 'varchar',
        },
        {
          name: 'indication',
          type: 'varchar',
        },
        {
          name: 'attorneys_view',
          type: 'varchar',
        },
        {
          name: 'details',
          type: 'varchar',
        },
        // Add more attributes as needed
      ],
    });

    // Creating your entity table
    await queryRunner.createTable(yourEntityTable, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Droping foreign key

    // Dropping table
    await queryRunner.dropTable(DATABASE_TABLES.CASE, true);
  }
}
