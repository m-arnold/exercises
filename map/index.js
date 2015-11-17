function map (arr, projection, ctx) {
    var results = [];
    for (var i = 0; i < arr.length; i++) {
        results.push(projection.apply(ctx, [arr[i], i, arr]));
    }
    return results;
}

module.exports = map;
