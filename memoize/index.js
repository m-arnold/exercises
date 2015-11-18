function memoize(fn) {
    // save prev answers
    var memo = {};
    // return a fn. Each time memoized is called,
    // it will check if fn(args) exists in memo
    // if so, it will return the prev answer, skipping the calculation
    // if not, it will run fn and save the answer to memo, then return the result
    return function memoized() {
        var args = parseArgs(arguments);
        if (memo[args]) {
            return memo[args];
        } else {
            var result = fn.apply(null, args);
            memo[args] = result;
            return result;
        }
    }
}

function parseArgs(argsObj) {
    //get arguments into usable form
    var argsLength = argsObj.length;
    var args = new Array(argsLength);
    for (var i = 0; i < argsLength; i++) {
        args[i] = argsObj[i];
    }
    return args;
}

module.exports = memoize;

