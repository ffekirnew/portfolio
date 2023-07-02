const projectsController = require('../controllers/projectsController');
const router = require('express').Router();

router.get('/', projectsController.getAllProjects);
router.get('/:slug', projectsController.getProjectBySlug);
router.post('/', projectsController.createProject);
router.delete('/:slug', projectsController.deleteProjectBySlug);

module.exports = router;
