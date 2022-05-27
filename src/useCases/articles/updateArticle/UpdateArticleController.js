const dayjs = require("dayjs");
const { UpdateArticleUseCase } = require("./UpdateArticleUseCase");

class UpdateArticleController {
  async handle(req, res) {
    const { id, titre, contenu, image, authorId, published } = req.body;
    const article = {
      id: id,
      titre: titre,
      contenu: contenu,
      image: image,
      updatedAt: dayjs().toDate(),
      published: published,
      authorId: authorId,
    };
    const updateArticleUseCase = new UpdateArticleUseCase();
    var updatedArtcile = undefined;
    try {
      updatedArtcile = await updateArticleUseCase.execute({ article });
    } catch (error) {
      throw new Error("Article Doesn't Exists");
    }
    res.json({
      status: "UPDATED",
      message: "Article " + id + " updated successfuly",
      article: updatedArtcile,
    });
  }
}
module.exports = { UpdateArticleController };
