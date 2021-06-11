const express = require('express');
const router = express.Router();

const moodController = require('./controllers.js')

router.post('/', moodController.postMood);

module.exports = router;