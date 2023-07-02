const mongoose = require("mongoose");

const technologySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active",
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
    technologies: [technologySchema],
});

module.exports = mongoose.model("Project", ProjectSchema);
