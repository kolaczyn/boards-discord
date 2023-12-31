/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['dist'],
  collectCoverageFrom: ['src/**/*.ts'],
  passWithNoTests: true,
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
}
