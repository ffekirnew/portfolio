const router = require("express").Router();
const reportsController = require("../controllers/reportsController");
const { authMiddleware, acl } = require("../middlewares/authMiddleware");

router.get("/", reportsController.getAllReports);
router.get("/:reportSlug", reportsController.getReportBySlug);
router.get("/search/:searchQuery", reportsController.searchReports);

router.use(authMiddleware);
router.post("/", reportsController.createReport);
router.put("/:reportSlug", reportsController.updateReport);
router.patch("/:reportSlug/status", reportsController.changeReportStatus);
router.patch("/:reportSlug/category", reportsController.changeReportCategory);
router.delete("/:reportSlug", reportsController.deleteReport);

module.exports = router;
