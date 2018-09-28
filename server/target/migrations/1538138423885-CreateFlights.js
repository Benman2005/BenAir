"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateFlights1538138423885 {
    async up(queryRunner) {
        await queryRunner.query(`
      INSERT INTO flights(origin, desination, departure) 
      VALUES
      ('Amsterdam', 'London', '09:55'), ('London', 'Amsterdam', '13:15'), ('Amsterdam', 'Frankfurt', '10:45'), ('Frankfurt', 'London', '14:35');
      `);
    }
    async down(queryRunner) {
        await queryRunner.query(`TRUNCATE * FROM flights`);
    }
}
exports.CreateFlights1538138423885 = CreateFlights1538138423885;
//# sourceMappingURL=1538138423885-CreateFlights.js.map