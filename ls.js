//`files` will be an array o filenames, like ['bash.js', 'pwd.js]
function ls() {
  const fs = require('fs');

  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(files.join('\n'));
      process.stdout.write('\nprompt > ');
    }
  });
}

module.exports = ls;
