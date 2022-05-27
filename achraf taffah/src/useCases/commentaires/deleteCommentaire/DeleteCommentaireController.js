const { DeleteCommentaireUseCase } = require("./DeleteCommentaireUseCase");

class DeleteCommentaireController {
  async handle(req, res) {
    const { id } = req.params;
    const deleteCommentaireUseCase = new DeleteCommentaireUseCase();
    try {
      await deleteCommentaireUseCase.execute(parseInt(id));
    } catch (error) {
      throw new Error("Commentaire Doesn't Exists");
    }
    res.json({
      status: "DELETED",
      message: "Commentaire: " + id,
    });
  }
}
module.exports = { DeleteCommentaireController };
