module.exports = function (api) {
  api.cache(true);

  console.log('*** babel.config.js loaded ***');
  
  const presets = ["@babel/preset-env", "@babel/preset-typescript"];
  const plugins = [];
  const exclude = ['*.test.*'];

  return {
    presets,
    plugins,
    exclude,
  };
}