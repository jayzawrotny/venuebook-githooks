let _ = require('highland');
let request = require('request');
let Webhook = require('./Webhook');

class GithubWebhook extends Webhook {
  handler (post) {
    return _([
      this.postToTech(post),
      this.postToGit(post),
      // this.forwardToClubhouse(post),
    ])
    .parallel(3);
  }

  postToGit (post) {
    return postToSlack({

    });
  }

  postToTech (post) {
    return postToSlack({

    });
  }

  postToSlack (body) {
    return _((push) => {
      let config = Object.assign({
        uri: config.slack.hook_url,
        method: 'POST',
        json: true,
        body,
      }, config);

      request(config, (err, response) => {
        push(err, response);
      });
    });
  }


  // forwardToClubhouse (req, res, next) {
  //   return new Promise((resolve) => {

  //   });
  // }
}

module.exports = GithubWebhook;
