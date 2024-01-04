import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

//
import { DATABASE_FK, DATABASE_TABLES } from '../../constants/database.enum';

//
import {
  UserStatusType,
  UserType,
} from '../../modules/users/entities/user.entity';

//
export class CreateUser1684078841323 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const usersTable = new Table({
      name: DATABASE_TABLES.USERS,
      columns: [
        // Common columns for every entity
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
          name: 'username',
          type: 'varchar',
          length: '32',
          isUnique: true,
        },
        {
          name: 'lawyerCode',
          type: 'varchar',
          isUnique: true,
          isNullable: true,
        },
        {
          name: 'firstName',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'middleName',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'lastName',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'telephone',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'phone',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'profilePicture',
          type: 'varchar',
          isNullable: true,
        },
        //
        {
          name: 'email',
          type: 'varchar',
          isUnique: true,
        },
        {
          name: 'password',
          type: 'varchar',
        },

        //

        {
          name: 'userType',
          type: 'varchar',
          default: `'${UserType.BASIC}'`,
        },

        {
          name: 'isverified',
          type: 'boolean',
          default: false,
          isNullable: true,
        },
        {
          name: 'roleId',
          type: 'int',
          isNullable: true,
        },
      ],
    });

    // Creating user table
    await queryRunner.createTable(usersTable, true);

    //
    const roleFk = new TableForeignKey({
      name: DATABASE_FK.FK_ROLE_USER,
      columnNames: ['roleId'],
      referencedColumnNames: ['id'],
      referencedTableName: DATABASE_TABLES.ROLES,
      onDelete: 'SET NULL',
    });

    // Adding foreign key for manufacturer
    await queryRunner.createForeignKey(DATABASE_TABLES.USERS, roleFk);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Droping foreign key of Role
    await queryRunner.dropForeignKey(
      DATABASE_TABLES.USERS,
      DATABASE_FK.FK_ROLE_USER,
    );

    // Dropping table
    await queryRunner.dropTable(DATABASE_TABLES.USERS, true);
  }
}
