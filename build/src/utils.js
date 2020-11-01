"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTagName = exports.getName = exports.sortResult = void 0;
const n3_1 = require("n3");
const ramda_1 = require("ramda");
function sortResult(nodes) {
    return ramda_1.sortBy(x => x.id || x.value, nodes.filter(node => !(node instanceof n3_1.BlankNode)));
}
exports.sortResult = sortResult;
exports.getName = (value) => { var _a, _b; return ((_b = (_a = /[^/#]*$/.exec(value)) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : ''); };
exports.generateTagName = (predicate, object) => {
    const name = exports.getName(predicate.value);
    if (object instanceof n3_1.Literal && object.language !== null) {
        return name + '-' + object.language;
    }
    else {
        return name;
    }
};
