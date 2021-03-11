/* eslint-disable @typescript-eslint/no-var-requires */
import { FastifyInstance } from "fastify";
import { mocked } from "ts-jest/utils";

describe("main", () => {
  let server: jest.Mocked<FastifyInstance>;

  const mockExitError = new Error("mockExit");
  let mockExit: jest.SpiedFunction<typeof process.exit>;

  beforeAll(() => {
    mockExit = jest.spyOn(process, "exit").mockImplementation(() => {
      throw mockExitError;
    });
  });

  afterAll(() => {
    mockExit.mockRestore();
  });

  beforeEach(() => {
    jest.resetModules();
    jest.doMock("../server", () => ({
      server: {
        listen: jest.fn(),
        log: {
          error: jest.fn(),
        },
      },
    }));

    server = require("../server").server;
  });

  it("calls server.listen", () => {
    mocked(server.listen).mockResolvedValueOnce("localhost:3000");
    require("../main");
    expect(server.listen).toHaveBeenCalled();
  });

  it("reports error and exits", async () => {
    const mockListenError = new Error("err1");
    const mockListenPromise = Promise.reject(mockListenError);
    const boundOriginalCatch = mockListenPromise.catch.bind(mockListenPromise);
    let caughtExitError: Error | undefined;
    mockListenPromise.catch = (handler: (reason: any) => any) =>
      boundOriginalCatch(handler).catch((err) => {
        caughtExitError = err;
        return new Promise(() => {
          /* never settled */
        });
      });

    mocked(server.listen).mockReturnValueOnce(mockListenPromise);

    require("../main");

    expect(server.listen).toHaveBeenCalled();

    // add one more handler which is scheduled after tested and wait for it
    await mockListenPromise.catch(() => {
      /* mute */
    });

    expect(caughtExitError).toBe(mockExitError);
    expect(mockExit).toHaveBeenCalledWith(1);
    expect(server.log.error).toHaveBeenCalledWith("err1");
  });
});
