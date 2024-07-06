import mongoose, { Schema } from "mongoose";

const CitySchema = new Schema({
  modelNumber : {
    type: String,
    required: true ,

  },
  capacity : {
    type: String,
    required : true
  },

})


export const City = mongoose.model('City', CitySchema)