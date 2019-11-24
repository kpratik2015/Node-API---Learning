const express = require('express');
const app = express();
const morgan = require('morgan'); // helps to see route path in console. Works as middleware
const bodyParser = require('body-parser');
const postRoutes = require('./routes/post');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

// connect to mongodb db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB Connected'));

mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`);
});

// middleware
app.use(morgan('dev'));
app.use(bodyParser.json()); // formats the json for use
app.use('/', postRoutes); // so postRoutes works like a middleware

const port = 8080;

app.listen(port, () =>
  console.log(`A Node JS API is listening on port ${port}`)
);
