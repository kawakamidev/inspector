import { extractEnv } from "../extractEnv";

describe("extractEnv", () => {
  it("should extract MCP_ENV_*", () => {
    const input = {
      FOO: "foo",
      MCP_BAR: "bar",
      MCP_ENV_BAZ: "baz",
    };
    const expected = {
      BAZ: "baz",
    };
    expect(extractEnv(input)).toStrictEqual(expected);
  });
});
