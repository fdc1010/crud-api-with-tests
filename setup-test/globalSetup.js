import express from 'express';
import {MongoMemoryServer} from 'mongodb-memory-server';
import db from '../models/index.js';
import db_conn from '../util/db-util.js';
import {profile} from '../routes/profile.js';
import APIs from '../api/index.js';
import bodyParser from 'body-parser';

const globalSetup = async () => {
    let mongoMemServer;
    const app = express();
    global.__DB__ = db;
    mongoMemServer = await MongoMemoryServer.create();
    global.__MONGOINSTANCE__ = mongoMemServer;
    global.__DB__.url = mongoMemServer.getUri("db_boo-tests");
    db.url = mongoMemServer.getUri("db_boo-tests");
    db_conn(global.__DB__);    

    const port =  process.env.PORT || 5000;

    // set the view engine to ejs
    app.set('view engine', 'ejs');

    // Parse incoming request bodies as JSON
    app.use(bodyParser.json());

    // routes
    app.use('/profile', profile);

    // api
    app.use('/api/profile', APIs.API_Profile);
    app.use('/api/comment', APIs.API_Comment);
    app.use('/api/vote', APIs.API_Vote);

    // start server
    app.listen(port);
    console.log('Express started. Listening on %s', port);
};

export default globalSetup;