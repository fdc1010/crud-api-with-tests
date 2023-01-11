import {MongoMemoryServer} from 'mongodb-memory-server';
import db from '../models/index.js';
import db_conn from '../util/db-util.js';

let mongoMemServer;

beforeAll(async () => {
    mongoMemServer = await MongoMemoryServer.create();
    db.url = mongoMemServer.getUri("db_boo-tests");
    db_conn(db);
});

afterAll(async () => {
    await db.mongoose.disconnect();    
    await mongoMemServer.stop();
});