import { Module } from '@nestjs/common';
import { Pool } from 'pg';
import { PG_CONNECTION } from '../constants';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

//   useExisting: PG_CONNECTION, //?????
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

const dbProvider = {
  provide: PG_CONNECTION,
  useValue: pool,
};

@Module({
  providers: [dbProvider],
  exports: [dbProvider],
})
export class DbModule {}
