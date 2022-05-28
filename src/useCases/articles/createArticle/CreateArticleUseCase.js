const { client } = require("../../../prisma/client");

class CreateArticleUseCase {
  async execute(article) {
    const Createdarticle = await client.article.create({
      data: {
        ...article,
      },
    });
    return Createdarticle;
  }
}

module.exports = { CreateArticleUseCase };
