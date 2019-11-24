// postRoute will give to the controller
const { check } = require('express-validator');
const express = require('express');
const postController = require('../controllers/post');
const validator = require('../validator'); // since index.js file is there no need to specify it. It's default
const router = express.Router();

router.get('/', postController.getPosts);
router.post(
  '/post',
  [
    //title
    check('title')
      .notEmpty()
      .withMessage('Write a title'),
    check('title')
      .isLength({
        min: 4,
        max: 150
      })
      .withMessage('Title must be between 4 to 150 characters'),
    //body
    check('body')
      .notEmpty()
      .withMessage('Write a body'),
    check('body')
      .isLength({
        min: 4,
        max: 2000
      })
      .withMessage('Body must be between 4 to 2000 characters')
  ],
  validator.createPostValidator,
  postController.createPost
);

module.exports = router;
