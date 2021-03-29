module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.json'],
        alias: {
          '@ui': './src/ui',
          '@theme': './src/theme',
          '@screens': './src/screens',
          '@routing': './src/routing',
          '@core': './src/core',
          '@store': './src/store',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
