const { Router } = require('express');
const usersController = require('./controllers/users-controller.js');
const postsController = require('./controllers/posts-controller.js');
const commentsController = require('./controllers/comments-controller');

const router = Router();

router.get('/healthcheck', (req, res) => res.send('API is up and running'));
router.use('/users', usersController);
router.use('/posts', postsController);
router.use('/comments', commentsController);

module.exports = router;
