const { GetArticleUseCase } = require("./GetArticleUseCase");

class GetArticleController {
  async handle(req, res) {
    res.header("Access-Control-Allow-Origin","*")
    const { id } = req.params;
    const getArticleUseCase = new GetArticleUseCase();
    const article = await getArticleUseCase.execute(parseInt(id));
    res.json({ article });
  }
}
module.exports = { GetArticleController };
