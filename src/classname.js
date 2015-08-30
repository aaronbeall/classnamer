var classnames;
(function (classnames) {
    function format() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return args.reduce(function (accum, arg) {
            do {
                if (!arg) {
                    break;
                }
                else if (typeof arg === "string" || typeof arg === "number") {
                    accum.push(arg);
                }
                else {
                    for (var key in arg) {
                        if (arg[key]) {
                            accum.push(key);
                        }
                    }
                }
            } while (false);
            return accum;
        }, []).join(" ");
    }
    classnames.format = format;
    function none() {
        throw new Error("Not implemented yet");
    }
    classnames.none = none;
})(classnames || (classnames = {}));