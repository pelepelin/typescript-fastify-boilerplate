import { base64decode, envBoolean } from "../config";

describe("config", () => {
  it("returns undefined HTTPS_SERVER_OPTIONS when env.SERVER_HTTPS is falsy", async () => {
    jest.resetModules();
    jest.mock("process", () => ({
      env: {
        SERVER_HTTPS: "0",
      },
    }));
    const config = await import("../config");
    expect(config.HTTPS_SERVER_OPTIONS).toBeUndefined();
  });

  it("returns undefined HTTPS_SERVER_OPTIONS when env.SERVER_HTTPS is undefined", async () => {
    jest.resetModules();
    jest.mock("process", () => ({
      env: {},
    }));
    const config = await import("../config");
    expect(config.HTTPS_SERVER_OPTIONS).toBeUndefined();
  });

  it("returns HTTPS_SERVER_OPTIONS when env.SERVER_HTTPS is true", async () => {
    jest.resetModules();
    jest.mock("process", () => ({
      env: {
        SERVER_HTTPS: "true",
      },
    }));
    const config = await import("../config");
    expect(config.HTTPS_SERVER_OPTIONS).toEqual({});
  });

  describe("envBoolean", () => {
    it("parses some strings to true", () => {
      expect(envBoolean("true")).toBe(true);
      expect(envBoolean("1")).toBe(true);
    });

    it("returns false for other strings", () => {
      expect(envBoolean("")).toBe(false);
      expect(envBoolean("0")).toBe(false);
      expect(envBoolean("false")).toBe(false);
    });

    it("returns false by default", () => {
      expect(envBoolean(undefined)).toBe(false);
    });
  });

  describe("base64decode", () => {
    it("passes undefined", () => {
      expect(base64decode(undefined)).toBeUndefined();
    });

    it("decodes base64", () => {
      const s = "aGVsbG8=";
      expect(base64decode(s)).toEqual(Buffer.from("hello"));
    });
  });
});
