const reportsService = require('../services/reportsService');

exports.getAllReports = async (req, res) => {
    try {
        const reports = await reportsService.getAllReports();
        res.status(200).json({ reports });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error." });
    }
}

exports.getReportById = async (req, res) => {
    try {
        const reportId = req.params.reportId;
        const report = await reportsService.getReportById(reportId);
        res.status(200).json({ report });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error." });
    }
}

exports.createReport = async (req, res) => {
    try {
        const report = await reportsService.createReport(req.body);
        res.status(201).json({ report });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error." });
    }
}

exports.updateReport = async (req, res) => {
    try {
        const report = await reportsService.updateReport(req.params.reportId, req.body);
        res.status(200).json({ report });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error." });
    }
}

exports.deleteReport = async (req, res) => {
    try {
        const report = await reportsService.deleteReport(req.params.reportId);
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
    const reportId = req.params.reportId;
    const status = req.body.status;
    const report = await reportsService.changeReportStatus(reportId, status);

    res.status(200).json({ report });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error." });
  }
}


exports.changeReportCategory = async (req, res) => {
  try {
    const reportId = req.params.reportId;
    const category = req.body.category;
    const report = await reportsService.changeReportCategory(reportId, category);

    res.status(200).json({ report });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error." });
  }
}
