'use strict';

const { Router } = require('express');
const CommentService = require('../services/comment-service');

const router = new Router();
const service = new CommentService();

router.get('/', async (req, res, next) => {
  try {
    const {postId} = req.query;
    const result = await service.getAll(postId);
    return res.json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
