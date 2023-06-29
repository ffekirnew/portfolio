const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
    }, content: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Blog", blogSchema);