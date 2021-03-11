module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "node",
  testMatch: ["<rootDir>/src/**/__tests__/*.test.[jt]s?(x)"],
  collectCoverageFrom: ["src/**/*.{js,ts}", "!**/__tests__/**/*"],
  coverageThreshold: {
    global: {
      functions: 90,
      statements: 90,
      lines: 90,
      branches: 90,
    },
  },
};
