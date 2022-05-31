const { client } = require("../../../prisma/client");
const { compare } = require("bcryptjs");

class AuthenticateUserUserCase {
  async execute({ email, password }) {
    const userAlreadyExists = await client.utilisateur.findFirst({
      where: {
        email
      },
    });
    if (!userAlreadyExists) throw new Error("User not found");

    const passwordMath = await compare(password, userAlreadyExists.password);

    if (!passwordMath) throw new Error("Email or password incorrect");

    return {
      user: {
        id: userAlreadyExists.id,
        nom: userAlreadyExists.nom,
        email: userAlreadyExists.email,
        role: userAlreadyExists.role,
      },
    };
  }
}

module.exports = { AuthenticateUserUserCase };
