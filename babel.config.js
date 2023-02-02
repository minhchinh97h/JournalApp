module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '~redux-reducers': './src/redux-reducers',
          '~redux-store': './src/redux-store',
          '~redux-reselectors': './src/redux-reselectors',
          '~redux-actions': './src/redux-actions',
          '~defined-types': './src/defined-types',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
