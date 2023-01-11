import express from 'express';
import db_conn from './util/db-util.js';
import {profile} from './routes/profile.js';
import APIs from './api/index.js';
import bodyParser from 'body-parser';

const app = (init_port = 3000, db) => {
    const server = express();

    db_conn(db);
    
    const port =  init_port;
    
    // set the view engine to ejs
    server.set('view engine', 'ejs');
    
    // Parse incoming request bodies as JSON
    server.use(bodyParser.json());
    
    // routes
    server.use('/profile', profile);
    
    // api
    server.use('/api/profile', APIs.API_Profile);
    server.use('/api/comment', APIs.API_Comment);
    server.use('/api/vote', APIs.API_Vote);
    
    // start server
    server.listen(port);
    console.log('Express started. Listening on %s', port);
}

export default app;