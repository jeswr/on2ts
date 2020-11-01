"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const ldflex_1 = require("ldflex");
// @ts-ignore
const comunica_1 = __importDefault(require("@ldflex/comunica"));
const actor_init_sparql_file_1 = require("@comunica/actor-init-sparql-file");
const quer = `
SELECT DISTINCT ?subject
WHERE {
    ?subject ?predicate ?object
}
ORDER BY str(?subject)
`;
const classes = async (instance) => `
SELECT DISTINCT ?object
WHERE {
    <${instance}> a+ ?object
}
ORDER BY str(?object)
`;
async function createOntology(filePath) {
    // Setting up the query engine
    // may need to set up bigger quqery
    const queryEngine = new comunica_1.default(filePath);
    queryEngine._engine = actor_init_sparql_file_1.newEngine();
    const path = new ldflex_1.PathFactory({ queryEngine, context: {} });
    for await (const res of queryEngine.execute(quer)) {
        if (res._root.entries[0][1].termType === 'NamedNode') {
            const instance = path.create({ subject: res._root.entries[0][1] });
            let OWLTYPE = undefined;
            const c = queryEngine.execute(await classes(await instance));
            let m;
            for await (const prop of c) {
                console.log(prop.values());
                console.log(`${await prop}`);
            }
            // const isObjectProperty = (await c).some((entry: string) => entry === OWL.ObjectProperty)
            // console.log(isObjectProperty)
            // console.log((await c).some(entry => entry === OWL.ObjectProperty))
            //     console.log(`${await instance} has type ${await instance[RDF.type]}`)
            //     // console.log(`${await instance} is subclass of ${await instance[RDFS.subClassOf]}`)
            //     let subclasses = []
            //     for await (const subClass of instance[RDFS.subClassOf]) {
            //         if (subClass.termType === 'NamedNode') {
            //             subclasses.push(subClass)
            //         } else {
            //             // TODO: THis is quite complex behavior
            //             // where the super class is inferred based
            //             // on the properties
            //             console.log(`${await subClass[RDF.type]}`)
            //         }
            //     }
            //     // for await (const property of instance) {
            //     //     console.log(`${await property} has label ${await property[RDFS.label]}`)
            //     // }
        }
    }
}
createOntology('ontology/agrif.ttl');
// async function prnt() {
//     const path = createOntology('ontology/agrif.ttl')
//     // path.queryEngine()
//     // const affects = path.create({ predicate: namedNode(RDF.type) });
//     // console.log(await affects)
//     // for await (const subject of affects.subjects) {
//     //     console.log(`${await subject}`)
//     // }
//     // const subjects = path.create({ predicate: namedNode(RDF.type) });
//     // console.log(await subjects)
//     // for await (const subject of path.subjects) {
//     //     console.log(`${await subject}`)
//     // }
// }
// prnt()
// const ontology = createOntology('ontology/agrif.ttl')
// console.log(`${await path}`)
// // // The object that can create new paths
// queryEngine._engine = newEngine()
// const path = new PathFactory({ context, queryEngine });
// const prt = async () => {
//     for await (const label of ruben.label) {
//       console.log(`${await ruben.label}`)
//     }
//     // console.log('ruben', await ruben.label)
// }
// prt()
