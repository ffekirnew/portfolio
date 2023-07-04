const mongoose = require("mongoose");

const monthYearSchema = new mongoose.Schema({
    month: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    }
});

const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});

const technologySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});

const experienceSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true,
    },
    place: {
        type: String,
        required: true,
        enum: ['on-site', 'remote', 'hybrid'],
        default: 'on-site'
    },
    type: {
        type: String,
        required: true,
        enum: ['full-time', 'part-time', 'contract', 'internship'],
        default: 'full-time'
    },
    start: {
        type: monthYearSchema,
        required: true,
    },
    end: {
        type: monthYearSchema,
    },
    current: {
        type: Boolean,
        required: true,
        default: false
    },
    location: {
        type: String,
        required: true,
    },
    skills: [skillSchema],
    technologies: [technologySchema],
});

module.exports = mongoose.model("Experience", experienceSchema);
