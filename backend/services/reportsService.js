const Report = require("../models/Report");

exports.getAllReports = async () => {
    try {
        const reports =  await Report.find();
        return reports;
    } catch (error) {
        throw new Error(error);
    }
}

exports.getReportById = async (id) => {
    try {
        return await Report.find({id: id});
    } catch (error) {
        throw new Error(error);
    }
}

exports.createReport = async (newReport) => {
    try {
        console.log('new report', newReport);
        await Report.create(newReport);
        console.log(newReport);
        return newReport;
    } catch (error) {
        throw new Error(error);
    }
}

exports.updateReport = async (id, reportData) => {
    try {
        const report = await Report.find({id: id});
        report.title = reportData.title;
        report.content = reportData.content;

        return await report.save();
    } catch (error) {
        throw new Error(error);
    }
}

exports.deleteReport = async (id) => {
    try {
        return await Report.deleteOne({id: id});
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

exports.changeReportStatus = async (id, status) => {
    try {
        const report = await Report.find({id: id});
        report.status = status;

        return await report.save();
    } catch (error) {
        throw new Error(error);
    }
}

exports.changeReportCategory = async (id, category) => {
    try {
        const report = await Report.find({id: id});
        report.category = category;

        return await report.save();
    } catch (error) {
        throw new Error(error);
    }
}
