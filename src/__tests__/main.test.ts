import { server } from "../server";

jest.mock("../server", () => ({
  server: {
    listen: jest.fn().mockResolvedValue("address"),
  },
}));

describe("main", () => {
  it("calls server.listen", () => {
    require("../main");
    expect(server.listen).toHaveBeenCalled();
  });
});
