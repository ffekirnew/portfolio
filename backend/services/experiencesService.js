const Experience = require("../models/Experience");

exports.getAllExperiences = async () => {
    try {
        const experiences =  await Experience.find();
        console.log(experiences);
        return experiences;
    } catch (error) {
        throw new Error(error);
    }
}

exports.getExperienceBySlug = async (slug) => {
    try {
        return await Experience.find({slug: slug});
    } catch (error) {
        throw new Error(error);
    }
}

exports.createExperience = async (newExperience) => {
    try {
        newExperience.slug = newExperience.role.split(" ").join("-") + '-' + newExperience.company.split(" ").join("-");

        await Experience.create(newExperience);
        return newExperience;
    } catch (error) {
        throw new Error(error);
    }
}

exports.deleteExperienceBySlug = async (experienceSlug) => {
    try {
        return await Experience.deleteOne({slug: experienceSlug});
    } catch (error) {
        throw new Error(error);
    }
}