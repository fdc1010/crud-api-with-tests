import mongoose from "mongoose";

const Vote = () => {

    const {Schema} = mongoose;

    const VoteSchema = Schema({
        // This user voting
        user: {
            type: Schema.Types.ObjectId,
            ref: "users",
        },
        // The profile voted by this user
        voted_profile: {
            type: Schema.Types.ObjectId,
            ref: "users",
        },
        date: {
            type: Date,
            default: Date.now,
        },
    });

    const vote = mongoose.model("vote", VoteSchema);

    return vote;
};
export default Vote;