const { GetAllCommentairesUseCase } = require("./GetAllCommentairesUseCase");

class GetAllCommentairesController {
  async handle(req, res) {
    const { skip, take } = req.query;
    const getAllCommentairesUseCase = new GetAllCommentairesUseCase();

    const skipping = skip && parseInt(skip) > 0 ? parseInt(skip) : 0;
    const taking = take && parseInt(take) > 0 ? parseInt(take) : 0;

    var commentaires = await getAllCommentairesUseCase.execute();

    if (skipping)
      commentaires = commentaires.slice(
        skipping,
        skipping + commentaires.length
      );
    if (taking) commentaires = commentaires.slice(0, taking);

    res.json({ commentaires });
  }
}
module.exports = { GetAllCommentairesController };
