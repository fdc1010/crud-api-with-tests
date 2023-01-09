import db from "../models/index.js";

const collection = db.comment();

const CommentController = {
    create: async(req, res) => {
        console.log("Add Comment API");
        const commentData = req.body;
        const results = await collection.create(commentData);
        res.json({data: results, success: true});
    },
    get: async(req, res) => {
        console.log("Get Comment API by ID!");
        const results = await collection.find(req.params.id);
        res.json({data: results, success: true});
    },
    all: async(req, res) => {
        console.log("Get All Comment API!");
        const results = await collection.find();
        res.json({data: results, success: true});
    },
    update: async(req, res) => {
        console.log("Update Comment API by ID!");
        const commentData = req.body;
        const id = req.params.id;
        const results = await collection.updateOne(
            { id },
            { $set: commentData }
        );
        res.json({data: results, success: true});
    },
    delete: async(req, res) => {
        console.log("Delete Comment API by ID!");

        const results = await collection.deleteOne(req.params.id);
        res.json({data: results, success: true});
    },
    deleteAll: async(req, res) => {
        console.log("Delete All Comment API by ID!");

        const results = await collection.deleteMany({});
        res.json({data: results, success: true});
    }
};

export default CommentController;