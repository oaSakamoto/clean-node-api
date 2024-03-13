/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {

  roots: ['<rootDir>/src'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  transform: { '.+\\.ts$': 'ts-jest' },
  coveragePathIgnorePatterns: [
    'src/domain',
    'src/presentation/protocols',
    'src/presentation/controllers/signup/signup-protocols.ts'
  ]
}

module.exports = config
