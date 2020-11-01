"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedStore = void 0;
const n3_1 = require("n3");
const utils_1 = require("../utils/utils");
const ramda_1 = __importDefault(require("ramda"));
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
// function singleFactory (method: Function) {
//   return (
//       subject: OTerm, 
//       predicate: OTerm, 
//       object: OTerm, 
//       allowNull: boolean = false
//     ) => {
//     if (subjects.length === 1) {
//       return subjects[0]
//     } else if (subjects.length === 0 && allowNull) {
//       return null
//     } else {
//       throw new Error(`
//       Expected extactly one triple of the form 
//       subject: ${subject}, 
//       predicate: ${predicate}, 
//       object: ${object}
//       but got ${subjects.length}.
//       `)
//     }
//   }
// }
class ExtendedStore extends n3_1.Store {
    constructor() {
        // private sortedFactory (method: Function): Function {
        //   return (subject: OTerm, predicate: OTerm, object: OTerm, graph: OTerm) => {
        //     console.log(subject, predicate, object, graph)
        //     console.log(method)
        //     console.log(method(null, null, null, null))
        //     console.log(method(subject, predicate, object, graph))
        //     return sortResult(method(subject, predicate, object, graph))
        //   }
        // }
        super(...arguments);
        this.sorted = {
            // Fix this
            getSubjects: (predicate, object, graph) => utils_1.sortResult(this.getSubjects(predicate, object, graph)),
            getPredicates: (subject, object, graph) => utils_1.sortResult(this.getPredicates(subject, object, graph)),
            getObjects: (subject, predicate, graph) => utils_1.sortResult(this.getPredicates(subject, predicate, graph)),
            getQuads: (subject, predicate, object, graph) => {
                return ramda_1.default.sort((Quad1, Quad2) => {
                    if (Quad1.subject.id > Quad2.subject.id) {
                        return 1;
                    }
                    else if (Quad1.subject.id < Quad2.subject.id) {
                        return -1;
                    }
                    else if (Quad1.predicate.id > Quad2.predicate.id) {
                        return 1;
                    }
                    else if (Quad1.predicate.id < Quad2.predicate.id) {
                        return -1;
                    }
                    else if (Quad1.object.id > Quad2.object.id) {
                        return 1;
                    }
                    else if (Quad1.object.id < Quad2.object.id) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                }, this.getQuads(subject, predicate, object, graph));
            },
            forSubjects: (callback, predicate = null, object = null) => { this.sorted.getSubjects(null, predicate, object).forEach(callback); },
            forPredicates: (callback, subject = null, object = null) => { this.sorted.getPredicates(subject, null, object).forEach(callback); },
            forObjects: (callback, subject = null, predicate = null) => { this.sorted.getObjects(subject, predicate, null).forEach(callback); },
            forEach: (callback, subject = null, predicate = null, object = null, graph) => {
                this.sorted.getQuads(subject, predicate, object, graph).forEach(callback);
            }
        };
        this.getSubject = (predicate, object, graph, allowNull = false) => {
            const subjects = this.getSubjects(predicate, object, graph);
            if (subjects.length === 1) {
                return subjects[0];
            }
            else if (subjects.length === 0 && allowNull) {
                return null;
            }
            else {
                throw new Error(`
      Expected extactly one triple with

      predicate: ${predicate}, 
      object: ${object}

      but got ${subjects.length}.
      `);
            }
        };
        this.getPredicate = (subject, object, graph, allowNull = false) => {
            const predicates = this.getPredicates(subject, object, graph);
            if (predicates.length === 1) {
                return predicates[0];
            }
            else if (predicates.length === 0 && allowNull) {
                return null;
            }
            else {
                throw new Error(`
      Expected extactly one triple with

      subject: ${subject}, 
      object: ${object}

      but got ${predicates.length}.
      `);
            }
        };
        this.getObject = (subject, predicate, graph, allowNull = false) => {
            const objects = this.getObjects(subject, predicate, graph);
            if (objects.length === 1) {
                return objects[0];
            }
            else if (objects.length === 0 && allowNull) {
                return null;
            }
            else {
                throw new Error(`
      Expected extactly one triple with

      subject: ${subject}, 
      predicate: ${predicate}

      but got ${objects.length}.
      `);
            }
        };
    }
    has(subject, predicate, object) {
        return this.getSubjects(subject, predicate, object).length > 0;
    }
}
exports.ExtendedStore = ExtendedStore;
