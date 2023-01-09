import mongoose from "mongoose";

import { url } from "../config/db.config.js";
import User from "./User.js";
import Comment from "./Comment.js";
import Vote from "./Vote.js";

mongoose.set('strictQuery', false);
mongoose.Promise = global.Promise;

const db = {
    mongoose: mongoose,
    url: url,
    user: User,
    comment: Comment,
    vote: Vote
};

export default db;