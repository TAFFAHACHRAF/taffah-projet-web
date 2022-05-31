const { client } = require("../../../prisma/client");

class GetAllArticlesUseCase {
  async execute() {
    const articles = await client.article.findMany({
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
    return articles;
  }
}
module.exports = { GetAllArticlesUseCase };
