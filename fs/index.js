const fs = require('fs');

//console.log(fs.readdirSync("./"));

fs.readdir("#", (err, files) => {
    console.log(err);
    console.log(files);
});

