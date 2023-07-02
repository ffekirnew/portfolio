const educationsController = require('../controllers/educationsController');
const router = require('express').Router();

router.get('/', educationsController.getAllEducations);
router.get('/:slug', educationsController.getEducationBySlug);
router.post('/', educationsController.createEducation);
router.delete('/:slug', educationsController.deleteEducationBySlug);

module.exports = router;
