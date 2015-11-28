function sort(arr) {

    if (arr.length <= 1) {
        return arr;
    }

    var pivotIndex = Math.floor(Math.random() * arr.length);
    var pivot = arr[pivotIndex];
    var lo = [];
    var eq = [];
    var hi = [];

    for (var i = 0; i < arr.length; i++) {
        var elem = arr[i];
        if (elem < pivot) {
            lo.push(elem);
        } else if (elem === pivot) {
            eq.push(elem);
        } else if (elem > pivot) {
            hi.push(elem);
        }
    }


    return sort(lo).concat(eq).concat(sort(hi));
}

var module = module || {};
module.exports = sort;
