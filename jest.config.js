module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 80,
      lines: 85,
      statements: 0,
    },
  },
  coveragePathIgnorePatterns: ['node_modules', '<rootDir>/__mocks__'],
};
