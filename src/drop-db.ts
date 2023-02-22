import { DataSource } from 'typeorm';
import {
  MariaDBDataSource,
  MSSQLDataSource,
  MySQLDataSource,
  OracleDataSource,
  PostgresSQLDataSource,
  SQLiteDataSource
} from './data-source';

const dropDatabase = async (db: DataSource) => {
  try {
    await db.initialize();
    await db.dropDatabase();
    await db.destroy();
  } catch (err) {
    console.error(err);
  }
};

const dropAllDatabases = async () => {
  await dropDatabase(PostgresSQLDataSource);
  await dropDatabase(MySQLDataSource);
  await dropDatabase(MariaDBDataSource);
  await dropDatabase(SQLiteDataSource);
  await dropDatabase(MSSQLDataSource);
  await dropDatabase(OracleDataSource);
};

dropAllDatabases();
