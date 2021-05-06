const mongoose = require('mongoose');

const ItinSchema = new mongoose.Schema({
  userID: {
    type: Number,
  },
  itinerary: [
    {
      name: {
        type: String,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Itinerary = mongoose.model('itinerary', ItinSchema);
module.exports = Itinerary;
