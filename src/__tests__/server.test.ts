import { fastify } from "fastify";
import { mocked } from "ts-jest/utils";
import { app } from "../app";
import { server } from "../server";

jest.mock("fastify", () => ({
  fastify: jest.fn(() => ({
    register: jest.fn().mockReturnThis(),
  })),
}));
jest.mock("../app");

describe("server", () => {
  it("is created", async () => {
    expect(fastify).toHaveBeenCalled();
    expect(server).toBe(mocked(fastify).mock.results[0].value);
  });

  it("registers app", async () => {
    expect(server.register).toHaveBeenCalledWith(app);
  });
});
