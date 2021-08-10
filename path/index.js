const path = require("path");

const fileObj = path.parse(__filename);
//const fileObj = path.basename(__filename);
console.log(fileObj);