import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateFkPhotoRent1605746020782 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE photos ADD CONSTRAINT fk_rent FOREIGN KEY(rent) REFERENCES rents(id)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE photos DROP FOREIGN KEY `fk_rent`");
    }
}