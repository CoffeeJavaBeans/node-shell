
function cat(path){
    const fs = require('fs');
    console.log(path);

    fs.readFile(path,"utf8", (err, data) => {
      if (err) {
        throw err;}
      console.log(data);
      //} else {
        //process.stdout.write(files.join('\n'));
        process.stdout.write('\nprompt > ');
      //}
    });
  }

module.exports = cat;
  
