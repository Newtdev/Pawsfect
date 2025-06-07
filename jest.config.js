module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    '<rootDir>/jest.setup.ts',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  //this will be updated later
  testMatch: [
    '<rootDir>/__tests__/**/*.(ts|tsx|js)',
    '<rootDir>/**/?(*.)(test|spec).(ts|tsx|js)',
  ],

  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },

  // Files to ignore when transforming
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-native-gesture-handler|react-native-reanimated|@react-navigation|react-native-screens|react-native-safe-area-context|react-native-svg)/)',
  ],

  // Module name mapping for path aliases (matching your tsconfig paths)
  moduleNameMapper: {
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@hooks/(.*)$': '<rootDir>/src/shared/hooks/$1',
    '^@navigator/(.*)$': '<rootDir>/src/navigator/$1',
    '^@shared/(.*)$': '<rootDir>/src/shared/$1',
    '^@features/(.*)$': '<rootDir>/src/features/$1',
    '^@store/(.*)$': '<rootDir>/src/store/$1',
    '^@utils/(.*)$': '<rootDir>/src/shared/utils/$1',
    '^@types$': '<rootDir>/src/shared/types/index.ts',
  },

  // Coverage settings
  collectCoverage: true, // Set to true for CI
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/__tests__/**',
    '!src/**/*.test.{ts,tsx}',
    '!src/**/*.spec.{ts,tsx}',
    '!src/index.tsx',
    '!src/App.tsx',
  ],

  // Coverage thresholds
  // this should be updated later
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },

  // Coverage output
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html', 'clover'],

  // Test environment
  testEnvironment: 'node',

  // Clear mocks between tests
  clearMocks: true,

  // Verbose output for CI
  verbose: true,

  // Maximum worker processes (good for CI)
  maxWorkers: '50%',

  // Cache directory
  cacheDirectory: '<rootDir>/node_modules/.cache/jest',
};

/**
 * https://medium.com/@anisurrahmanbup/react-native-testing-ultimate-guide-219a5e7ea5dc
 * setupFile: This option is used to specify a module that should be executed before any tests run, such as setting up the test data or mocking external components, Native Modules, dependencies, services or APIs
 * e.g
 * "setupFiles": [
     "./src/mock/api",
     "./src/mock/services",
  ]
 *
 * ModuleFileExtensions: This option is used to specify the file extensions that should be looked for when running tests. For example, if you have test files with the extensions “.ts”, “.tsx”, “.js”, “.jsx”, “.json”, and “.node”, you can specify them in the “moduleFileExtensions” option like this
 *
 * e.g:
 * "moduleFileExtensions": [
  "ts",
  "tsx",
  "js",
  "jsx",
  "json",
  "node"
]
*
transformIgnorePatterns: The option “transformIgnorePatterns” is used to tell Jest which files it should not change before testing them. Sometimes, Jest needs to change some files, for example, if they use a different language or syntax than JavaScript. By default, Jest will not change any files in the “node_modules” directory, because they are usually already written in JavaScript. But sometimes, you may need to change some of them, for example, if they use TypeScript or ES6 syntax. To do that, you can use a special code to match the files that you want to change, and use a “!” sign to exclude the ones that you don’t
*
*testMatch: The “testMatch” option is used to specify which files should be considered as test files by Jest. It is an array of glob patterns that match the file paths of your test files. For example, if you have a folder called “tests” in your project root, and you want to run all the files inside it that end with “.test.js” or “.spec.js”
e.g
 Check the configuration above
*
*

 */
