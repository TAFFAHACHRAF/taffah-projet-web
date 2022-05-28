const { client } = require("../../../prisma/client");

class UpdateCommentaireUseCase {
  async execute({ commentaire }) {
    const updatedCommentaire = await client.commentaire.update({
      where: {
        id: commentaire.id,
      },
      data: {
        titre: commentaire.titre,
        contenu: commentaire.contenu,
        image: commentaire.image,
        updatedAt: commentaire.updatedAt,
        published: commentaire.published,
        authorId: commentaire.authorId,
      },
    });
    return updatedCommentaire;
  }
}
module.exports = { UpdateCommentaireUseCase };
