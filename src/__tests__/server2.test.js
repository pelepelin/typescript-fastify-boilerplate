import { fastify } from "fastify";
import { mocked } from "ts-jest/utils";
import { app } from "../app";

jest.mock("fastify", () => ({
  fastify: jest.fn(() => ({
    register: jest.fn(),
    listen: jest.fn().mockResolvedValue("address"),
  })),
}));
jest.mock("../app");

describe("[js] server start", () => {
  it("registers app", () => {
    require("../server");
    expect(fastify).toHaveBeenCalled();
    const instance = mocked(fastify).mock.results[0].value;
    expect(instance.register).toHaveBeenCalledWith(app);
    expect(instance.listen).toHaveBeenCalled();
  });
});
