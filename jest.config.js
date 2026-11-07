module.exports = {
  preset: 'ts-jest',
  testMatch: ["**/*.test.ts"],
  testPathIgnorePatterns: ["/node_modules/"],
  testEnvironment: 'node',
  clearMocks: true,
}
