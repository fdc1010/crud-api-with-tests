import mongoose from "mongoose";

const User = () => {

    const {Schema} = mongoose;

    const UserSchema = new Schema({
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        mbti: {
            type: String,
        },
        enneagram: {
            type: String,
        },
        variant: {
            type: String,
        },
        tritype: {
            type: Number,
        },
        socionics: {
            type: String,
        },
        sloan: {
            type: String,
        },
        psyche: {
            type: String,
        },
        image: {
            type: String,
        },
        date: {
            type: Date,
            default: Date.now,
        },
    });

    const user = mongoose.model("user", UserSchema);
    
    return user;
};
export default User;
