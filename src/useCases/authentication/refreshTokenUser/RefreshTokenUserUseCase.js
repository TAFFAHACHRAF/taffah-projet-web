const dayjs = require("dayjs");
const { client } = require("../../../prisma/client");
const {
  GenerateRefreshToken,
} = require("../../../provider/GenerateRefreshToken");
const { GenerateToken } = require("../../../provider/GenerateToken");

class RefreshTokenUserUseCase {
  async execute(refresh_token) {
    const refreshToken = await client.refreshToken.findFirst({
      where: {
        id: refresh_token,
      },
    });
    if (!refreshToken) throw new Error("Refresh token invalide");
    const refreshTokenExpired = dayjs().isAfter(
      dayjs.unix(refreshToken.expiredIn)
    );

    const generateToken = new GenerateToken();
    const token = await generateToken.execute(refreshToken.userId);

    if (refreshTokenExpired) {
      await client.refreshToken.deleteMany({
        where: {
          userId: refreshToken.userId,
        },
      });
      const generateRefreshToken = new GenerateRefreshToken();
      const newRefreshToken = await generateRefreshToken.execute(
        refreshToken.userId
      );
      return { token, refreshToken: newRefreshToken };
    }

    return { token };
  }
}

module.exports = { RefreshTokenUserUseCase };
