if (process.env.NODE_ENV !== 'production') require('dotenv-safe').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const routes = require('./src/routes.js');

const PORT = process.env.PORT || 8000;

const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());
app.use(morgan('combined'));

app.use('/', routes);

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('error', (err) => {
  console.log('err', err);
});
mongoose.connection.on('connected', (err, res) => {
  console.log('mongoose is connected');
});

app.listen(PORT, () => {
  console.log(`app is listening to PORT ${PORT}`);
});
