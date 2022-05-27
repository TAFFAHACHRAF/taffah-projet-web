const { client } = require("../../../prisma/client");
const { hash } = require("bcryptjs");

class CreateUserUseCase {
  async execute({ nom, email, password, role }) {
    const userAlreadyExists = await client.utilisateur.findFirst({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new Error("User Already Exists");
    }

    const hashedPass = await hash(password, 8);

    const user = await client.utilisateur.create({
      data: {
        nom,
        email,
        password: hashedPass,
        role,
      },
    });

    return user;
  }
}

module.exports = { CreateUserUseCase };
