async = {};

async.sequence = function(fnArr) {
    return function(cb) {
        fnArr[0](function(_, data) {
            fnArr[1](function(_, data2) {
                cb(_, data2);
            }, data)
        })
    }
}

async.parallel = function(fnArr) {
    return function(cb) {
        var result = [];
        fnArr[0](function(_, data) {
            result[0] = data;
        })
        fnArr[1](function(_, data2) {
            result[1] = data2;
            cb(_, result);
        })
    }
}

async.race = function(fnArr) {
    var won = false;
    return function(cb) {
        fnArr[0](function(_, data) {
            if (!won) {
                cb(_, data);
                won = true;
            }
        })
        fnArr[1](function(_, data) {
            if (!won) {
                cb(_, data);
                won = true;
            }
        })
    }
}

module.exports = async;
