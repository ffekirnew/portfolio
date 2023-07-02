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

const educationSchema = new mongoose.Schema({
    school: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    degree: {
        type: String,
        required: true
    },
    field: {
        type: String,
        required: true,
    },
    start: {
        type: monthYearSchema,
        required: true,
    },
    end: {
        type: monthYearSchema,
        required: true,
    },
    current: {
        type: Boolean,
        required: true,
        default: false
    }
});

module.exports = mongoose.model("Education", educationSchema);
