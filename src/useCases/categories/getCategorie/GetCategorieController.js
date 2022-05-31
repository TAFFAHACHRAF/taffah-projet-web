const { GetCategorieUseCase } = require("./GetCategorieUseCase");

class GetCategorieController {
  async handle(req, res) {
    res.header("Access-Control-Allow-Origin","*")
    const { id } = req.params;
    const getCategorieUseCase = new GetCategorieUseCase();
    const categorie = await getCategorieUseCase.execute(parseInt(id));
    res.json({ categorie });
  }
}
module.exports = { GetCategorieController };
