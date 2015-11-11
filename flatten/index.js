function flatten(arr) {
    var results = [];

    function recurse(elem) {
        if (!Array.isArray(elem)) {
            results.push(elem);
        } else {
            elem.forEach(function (item) {
                recurse(item);
            })
        }
    }

    recurse(arr);
    return results;
}

module.exports = flatten;
