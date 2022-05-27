const { RefreshTokenUserUseCase } = require("./RefreshTokenUserUseCase");

class RefreshTokenUserController {
  async handle(req, res) {
    const { refreshToken } = req.body;
    const refreshTokenUserUseCase = new RefreshTokenUserUseCase();
    const token = await refreshTokenUserUseCase.execute(refreshToken);
    res.json({ token: token.token, refreshToken: token.refreshToken });
  }
}

module.exports = { RefreshTokenUserController };
