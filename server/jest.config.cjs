module.exports = {
  preset: "ts-jest",
  extensionsToTreatAsEsm: [".ts"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$",
  testPathIgnorePatterns: [
    "/node_modules/",
    "/dist/",
    "/bin/",
    "\\.config\\.(js|ts|cjs|mjs)$",
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/dist/",
    "/bin/",
    "\\.config\\.(js|ts|cjs|mjs)$",
  ],
};
