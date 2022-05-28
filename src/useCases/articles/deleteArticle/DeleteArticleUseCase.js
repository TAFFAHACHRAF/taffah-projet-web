const { client } = require("../../../prisma/client");

class DeleteArticleUseCase {
  async execute(articleId) {
    await client.commentaire.deleteMany({
      where: {
        articleId,
      },
    });
    await client.categoriesOnArticles.deleteMany({
      where: {
        articleId,
      },
    });
    await client.article.delete({
      where: {
        id: articleId,
      },
    });
  }
}
module.exports = { DeleteArticleUseCase };
