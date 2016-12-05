let _ = require('highland');

class Webhook {
  costructor () {
    this.history = _();
  }

  write (post) {
    let stream  = _.of(post);

    this.recordHistory(post);

    stream.observe().flatMap(this.handler);

    return stream;
  }

  recordHistory () {
    this.history.write(post);
  }
}

module.exports = Webhook;
