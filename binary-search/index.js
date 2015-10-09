function binarySearch(arr, target, botBound, topBound) {
    if (arr.length === 0) return -1;

    var topBound = topBound || arr.length - 1;
    var botBound = botBound || 0;
    var index = Math.floor((topBound + botBound) / 2);
    var candidate = arr[index];

    if (candidate === target) {
        //if found return index
        return index;
    } else if (botBound === topBound) {
        //if bounded to one, and that's not it, return -1
        return -1;
    } else {
        if (target > candidate) {
            // if target's bigger, search top half
            return binarySearch(arr, target, index + 1, topBound);
        } else if (target < candidate) {
            // if target's smaller, search bottom half
            return binarySearch(arr, target, botBound, index);
        }
    }
}

module.exports = binarySearch;
