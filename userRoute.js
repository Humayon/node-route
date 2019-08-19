const router = require('express').Router();

/**
 * Custom Router
 */
router.get('/login', (req, res) => {
  res.send('<h1>This is Login route</h1>');
});

router.get('/logout', (req, res) => {
  res.send('<h1>This is Logout route</h1>');
});

router.get('/signup', (req, res) => {
  res.send('<h1>This is Signup route</h1>');
});

module.exports = router;
