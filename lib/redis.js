import { Client, Entity, Schema, Repository } from "redis-om";

const client = new Client();

// function to connect front end to redis db
async function connect() {
    if (!client.isOpen()) {
        await client.open(process.env.REDIS_URL);
    }
}

// create an entity and schema for our data
class Img extends Entity { }

let schema = new Schema(
    Img,
    {
        title: { type: 'string' },
        description: { type: 'string', textSearch: true },
        image: { type: 'string' },
    },
    {
        dataStructure: "JSON",
    }
);

export async function createImg(data) {
    // connect to the db
    await connect();

    const repository = new Repository(schema, client);
    const img = repository.createEntity(data);
    const id = await repository.save(img);
    return id;
}

// use only once
export async function index() {
    await connect();

    const repository = new Repository(schema, client);
    await repository.createIndex();
}

export async function searchImgs(q) {
    await connect();

    const repository = new Repository(schema, client);
    const images = await repository.search()
        .where('title').matches(q)
        .or('description').matches(q)
        .return.all();

    return images;
}

export async function queryAll() {
    await connect();

    const repository = new Repository(schema, client);
    const allImages = await repository.search().returnAll();

    return allImages;
}