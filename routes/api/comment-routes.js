const router = require('express').Router();
const {
  addComment,
  addReply,
  removeComment,
  removeReply
} = require('../../controllers/comment-controller');

// /api/comments
router
  .route('/:pizzaId')
  .post(addComment);

// /api/comments/:id
router
  .route('/:pizzaId/:commentId')
  .put(addReply)
  .delete(removeComment);

// /api/comments/:id/:commentId/:replyId
router
  .route('/:pizzaId/:commentId/:replyId')
  .delete(removeReply);


module.exports = router;