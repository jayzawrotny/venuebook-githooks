let exec = require('child_process').exec;
let _ = require('highland');
var debug = require('debug')('webhooks:util');

/**
 * Runs a command and returns a promise with the stdout & stdErr
 * @param {string} cmd - Command & args to run
 * @param {object} options - Extra options to affect exec behavior
 * @returns {promise} Resolves with obj fails on error or non-zeo exit code
 */
function runCmd (cmd, options={}) {
  return _((push) => {
    debug(`EXEC '${cmd}'`);
    exec(cmd, options, (err, stdout, stderr) => {
      debug('runcmd:', err, stdout, stderr);

      if (err) {
        push(err);
      }
      else if (stderr && err && err.code !== 0) {
        push(new Error(stderr));
      }
      else {
        push(null, { stdout, stderr });
      }

      push(null, _.nil);
    });
  });
}

module.exports = runCmd;
