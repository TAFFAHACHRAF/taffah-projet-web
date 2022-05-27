const { DeleteCategorieUseCase } = require("./DeleteCategorieUseCase");

class DeleteCategorieController {
  async handle(req, res) {
    const { id } = req.params;
    const deleteCategorieUseCase = new DeleteCategorieUseCase();
    try {
      await deleteCategorieUseCase.execute(parseInt(id));
    } catch (error) {
      throw new Error("Categorie Doesn't Exists");
    }
    res.json({
      status: "DELETED",
      message: "Categorie: " + id,
    });
  }
}
module.exports = { DeleteCategorieController };
