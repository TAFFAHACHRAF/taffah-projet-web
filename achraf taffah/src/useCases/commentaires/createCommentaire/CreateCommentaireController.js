const { CreateCommentaireUseCase } = require("./CreateCommentaireUseCase");

class CreateCommentaireController {
  async handle(req, res) {
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
