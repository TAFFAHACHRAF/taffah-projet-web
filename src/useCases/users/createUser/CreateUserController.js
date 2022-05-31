const { CreateUserUseCase } = require("./CreateUserUseCase");

class CreateUserController {
  async handle(request, response) {
    response.header("Access-Control-Allow-Origin","*")
    const { nom, email, password, role } = request.body;

    const createUserUseCase = new CreateUserUseCase();

    const user = await createUserUseCase.execute({
      nom,
      email,
      password,
      role
    });
    return response.json(user);
  }
}

module.exports = { CreateUserController };
