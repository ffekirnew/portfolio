const router = require("express").Router();
const blogsController = require("../controllers/blogsController");
const { authMiddleware, acl } = require("../middlewares/authMiddleware");

router.get("/", blogsController.getAllBlogs);
router.get("/:blogSlug", blogsController.getBlogBySlug);
router.get("/search/:searchQuery", blogsController.searchBlogs);

router.use(authMiddleware);
router.post("/", blogsController.createBlog);
router.put("/:blogSlug", blogsController.updateBlog);
router.patch("/:blogSlug/status", blogsController.changeBlogStatus);
router.patch("/:blogSlug/category", blogsController.changeBlogCategory);
router.delete("/:blogSlug", blogsController.deleteBlog);

module.exports = router;
