const { sign } = require("jsonwebtoken");

class GenerateToken {
  async execute(userId) {
    const token = sign({}, process.env.PRIVATE_SECRET, {
      subject: userId,
      expiresIn: "300s",
    });
    return token;
  }
}

module.exports = { GenerateToken };
