//Output a prompt
process.stdout.write('prompt > ');

const pwd = require('./pwd');
const ls = require('./ls');
const cat= require('./cat');

process.stdin.on('data', data => {
  const cmd = data.toString().trim(); //remove the new line
  console.log(cmd);
  if (cmd === 'pwd') {
    pwd();
  } else if(cmd==='ls'){
    ls();
  } else if(cmd.slice(0,4)==='cat '){
    cat(`./${cmd.slice(4)}`);
  }else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }

});
