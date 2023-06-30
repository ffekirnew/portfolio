const router = require("express").Router();
const reportsController = require("../controllers/reportsController");

router.get("/", reportsController.getAllReports);
router.get("/:id", reportsController.getReportById);
router.post("/", reportsController.createReport);
router.put("/:id", reportsController.updateReport);
router.patch("/:id/status", reportsController.changeStatus);
router.patch("/:id/category", reportsController.changeCategory);
router.delete("/:id", reportsController.deleteReport);
router.get("/search/:searchQuery", reportsController.searchReports);

module.exports = router;
