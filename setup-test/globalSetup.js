import express from 'express';
import {MongoMemoryServer} from 'mongodb-memory-server';
import db from '../models/index.js';
import app from '../app.js';

const globalSetup = async () => {
    
    const mongoMemServer = await MongoMemoryServer.create();

    global.__MONGOINSTANCE__ = mongoMemServer;
    db.url = mongoMemServer.getUri("db_boo-tests");
    global.__DB__ = db;
    
    app(5000,db);

};

export default globalSetup;