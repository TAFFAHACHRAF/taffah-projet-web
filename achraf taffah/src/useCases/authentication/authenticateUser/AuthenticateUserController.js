const { AuthenticateUserUserCase } = require("./AuthenticateUserUserCase");

class AuthenticateUserUController {
  async handle(req, res) {
    const { email, password } = req.body;
    const authenticateUserUserCase = new AuthenticateUserUserCase();
    const userInfo = await authenticateUserUserCase.execute({
      email,
      password,
    });

    res.json(userInfo);
  }
}

module.exports = { AuthenticateUserUController };
