import mongoose from "mongoose";

const shareSchema = new mongoose.Schema({
    access_to: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]

})

export const Share = mongoose.model('Share', shareSchema); 