import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";
import { Table } from "typeorm/schema-builder/table/Table";

export class CreateRents1602524915695 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "rents",
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                    }, {
                        name: 'client',
                        type: 'int',
                    }, {
                        name: 'vehicle',
                        type: 'int',
                    }, {
                        name: 'start_date',
                        type: 'date',
                    }, {
                        name: 'end_date',
                        type: 'date',
                    }, {
                        name: 'plate',
                        type: 'varchar',
                    }, {
                        name: 'final_value',
                        type: 'numeric',
                    }, {
                        name: 'situation',
                        type: 'boolean',
                    }, {
                        name: 'operator',
                        type: 'int',
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

        await queryRunner.createForeignKey("rents", new TableForeignKey({
            columnNames: ["client"],
            referencedColumnNames: ["id"],
            referencedTableName: "clients",
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("rents", new TableForeignKey({
            columnNames: ["vehicle"],
            referencedColumnNames: ["id"],
            referencedTableName: "vehicles",
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("rents", new TableForeignKey({
            columnNames: ["operator"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE rents DROP FOREIGN KEY `FK_2782b1728a8275052722dd536ac`")
        await queryRunner.query("ALTER TABLE rents DROP FOREIGN KEY `FK_d871b057c46267743920daba20f`")
        await queryRunner.query("ALTER TABLE rents DROP FOREIGN KEY `FK_c6e4a9ed267e3869218ee50544f`")
        await queryRunner.dropTable('rents');
    }
}