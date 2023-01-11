import mongoose from "mongoose";

const Vote = () => {

    const {Schema} = mongoose;

    return mongoose.model("vote", Schema({
        // This user voting
        user: {
            type: Schema.Types.ObjectId,
            ref: "user",
        },
        // The profile voted by this user
        voted_profile: {
            type: Schema.Types.ObjectId,
            ref: "user",
        },
        date: {
            type: Date,
            default: Date.now,
        },
    }));
};
export default Vote;