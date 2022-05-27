const { client } = require("../../../prisma/client");

class GetAllCommentairesUseCase {
  async execute() {
    const commentaires = await client.commentaire.findMany({});
    return commentaires;
  }
}
module.exports = { GetAllCommentairesUseCase };
