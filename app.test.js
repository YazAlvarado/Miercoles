const request = require("supertest");
const { app, server } = require("./app");

describe("Pruebas de API", () => {
  beforeAll(() => {
    console.log("Iniciando pruebas...");
  });

  afterAll(() => {
    server.close();
    console.log("Pruebas completadas.");
  });

  it("Debe responder con JSON", async () => {
    const res = await request(app).get("/api/items");
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
