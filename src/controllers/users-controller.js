'use strict';

const { Router } = require('express');
const UserService = require('../services/user-service');

const router = new Router();
const service = new UserService();

router.get('/', async (req, res, next) => {
  try {
    const result = await service.getAll();
    return res.json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
