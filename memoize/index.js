function memoize(func) {
    let cache = {};
    return function () {
        let key = JSON.stringify(arguments);
        if (cache[key]) {
            console.log("cache called");
            return cache[key];
        } else {
            console.log("original called");
            let val = func.apply(this, arguments);
            cache[key] = val;
            return val;
        }
    }
};

module.exports = memoize;
