const { CreateCommentaireUseCase } = require("./CreateCommentaireUseCase");

class CreateCommentaireController {
  async handle(req, res) {
    res.header("Access-Control-Allow-Origin","*")
    const { email, contenu, articleId } = req.body;
    const commentaire = {
      email: email,
      contenu: contenu,
      articleId: articleId,
    };
    const createCommentaireUseCase = new CreateCommentaireUseCase();
    const createdCommentaire = await createCommentaireUseCase.execute(
      commentaire
    );
    res.json({
      commentaire: createdCommentaire,
    });
  }
}

module.exports = { CreateCommentaireController };
