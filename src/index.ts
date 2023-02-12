import { DataSource, In } from 'typeorm';
import {
  PostgresSQLDataSource,
  MySQLDataSource,
  MariaDBDataSource,
  MSSQLDataSource,
  SQLiteDataSource
} from './data-source';
import { Album } from './entity/album';
import { Author } from './entity/author';
import { Photo } from './entity/photo';
import { PhotoMetadata } from './entity/photo-metadata';
import { User } from './entity/user';
import mock, { seasons } from './mock/data';

const initDB = async (db: DataSource) => {
  try {
    await db.initialize();

    // Create a users albums
    const users = [];

    for (let i = 0; i < mock.users.length; i++) {
      const user = new User();
      user.firstName = mock.users[i].firstName;
      user.lastName = mock.users[i].lastName;
      user.age = mock.users[i].age;
      users.push(user);
    }

    await db.manager.save(users);

    // Create a few albums
    const albums = [];

    for (let i = 0; i < mock.albums.length; i++) {
      const album = new Album();
      album.name = mock.albums[i].name;

      albums.push(album);
    }

    await db.manager.save(albums);

    //Create a few authors
    const authors = [];

    for (let i = 0; i < mock.authors.length; i++) {
      const author = new Author();
      author.name = mock.authors[i].name;

      authors.push(author);
    }
    await db.manager.save(authors);

    // Create a photos and metadata
    const photos = [];
    const photoMetadata = [];
    for (let i = 0; i < mock.photoMetaData.length; i++) {
      const metadata = new PhotoMetadata();
      const photo = new Photo();
      const author = (await db.getRepository(Author).findOne({ where: { id: i } })) as Author;

      const randomSeasons = [];
      const seasonsArray = Object.values(seasons);

      for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * seasonsArray.length);
        randomSeasons.push(seasonsArray[randomIndex]);
        seasonsArray.splice(randomIndex, 1);
      }

      photo.name = mock.photos[i].name;
      photo.description = mock.photos[i].description;
      photo.filename = mock.photos[i].filename;
      photo.views = mock.photos[i].views;
      photo.isPublished = mock.photos[i].isPublished;
      photo.author = author;
      photo.albums = await db.getRepository(Album).find({
        where: {
          name: In(randomSeasons)
        }
      });

      photos.push(photo);

      metadata.height = mock.photoMetaData[i].height;
      metadata.width = mock.photoMetaData[i].width;
      metadata.compressed = mock.photoMetaData[i].compressed;
      metadata.comment = mock.photoMetaData[i].comment;
      metadata.orientation = mock.photoMetaData[i].orientation;
      metadata.photo = photo;

      photoMetadata.push(metadata);
    }
    await db.manager.save(photos);
    await db.manager.save(photoMetadata);

    await db.destroy();

    // Done
    console.log(`Data saved in ${db.options.type}`);
  } catch (err) {
    console.error(err);
  }
};

const initialize = async () => {
  await initDB(PostgresSQLDataSource);
  await initDB(MySQLDataSource);
  await initDB(MariaDBDataSource);
  await initDB(SQLiteDataSource);
  await initDB(MSSQLDataSource);
};

initialize();
