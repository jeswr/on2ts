"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStore = exports.ExtendedStore = void 0;
const n3_1 = require("n3");
const fs_1 = require("fs");
const utils_1 = require("./utils");
function singleFactory(method) {
    return (subject, predicate, object, allowNonExistance = false) => {
        const subjects = method(subject, predicate, object);
        if (subjects.length === 1) {
            return subjects[0];
        }
        else if (subjects.length === 0 && allowNonExistance) {
            return null;
        }
        else {
            throw new Error(`Expected extactly one triple of the form subject: ${subject}, predicate: ${predicate}, object: ${object}
      but got ${subjects.length}.
      `);
        }
    };
}
class ExtendedStore extends n3_1.Store {
    constructor() {
        super(...arguments);
        this.sorted = {
            getSubjects: (subject, predicate, object) => utils_1.sortResult(this.getSubjects(subject, predicate, object)),
            getPredicates: (subject, predicate, object) => utils_1.sortResult(this.getPredicates(subject, predicate, object)),
            getObjects: (subject, predicate, object) => utils_1.sortResult(this.getObjects(subject, predicate, object)),
            forSubjects: (callback, predicate, object) => { this.sorted.getSubjects(null, predicate ?? null, object ?? null).forEach(callback); },
            forPredicates: (callback, subject, object) => { this.sorted.getPredicates(subject ?? null, null, object ?? null).forEach(callback); },
            forObjects: (callback, subject, predicate) => { this.sorted.getObjects(subject ?? null, predicate ?? null, null).forEach(callback); }
        };
        this.getSubject = singleFactory(this.getSubjects);
        this.getPredicate = singleFactory(this.getPredicates);
        this.getObject = singleFactory(this.getObjects);
    }
    has(subject, predicate, object) {
        return this.getSubjects(subject, predicate, object).length > 0;
    }
}
exports.ExtendedStore = ExtendedStore;
exports.createStore = async (path) => {
    const store = new ExtendedStore();
    const parser = new n3_1.Parser();
    return await new Promise((executer, reject) => {
        const rdfStream = fs_1.readFileSync(path).toString();
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
