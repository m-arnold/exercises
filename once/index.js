function once (fn, ctx) {
    var result;
    return function () {
        if (fn) {
            fn.apply(ctx || this, arguments);
            fn = null;
        }
    }
}

module.exports = once;
