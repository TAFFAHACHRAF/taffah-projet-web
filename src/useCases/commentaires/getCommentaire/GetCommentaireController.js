const { GetCommentaireUseCase } = require("./GetCommentaireUseCase");

class GetCommentaireController {
  async handle(req, res) {
    res.header("Access-Control-Allow-Origin","*")
    const { id } = req.params;
    const getCommentaireUseCase = new GetCommentaireUseCase();
    const commentaire = await getCommentaireUseCase.execute(parseInt(id));
    res.json({ commentaire });
  }
}
module.exports = { GetCommentaireController };
