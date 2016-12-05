let _ = require('highland');
let request = require('request');
let Webhook = require('./Webhook');

class GithubWebhook extends Webhook {
  handler (post) {
    return _([
      this.deployToNewark(post),
      this.slackGit(post),
      this.slackTech(post),
      // this.forwardToClubhouse(post),
    ])
    .parallel(3)
    .errors(this.slackError.bind(this));
  }

  deployToNewark () {
    let env = {
      // node will spawn child with parent's env unless we override
      home: '/home/deployguy',
    };

    return this.run('sudo -u deployguy -H fab deploy:newark', { env })
  }

  slackError (err) {
    return postToSlack({

    });
  },

  slackGit (post) {
    return postToSlack({

    });
  }

  slackTech (post) {
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
