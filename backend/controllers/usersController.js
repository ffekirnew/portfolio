const usersService = require('../services/usersService');

exports.getUser = async (req, res) => {
    try {
        res.status(200).json({ user: req.user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getUserBlogs = async (req, res) => {
    try {
        const blogs = await usersService.getUserBlogs(req.user);
        res.status(200).json({ blogs });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
