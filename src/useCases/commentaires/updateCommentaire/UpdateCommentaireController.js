const dayjs = require("dayjs");
const { UpdateCommentaireUseCase } = require("./UpdateCommentaireUseCase");

class UpdateCommentaireController {
  async handle(req, res) {
    const { id, email, contenu, commentaireId } = req.body;
    const commentaire = {
      id,
      email,
      contenu,
      commentaireId,
    };
    const updateCommentaireUseCase = new UpdateCommentaireUseCase();
    var updatedCommentaire = undefined;
    try {
      updatedCommentaire = await updateCommentaireUseCase.execute({
        commentaire,
      });
    } catch (error) {
      throw new Error("Commentaire Doesn't Exists");
    }
    res.json({
      status: "UPDATED",
      message: "Commentaire " + id + " updated successfuly",
      commentaire: updatedCommentaire,
    });
  }
}
module.exports = { UpdateCommentaireController };
