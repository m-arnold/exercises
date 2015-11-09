function curry(fn, oldArgs) {
    if (typeof fn !== 'function') {
        throw Error('not a function!');
    }

    //return a function that takes the rest of the arguments until satisfied
    return function () {
        //add the args for this returned function to any already curried args
        var args = (oldArgs || []).concat(parseArgs(arguments));

        // if the number of args present when this function is invoked, plus any partially applied args
        //      equals the number of args asked for in curried, call fn and return the answer.
        if (args.length >= fn.length) {
            return fn.apply(null, args);
        } else {
            // else keep track of args passed in and return another function that will try them with any added args
            return curry(fn, args);
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

module.exports = curry;
