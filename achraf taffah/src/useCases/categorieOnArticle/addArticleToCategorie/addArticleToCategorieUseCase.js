const { client } = require("../../../prisma/client");

class AddArticleToCategorieUseCase {
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
    if (articleCategorieExists)
      throw new Error(
        `Article '${articleExists.titre}' Already belong to Categorie '${categorieExists.nom}'`
      );

    const articleOnCategorie = await client.categoriesOnArticles.create({
      data: {
        categorieId,
        articleId,
      },
      include: {
        article: true,
        categorie: true,
      },
    });
    return articleOnCategorie;
  }
}

module.exports = { AddArticleToCategorieUseCase };
