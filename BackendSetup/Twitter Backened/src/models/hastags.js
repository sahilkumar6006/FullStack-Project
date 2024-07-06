import mongoose from "mongoose";

const hastagShema = mongoose.Schema({
    title: {
      type: String,
      required: true 
    },

    tweets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet'
      }
    ]
})


export const  Hastag = mongoose.model('Hastag', hastagShema)