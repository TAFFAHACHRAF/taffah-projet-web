const { client } = require("../../../prisma/client");
const { hash } = require("bcryptjs");

class UpdateUserUseCase {
  async execute(user) {
    const hashedPass = await hash(user.password, 8);

    const updatedUser = await client.utilisateur.update({
      where: {
        id: user.id,
      },
      data: {
        nom: user.nom,
        email: user.email,
        password: hashedPass,
        role: user.role,
      },
    });
    return updatedUser;
  }
}

module.exports = { UpdateUserUseCase };
