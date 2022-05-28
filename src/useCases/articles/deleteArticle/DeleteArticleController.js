const { DeleteArticleUseCase } = require("./DeleteArticleUseCase");

class DeleteArticleController {
  async handle(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const { id } = req.params;
    const deleteArticleUseCase = new DeleteArticleUseCase();
    try {
      await deleteArticleUseCase.execute(parseInt(id));
    } catch (error) {
      throw new Error("Article Doesn't Exists");
    }
    res.json({
      status: "DELETED",
      message: "Article: " + id,
    });
  }
}
module.exports = { DeleteArticleController };
