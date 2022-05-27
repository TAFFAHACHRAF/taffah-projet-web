const { client } = require("../../../prisma/client");

class GetUserUseCase {
  async execute(id) {
    const user = client.utilisateur.findFirst({
      where: {
        id: id,
      },
    });
    return user;
  }
}

module.exports = { GetUserUseCase };
