"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortResult = void 0;
const n3_1 = require("n3");
const ramda_1 = require("ramda");
function sortResult(nodes) {
    return ramda_1.sortBy(x => x.id || x.value, nodes.filter(node => !(node instanceof n3_1.BlankNode)));
}
exports.sortResult = sortResult;
