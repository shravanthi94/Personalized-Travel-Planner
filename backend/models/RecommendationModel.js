const mongoose = require('mongoose');

const RecSchema = new mongoose.Schema({
  poi: {
    type: String,
    required: true,
  },
  nearby: [
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

const Recommendation = mongoose.model('recommendation', RecSchema);
module.exports = Recommendation;
