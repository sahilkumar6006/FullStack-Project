import { Flights } from "../models/Flights.model";
import { ApiError } from "../utils/apiError";
import { ApiResponse } from "../utils/apiResponse";
import { asyncHandler } from "../utils/asyncHandler";

const createFlight = (req, res) => {
const {flightNumber,airplaneId, departureAirportId, arrivalAirportId,
  arrivalTime,
  departureTime,
  Price
} = req.body

if(!comparTime(data.arrivalTime, data.departureTime)) {
  throw new ApiError("Arrival time cannot be less than departure Time")
}

const flight = new Flights( {
  flightNumber,
  arrivalTime,
  airplaneId,
  departureAirportId,
  arrivalAirportId,
  arrivalTime,
  departureTime,
  Price
})


res.send.status(200).json(new ApiResponse(200, "flight  created sucessfully"))
}


const getAllFlights = asyncHandler((flightId) => {
  const getAllflights = Flights.findById(flightId);
  if(!getAllFlights) {
    throw new ApiError("the flight does not exist")
  }
                  
  res.send.status(200).json(new ApiResponse(200, getAllFlights, "flights fetched in successfully"));
})



export {createFlight, getAllFlights}