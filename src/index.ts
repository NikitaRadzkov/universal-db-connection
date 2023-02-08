import { DataSource } from "typeorm"
import { PostgresSQLDataSource, MySQLDataSource, MariaDBDataSource, MSSQLDataSource, SQLiteDataSource } from "./data-source"
import { Album } from "./entity/album"
import { Author } from "./entity/author"
import { Photo } from "./entity/photo"
import { PhotoMetadata } from "./entity/photo-metadata"
import { User } from "./entity/user"

const initDB = async (db: DataSource) => {
    await db.initialize().then(async () => {

        const user = new User()
        user.firstName = "Timber"
        user.lastName = "Saw"
        user.age = 25
        await db.manager.save(user)

        const users = await db.manager.find(User)
        console.log("Loaded users: ", users)

        // create a few albums
        const album1 = new Album()
        album1.name = "Bears"
        await db.manager.save(album1)

        const album2 = new Album()
        album2.name = "Me"
        await db.manager.save(album2)

        const author = new Author()
        author.name = "Test Name"
        await db.manager.save(author)

        // create a few photos
        const photo = new Photo()
        photo.name = "Me and Bears"
        photo.description = "I am near polar bears"
        photo.filename = "photo-with-bears.jpg"
        photo.views = 1
        photo.isPublished = true
        photo.author = author
        photo.albums = [album1, album2]

        await db.manager.save(photo)

        // create a photo metadata
        const metadata = new PhotoMetadata()
        metadata.height = 640
        metadata.width = 480
        metadata.compressed = true
        metadata.comment = "cybershoot"
        metadata.orientation = "portrait"
        metadata.photo = photo // this way we connect them

        // get entity repositories
        const photoRepository = db.getRepository(Photo)
        const metadataRepository = db.getRepository(PhotoMetadata)

        // first we should save a photo
        await photoRepository.save(photo)
        // photo is saved. Now we need to save a photo metadata
        await metadataRepository.save(metadata)

        // done
        console.log(`Data saved in ${db.options.type}`)
    
    }).catch(error => console.log(error))
}

const initialize = async () => {
    await initDB(PostgresSQLDataSource)
    await initDB(MySQLDataSource)
    await initDB(MariaDBDataSource)
    // await initDB(SQLiteDataSource)
    // await initDB(MSSQLDataSource)
}

initialize()