const {
  CreateArticleController,
} = require("../useCases/articles/createArticle/CreateArticleController");
const {
  DeleteArticleController,
} = require("../useCases/articles/deleteArticle/DeleteArticleController");
const {
  GetAllArticlesController,
} = require("../useCases/articles/getAllArticles/GetAllArticlesController");
const {
  GetArticleController,
} = require("../useCases/articles/getArticle/GetArticleController");
const {
  UpdateArticleController,
} = require("../useCases/articles/updateArticle/UpdateArticleController");
const {
  AddArticleToCategorieController,
} = require("../useCases/categorieOnArticle/addArticleToCategorie/addArticleToCategorieController");
const {
  DeleteArticleFromCategorieController,
} = require("../useCases/categorieOnArticle/deleteArticleFromCategorie/deleteArticleFromCategorieController");

const { ensureAuthenticated } = require("../middleware/ensureAuthenticated");
const { multipartBoundary } = require("marklogic/lib/mlutil");
const articlesRouter = require("express").Router();
const createArticleController = new CreateArticleController();
const getAllArticlesController = new GetAllArticlesController();
const getArticleController = new GetArticleController();
const updateArticleController = new UpdateArticleController();
const deleteArticleController = new DeleteArticleController();

const addArticleToCategorieController = new AddArticleToCategorieController();
const deleteArticleFromCategorieController =
  new DeleteArticleFromCategorieController();

articlesRouter.get("/", getAllArticlesController.handle);
articlesRouter.get("/:id", getArticleController.handle);
articlesRouter.patch("/", ensureAuthenticated, updateArticleController.handle);
articlesRouter.post("/", ensureAuthenticated, createArticleController.handle);
articlesRouter.delete(
  "/:id",
  ensureAuthenticated,
  deleteArticleController.handle
);

articlesRouter.post(
  "/addCategorie",
  ensureAuthenticated,
  addArticleToCategorieController.handle
);
articlesRouter.post(
  "/deleteCategorie",
  ensureAuthenticated,
  deleteArticleFromCategorieController.handle
);

module.exports = { articlesRouter };
