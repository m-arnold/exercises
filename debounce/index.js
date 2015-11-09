function debounce(fn, waitTime) {
    // return function that, when called, starts a setTimeout for waitTime.
    // when that setTimeout ends, it has two options:
    // a) fn has not been called, so return a call to it.
    // b) fn has been called, so do nothing.

    //init timer var, which, being in closure scope, all instances of checkAndCall have access to.
    var timer;

    return function checkAndCall() {
        // capture context and args
        var self = this;
        var args = arguments;

        var timerEnd = function () {
            timer = null;
            return fn.apply(self, args);
        }

        clearTimeout(timer);

        // start timeOut for waitTime milliseconds
        timer = setTimeout(timerEnd, waitTime);

    }

}

module.exports = debounce;
