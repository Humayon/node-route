const router = require('express').Router();

/**
 * Custom Router
 */
router.get('/', (req, res) => {
  res.send('<h1>All posts page</h1>');
});

router.post('/create', (req, res) => {
  res.send('<h1>Post created</h1>');
});

router.put('/update', (req, res) => {
  res.send('<h1>Post updated</h1>');
});

router.delete('/delete', (req, res) => {
  res.send('<h1>Post deleted</h1>');
});

module.exports = router;
