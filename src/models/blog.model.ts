import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    }
},{timestamps:true});
export const Blog =mongoose.models.Blog || mongoose.model("Blog", blogSchema);