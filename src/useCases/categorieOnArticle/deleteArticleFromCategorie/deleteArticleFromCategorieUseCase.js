const { client } = require("../../../prisma/client");

class DeleteArticleFromCategorieUseCase {
  async execute(articleId, categorieId) {
    const articleExists = await client.article.findFirst({
      where: {
        id: articleId,
      },
    });
    if (!articleExists) throw new Error("Article not found");

    const categorieExists = await client.categorie.findFirst({
      where: { id: categorieId },
    });

    if (!categorieExists) throw new Error("Categorie not found");

    const articleCategorieExists = await client.categoriesOnArticles.findFirst({
      where: {
        articleId,
        categorieId,
      },
    });
    if (!articleCategorieExists)
      throw new Error(
        `Article '${articleExists.titre}' Doesn't belong to Categorie '${categorieExists.nom}'`
      );
    console.log(articleCategorieExists);
    await client.categoriesOnArticles.delete({
      where: {
        articleId_categorieId: {
          articleId,
          categorieId,
        },
      },
    });
  }
}

module.exports = { DeleteArticleFromCategorieUseCase };
