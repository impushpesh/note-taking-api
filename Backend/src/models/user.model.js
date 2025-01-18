import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 6,
        maxlength: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    phoneNo: {
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 15
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    notes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Note',
        }
    ],
    access_to_notes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Share'
    }],

}, {timestamps: true})

export const User = mongoose.model('User', userSchema)