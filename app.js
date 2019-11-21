const express = require('express');
const app = express();
const morgan = require('morgan'); // helps to see route path in console. Works as middleware
const { getPosts } = require('./routes/post');

const myOwnMiddleware = (req, res, next) => {
  console.log('middleware applied !!');
  next(); // continue to next phase
};

// middleware
app.use(morgan('dev'));
app.use(myOwnMiddleware);

app.get('/', getPosts);

const port = 8080;

app.listen(port, () =>
  console.log(`A Node JS API is listening on port ${port}`)
);
