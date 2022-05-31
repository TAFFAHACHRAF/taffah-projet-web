const { client } = require("../../../prisma/client");

class UpdateArticleUseCase {
  async execute({ article }) {
    const updatedArtcile = await client.article.update({
      where: {
        id: article.id,
      },
      data: {
        titre: article.titre,
        contenu: article.contenu,
        image: article.image,
        updatedAt: article.updatedAt,
        published: article.published,
        authorId: article.authorId,
      },
    });
    return updatedArtcile;
  }
}
module.exports = { UpdateArticleUseCase };
