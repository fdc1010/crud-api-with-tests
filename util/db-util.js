const db_conn =  (db) => {   

    db.mongoose
            .connect(db.url, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            .then(() => console.log("Connected to the database!"))
            .catch(err => console.log("Cannot connect to the database!", err));
}

export default db_conn;