let _ = require('highland');
let debug = require('debug')('webhooks:routes')
let express = require('express');
let util = require('../../lib/util/toJSON')
let GithubWebhook = require('../../lib/webhooks/GithubWebhook');

let router = express.Router();
let githubWebhook = new GithubWebhook();

const config = require('../../config');
const url = `/${config.keys.github_webhook}`;

debug(`Listening for posts to /v1/github/${url}`)

module.exports = router.post(url, (req, res, next) => {
  githubWebhook
    .write(req.body)
    .map(toJSON({ status: 'ok' }))
    .pipe(res);
});

