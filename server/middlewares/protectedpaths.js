const jwt = require('jsonwebtoken');
require('dotenv').config();

const protectedPath = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer ')
  ) {
    const token = req.headers.authorization.split(' ')[1];

    try {
      //this will throw error if token is invalid
      const verify = jwt.verify(token, process.env.JWT_SECRET);
      //in verify we have content which we have passed during token creation
      //we can use that to give access to user to his own data
      //in this application we hace only admin so here no need
      //but in application with lots of users we can give
      //user access to his own data not data of others
      //using jwt token
      next();
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
};

module.exports = protectedPath;
