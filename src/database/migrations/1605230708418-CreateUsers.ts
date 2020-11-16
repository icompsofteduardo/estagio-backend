import { MigrationInterface, QueryRunner } from "typeorm";
import { Table } from "typeorm/schema-builder/table/Table";

export class CreateUsers1605230708418 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true
                    }, {
                        name: 'name',
                        type: 'varchar'
                    }, {
                        name: 'email',
                        type: 'varchar',
                        isUnique: true
                    }, {
                        name: 'password',
                        type: 'varchar'
                    }, {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }, {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                    // photo
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }
}