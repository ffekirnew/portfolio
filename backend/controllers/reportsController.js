const reportsService = require('../services/reportsService');

exports.getAllReports = async (req, res) => {
    try {
        const reports = await reportsService.getAllReports();
        res.status(200).json({ reports });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error." });
    }
}

exports.getReportBySlug = async (req, res) => {
    try {
        const reportSlug = req.params.reportSlug;
        const report = await reportsService.getReportBySlug(reportSlug);
        res.status(200).json({ report });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error." });
    }
}

exports.createReport = async (req, res) => {
    try {
        const report = await reportsService.createReport(req.user, req.body);
        res.status(201).json({ report });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error." });
    }
}

exports.updateReport = async (req, res) => {
    try {
        const report = await reportsService.updateReport(req.params.reportSlug, req.body);
        res.status(200).json({ report });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error." });
    }
}

exports.deleteReport = async (req, res) => {
    try {
        const report = await reportsService.deleteReport(req.params.reportSlug);
        res.status(204).json({ report });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error." });
    }
}

exports.searchReports = async (req, res) => {
    try {
        const reports = await reportsService.searchReports(req.params.searchQuery);
        res.status(200).json({ reports });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error." });
    }
}


exports.changeReportStatus = async (req, res) => {
  try {
    const reportSlug = req.params.reportSlug;
    const status = req.body.status;
    const report = await reportsService.changeStatus(reportSlug, status);

    res.status(200).json({ report });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error." });
  }
}


exports.changeReportCategory = async (req, res) => {
  try {
    const reportSlug = req.params.reportSlug;
    const category = req.body.category;
    const report = await reportsService.changeCategory(reportSlug, category);

    res.status(200).json({ report });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error." });
  }
}
