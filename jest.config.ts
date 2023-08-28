import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./src/tests/webExtension/BaseTest.ts'],
  testTimeout: 1000 * 360, // 6 mins
  // Configure reporters
  reporters: [
    'default', // Use the default console reporter
    ['jest-html-reporter', {
      outputPath: './test-report.html', // Path to the output HTML report file
      pageTitle: 'Test Report', // Title of the HTML report
      includeConsoleLog: true, // Include console logs in the report
      theme: 'lightTheme', // Choose a theme: 'lightTheme' or 'darkTheme'
    }]
  ],

  // Other configuration options
};

export default config;
