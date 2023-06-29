const blogsService = require('../services/blogsService');

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = blogsService.getAllBlogs();
        res.status(200).json({ blogs });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error." });
    }
}

exports.getBlogById = async (req, res) => {
    try {
        const blogId = req.params.blogId;
        const blog = blogsService.getBlogById(id);
        res.status(200).json({ blog });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error." });
    }
}

exports.createBlog = async (req, res) => {
    try {
        const blog = blogsService.createBlog(req.body);
        res.status(201).json({ blog });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error." });
    }
}

exports.updateBlog = async (req, res) => {
    try {
        const blog = blogsService.updateBlog(req.params.blogId, req.body);
        res.status(200).json({ blog });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error." });
    }
}

exports.deleteBlog = async (req, res) => {
    try {
        const blog = blogsService.deleteBlog(req.params.blogId);
        res.status(204).json({ blog });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error." });
    }
}

exports.searchBlogs = async (req, res) => {
    try {
        const blogs = blogsService.searchBlogs(req.params.searchQuery);
        res.status(200).json({ blogs });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error." });
    }
}