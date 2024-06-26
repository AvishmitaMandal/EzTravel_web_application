const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  destinations: [
    {
      place: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Place', 
        required: true
      },
      time_start: {
        type: Number,       // Unix time - ease of sorting
        required: true
      },
      time_end: Number 
    }
  ],
  activities: [
    {
      activity: {
        type: String
      },
      time_start: {
        type: Number,       // Unix time - ease of sorting
        required: true
      },
      time_end: Number,
      longitude: Number,
      latitude: Number
    }
  ],
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  comments: [
    {
      body: {
        type: String
      },
      itineraryId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
      },
      username: {
        type: String,
        ref: 'User',
      }
    }
  ],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}, { timestamps: true });


module.exports = mongoose.model("Itinerary", itinerarySchema);