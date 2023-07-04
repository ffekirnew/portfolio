const projectsService = require('../services/projectsService');

exports.getAllProjects = async (req, res) => {
    try {
        const projects = await projectsService.getAllProjects();
        res.status(200).json({ projects });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getProjectBySlug = async (req, res) => {
    try {
        const project = await projectsService.getProjectBySlug(req.params.slug);
        res.status(200).json({ project });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.createProject = async (req, res) => {
    try {
        const project = await projectsService.createProject(req.body);
        res.status(201).json({ project });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.deleteProjectBySlug = async (req, res) => {
    try {
        const project = await projectsService.deleteProjectBySlug(req.params.slug);
        res.status(200).json({ project });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
