import nextJest from "next/jest";
import { defaults } from "jest-config";
import * as dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  modulePaths: ["<rootDir>/src/"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleFileExtensions: [...defaults.moduleFileExtensions, "d.ts"],
  testPathIgnorePatterns: ["<rootDir>/src/app/e2e"],
  modulePathIgnorePatterns: ["<rootDir>/src/app/e2e"],
  testTimeout: 15000,
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
