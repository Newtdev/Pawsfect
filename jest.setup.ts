import 'react-native-gesture-handler/jestSetup';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';
const reanimated = require('react-native-reanimated');
if (typeof reanimated.setUpTests === 'function') {
  reanimated.setUpTests();
}

// Mock react-native modules
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};
  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported
// jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// // Mock @react-native-async-storage/async-storage
// jest.mock('@react-native-async-storage/async-storage', () =>
//   require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
// );

// Mock navigation
// jest.mock('@react-navigation/native', () => {
//   const actualNav = jest.requireActual('@react-navigation/native');
//   return {
//     ...actualNav,
//     useNavigation: () => ({
//       navigate: jest.fn(),
//       goBack: jest.fn(),
//       dispatch: jest.fn(),
//     }),
//     useRoute: () => ({
//       params: {},
//     }),
//     useFocusEffect: jest.fn(),
//   };
// });

// Mock react-native-safe-area-context
jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

// Mock console methods in tests to reduce noise
global.console = {
  ...console,
  // Uncomment to ignore specific console methods in tests
  // log: jest.fn(),
  // debug: jest.fn(),
  // info: jest.fn(),
  // warn: jest.fn(),
  // error: jest.fn(),
};

// Setup testing library
import '@testing-library/jest-native/extend-expect';
