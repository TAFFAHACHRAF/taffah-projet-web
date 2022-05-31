const {
  AddArticleToCategorieUseCase,
} = require("./addArticleToCategorieUseCase");

class AddArticleToCategorieController {
  async handle(req, res) {
    res.header("Access-Control-Allow-Origin","*")
    const { articleId, categorieId } = req.body;
    const addArticleToCategorieUseCase = new AddArticleToCategorieUseCase();
    const articleOnCategorie = await addArticleToCategorieUseCase.execute(
      articleId,
      categorieId
    );
    res.json({ articleOnCategorie });
  }
}

module.exports = { AddArticleToCategorieController };
