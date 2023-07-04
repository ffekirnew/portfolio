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

exports.getBlogBySlug = async (slug) => {
    try {
        return await Blog.find({slug: slug});
    } catch (error) {
        throw new Error(error);
    }
}

exports.createBlog = async (user, newBlog) => {
    try {
        // Create a slug from the title and the date-month-year
        const ddMmYyyy = new Date().toLocaleDateString().split("/").join("-");
        newBlog.slug = ddMmYyyy + "-" + newBlog.title.split(" ").join("-");;
        newBlog.author = user.username;

        await Blog.create(newBlog);
        return newBlog;
    } catch (error) {
        throw new Error(error);
    }
}

exports.updateBlog = async (blogSlug, blogData) => {
    try {
        const blog = await Blog.find({slug: blogSlug});
        blog.title = blogData.title;
        blog.content = blogData.content;

        return await blog.save();
    } catch (error) {
        throw new Error(error);
    }
}

exports.deleteBlog = async (blogSlug) => {
    try {
        return await Blog.deleteOne({slug: blogSlug});
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

exports.changeBlogStatus = async (blogSlug, status) => {
    try {
        const blog = await Blog.find({slug: blogSlug});
        blog.status = status;

        return await blog.save();
    } catch (error) {
        throw new Error(error);
    }
}

exports.changeBlogCategory = async (blogSlug, category) => {
    try {
        const blog = await Blog.find({slug: blogSlug});
        blog.category = category;

        return await blog.save();
    } catch (error) {
        throw new Error(error);
    }
}