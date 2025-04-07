import pickBy from "lodash/pickBy.js";
import startsWith from "lodash/startsWith.js";
import transform from "lodash/transform.js";

export const extractEnv = (env: NodeJS.ProcessEnv) => {
  return transform<NodeJS.ProcessEnv, Record<string, string>>(
    pickBy(env, (_, k) => startsWith(k, "MCP_ENV_")),
    (r: Record<string, string>, v, k) =>
      (r[(k as string).replace(/^MCP_ENV_/, "")] = v ?? ""),
    {},
  );
};
