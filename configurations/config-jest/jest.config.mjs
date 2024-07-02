export default {
  "preset": "ts-jest",
  "testEnvironment": "node",
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  transform: {
    '^.+\\.m?[tj]sx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  }
};
