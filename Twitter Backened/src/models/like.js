import mongoose, { Schema } from "mongoose";

const LikeShema = new Schema({
  onModel: {
    type: String,
    required: true,
    enum: ["Tweet", 'Comment']
  },
  likeable: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: 'onModel'
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }

}, 
{
  timestamps: true
})

const Like= mongoose.model('Like', LikeShema);

export default Like