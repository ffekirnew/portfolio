const router = require("express").Router();
const blogsController = require("../controllers/blogsController");
const { authMiddleware, acl } = require("../middlewares/authMiddleware");

router.use(authMiddleware);
router.get("/", blogsController.getAllBlogs);
router.get("/:id", blogsController.getBlogById);
router.get("/search/:searchQuery", blogsController.searchBlogs);

router.use(acl);
router.post("/", blogsController.createBlog);
router.put("/:id", blogsController.updateBlog);
router.patch("/:id/status", blogsController.changeStatus);
router.patch("/:id/category", blogsController.changeCategory);
router.delete("/:id", blogsController.deleteBlog);

module.exports = router;
