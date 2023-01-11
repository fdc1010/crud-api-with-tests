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
        // const results = await collection.find(req.params.id).sort({date:-1});
        const results = await collection.aggregate([
                                                    {
                                                        $match : { "_id": req.params.id }
                                                    },
                                                    {
                                                        $lookup: { from : "comments", localField: "_id", foreignField: "user", as: "my_comments" }
                                                    },
                                                    {          
                                                        $lookup: { from : "votes", localField: "_id", foreignField: "user", as: "my_votes" }
                                                    },
                                                    {          
                                                        $lookup: { from : "comments", localField: "_id", foreignField: "commented_profile", as: "their_comments" }
                                                    },
                                                    {         
                                                        $lookup: { from : "votes", localField: "_id", foreignField: "voted_profile", as: "their_votes" }
                                                    },
                                                    {
                                                        $sort: { date: -1 }
                                                    }
                                                    ]);                                                    
        const profile = results[0];
        res.json({data: profile, success: true});
    },
    all: async(req, res) => {
        console.log("Get All Profile API!");
        const results = await collection.aggregate([
                                {
                                    $lookup: { from : "comments", localField: "_id", foreignField: "user", as: "my_comments" }
                                },
                                {          
                                    $lookup: { from : "votes", localField: "_id", foreignField: "user", as: "my_votes" }
                                },
                                {          
                                    $lookup: { from : "comments", localField: "_id", foreignField: "commented_profile", as: "their_comments" }
                                },
                                {         
                                    $lookup: { from : "votes", localField: "_id", foreignField: "voted_profile", as: "their_votes" }
                                },
                                {
                                    $sort: { date: -1 }
                                }
            ]);
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