const ignore = '/node_modules/(?!react-native)';
module.exports = {
  preset: 'react-native',
  coverageThreshold: {
    global: {
      statements: 80,
      lines: 80,
      branches: 80,
      functions: 80,
    },
  },
  testPathIgnorePatterns: ['./node_modules/'],
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'text', 'html'],
  transformIgnorePatterns: [ignore],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.{js,jsx,ts,tsx}',
    '!node_modules/**',
  ],
};
