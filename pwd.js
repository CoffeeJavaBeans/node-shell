//The stin 'data event fires after a user types in a line
function pwd() {
      const folder = process.cwd();
      process.stdout.write(folder);
      process.stdout.write('\nprompt > ');
}

module.exports=(pwd);
