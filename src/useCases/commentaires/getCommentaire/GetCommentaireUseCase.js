const { client } = require("../../../prisma/client");

class GetCommentaireUseCase {
  async execute(id) {
    const commentaire = await client.commentaire.findFirst({
      where: {
        id,
      },
    });
    return commentaire;
  }
}
module.exports = { GetCommentaireUseCase };
