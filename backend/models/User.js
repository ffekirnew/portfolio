const mongoose = require("mongoose");

const userBlogSchema = new mongoose.Schema({
    blogId: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    updatedAt: {
        type: Date,
    }
});

const userSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true,
            unique: true,
        },
        salt: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            required: true,
        },
        blogs: [userBlogSchema],
    }
);

module.exports = mongoose.model("User", userSchema);