const projectsService = require('../services/projectsService');
const randomStringUtil = require('../utilities/randomStringUtil');
const path = require('path');

exports.getAllProjects = async (req, res) => {
    try {
        let projects = await projectsService.getAllProjects();
        res.status(200).json({ projects });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getProjectBySlug = async (req, res) => {
    try {
        let project = await projectsService.getProjectBySlug(req.params.slug);
        res.status(200).json({ project });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.createProject = async (req, res) => {
    try {
        let image = req.files.image;
        image.mv(path.resolve(__dirname, '../public/img', image.name), async (error) => {
            if (error) {
                throw new Error(error);
            }
            req.body.image = 'img/' + image.name;
            let project = await projectsService.createProject(req.body);
            res.status(201).json({ project });
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.deleteProjectBySlug = async (req, res) => {
    try {
        let project = await projectsService.deleteProjectBySlug(req.params.slug);
        res.status(200).json({ project });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
