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
          '@hooks': './src/hooks',
          '@navigator': './src/navigator',
          '@shared': './src/shared',
          '@store': './src/store',
          '@utils': './src/utils',
          '@types': './src/types/index.ts',
          test: './test',
          underscores: 'lodash',
        },
      },
    ],
  ],
};
