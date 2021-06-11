const Mongoose = require("mongoose")

const weatherMoodSchema = new Mongoose.Schema({
  weather: {
    type: String,
    required: true,
  },
  temp: {
    type: String,
    required: true,
  },
  mood: {
    type: String,
  },
});

module.exports = Mongoose.model('WeatherMood', weatherMoodSchema);