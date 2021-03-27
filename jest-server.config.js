module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig-server.json'
    }
  },
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'server',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: ['**/*.(t|j)s', '!**/*.e2e-spec.(t|j)s'],
  coverageDirectory: '../coverage-server',
  testEnvironment: 'node'
};
