function flattenThunk(thunk) {
    // return a function that, when called with a callback,
    // waits for data before calling said callback
    return function (whenDone) {
        return thunk(function (err, dataOrThunk) {
            if (err) return err;

            if (typeof dataOrThunk === 'function') {
                return flattenThunk(dataOrThunk)(whenDone);
            } else {
                return whenDone(err, dataOrThunk);
            }
        })
    }
}


module.exports = flattenThunk;
