const router = require("express").Router();
const blogController = require("../controllers/blogsController");

router.get("/", blogController.getAllBlogs);
router.get("/:id", blogController.getBlogById);
router.post("/", blogController.createBlog);
router.put("/:id", blogController.updateBlog);
router.delete("/:id", blogController.deleteBlog);
router.get("/search/:searchQuery", blogController.searchBlogs);

module.exports = router;
