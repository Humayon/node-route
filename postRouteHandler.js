exports.allPosts = (req, res) => {
  console.log(req.query);
  let { category, page, filter } = req.query;
  res.send('<h1>All posts page</h1>');
};

exports.singlePost = (req, res) => {
  res.send('<h1>Requested post with ID: </h1>' + req.params.postId);
};

exports.createPost = (req, res) => {
  res.send('<h1>Post created</h1>');
};

exports.updatePost = (req, res) => {
  res.send('<h1>Requested post updated with ID: </h1>' + req.params.postId);
};

exports.deletePost = (req, res) => {
  res.send('<h1>Requested post deleted with ID: </h1>' + req.params.postId);
};
