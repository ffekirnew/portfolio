const experiencesController = require('../controllers/experiencesController');
const router = require('express').Router();

router.get('/', experiencesController.getAllExperiences);
router.get('/:slug', experiencesController.getExperienceBySlug);
router.post('/', experiencesController.createExperience);
router.delete('/:slug', experiencesController.deleteExperienceBySlug);

module.exports = router;
