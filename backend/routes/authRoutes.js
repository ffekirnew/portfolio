const authController = require('../controllers/authController');
const router = require('express').Router();
const { authMiddleware, acl } = require('../middlewares/authMiddleware');

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);

router.use(acl);
router.post('/register/admin', authController.registerAdminUser);

module.exports = router;