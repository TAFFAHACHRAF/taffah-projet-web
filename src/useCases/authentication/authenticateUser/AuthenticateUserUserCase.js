const { client } = require("../../../prisma/client");
const { compare } = require("bcryptjs");
const { GenerateToken } = require("../../../provider/GenerateToken");
const {
  GenerateRefreshToken,
} = require("../../../provider/GenerateRefreshToken");

class AuthenticateUserUserCase {
  async execute({ email, password }) {
    const userAlreadyExists = await client.utilisateur.findFirst({
      where: {
        email,
      },
    });
    if (!userAlreadyExists) throw new Error("User not found");

    const passwordMath = await compare(password, userAlreadyExists.password);

    if (!passwordMath) throw new Error("Email or password incorrect");

    const generateToken = new GenerateToken();
    const token = await generateToken.execute(userAlreadyExists.id);
    await client.refreshToken.deleteMany({
      where: {
        userId: userAlreadyExists.id,
      },
    });
    const generateRefreshToken = new GenerateRefreshToken();
    const refreshToken = await generateRefreshToken.execute(
      userAlreadyExists.id
    );
    return {
      user: {
        id: userAlreadyExists.id,
        nom: userAlreadyExists.nom,
        email: userAlreadyExists.email,
        role: userAlreadyExists.role,
      },
      token,
      refreshToken,
    };
  }
}

module.exports = { AuthenticateUserUserCase };
