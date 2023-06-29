const Blog = require("../models/Blog");

exports.getAllBlogs = async () => {
    try {
        return await Blog.find();
    } catch (error) {
      console.error('here', error);
        throw new Error(error);
    }
}

exports.getBlogById = async (id) => {
    try {
        return await Blog.find({id: id});
    } catch (error) {
        throw new Error(error);
    }
}

exports.createBlog = async (newBlog) => {
    try {
        console.log('new blog', newBlog);
        await Blog.create(newBlog);
        console.log(newBlog);
        return newBlog;
    } catch (error) {
        throw new Error(error);
    }
}

exports.updateBlog = async (id, blogData) => {
    try {
        const blog = await Blog.find({id: id});
        blog.title = blogData.title;
        blog.content = blogData.content;

        return await blog.save();
    } catch (error) {
        throw new Error(error);
    }
}

exports.deleteBlog = async (id) => {
    try {
        return await Blog.deleteOne({id: id});
    } catch (error) {
        throw new Error(error);
    }
}

exports.searchBlogs = async (searchQuery) => {
    try {
        return await Blog.find({$text: {$search: searchQuery}});
    } catch (error) {
        throw new Error(error);
    }
}
