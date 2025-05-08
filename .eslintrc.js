module.exports = {
  root: true,
  extends: [
    'eslint:recommeded',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    '@react-native',
  ],
  parser: ['@typescript-eslint', 'react'],
  plugins: ['typescript', 'react', 'react-native', 'jest'],
  env: {
    node: true,
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-unsued-vars': 'warn',
    'react/props-types': 'off',
    'react-native/no-inline-styles': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-module-boundary-type': 'error',
    '@typescript-eslint/func-call-spacing': 'off',
    '@typescript-eslint/no-require-imports': 'warn',
  },
};
