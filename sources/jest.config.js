import {createRequire} from 'node:module'

const require = createRequire(import.meta.url)
let develocityReporter
try {
  develocityReporter = require.resolve('@gradle-tech/develocity-agent/jest-reporter')
} catch {
  develocityReporter = null
}

export default {
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts', 'json'],
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.ts$': ['ts-jest', { useESM: true }]
  },
  reporters: [
    'default',
    develocityReporter
  ].filter(Boolean),
  verbose: true
}
