const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI + "/" + process.env.MONGODB_DBNAME);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.error(`Connected to MongoDB.`));

module.exports = db;
