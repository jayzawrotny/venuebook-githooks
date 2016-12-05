let express = require('express');
let router = express.Router();

router.use('/github', require('./github'));

module.exports = router;