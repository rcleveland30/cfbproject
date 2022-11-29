const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization && authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({isSuccess: false});
  }

  try {
    jwt.verify(token, 'SECRETKEY');
  } catch(error) {
    if (error instanceof jwt.JsonWebTokenError) {
      res.status(401).json({isSuccess: false, message: error.message});
    } else {
      res.status(401).json({isSuccess: false, message: 'An error has occurred.'})
    }
  }
  next();
};

module.exports = authenticate;