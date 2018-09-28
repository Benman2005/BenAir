import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateFlights1538138423885 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(`
      INSERT INTO flights(origin, destination, departure, price) 
      VALUES
      ('Amsterdam', 'London', '09:55', 99), ('London', 'Amsterdam', '13:15', 98), ('Amsterdam', 'Frankfurt', '10:45', 69), ('Frankfurt', 'London', '14:35', 112);
      `)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(`TRUNCATE flights`)
    }

}
