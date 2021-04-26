module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./js'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.json',
          '.png',
          '.jpeg',
        ],
        alias: {
          '@common': './js/common',
          '@controller': './js/controller',
          '@constants': './js/constants',
          '@context': './js/context',
          '@components': './js/components',
          '@hooks': './js/hooks',
          '@image': './js/image',
          '@layout': './js/layout',
          '@redux': './js/redux',
          '@routers': './js/routers',
          '@service': './js/service',
          '@screens': './js/screens',
          '@styles': './js/styles',
          '@utils': './js/utils',
        },
      },
    ],
  ],
};
