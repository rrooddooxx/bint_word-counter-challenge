module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["./jest.setup.js"],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!react-bootstrap/.*)"],
};
