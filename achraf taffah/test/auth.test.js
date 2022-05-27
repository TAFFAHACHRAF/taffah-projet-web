const { expect } = require("chai");

const testAuth = (server, auth) => {
  describe("Authentication System Unit Tests", function () {
    it("should successfully authenticate user", async function () {
      const authInfo = {
        email: "ahmed@mail.com",
        password: "ahmedpass",
      };

      const response = await server
        .post("/auth/login/")
        .send(authInfo)
        .set("Accept", "application/json")
        .expect(200);

      const authResponse = JSON.parse(response.text);
      expect(authResponse.user.id).equal("1");
      expect(authResponse.user.email).equal("ahmed@mail.com");
      expect(authResponse.user.role).equal("AUTHOR");
      auth.token = authResponse.token;
      auth.refreshToken = authResponse.refreshToken.id;
    });
    it("should rise error user not found", async function () {
      const authInfo = {
        email: "notfound@mail.com",
        password: "notfound",
      };

      const response = await server
        .post("/auth/login/")
        .send(authInfo)
        .set("Accept", "application/json")
        .expect(404);

      const authResponse = JSON.parse(response.text);
      expect(authResponse.status).equal("Not Found");
    });
    it("should successfully generate new token using refreshToken", async function () {
      const reqBody = {
        refreshToken: auth.refreshToken,
      };

      const response = await server
        .post("/auth/refreshToken/")
        .send(reqBody)
        .set("Accept", "application/json")
        .expect(200);
    });
  });
};

module.exports = { testAuth };
