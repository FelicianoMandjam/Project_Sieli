import express from "express";
import request from "supertest";
import userRoute from "../routes/user.router.js";

const app = express();

app.use(express.json());

app.use("/user", userRoute);

describe("should test all request from API /user/", () => {
  // SI j'arriver a récupérer les users de la BDD

  it("should test GET from the API /user/all", async () => {
    const { body, statusCode } = await request(app).get("/user/all");
    expect(body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          firstName: expect.any(String),
          lastName: expect.any(String),
          email: expect.any(String),
          password: expect.any(String),
        }),
      ])
    );
    expect(statusCode).toBe(200);
  });

  // Gestion du catch erreur 500 si jamais j'arrive pas a trouver dans la base de donnée

  //   it("should return a error 500", async () => {
  //     const { body, statusCode } = await request(app).get("/user/all");
  //     expect(body).toEqual(
  //       expect.arrayContaining([
  //         expect.objectContaining({
  //           id: expect.any(Number),
  //           firstName: expect.any(String),
  //           lastName: expect.any(String),
  //           email: expect.any(String),
  //           password: expect.any(String),
  //         }),
  //       ])
  //     );
  //     expect(statusCode).toBe(500);
  //   });
  
});
