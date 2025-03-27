const request = require("supertest");
const app = require("./app");

jest.mock("./db", () => ({
  getItems: jest.fn(() => Promise.resolve([{ id: 1, name: "Mock Item" }])),
}));

const { getItems } = require("./db");

describe("Pruebas con mock de base de datos", () => {
  it("Debe devolver los datos simulados", async () => {
    const res = await request(app).get("/api/items");

    expect(res.status).toBe(200);
    expect(res.body).toEqual([{ id: 1, name: "Mock Item" }]);
    expect(getItems).toHaveBeenCalledTimes(1);
  });
});
