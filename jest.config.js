/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  moduleNameMapper: {
    // Handle absolute imports in Remix
    "~/(.*)": "<rootDir>/app/$1",
  },
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.cache/",
    "<rootDir>/build/",
  ],
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["/node_modules/"],
  transform: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/fileTransformer.js",
  },
};
