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
  coverageReporters: ['json', 'text', 'html', 'cobertura', 'text-summary'],
  transformIgnorePatterns: [ignore],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.{js,jsx,ts,tsx}',
    '!src/**/*.style.{js,ts}',
    '!*.{tsx,js,ts,jsx}',
    '!node_modules/**',
    '!*.config.{js,ts}',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
