'use strict';

const { Router } = require('express');
const PostService = require('../services/post-service');

const router = new Router();
const service = new PostService();

router.get('/', async (req, res, next) => {
  try {
    const {userId} = req.query;
    const result = await service.getAll(userId);
    return res.json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
