const errorLogger = require('../config/error_logger');

const logErrors = (err, req, res, next) => {
  errorLogger.error(err);
  next(err);
};

const errorHandler = (err, req, res, next) => {
  res.status(500).json({ error: 'Something went wrong.' });
};

module.exports = { logErrors, errorHandler };
