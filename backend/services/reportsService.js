const Report = require("../models/Report");


exports.getAllReports = async () => {
    try {
        const reports =  await Report.find();
        console.log(reports);
        return reports;
    } catch (error) {
        throw new Error(error);
    }
}

exports.getReportBySlug = async (slug) => {
    try {
        return await Report.find({slug: slug});
    } catch (error) {
        throw new Error(error);
    }
}

exports.createReport = async (user, newReport) => {
    try {
        // Create a slug from the title and the date-month-year
        const ddMmYyyy = new Date().toLocaleDateString().split("/").join("-");
        newReport.slug = ddMmYyyy + "-" + newReport.title.split(" ").join("-");;
        newReport.author = user.username;

        await Report.create(newReport);
        return newReport;
    } catch (error) {
        throw new Error(error);
    }
}

exports.updateReport = async (reportSlug, reportData) => {
    try {
        const report = await Report.find({slug: reportSlug});
        report.title = reportData.title;
        report.content = reportData.content;

        return await report.save();
    } catch (error) {
        throw new Error(error);
    }
}

exports.deleteReport = async (reportSlug) => {
    try {
        return await Report.deleteOne({slug: reportSlug});
    } catch (error) {
        throw new Error(error);
    }
}

exports.searchReports = async (searchQuery) => {
    try {
        return await Report.find({$text: {$search: searchQuery}});
    } catch (error) {
        throw new Error(error);
    }
}

exports.changeReportStatus = async (reportSlug, status) => {
    try {
        const report = await Report.find({slug: reportSlug});
        report.status = status;

        return await report.save();
    } catch (error) {
        throw new Error(error);
    }
}

exports.changeReportCategory = async (reportSlug, category) => {
    try {
        const report = await Report.find({slug: reportSlug});
        report.category = category;

        return await report.save();
    } catch (error) {
        throw new Error(error);
    }
}
