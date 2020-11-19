import { MigrationInterface, QueryRunner } from "typeorm";
import { Table } from "typeorm/schema-builder/table/Table";

export class CreateClients1605745806605 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "clients",
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true
                    }, {
                        name: 'first_name',
                        type: 'varchar'
                    }, {
                        name: 'last_name',
                        type: 'varchar'
                    }, {
                        name: 'address',
                        type: 'varchar'
                    }, {
                        name: 'age',
                        type: 'int'
                    }, {
                        name: 'email',
                        type: 'varchar'
                    }, {
                        name: 'driver_license',
                        type: 'varchar'
                    }, {
                        name: 'photo',
                        type: 'int'
                    }, {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }, {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ], foreignKeys: [
                    {
                        name: 'ForeignPhoto',
                        columnNames: ['photo'],
                        referencedTableName: 'photos',
                        referencedColumnNames: ['id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('clients');
    }

}