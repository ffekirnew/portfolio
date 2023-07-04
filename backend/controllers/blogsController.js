const blogsService = require('../services/blogsService');

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await blogsService.getAllBlogs();
        res.status(200).json({ blogs });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error." });
    }
}

exports.getBlogBySlug = async (req, res) => {
    try {
        const blogSlug = req.params.blogSlug;
        const blog = await blogsService.getBlogBySlug(blogSlug);
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
        const blog = await blogsService.updateBlog(req.params.blogSlug, req.body);
        res.status(200).json({ blog });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error." });
    }
}

exports.deleteBlog = async (req, res) => {
    try {
        const blog = await blogsService.deleteBlog(req.params.blogSlug);
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


exports.changeBlogStatus = async (req, res) => {
  try {
    const blogSlug = req.params.blogSlug;
    const status = req.body.status;
    const blog = await blogsService.changeStatus(blogSlug, status);

    res.status(200).json({ blog });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error." });
  }
}


exports.changeBlogCategory = async (req, res) => {
  try {
    const blogSlug = req.params.blogSlug;
    const category = req.body.category;
    const blog = await blogsService.changeCategory(blogSlug, category);

    res.status(200).json({ blog });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error." });
  }
}
