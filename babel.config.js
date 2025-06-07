module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          '@assets': './src/assets',
          '@features': './src/features',
          '@hooks': './src/shared/hooks',
          '@navigator': './src/navigator',
          '@shared': './src/shared',
          '@store': './src/store',
          '@utils': './src/shared/utils',
          '@types': './src/types/index.ts',
          test: './test',
          underscores: 'lodash',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
