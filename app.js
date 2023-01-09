import express from 'express';
import db from "./models/index.js";
import db_conn from './util/db-util.js';
import {profile} from './routes/profile.js';
import APIs from './api/index.js';
import bodyParser from 'body-parser';

const app = express();
db_conn(db);

const port =  process.env.PORT || 3000;

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

