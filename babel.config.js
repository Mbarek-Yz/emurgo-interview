module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            _env: './src/config/env',
            _config: './src/config',
            _components: './src/components/',
            _screens: './src/screens/',
            _services: './src/services/',
            _models: './src/models/',
            _enums: './src/enums/',
            _utils: './src/utils/',
            _store: './src/store/',
            _navigation: './src/navigation',
            _hooks: './src/hooks/',
            _languages: './src/locales/languages',
            _assets: './src/assets',
            _i18n: './src/locales/i18n',
            _rtkQuery: './src/rtkQuery/',
            _tests: './__tests__/',
          },
        },
      ],
    ],
    presets: ['module:@react-native/babel-preset'],
  };
};
