const educationsService = require('../services/educationsService');

exports.getAllEducations = async (req, res) => {
    try {
        const educations = await educationsService.getAllEducations();
        res.status(200).json({ educations });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getEducationBySlug = async (req, res) => {
    try {
        const education = await educationsService.getEducationBySlug(req.params.slug);
        res.status(200).json({ education });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.createEducation = async (req, res) => {
    try {
        const education = await educationsService.createEducation(req.body);
        res.status(201).json({ education });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.deleteEducationBySlug = async (req, res) => {
    try {
        const education = await educationsService.deleteEducationBySlug(req.params.slug);
        res.status(200).json({ education });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}