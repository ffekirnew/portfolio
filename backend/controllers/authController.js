const authService = require('../services/authService');
const usersService = require('../services/usersService');

exports.registerUser = async (req, res) => {
    try {
        const user = await authService.registerUser(req.body, false);
        res.status(201).json({ user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.registerAdminUser = async (req, res) => {
    try {
        const user = await authService.registerUser(req.body, true);
        res.status(201).json({ user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.loginUser = async (req, res) => {
    try {
        const token = await authService.loginUser(req.body.username, req.body.password);
        const user = await usersService.getUser(req.body.username);
        res.status(200).json({
            user: user,
            token: token
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}