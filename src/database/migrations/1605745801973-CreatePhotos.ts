import { MigrationInterface, QueryRunner } from "typeorm";
import { Table } from "typeorm/schema-builder/table/Table";

export class CreatePhotos1605745801973 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "photos",
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true
                    }, {
                        name: 'reference',
                        type: 'varchar'
                    }, {
                        name: 'rent',
                        type: 'int',
                        isNullable: true
                    }, {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }, {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('photos');
    }
}