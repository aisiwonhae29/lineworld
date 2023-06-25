const fs = require('fs');

const readFile= fs.readFile;

console.log('start read');

readFile('read.txt', 'utf8', (err, data) => {
    if(err) {
        console.log(err);
        console.log('error');
        return;
    }
    console.log(data);
    console.log('end read');
})

