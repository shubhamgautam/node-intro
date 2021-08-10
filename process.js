const process = require("process");

// console.log('User Name', process.env.USER_NAME);
// console.log('corp name', process.env.corp);

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`)
});

//console.clear();