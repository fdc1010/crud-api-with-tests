import mongoose from "mongoose";

const Comment = () => {

    const {Schema} = mongoose;

    const CommentSchema = Schema({
        // The user commenting
        user: {
            type: Schema.Types.ObjectId,
            ref: "users",
        },
        // The profile commented by this user
        commented_profile: {
            type: Schema.Types.ObjectId,
            ref: "users",
        },
        content: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
        },
    });

    const comment = mongoose.model("comment", CommentSchema);
    
    return comment;
};
export default Comment;
