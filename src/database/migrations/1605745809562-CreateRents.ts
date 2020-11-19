import { MigrationInterface, QueryRunner } from "typeorm";
import { Table } from "typeorm/schema-builder/table/Table";

export class CreateRents1605745809562 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "rents",
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true
                    }, {
                        name: 'client',
                        type: 'int'
                    }, {
                        name: 'vehicle',
                        type: 'int'
                    }, {
                        name: 'start_date',
                        type: 'date'
                    }, {
                        name: 'end_date',
                        type: 'date'
                    }, {
                        name: 'final_value',
                        type: 'numeric'
                    }, {
                        name: 'situation',
                        type: 'boolean',
                        default: 1
                    }, {
                        name: 'operator',
                        type: 'int',
                        default: 1
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
                        name: 'ForeignClient',
                        columnNames: ['client'],
                        referencedTableName: 'clients',
                        referencedColumnNames: ['id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    }, {
                        name: 'ForeignVehicle',
                        columnNames: ['vehicle'],
                        referencedTableName: 'vehicles',
                        referencedColumnNames: ['id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    }, {
                        name: 'ForeignUser',
                        columnNames: ['operator'],
                        referencedTableName: 'users',
                        referencedColumnNames: ['id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('rents');
    }
}