const { expect } = require("chai");

const testUser = (server, auth) => {
  var id = "";
  describe("User UseCase Unit Tests", function () {
    it("should successfully add a User", async function () {
      const user = {
        nom: "taffah",
        email: "taffah@gmail.com",
        password: "taffah",
        role: "ADMIN",
      };

      const response = await server
        .post("/users")
        .send(user)
        .set("Authorization", "bearer " + auth.token)
        .set("Accept", "application/json")
        .expect(200);
      const CreatedUser = JSON.parse(response.text);
      expect(CreatedUser.nom).equal("taffah");
      expect(CreatedUser.email).equal("taffah@gmail.com");
      expect(CreatedUser.role).equal("ADMIN");
      id = CreatedUser.id;
    });
    it("should rise a conflict error because of adding a Duplicate User", async function () {
      const user = {
        nom: "taffah",
        email: "taffah@gmail.com",
        password: "taffah",
        role: "ADMIN",
      };
      await server
        .post("/users")
        .send(user)
        .set("Authorization", "bearer " + auth.token)
        .set("Accept", "application/json")
        .expect(409);
    });
    it("should successfully get the recently added user", async function () {
      const response = await server
        .get("/users/" + id)
        .set("Authorization", "bearer " + auth.token)
        .set("Accept", "application/json")
        .expect(200);
      const user = await JSON.parse(response.text);
      expect(user.user.nom).equal("taffah");
      expect(user.user.email).equal("taffah@gmail.com");
      expect(user.user.role).equal("ADMIN");
    });
    it("should successfully get all users", async function () {
      const response = await server
        .get("/users")
        .set("Authorization", "bearer " + auth.token)
        .set("Accept", "application/json")
        .expect(200);
    });
    it("should successfully get a user", async function () {
      const response = await server
        .get("/users/" + id)
        .set("Authorization", "bearer " + auth.token)
        .set("Accept", "application/json")
        .expect(200);
    });
    it("should rise user not found", async function () {
      const response = await server
        .get("/users/00000000")
        .set("Authorization", "bearer " + auth.token)
        .set("Accept", "application/json")
        .expect(404);
      const responseParsed = JSON.parse(response.text);
      expect(responseParsed.status).equal("Not Found");
      expect(responseParsed.message).equal("User not found");
    });
    it("should successfully delete the recently added user", async function () {
      const response = await server
        .delete("/users/" + id)
        .set("Authorization", "bearer " + auth.token)
        .set("Accept", "application/json")
        .expect(200);
      const responseParsed = JSON.parse(response.text);
      expect(responseParsed.status).equal("Deleted");
      expect(responseParsed.message).equal("User: " + id);
    });
  });
};

module.exports = { testUser };
