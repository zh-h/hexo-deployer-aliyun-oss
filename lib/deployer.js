const spawn = require('hexo-util/lib/spawn');
const pathFn = require('path');

module.exports = function (args, callback) {
  console.log(JSON.stringify(args))
  if (!args.bucket || !args.ossCliPath) {
    console.error('Please config <bucket> and <ossCliPath> in _config.yml deploy section');
    return callback();
  }
  const ossArgs = [
    'cp',
    '-r',
    '-f',
    pathFn.resolve('public/'),
    `oss://${args.bucket}/`
  ]
  spawn(args.ossCliPath, ossArgs, { verbose: true }).then(function () {
    callback();
  })
};