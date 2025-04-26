module.exports = function override(config) {
  config.resolve.fallback = {
    fs: false,
  };

  config.stats = {
    warningsFilter: [/Critical dependency: the request of a dependency is an expression/],
  };
  return config;
};
