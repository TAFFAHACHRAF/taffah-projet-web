const usersRouter = require("express").Router();

const {
  CreateUserController,
} = require("../useCases/users/createUser/CreateUserController");
const {
  DeleteUserController,
} = require("../useCases/users/deleteUser/DeleteUserController");
const {
  GetAllUsersController,
} = require("../useCases/users/getAllUsers/GetAllUsersController");
const {
  GetUserController,
} = require("../useCases/users/getUser/GetUserController");
const {
  UpdateUserController,
} = require("../useCases/users/updateUser/updateUserController");

const { ensureAuthenticated } = require("../middleware/ensureAuthenticated");

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const getAllUsersController = new GetAllUsersController();
const getUserController = new GetUserController();
const deleteUserController = new DeleteUserController();

usersRouter.post("/", ensureAuthenticated, createUserController.handle);
usersRouter.patch("/", ensureAuthenticated, updateUserController.handle);
usersRouter.delete("/:id", ensureAuthenticated, deleteUserController.handle);
usersRouter.get("/", ensureAuthenticated, getAllUsersController.handle);
usersRouter.get("/:id", ensureAuthenticated, getUserController.handle);

module.exports = { usersRouter };
