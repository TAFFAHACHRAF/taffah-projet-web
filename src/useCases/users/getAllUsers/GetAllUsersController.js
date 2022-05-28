const { GetAllUsersUseCase } = require("./GetAllUsersUseCase");

class GetAllUsersController {
  async handle(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const getAllUsersUseCase = new GetAllUsersUseCase();
    const users = await getAllUsersUseCase.execute();
    res.json({ users });
  }
}

module.exports = { GetAllUsersController };
