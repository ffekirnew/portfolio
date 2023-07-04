const usersController = require('../controllers/usersController');
const router = require('express').Router();
const { authMiddleware, acl } = require('../middlewares/authMiddleware');

router.use(authMiddleware);
router.get('/', usersController.getUser);
router.get('/blogs', usersController.getUserBlogs);

module.exports = router;