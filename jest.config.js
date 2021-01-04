const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig.json')

module.exports = {
  clearMocks       : true,
  collectCoverage  : true,
  // collectCoverageFrom: [ '<rootDir>/src/**/*.{ts,tsx}' ],
  coverageDirectory: 'coverage',
  coverageReporters: [ 'text-summary', 'lcov' ],
  moduleNameMapper : pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/src/'
  }),
  preset         : 'ts-jest',
  roots          : [ 'src' ],
  testEnvironment: 'node',
  testMatch      : [ '**/*.(int-)?spec.{ts,tsx}' ]
}
