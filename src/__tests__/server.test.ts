import { fastify, FastifyInstance } from "fastify";
import { mocked } from "ts-jest/utils";
import { app } from "../app";

jest.mock("fastify", () => ({
  fastify: jest.fn(() => ({
    register: jest.fn(),
    listen: jest.fn().mockResolvedValue("address"),
  })),
}));
jest.mock("../app");

describe("[ts] server start", () => {
  it("registers app", () => {
    require("../server");
    expect(fastify).toHaveBeenCalled();
    const instance = mocked(fastify).mock.results[0]
      .value as jest.Mocked<FastifyInstance>;
    expect(instance.register).toHaveBeenCalledWith(app);
    expect(instance.listen).toHaveBeenCalled();
  });
});
