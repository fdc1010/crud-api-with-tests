import { readFileSync } from 'fs';
import { resolve } from 'path';
import app from "./app.js";
import db from "./models/index.js";

const args = process.argv.slice(2);

app(process.env.PORT || 3000, db);

const user = db.mongoose.model('user');
const comment = db.mongoose.model('comment');
const vote = db.mongoose.model('vote');

const withmockdata = async () => {
    const mock_data1 = JSON.parse(readFileSync(resolve('mock','mock.profile.test.json')));
    const mock_data2 = JSON.parse(readFileSync(resolve('mock','mock.comment.test.json')));
    const mock_data3 = JSON.parse(readFileSync(resolve('mock','mock.vote.test.json')));
    await user.create(mock_data1);
    await comment.create(mock_data2);
    await vote.create(mock_data3);
    console.log("With Mockdata: true");
};

if(!!(args.length)) 
    withmockdata()
        .then(res => console.log("DB Populated Mock Data Successful!"))
        .catch(err => console.log("Encountered a glitch but, application proceeded to run successfully!"))
else console.log("With Mockdata: false");