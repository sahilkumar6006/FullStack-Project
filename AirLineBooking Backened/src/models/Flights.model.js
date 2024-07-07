import mongoose, { Schema, model } from "mongoose";


const flightSchema = new Schema({

  _airplane_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  departure_city: {
    type: Schema.Types.ObjectId,
    ref: 'city',
    required: true
  },
  arrival_city: {
    type: Schema.Types.ObjectId,
    required: true,
  }
})

export const Flights = mongoose.model('Flights', flightSchema)