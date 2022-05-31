const {
  CreateCommentaireController,
} = require("../useCases/commentaires/createCommentaire/CreateCommentaireController");
const {
  DeleteCommentaireController,
} = require("../useCases/commentaires/deleteCommentaire/DeleteCommentaireController");
const {
  GetAllCommentairesController,
} = require("../useCases/commentaires/getAllCommentaires/GetAllCommentairesController");
const {
  GetCommentaireController,
} = require("../useCases/commentaires/getCommentaire/GetCommentaireController");
const {
  UpdateCommentaireController,
} = require("../useCases/commentaires/updateCommentaire/UpdateCommentaireController");

const commentairesRouter = require("express").Router();

const getAllCommentairesController = new GetAllCommentairesController();
const getCommentaireController = new GetCommentaireController();
const updateCommentaireController = new UpdateCommentaireController();
const deleteCommentaireController = new DeleteCommentaireController();
const createCommentaireController = new CreateCommentaireController();


commentairesRouter.get("/", getAllCommentairesController.handle);
commentairesRouter.get("/:id", getCommentaireController.handle);
commentairesRouter.patch(
  "/",
  updateCommentaireController.handle
);
commentairesRouter.post("/", createCommentaireController.handle);
commentairesRouter.delete(
  "/:id",
  deleteCommentaireController.handle
);

module.exports = { commentairesRouter };
