module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          '@': './src',
          '@assets': './src/assets',
          '@features': './src/features',
          '@hooks': './src/hooks',
          '@navigator': './src/navigator',
          '@shared': './src/shared',
          '@store': './src/store',
          '@utils': './src/utils',
          test: './test',
          underscores: 'lodash',
        },
      },
    ],
  ],
};
