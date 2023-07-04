const User = require('../models/User');
const Blog = require('../models/Blog');

exports.getUser = async (username) => {
    try {
        const user = await User.find({ username: username });
        return user;
    } catch (error) {
        throw new Error(error);
    }
}

exports.getUserBlogs = async (user) => {
    try {
        return await Blog.find({ author: user.username });;
    } catch (error) {
        throw new Error(error);
    }
}