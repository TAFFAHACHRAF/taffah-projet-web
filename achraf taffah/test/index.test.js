var supertest = require("supertest");

const { testUser } = require("./user.test");
const { testAuth } = require("./auth.test");
const { testArticle } = require("./article.test");
const { testCategorie } = require("./categorie.test");

var server = supertest.agent("http://localhost:4000");

var auth = {
  token: "",
  refreshToken: "",
};

testAuth(server, auth);
testUser(server, auth);
testArticle(server, auth);
testCategorie(server, auth);
