const express = require('express');
const router = express.Router();

const {
  getAllPosts,
  getOnePost,
  createNewPost,
  updateOnePost,
  deleteOnePost,
} = require('../../controllers/postController');
const Model = require('../../models/postModel');


router.get('/', getAllPosts);

router.get('/:postId', getOnePost);

router.post('/', createNewPost);

router.patch('/:postId', updateOnePost);

router.delete('/:postId', deleteOnePost);

module.exports = router;
