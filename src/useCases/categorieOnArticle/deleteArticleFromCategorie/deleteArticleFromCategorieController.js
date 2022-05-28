const {
  DeleteArticleFromCategorieUseCase,
} = require("./deleteArticleFromCategorieUseCase");

class DeleteArticleFromCategorieController {
  async handle(req, res) {
    const { articleId, categorieId } = req.body;
    const deleteArticleFromCategorieUseCase =
      new DeleteArticleFromCategorieUseCase();

    await deleteArticleFromCategorieUseCase.execute(articleId, categorieId);
    res.json({
      status: "DELETED",
      message: `articleId: ${articleId}, categorieId: ${categorieId}`,
    });
  }
}

module.exports = { DeleteArticleFromCategorieController };
