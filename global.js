function callme() {
    console.log(global.x);

};

module.exports.callme = callme;
