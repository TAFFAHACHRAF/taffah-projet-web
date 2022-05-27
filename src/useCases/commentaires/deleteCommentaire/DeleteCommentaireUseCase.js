const { client } = require("../../../prisma/client");

class DeleteCommentaireUseCase {
  async execute(commentaireId) {
    await client.commentaire.delete({
      where: {
        id: commentaireId,
      },
    });
  }
}
module.exports = { DeleteCommentaireUseCase };
