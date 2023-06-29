const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
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

    if (!decoded.isAdmin) {
        return res.status(403).json({ error: 'You are not authorized to access this resource.' });
    }

    req.user = decoded;
    next();
  });
};
