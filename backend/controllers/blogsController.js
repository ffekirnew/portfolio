const blogsService = require('../services/blogsService');

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await blogsService.getAllBlogs();
        res.status(200).json({ blogs });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error." });
    }
}

exports.getBlogById = async (req, res) => {
    try {
        const blogId = req.params.blogId;
        const blog = await blogsService.getBlogById(id);
        res.status(200).json({ blog });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error." });
    }
}

exports.createBlog = async (req, res) => {
    try {
        const blog = await blogsService.createBlog(req.user, req.body);
        res.status(201).json({ blog });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error." });
    }
}

exports.updateBlog = async (req, res) => {
    try {
        const blog = await blogsService.updateBlog(req.params.blogId, req.body);
        res.status(200).json({ blog });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error." });
    }
}

exports.deleteBlog = async (req, res) => {
    try {
        const blog = await blogsService.deleteBlog(req.params.blogId);
        res.status(204).json({ blog });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error." });
    }
}

exports.searchBlogs = async (req, res) => {
    try {
        const blogs = await blogsService.searchBlogs(req.params.searchQuery);
        res.status(200).json({ blogs });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error." });
    }
}


exports.changeStatus = async (req, res) => {
  try {
    const id = req.params.id;
    const status = req.body.status;
    const blog = await blogsService.changeStatus(id, status);

    res.status(200).json({ blog });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error." });
  }
}


exports.changeCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const category = req.body.category;
    const blog = await blogsService.changeCategory(id, category);

    res.status(200).json({ blog });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error." });
  }
}
