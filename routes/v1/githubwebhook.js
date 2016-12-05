let express = require('express');
let request = require('request');
let router = express.Router();

const githooks = [];
const config = require('../config');

function logRequest (request) {
  if (githooks.length > 20) githooks.pop();

  githooks.unshift(request.body);
}

function postToSlackTech (req, res, next) {
  return new Promise((resolve) => {
    request({
      uri: config.slack.hook_url,
      method: 'POST',
      json: {
      }
    });
  });
}

function postToSlackGit (req, res, next) {
  return new Promise((resolve) => {

  });
}

function forwardToClubhouse (req, res, next) {
  return new Promise((resolve) => {

  });
}

module.exports = router
  .post(`/${config.keys.github_webhook}`, function githubWebhookHandler (req, res, next) {
    Promise.all([
      postToSlackTech(req, res, next),
      postToSlackGit(req, res, next),
      forwardToClubhouse(req, res, next),
    ])
    .then(() => {
      res.send({ status: 'ok' });
    })
    .catch((err) => {
      next(err);
    });
  });
