const { client } = require("../../../prisma/client");

class GetArticleUseCase {
  async execute(id) {
    const article = await client.article.findFirst({
      where: {
        id,
      },
      include: {
        categories: {
          include: {
            categorie: {
              select: {
                nom: true,
              },
            },
          },
        },
      },
    });
    return article;
  }
}
module.exports = { GetArticleUseCase };
