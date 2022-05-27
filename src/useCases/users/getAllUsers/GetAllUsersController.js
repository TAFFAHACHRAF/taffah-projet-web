const { GetAllUsersUseCase } = require("./GetAllUsersUseCase");

class GetAllUsersController {
  async handle(req, res) {
    const getAllUsersUseCase = new GetAllUsersUseCase();
    const users = await getAllUsersUseCase.execute();
    res.json({ users });
  }
}

module.exports = { GetAllUsersController };
