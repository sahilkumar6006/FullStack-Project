import mongoose from "mongoose";

const tweetSchema = mongoose.Schema({

  content: {
    type: String,
    required: true,
    max: [250, "tweet cannot be more than 250 characters"]
  },

  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Like'
    }
  ],

  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'comment'
    }
  ],

  image: {
    type: string
  }

}, {timestamps: true})



export  const   tweet = mongoose.model('tweet', tweetSchema)