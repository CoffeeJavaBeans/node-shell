//Output a prompt
process.stdout.write('prompt > ');

//The stin 'data event fires after a user types in a line
process.stdin.on('data', (data)=>{
  const cmd = data.toString().trim();//remove the new line
  if(cmd==='pwd'){
    const folder=process.cwd();
    process.stdout.write(folder);
  }
  process.stdout.write('\nYou typed: ' + cmd);
  process.stdout.write('\nprompt > ');

});
