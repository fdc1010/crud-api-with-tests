import mongoose from "mongoose";

const User = () => {

    const {Schema} = mongoose;

    return mongoose.model("user", Schema({
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
    }));
};
export default User;
