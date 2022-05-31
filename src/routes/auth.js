const authRouter = require("express").Router();
const {
  AuthenticateUserUController,
} = require("../useCases/authentication/authenticateUser/AuthenticateUserController");

const authenticateUserController = new AuthenticateUserUController();

authRouter.post("/login", authenticateUserController.handle);

module.exports = { authRouter };
