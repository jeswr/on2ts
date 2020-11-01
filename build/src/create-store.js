import { Store, Parser } from "n3";
import { readFileSync } from 'fs';
import { sortResult } from "./utils";
function singleFactory(method) {
    return (subject, predicate, object, allowNull = false) => {
        const subjects = method(subject, predicate, object);
        if (subjects.length === 1) {
            return subjects[0];
        }
        else if (subjects.length === 0 && allowNull) {
            return null;
        }
        else {
            throw new Error(`
      Expected extactly one triple of the form 

      subject: ${subject}, 
      predicate: ${predicate}, 
      object: ${object}

      but got ${subjects.length}.
      `);
        }
    };
}
function sortedFactory(method) {
    return (subject, predicate, object) => {
        return sortResult(method(subject, predicate, object));
    };
}
/**
 *
 * @param method either getSubjects, getPredicates or getObjects
 */
// function forFactory<T> (method: Function, key: string) {
//   const keyNames = ['subject', 'predicate', 'object']
//   const i = keyNames.indexOf(key)
//   return (
//     callback: (result: T) => void, OTerm) => {
//       this.sorted.getSubjects(null, predicate ?? null, object ?? null).forEach(callback)
//   }
// }
export class ExtendedStore extends Store {
    constructor() {
        super(...arguments);
        this.sorted = {
            getSubjects: sortedFactory(this.getSubjects),
            getPredicates: sortedFactory(this.getPredicates),
            getObjects: sortedFactory(this.getObjects),
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
export const createStore = async (path) => {
    const store = new ExtendedStore();
    const parser = new Parser();
    return await new Promise((executer, reject) => {
        const rdfStream = readFileSync(path).toString();
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
