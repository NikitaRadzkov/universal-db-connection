import "reflect-metadata"
import { DataSource } from "typeorm"
import { Photo } from "./entity/photo"
import { PhotoMetadata } from "./entity/photo-metadata"
import { User } from "./entity/user"
import { Author } from "./entity/author"
import { Album } from "./entity/album"

export const PostgresSQLDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [User, Photo, PhotoMetadata, Author, Album],
    migrations: [],
    subscribers: [],
})

export const MySQLDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [User, Photo, PhotoMetadata, Author, Album],
    migrations: [],
    subscribers: [],
})

export const MariaDBDataSource = new DataSource({
    type: "mariadb",
    host: "localhost",
    port: 3307,
    username: "root",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [User, Photo, PhotoMetadata, Author, Album],
    migrations: [],
    subscribers: [],
})


export const MSSQLDataSource = new DataSource({
    type: "mssql",
    host: "localhost",
    port: 1433,
    username: "SA",
    password: "h*Kz53Vl164*",
    database: "master",
    synchronize: true,
    logging: false,
    entities: [User, Photo, PhotoMetadata, Author, Album],
    migrations: [],
    subscribers: [],
    options: {
        encrypt: false
    }
})

export const SQLiteDataSource = new DataSource({
    type: 'sqlite',
    database: '../main.sqlite',
    entities: [User, Photo, PhotoMetadata, Author, Album],
    synchronize: true,
    logging: false
});
