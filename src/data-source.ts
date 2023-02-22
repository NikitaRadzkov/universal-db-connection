import 'reflect-metadata';
import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { Photo } from './entity/photo';
import { PhotoMetadata } from './entity/photo-metadata';
import { User } from './entity/user';
import { Author } from './entity/author';
import { Album } from './entity/album';

dotenv.config();

export const PostgresSQLDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: false,
  entities: [User, Photo, PhotoMetadata, Author, Album],
  migrations: [],
  subscribers: []
});

export const MySQLDataSource = new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  synchronize: true,
  logging: false,
  entities: [User, Photo, PhotoMetadata, Author, Album],
  migrations: [],
  subscribers: []
});

export const MariaDBDataSource = new DataSource({
  type: 'mariadb',
  host: process.env.MARIADB_HOST,
  port: Number(process.env.MYSQL_TCP_PORT),
  username: process.env.MARIADB_USER,
  password: process.env.MARIADB_ROOT_PASSWORD,
  database: process.env.MARIADB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [User, Photo, PhotoMetadata, Author, Album],
  migrations: [],
  subscribers: []
});

export const MSSQLDataSource = new DataSource({
  type: 'mssql',
  host: process.env.MSSQL_HOST,
  port: Number(process.env.MSSQL_PORT),
  username: process.env.MSSQL_USER,
  password: process.env.MSSQL_SA_PASSWORD,
  database: process.env.MSSQL_DATABASE,
  synchronize: true,
  logging: false,
  entities: [User, Photo, PhotoMetadata, Author, Album],
  migrations: [],
  subscribers: [],
  options: {
    encrypt: false
  }
});

export const OracleDataSource = new DataSource({
  type: 'oracle',
  host: process.env.ORACLE_HOST,
  port: Number(process.env.ORACLE_PORT),
  username: process.env.ORACLE_USERNAME,
  password: process.env.ORACLE_PASSWORD,
  sid: process.env.ORACLE_SID,
  synchronize: true,
  logging: false,
  entities: [User, Photo, PhotoMetadata, Author, Album],
  migrations: [],
  subscribers: []
});

export const SQLiteDataSource = new DataSource({
  type: 'sqlite',
  database: '../main.sqlite',
  entities: [User, Photo, PhotoMetadata, Author, Album],
  synchronize: true,
  logging: false
});
