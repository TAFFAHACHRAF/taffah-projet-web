const { UpdateCategorieUseCase } = require("./UpdateCategorieUseCase");

class UpdateCategorieController {
  async handle(req, res) {
    const { id, nom } = req.body;
    const categorie = {
      id: id,
      nom: nom,
    };
    const updateCategorieUseCase = new UpdateCategorieUseCase();
    var updatedCategorie = undefined;
    try {
      updatedCategorie = await updateCategorieUseCase.execute({ categorie });
    } catch (error) {
      throw new Error("Categorie Doesn't Exists");
    }
    res.json({
      status: "UPDATED",
      message: "Categorie " + id + " updated successfuly",
      categorie: updatedCategorie,
    });
  }
}
module.exports = { UpdateCategorieController };
