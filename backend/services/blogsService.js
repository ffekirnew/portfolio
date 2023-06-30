const Blog = require("../models/Blog");

exports.getAllBlogs = async () => {
    try {
        const blogs =  await Blog.find();
        console.log(blogs);
        return blogs;
    } catch (error) {
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

exports.createBlog = async (user, newBlog) => {
    try {
        await Blog.create({
            id: newBlog.id,
            title: newBlog.title,
            content: newBlog.content,
            author: user.username,
            status: newBlog.status,
            category: newBlog.category
        });
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

exports.changeStatus = async (id, status) => {
    try {
        const blog = await Blog.find({id: id});
        blog.status = status;

        return await blog.save();
    } catch (error) {
        throw new Error(error);
    }
}

exports.changeCategory = async (id, category) => {
    try {
        const blog = await Blog.find({id: id});
        blog.category = category;

        return await blog.save();
    } catch (error) {
        throw new Error(error);
    }
}