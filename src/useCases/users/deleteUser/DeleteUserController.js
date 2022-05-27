const { DeleteUserUseCase } = require("./DeleteUserUseCase");

class DeleteUserController {
  async handle(req, res) {
    const { id } = req.params;
    const deleteUserUseCase = new DeleteUserUseCase();
    try {
      await deleteUserUseCase.execute(id);
    } catch (error) {
      throw new Error("User Doesn't Exists");
    }
    res.json({
      status: "Deleted",
      message: "User: " + id,
    });
  }
}

module.exports = { DeleteUserController };
