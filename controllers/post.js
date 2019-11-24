const Post = require('../models/post');

exports.getPosts = (req, res) => {
  res.json({
    posts: [{ title: 'First Post' }, { title: 'Second Post' }]
  });
};

exports.createPost = (req, res) => {
  const post = new Post(req.body); // req.body is empty without body-parser
  // console.log('CREATING POST: ', post);
  // post.save((err, result) => {
  //   if (err) {
  //     return res.status(400).json({
  //       error: err
  //     });
  //   }
  //   res.status(200).json({
  //     post: result
  //   });
  // });
  post.save().then(result => {
    res.status(200).json({
      post: result
    });
  });
};
