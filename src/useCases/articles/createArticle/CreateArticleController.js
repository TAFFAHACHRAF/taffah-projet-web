const { CreateArticleUseCase } = require("./CreateArticleUseCase");

class CreateArticleController {
  async handle(req, res) {
    const { titre, contenu, image, authorId, published } = req.body;
    const article = {
      titre: titre,
      contenu: contenu,
      image: image,
      published: published,
      authorId: authorId,
    };
    const createArticleUseCase = new CreateArticleUseCase();
    const createdArticle = await createArticleUseCase.execute(article);
    res.json({
      article: createdArticle,
    });
  }
}

module.exports = { CreateArticleController };
