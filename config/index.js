let env = process.env.NODE_ENV || 'development';
let config = require('./config/shared.json');

module.exports = Object.assign(
  {},
  config,
  require(`./config/${env}.json`) || {}
);
