const Post = require('../models/post');

exports.getPosts = (req, res) => {
  const posts = Post.find()
    .select('_id title body')
    .then(posts => {
      res.json({ posts }); // status(200) is default and when key and value name is same then just { posts }
    })
    .catch(err => console.log(err));
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
    res.json({
      post: result
    });
  });
};
