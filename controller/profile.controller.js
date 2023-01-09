import db from "../models/index.js";

const collection = db.user();

const ProfileController = {
    create: async(req, res) => {
        console.log("Add Profile API");
        const profileData = req.body;
        const results = await collection.create(profileData);
        res.json({data: results, success: true});
    },
    get: async(req, res) => {
        console.log("Get Profile API by ID!");
        const results = await collection.find(req.params.id).sort({date:-1});
        res.json({data: results, success: true});
    },
    all: async(req, res) => {
        console.log("Get All Profile API!");
        const results = await collection.find().sort({date:-1});
        res.json({data: results, success: true});
    },
    update: async(req, res) => {
        console.log("Update Profile API by ID!");
        const profileData = req.body;
        const id = req.params.id;
        const results = await collection.updateOne(
            { id },
            { $set: profileData }
        );
        res.json({data: results, success: true});
    },
    delete: async(req, res) => {
        console.log("Delete Profile API by ID!");

        const results = await collection.deleteOne(req.params.id);
        res.json({data: results, success: true});
    },
    deleteAll: async(req, res) => {
        console.log("Delete All Profile API by ID!");

        const results = await collection.deleteMany({});
        res.json({data: results, success: true});
    }
};

export default ProfileController;