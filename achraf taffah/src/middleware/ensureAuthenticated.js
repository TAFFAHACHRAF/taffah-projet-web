const { verify } = require("jsonwebtoken");

const ensureAuthenticated = (req, res, next) => {
  const authToken = req.headers.authorization;

  if (!authToken) {
    throw new Error("Token is missing");
  }

  const [, token] = authToken.split(" ");

  try {
    verify(token, process.env.PRIVATE_SECRET);
    return next();
  } catch (error) {
    throw new Error("Token invalid");
  }
};

module.exports = { ensureAuthenticated };
