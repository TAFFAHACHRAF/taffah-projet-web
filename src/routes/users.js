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


const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const getAllUsersController = new GetAllUsersController();
const getUserController = new GetUserController();
const deleteUserController = new DeleteUserController();

usersRouter.post("/", createUserController.handle);
usersRouter.patch("/", updateUserController.handle);
usersRouter.delete("/:id", deleteUserController.handle);
usersRouter.get("/", getAllUsersController.handle);
usersRouter.get("/:id", getUserController.handle);

module.exports = { usersRouter };
