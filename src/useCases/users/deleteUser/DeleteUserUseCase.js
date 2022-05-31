const { client } = require("../../../prisma/client");

class DeleteUserUseCase {
  async execute(id) {
    await client.utilisateur.delete({
      where: {
        id: id,
      },
    });
  }
}

module.exports = { DeleteUserUseCase };
