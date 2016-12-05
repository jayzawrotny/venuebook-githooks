let _ = require('highland');
let runCmd = require('../util/runCmd');

class Webhook {
  costructor () {
    this.history = _();
  }

  handle (post) {
    let stream  = _.of(post);

    this.recordHistory(post);

    stream.observe().flatMap(this.handler);

    return stream;
  }

  recordHistory () {
    this.history.write(post);
  }

  run (...args) {
    return runCmd(...args);
  }
}

module.exports = Webhook;
