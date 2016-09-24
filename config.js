let env = process.env.NODE_ENV || 'development',
    config = require('./config/shared.json');

module.exports = Object.assign({}, config, require(`./config/${env}.json`) || {});