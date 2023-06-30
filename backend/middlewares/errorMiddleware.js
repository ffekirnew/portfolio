const errorLogger = require('../config/errorLogger');

module.exports = (err, req, res, next) => {
  errorLogger.error(err);
  console.log(err.name);
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ error: 'Unauthorized!' });
  }
  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  }
  if (err.name === 'CastError') {
    return res.status(400).json({ error: 'Invalid id!' });
  }
  if (err.name === 'MongoError' && err.code === 11000) {
    return res.status(400).json({ error: 'Duplicate key error!' });
  }
  if (err.name === 'MulterError') {
    return res.status(400).json({ error: err.message });
  }
  if (err.name === 'ReferenceError') {
    return res.status(400).json({ error: err.message });
  }
  if (err.name === 'TypeError') {
    return res.status(400).json({ error: err.message });
  }
  if (err.name === 'RangeError') {
    return res.status(400).json({ error: err.message });
  }
  if (err.name === 'SyntaxError') {
    return res.status(400).json({ error: err.message });
  }
  res.status(500).json({ error: 'Something went wrong.' });
};
