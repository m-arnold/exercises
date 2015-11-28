function value (fnOrValue) {
    if (typeof fnOrValue !== 'function') {
        return fnOrValue;
    } else {
        return value(fnOrValue());
    }
}

module.exports = value;
