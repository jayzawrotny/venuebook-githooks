const config = require('../config');

let express = require('express'),
    router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send({
    status: 'running',
  });
});

config.versions.forEach((version) => {
  router.use(`/${version}`, require(`./${version}`));
});

module.exports = router;
