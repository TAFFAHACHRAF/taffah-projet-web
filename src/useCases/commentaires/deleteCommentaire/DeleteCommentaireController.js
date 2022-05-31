const { DeleteCommentaireUseCase } = require("./DeleteCommentaireUseCase");

class DeleteCommentaireController {
  async handle(req, res) {
    res.header("Access-Control-Allow-Origin","*")
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
