//Output a prompt
process.stdout.write('prompt > ');

const pwd = require('./pwd');
const ls = require('./ls');

process.stdin.on('data', data => {
  const cmd = data.toString().trim(); //remove the new line
  if (cmd === 'pwd') {
    pwd();
  } else if(cmd==='ls'){
    ls();
  }else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }

});
