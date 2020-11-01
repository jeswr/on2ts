"use strict";
var _a;
const rdfs = {
    class: {
        Class: (_a = class {
            },
            // Looks like in circular definitions we need to
            // overwrite the hasInstance
            _a.type = this,
            _a),
        Resource: class {
        }
    }
};
class SelfExtends {
    static [Symbol.hasInstance](obj) {
        return obj === this || obj.pr;
    }
}
SelfExtends.type = SelfExtends;
// interface Base {
//     getExtends: () => Base[];
// }
// class Base<T extends string> {
//     static id: T;
//     static type: ClassBase<string>;
//     static getExtends: () => Base[];
//     static [Symbol.hasInstance](obj: any): boolean {
//         return obj.prototype === this
//             || obj.type === this
//             || this.getExtends().some(s => obj instanceof s)
//     }
// }
// class ClassBase<T> extends Base<T> {
//     // Could restrict this to the imported
//     // ontologies or something to that
//     // extend
//     static subClassOf: ClassBase<string>[]
//     static getExtends() {
//         return this.subClassOf
//     }
// }
class C extends ClassBase {
}
C.type = Class;
// class PropertyBase extends Base {
//     static domain: ClassBase<string>
//     static range: ClassBase<string>
//     static subPropertyOf: PropertyBase[]
//     static sub() {
//         return this.subPropertyOf
//     }
// }
// class Shape extends ClassBase {
//     static type = rdfs.class.Class
//     static subClassOf = [
//         rdfs.class.Resource
//     ]
// }
// class NodeShape extends ClassBase {
//     static type = rdfs.class.Class
//     static subClassOf = [
//         Shape
//     ]
// }
// class PropertyShape extends ClassBase {
//     static type = rdfs.class.Class
//     static subClassOf = [
//         Shape
//     ]
// }
// if (PropertyShape instanceof rdfs.class.Class) {
// }
