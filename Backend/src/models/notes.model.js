import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    category: {
        type: ['Home', 'Work', 'School', 'Personal'],
        default: 'Home'
    },
    shared_to: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
})

export const Note = mongoose.model('Note',notesSchema)