module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '*': './src',
          '@assets': './src/Assets',
          '@config': './src/Config',
          '@screens': './src/Screens',
          '@routes': './src/Routes',
          '@services': './src/Services',
          '@shared': './src/Shared',
          '@store': './src/Store',
          '@enums': './src/Enums',
          '@components': './src/Components',
        },
      },
    ],
  ],
};
