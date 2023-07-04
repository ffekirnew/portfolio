require('winston-mongodb');
const winston = require('winston');

const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  transports: [
    new winston.transports.MongoDB({
      level: 'error',
      db: process.env.MONGODB_URI,
      options: {},
      collection: 'error_logs',
      format: winston.format.combine(winston.format.timestamp(), winston.format.json())
    })
  ]
});

module.exports = logger;
