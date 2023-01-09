import db from "../models/index.js";
import db_conn from "../util/db-util.js";
beforeAll(async () => {
    // put your client connection code here, example with mongoose:
    db_conn(db);
});

afterAll(async () => {
    // put your client disconnection code here, example with mongodb:
    await db.mongoose.disconnect();    
});