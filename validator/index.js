const { validationResult } = require('express-validator');

exports.createPostValidator = (req, res, next) => {
  // check for errors
  const errors = validationResult(req);
  // if error show the first one as they happen
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  // proceed to next middleware
  next();
};
