import { Pool } from 'pg';
import { config } from '../common/config/index';

const pool = new Pool({
  host: config.dbHost,
  database: config.dbName,
  password: config.dbPassword,
  port: config.dbPort,
  user: config.dbUser,
});

export class Postgres {
  async fetch<ResonseType>(SQL: string, ...args: any[]): Promise<ResonseType> {
    const clien = await pool.connect();

    try {
      const {
        rows: [row],
      } = await clien.query(SQL, args);

      return row;
    } catch (error) {
      console.log('postgres error: ', error.message);
    } finally {
      clien.release();
    }
  }

  async fetchAll<ResonseType>(
    SQL: string,
    ...args: any[]
  ): Promise<Array<ResonseType>> {
    const clien = await pool.connect();

    try {
      const { rows } = await clien.query(SQL, args);

      return rows;
    } catch (error) {
      console.log('postgres error: ', error.message);
    } finally {
      clien.release();
    }
  }
}

module.exports = { Postgres };
