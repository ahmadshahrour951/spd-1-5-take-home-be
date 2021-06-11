const model = require('./models');
const axios = require('axios');

const moodController = {
  postMood
}

async function postMood(req, res, next) {
  try {
    const apiResponse = await axios.get(
      'http://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          q: 'San Francisco',
          appid: process.env.WEATHER_KEY,
        },
      }
    );

    console.log(apiResponse);

    await model.create({
      weather: apiResponse.data.weather[0].main,
      temp: apiResponse.data.main.temp,
      mood: req.body.mood,
    });

    res.status(201).json({ message: 'Sucessfully created weather mood entry' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = moodController;
