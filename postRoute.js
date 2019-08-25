const router = require('express').Router();

/**
 * Custom Router
 */
router.get('/', (req, res) => {
  console.log(req.query);
  let { category, page, filter } = req.query;
  res.send('<h1>All posts page</h1>');
});

router.get('/:postId', (req, res) => {
  res.send('<h1>Requested post with ID: </h1>' + req.params.postId);
});

router.post('/create', (req, res) => {
  res.send('<h1>Post created</h1>');
});

router.put('/update/:postId', (req, res) => {
  res.send('<h1>Requested post updated with ID: </h1>' + req.params.postId);
});

router.delete('/delete/:postId', (req, res) => {
  res.send('<h1>Requested post deleted with ID: </h1>' + req.params.postId);
});

module.exports = router;
