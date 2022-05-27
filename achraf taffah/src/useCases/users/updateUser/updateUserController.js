const { UpdateUserUseCase } = require("./updateUserUseCase");

class UpdateUserController {
  async handle(req, res) {
    const { id, nom, email, password, role } = req.body;
    const user = {
      id,
      nom,
      email,
      password,
      role,
    };
    const updateUserUserCase = new UpdateUserUseCase();
    var updatedUser = {};
    try {
      updatedUser = await updateUserUserCase.execute(user);
    } catch (error) {
      throw new Error("User not found");
    }
    res.json({
      status: "UPDATED",
      message: "User " + updatedUser.nom + " updated successfuly",
      user: updatedUser,
    });
  }
}

module.exports = { UpdateUserController };
