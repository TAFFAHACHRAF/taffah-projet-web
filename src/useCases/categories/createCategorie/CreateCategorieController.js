const { CreateCategorieUseCase } = require("./CreateCategorieUseCase");

class CreateCategorieController {
  async handle(req, res) {
    res.header("Access-Control-Allow-Origin","*")
    const { nom } = req.body;
    const createCategorieUseCase = new CreateCategorieUseCase();
    const createdCategorie = await createCategorieUseCase.execute(nom);
    res.json({
      categorie: createdCategorie,
    });
  }
}

module.exports = { CreateCategorieController };
