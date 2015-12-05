function throttle (fn, threshold) {
    var calledRecently = false;
    var swallowed;

    return function throttled () {
        var boundFn = Function.prototype.apply.bind(fn, this, arguments);

        if (swallowed) {
            clearTimeout(swallowed);
        }

        if (!calledRecently) {
            calledRecently = true;
            boundFn();
            setTimeout(function () {
                calledRecently = false;
            }, threshold);
        } else {
            swallowed = setTimeout(function () {
                boundFn();
            }, threshold);
        }
    }

}

module.exports = throttle;
