let githubwebhook = require('./githubwebhook'),
    express = require('express'),
    router = express.Router();

router.use('/github-webhook', githubwebhook);

module.exports = router;