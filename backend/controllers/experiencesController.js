const experiencesService = require("../services/experiencesService");

exports.getAllExperiences = async (req, res) => {
    try {
        const experiences = await experiencesService.getAllExperiences();
        res.status(200).json({ experiences });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getExperienceBySlug = async (req, res) => {
    try {
        const experience = await experiencesService.getExperienceBySlug(req.params.slug);
        res.status(200).json({ experience });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.createExperience = async (req, res) => {
    try {
        const experience = await experiencesService.createExperience(req.body);
        res.status(201).json({ experience });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.deleteExperienceBySlug = async (req, res) => {
    try {
        const experience = await experiencesService.deleteExperienceBySlug(req.params.slug);
        res.status(200).json({ experience });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}