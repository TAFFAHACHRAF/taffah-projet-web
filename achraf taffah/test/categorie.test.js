const { expect } = require("chai");

const testCategorie = (server, auth) => {
  var id = "";
  describe("categorie UseCase Unit Tests", function () {
    it("should successfully add an categorie", async function () {
      const categorie = {
        nom: "newCategorie",
      };

      const response = await server
        .post("/categorie")
        .send(categorie)
        .set("Authorization", "bearer " + auth.token)
        .set("Accept", "application/json")
        .expect(200);
      const CreatedCategorie = JSON.parse(response.text);
      expect(CreatedCategorie.categorie.nom).equal(categorie.nom);
      id = CreatedCategorie.categorie.id;
    });
    it("should successfully get the recently added categorie", async function () {
      const response = await server
        .get("/categorie/" + id)
        .set("Authorization", "bearer " + auth.token)
        .set("Accept", "application/json")
        .expect(200);
      const categorie = await JSON.parse(response.text);
      expect(categorie.categorie.nom).equal("newCategorie");
    });
    it("should successfully get all categories", async function () {
      const response = await server
        .get("/categorie")
        .set("Authorization", "bearer " + auth.token)
        .set("Accept", "application/json")
        .expect(200);
    });
    it("should rise categorie not found", async function () {
      const response = await server
        .get("/categorie/00000000")
        .set("Authorization", "bearer " + auth.token)
        .set("Accept", "application/json")
        .expect(200);
      const responseParsed = JSON.parse(response.text);
      expect(responseParsed.categorie).equal(null);
    });
    it("should successfully delete the recently added categorie", async function () {
      const response = await server
        .delete("/categorie/" + id)
        .set("Authorization", "bearer " + auth.token)
        .set("Accept", "application/json")
        .expect(200);
      const responseParsed = JSON.parse(response.text);
      expect(responseParsed.status).equal("DELETED");
      expect(responseParsed.message).equal("Categorie: " + id);
    });
  });
};

module.exports = { testCategorie };
