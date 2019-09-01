const router = require('express').Router();
const {
  allPosts,
  singlePost,
  createPost,
  updatePost,
  deletePost
} = require('./postRouteHandler');

/**
 * Custom Router
 */
router.get('/', allPosts);

router.get('/:postId', singlePost);

router.post('/create', createPost);

router.put('/update/:postId', updatePost);

router.delete('/delete/:postId', deletePost);

module.exports = router;
