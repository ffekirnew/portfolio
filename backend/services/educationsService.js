const Education = require("../models/Education");

exports.getAllEducations = async () => {
    try {
        const educations =  await Education.find();
        console.log(educations);
        return educations;
    } catch (error) {
        throw new Error(error);
    }
}

exports.getEducationBySlug = async (slug) => {
    try {
        return await Education.find({slug: slug});
    } catch (error) {
        throw new Error(error);
    }
}

exports.createEducation = async (newEducation) => {
    try {
        newEducation.slug = newEducation.field.split(" ").join("-") + '-' + newEducation.school.split(" ").join("-");

        await Education.create(newEducation);
        return newEducation;
    } catch (error) {
        throw new Error(error);
    }
}

exports.deleteEducationBySlug = async (educationSlug) => {
    try {
        return await Education.deleteOne({slug: educationSlug});
    } catch (error) {
        throw new Error(error);
    }
}