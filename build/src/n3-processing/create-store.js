"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStore = void 0;
const n3_1 = require("n3");
const fs_1 = require("fs");
const ExtendedStore_1 = require("./ExtendedStore");
exports.createStore = async (path) => {
    const store = new ExtendedStore_1.ExtendedStore();
    const parser = new n3_1.Parser();
    return await new Promise((executer, reject) => {
        const rdfStream = fs_1.readFileSync(path).toString();
        // @ts-ignore <https://github.com/rdfjs/N3.js/issues/211>
        parser.parse(rdfStream, (error, quad, prefixes) => {
            if (quad)
                store.addQuad(quad);
            else if (prefixes)
                executer({ store, prefixes });
            else
                reject(`Error occured when parsing file ${path}: ${error}`);
        });
    });
};
