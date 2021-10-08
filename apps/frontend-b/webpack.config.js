const getConfig = require('@nrwl/react/plugins/webpack');

module.exports = (config) => {

  config = getConfig(config);
  if (config.mode === 'development' && config.devServer) {
    config.target = 'web';
  }

  return {
    ...config,
  };
};