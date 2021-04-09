const router = require('express').Router();
const {
  addComment,
  removeComment
} = require('../../controllers/comment-controller');

// /api/comments
router
  .route('/:pizzaId')
  .post(addComment);

// /api/comments/:id
router
  .route('/:pizzaId/:commentId')
  .delete(removeComment);

module.exports = router;