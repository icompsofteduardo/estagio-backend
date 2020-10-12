import { MigrationInterface, QueryRunner } from "typeorm";
import { Table } from "typeorm/schema-builder/table/Table";

export class CreateVehicles1602446249373 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "vehicles",
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                    }, {
                        name: 'model',
                        type: 'varchar',
                    }, {
                        name: 'brand',
                        type: 'varchar',
                    }, {
                        name: 'plate',
                        type: 'varchar',
                    }, {
                        name: 'daily_value',
                        type: 'numeric',
                    }, {
                        name: 'situation',
                        type: 'boolean',
                    }, {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }, {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                    // photos
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('vehicles');
    }

}
