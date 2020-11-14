import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateFkRents1605371635500 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE rents ADD CONSTRAINT fk_client FOREIGN KEY(client) REFERENCES clients(id)")
        await queryRunner.query("ALTER TABLE rents ADD CONSTRAINT fk_vehicle FOREIGN KEY(vehicle) REFERENCES vehicles(id)")
        await queryRunner.query("ALTER TABLE rents ADD CONSTRAINT fk_user FOREIGN KEY(operator) REFERENCES users(id)")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE rents DROP FOREIGN KEY `fk_client`")
        await queryRunner.query("ALTER TABLE rents DROP FOREIGN KEY `fk_vehicle`")
        await queryRunner.query("ALTER TABLE rents DROP FOREIGN KEY `fk_user`")
    }

}
