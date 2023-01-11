import mongoose from "mongoose";

const Comment = () => {

    const {Schema} = mongoose;

    return mongoose.model("comment", Schema({
        // The user commenting
        user: {
            type: Schema.Types.ObjectId,
            ref: "user",
        },
        // The profile commented by this user
        commented_profile: {
            type: Schema.Types.ObjectId,
            ref: "user",
        },
        content: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
        },
    }));
};
export default Comment;
