const { client } = require("../../../prisma/client");

class GetAllUsersUseCase {
  async execute() {
    const users = client.utilisateur.findMany({});
    return users;
  }
}

module.exports = { GetAllUsersUseCase };
