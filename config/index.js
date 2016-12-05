let env = process.env.NODE_ENV || 'development';
let config = require('./shared.json');

module.exports = Object.assign(
  {},
  config,
  require(`./${env}.json`) || {}
);
