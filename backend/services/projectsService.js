const Project = require("../models/Project");

exports.getAllProjects = async () => {
    try {
        const projects =  await Project.find();
        console.log(projects);
        return projects;
    } catch (error) {
        throw new Error(error);
    }
}

exports.getProjectBySlug = async (projectSlug) => {
    try {
        return await Project.find({slug: projectSlug});
    } catch (error) {
        throw new Error(error);
    }
}

exports.createProject = async (newProject) => {
    try {
        newProject.createdAt = new Date(); // Set the createdAt property to the current date
        const ddMmYyyy = newProject.createdAt.toLocaleDateString().split("/").join("-");
        newProject.slug = `${newProject.name.toLowerCase().split(" ").join('-')}-${ddMmYyyy}`;

        await Project.create(newProject);
        return newProject;
    } catch (error) {
        throw new Error(error);
    }
}


exports.deleteProjectBySlug = async (projectSlug) => {
    try {
        return await Project.deleteOne({slug: projectSlug});
    } catch (error) {
        throw new Error(error);
    }
}

exports.searchProjects = async (searchQuery) => {
    try {
        return await Project.find({$text: {$search: searchQuery}});
    } catch (error) {
        throw new Error(error);
    }
}
