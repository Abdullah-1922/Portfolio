
import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
    name: {
        type: String,
        minlength: 4,
        required: true,
    },
    githubLink: {
        type: String,
        minlength: 4,
        required: true,
    },
    liveLink: {
        type: String,
        minlength: 4,
        required: true,
    },
    skills: {
        type: [
          {
            name: {
              type: String,
              required: true,
              trim: true,
              
            },
            
          },
          { _id: false },
        ]},
    readyIn: {
        type: Number,
        min: 1,
        default: 1,
    },
    isTeamProject: {
        type: Boolean,
        default: false,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        default: "E-commerce",
    },
    projectImage: {
        type: String,
        required: false,
    }
}, { timestamps: true });

export const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);