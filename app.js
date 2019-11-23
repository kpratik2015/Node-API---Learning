const express = require('express');
const app = express();
const morgan = require('morgan'); // helps to see route path in console. Works as middleware
const postRoutes = require('./routes/post');

// middleware
app.use(morgan('dev'));

app.use('/', postRoutes); // so postRoutes works like a middleware

const port = 8080;

app.listen(port, () =>
  console.log(`A Node JS API is listening on port ${port}`)
);
