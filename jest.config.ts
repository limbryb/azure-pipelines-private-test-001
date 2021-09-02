import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  reporters: [
    'default',
    [ 'jest-junit', {
      outputDirectory: './reports',
      suiteNameTemplate: '{filepath} - {title}',
      ancestorSeparator: ' > ',
    }],
  ],
};

module.exports = config;
