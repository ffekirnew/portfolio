const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

const acl = (req, res, next) => {
  // Check if the user has the necessary permissions to access this route
  if (req.user.role === 'admin') {
    return next();
  }
  return res.status(403).json({ error: 'You do not have permission to access this resource.' });
};

const authMiddleware = (req, res, next) => {
  // Apply rate limiting
  limiter(req, res, () => {});

  // Apply helmet security headers
  helmet()(req, res, () => {});

  if (!req.header('Authorization')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized.' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token.' });
    }

    req.user = decoded;
    next();
  });
};

module.exports = { authMiddleware, acl };