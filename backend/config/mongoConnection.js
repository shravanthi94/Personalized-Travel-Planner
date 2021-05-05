const mongoose = require('mongoose');
const config = require('config');

// Add to default.json -> mongoURI: mongodb+srv://shravs:test@travelplanner.u2krp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log('Connected to mongoDB');
  } catch (err) {
    console.log(err.message);
    //  Exit process when failed to connect
    process.exit(1);
  }
};

module.exports = connectDB;
