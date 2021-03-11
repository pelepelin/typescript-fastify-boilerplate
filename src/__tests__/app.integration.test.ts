import { fastify, FastifyInstance } from "fastify";
import { app } from "../app";

describe("app", () => {
  let server: FastifyInstance;

  beforeAll(() => {
    server = fastify().register(app);
  });

  describe("root", () => {
    it("returns simple object", async () => {
      const res = await server.inject("/");

      expect(res.statusCode).toBe(200);
      expect(res.headers["content-type"]).toMatch(
        /^application\/json(?:; charset=utf-8)?$/
      );
      expect(res.json()).toEqual({ root: true });
    });
  });
});
