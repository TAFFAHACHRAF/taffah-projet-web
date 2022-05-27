const { expect } = require("chai");

const testArticle = (server, auth) => {
  var id = "";
  describe("Article UseCase Unit Tests", function () {
    it("should successfully add an article", async function () {
      const article = {
        titre: "tttttt",
        contenu: "vvvvvv",
        published: true,
        authorId: "6",
        image: "imageimage",
      };

      const response = await server
        .post("/article")
        .send(article)
        .set("Authorization", "bearer " + auth.token)
        .set("Accept", "application/json")
        .expect(200);
      const CreatedArticle = JSON.parse(response.text);
      expect(CreatedArticle.article.titre).equal(article.titre);
      expect(CreatedArticle.article.published).equal(article.published);
      expect(CreatedArticle.article.image).equal(article.image);
      expect(CreatedArticle.article.authorId).equal(article.authorId);
      id = CreatedArticle.article.id;
    });
    it("should successfully get the recently added article", async function () {
      const response = await server
        .get("/article/" + id)
        .set("Authorization", "bearer " + auth.token)
        .set("Accept", "application/json")
        .expect(200);
      const article = await JSON.parse(response.text);
      expect(article.article.titre).equal("tttttt");
      expect(article.article.published).equal(true);
      expect(article.article.image).equal("imageimage");
      expect(article.article.authorId).equal("6");
    });
    it("should successfully get all articles", async function () {
      const response = await server
        .get("/article")
        .set("Authorization", "bearer " + auth.token)
        .set("Accept", "application/json")
        .expect(200);
    });
    it("should successfully get an article", async function () {
      const response = await server
        .get("/article/" + id)
        .set("Authorization", "bearer " + auth.token)
        .set("Accept", "application/json")
        .expect(200);
    });
    it("should rise article not found", async function () {
      const response = await server
        .get("/article/00000000")
        .set("Authorization", "bearer " + auth.token)
        .set("Accept", "application/json")
        .expect(200);
      const responseParsed = JSON.parse(response.text);
      expect(responseParsed.article).equal(null);
    });
    it("should successfully delete the recently added article", async function () {
      const response = await server
        .delete("/article/" + id)
        .set("Authorization", "bearer " + auth.token)
        .set("Accept", "application/json")
        .expect(200);
      const responseParsed = JSON.parse(response.text);
      expect(responseParsed.status).equal("DELETED");
      expect(responseParsed.message).equal("Article: " + id);
    });
  });
};

module.exports = { testArticle };
