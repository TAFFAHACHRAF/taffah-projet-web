const { client } = require("../../../prisma/client");

class CreateCommentaireUseCase {
  async execute(commentaire) {
    const createdCommentaire = await client.commentaire.create({
      data: {
        ...commentaire,
      },
    });
    return createdCommentaire;
  }
}

module.exports = { CreateCommentaireUseCase };
