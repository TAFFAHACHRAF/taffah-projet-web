const dayjs = require("dayjs");
const { client } = require("../prisma/client");

class GenerateRefreshToken {
  async execute(userId) {
    const expiredIn = dayjs().add(15, "minute").unix();
    const generateRefreshToken = await client.refreshToken.create({
      data: {
        userId,
        expiredIn,
      },
    });
    return generateRefreshToken;
  }
}

module.exports = { GenerateRefreshToken };
