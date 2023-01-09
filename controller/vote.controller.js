import db from "../models/index.js";

const collection = db.vote();

const VoteController = {
    create: async(req, res) => {
        console.log("Add Vote API by ID!");
        const voteData = req.body;
        const results = await collection.create(voteData);
        res.json({data: results, success: true});
    },
    get: async(req, res) => {
        console.log("Get Vote API by ID!");
        const results = await collection.find(req.params.id);
        res.json({data: results, success: true});
    },
    all: async(req, res) => {
        console.log("Get All Vote API!");
        const results = await collection.find();
        res.json({data: results, success: true});
    },
    update: async(req, res) => {
        console.log("Update Vote API by ID!");
        const voteData = req.body;
        const id = req.params.id;
        const results = await collection.updateOne(
            { id },
            { $set: voteData }
        );
        res.json({data: results, success: true});
    },
    delete: async(req, res) => {
        console.log("Delete Vote API by ID!");

        const results = await collection.deleteOne(req.params.id);
        res.json({data: results, success: true});
    },
    deleteAll: async(req, res) => {
        console.log("Delete All Vote API by ID!");

        const results = await collection.deleteMany({});
        res.json({data: results, success: true});
    }
};

export default VoteController;