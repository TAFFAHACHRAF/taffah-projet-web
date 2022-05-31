const { articlesRouter } = require("./articles");
const { authRouter } = require("./auth");
const { categoriesRouter } = require("./categories");
const { commentairesRouter } = require("./commentaires");
const { usersRouter } = require("./users");

module.exports = function (app) {
  app.use("/auth", authRouter);
  app.use("/article", articlesRouter);
  app.use("/commentaire", commentairesRouter);
  app.use("/categorie", categoriesRouter);
  app.use("/users", usersRouter);
};
