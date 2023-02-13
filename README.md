# Universal Database connection <a id="title"></a>

## 📝 Table of Contents

- [About](#about)
- [How it works](#how_it_works)
- [Getting Started](#getting_started)
  - [System requirements](#system_requirements)
  - [Setup](#setup)
- [Usage](#usage)
  - [Add or Change Data Source](#data_source)
  - [Entity](#entity)
  - [Mock Data](#mock_data)

## About <a id="about"></a>
This repository contains code for connecting to SQL databases and populating tables with test data, written in the TypeORM library. (https://typeorm.io/). The logic for working with **PostgreSQL**, **MySQL**, **MariaDB**, **SQLite**, **Microsoft SQL Server**.

Often on projects, we need to check data in the database, use various filters for data types, process them and write checks on them. For these purposes, this repository is created. You can add any data that we need for tests. Sometimes this is useful when data can be integrated into the application in On-premise mode. Or add our database to the test environment. By default, I have added One to One, Many to One, One to Many, Many to Many relationships and number, string, Date, empty, null data types. You can change them in the entity folder if needed.

Also, this repository is suitable for training sil queries. You don't have to worry about database configurations, just deploy them in a container and get started.

## How it works <a id="how_it_works"></a>
1. A database is created in the docker container
2. Data is deleted from the database (Our database does not grow in size + we constantly check the logic because the data is dynamic)
3. We fill the database with test data (The default is 20 values per table. The amount of data can be easily configured)

## Getting started <a id="getting_started"></a>
### System requirements <a id="system_requirements"></a>
- (Windows users) [WSL2](https://docs.microsoft.com/en-us/windows/wsl/install) (Windows Subsystem for Linux). We use *Ubuntu 20.04* and you need to [use version 2 of WSL](https://docs.microsoft.com/en-us/windows/wsl/install#upgrade-version-from-wsl-1-to-wsl-2).
- Docker. Get it for your system from [here](https://docs.docker.com/get-docker/). If you use Windows - please, [use WSL 2 based engine](https://docs.docker.com/desktop/windows/wsl/) for Docker.
- Docker Compose. Get it for your system from [here](https://docs.docker.com/compose/install/).
- (MacOS users) By default, Microsoft SQL Server image does not work on machines with **ARM** processors. In order to fix the compatibility bug you need to install [Docker desktop](https://docs.docker.com/desktop/install/mac-install/) version 4.16 or later. Then go to settings and enable the Features in development section enable Use Rosetta for x86/amd64 emulation on Apple Silicon and click Apply & restart button

### Setup <a id="setup"></a>
1. Clone repo
2. Clone `example.env` file and rename to `.env`
3. Change the process variables you want to use in the application
```
# PostgreSQL
POSTGRES_HOST=postgres
POSTGRES_USER=test
POSTGRES_PASSWORD=test
POSTGRES_DB=test
POSTGRES_PORT=5432
```
4. Run this command
```
docker-compose up -d
```

## Usage <a id="usage"></a>

### Add or Change Data Source <a id="data_source"></a>
If you need to further configure the database, you need to go to the folder `src/data-source.ts` then initiate your config in `src/index.ts`
```typescript
const initialize = async () => {
  await initDB(PostgresSQLDataSource);
  await initDB(MySQLDataSource);
  await initDB(MariaDBDataSource);
  await initDB(SQLiteDataSource);
  await initDB(MSSQLDataSource);
};
```
and also add deleting the database before running in the folder `src/drop-db.ts`
```typescript
const dropAllDatabases = async () => {
  await dropDatabase(PostgresSQLDataSource);
  await dropDatabase(MySQLDataSource);
  await dropDatabase(MariaDBDataSource);
  await dropDatabase(SQLiteDataSource);
  await dropDatabase(MSSQLDataSource);
};
```

### Entity <a id="entity"></a>
All entities are in a folder `src/entity`. You can easily change them or add new ones. Then you need to register them in a file `src/data-source.ts`
```typescript
export const MySQLDataSource = new DataSource({
  ...
  entities: [User, Photo, PhotoMetadata, Author, Album],
  migrations: [],
  subscribers: []
});
```

### Mock Data <a id="mock_data"></a>
To change the test data, you need to open the file `src/mock/data.ts`. By default, all data is generated randomly. To change the amount of data, change the transferred amount in these functions:
```typescript
const users = randomUsers(20);
const photos = randomPhotos(20);
const photoMetaData = randomPhotoMetaData(20);
const authors = randomAuthor(20);
```

**[⬆ Back to top](#title)**
