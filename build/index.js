"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTypeScript = void 0;
const fs_1 = require("fs");
const n3_1 = require("n3");
const path_1 = __importDefault(require("path"));
const R = __importStar(require("ramda"));
const ts_morph_1 = require("ts-morph");
const ns_1 = require("../typescript/owl/typescript/ns");
const ns_2 = require("../typescript/tsc/typescript/ns");
const ns_3 = require("../typescript/rdf/typescript/ns");
const create_store_1 = require("./create-store");
const createEnumDeclaration_1 = require("./createEnumDeclaration");
const utils_1 = require("./utils");
const shacl_1 = require("@ontologies/shacl");
// Eventually most of the settings can be auto propogated by
// sending requests to either the expected locations and
// then performing tests or doing something similar?
//export const 
const setupProject = (outDir, prefix) => {
    const project = new ts_morph_1.Project({
        compilerOptions: {
            outDir: path_1.default.join(outDir, prefix, 'compiled'),
            declaration: true
        }
    });
    const createFile = (name) => project.createSourceFile(path_1.default.join(outDir, prefix, 'typescript', `/${name}.ts`), '', { overwrite: true });
    return {
        project,
        file: {
            enum: createFile('ns'),
            interfaces: createFile('interfaces'),
            classes: createFile('classes'),
            validators: createFile('validators'),
            index: createFile('index')
        }
    };
};
const finishAndSave = async ({ project }) => {
    await project.save();
    project.emitSync();
};
const addOntologyDetails = (ontology, file) => {
    const ontologyDeclarations = ontology.store
        .getQuads(null, ns_3.ns.type, ns_1.ns.Ontology, null)
        .map(x => x.subject.id);
    if (ontologyDeclarations.length === 0) {
        throw new Error(`No ontologies specified in file ${file}`);
    }
    else if (ontologyDeclarations.length > 1) {
        throw new Error(`Multiple ontologies specified in file ${file}`);
    }
    const base = ontologyDeclarations[0];
    const ontologyMatch = new RegExp(`^${base}[/#]?$`);
    const prefix = Object.entries(ontology.prefixes).find(([, value]) => {
        // @ts-ignore
        return ontologyMatch.test(value);
    })?.[0];
    if (prefix === undefined) {
        throw new Error(`Cannot find prefix for ontology ${base}`);
    }
    return {
        ...ontology,
        base,
        file,
        prefix,
        namespace: ontology.prefixes[prefix],
        subjects: utils_1.sortResult(ontology.store.getSubjects(null, null, null)),
        predicates: utils_1.sortResult(ontology.store.getPredicates(null, null, null)),
        objects: utils_1.sortResult(ontology.store.getObjects(null, null, null))
    };
};
const getName = (value) => (/[^/#]*$/.exec(value)?.[0] ?? '');
const generateTagName = (predicate, object) => {
    const name = getName(predicate.value);
    if (object instanceof n3_1.Literal && object.language !== null) {
        return name + '-' + object.language;
    }
    else {
        return name;
    }
};
const generateOntologyDocs = (ontology) => {
    if (ontology.store.has(ontology.base, dcterms.description, null)) {
        description = ontology.store.has(ontology.base, dcterms.description, null);
    }
    let description = undefined;
    let tags = [];
    // Possibly extract this to the settings at a later point
    if (shacl_1.predicate.id === dcterms.description) {
        description = object.value;
    }
    else if (shacl_1.predicate.id === rdfs.comment && description === undefined) {
    }
    ontology.store.sorted.forPredicates(predicate => {
        ontology.store.sorted.forObjects(object => {
            if (ontology.store.has(object, null, null)) {
            }
            else {
                tags.push({
                    tagName: generateTagName(predicate, object),
                    text: object.value
                });
            }
        }, ontology.base, predicate);
    }, ontology.base);
    const predicates = utils_1.sortResult(ontology.store.getPredicates(ontology.base, null, null));
    for (const predicate of predicates) {
        const objects = utils_1.sortResult(ontology.store.getPredicates(ontology.base, predicate, null));
        for (const object in objects) {
            if (ontology.store.has(subject, predicate, object))
                ontology.store.f;
        }
    }
};
const createOntology = async (path) => addOntologyDetails(await create_store_1.createStore(path), path);
const createEnum = (ontology, project) => {
    // const project
    project.file.enum.addEnum({
        name: "ns",
        isExported: true,
        // @ts-ignore
        members: createEnumDeclaration_1.createEnumDeclaration(subjects, ontology.namespace),
        docs: [{
                description: `Namespace declarations for the <${ontology.namespace}> ontology`,
            }]
    });
};
// tags : [{
//   tagName: '',
//   text: ''
// }]
const createInterfaces = (ontology, project, settings) => {
    ontology.subjects.forEach(subject => {
        const predicates = utils_1.sortResult(ontology.store.getPredicates(subject, null, null));
        let description = undefined;
        let tags = [];
        for (const predicate of predicates) {
            if (settings.store.has(predicate.id, ns_2.ns.propertyConversion, ns_2.ns.JSDoc)) {
                const objects = utils_1.sortResult(ontology.store.getObjects(subject, predicate, null));
                for (const object of objects) {
                    tags.push({
                        tagName: (/[^/#]*$/.exec(predicate.value)?.[0] ?? '')
                            + (predicate.id)
                    });
                }
            }
        }
        project.file.interfaces.addInterface({});
    });
};
exports.generateTypeScript = async (ontologyPath, settingsPath, outDir) => {
    const ontology = await createOntology(ontologyPath);
    const settings = await create_store_1.createStore(settingsPath);
    const project = setupProject(outDir, ontology.prefix);
    createEnum(ontology, project);
    createInterfaces(ontology, project, settings);
    createClasses(ontology, project, settings);
    createValidators(ontology, project, settings);
    createIndex(ontology, project, settings);
    await finishAndSave(project);
};
async function executeFromSettings(settingsPath) {
    const settings = (await create_store_1.createStore(settingsPath)).store;
    // May need to have better handling of local vs. global
    // file paths
    const toCovertFromFolders = settings.getObjects(ns_2.ns.convertToTs, ns_2.ns.folder, null)
        .map(folder => fs_1.readdirSync(folder.value).map(file => path_1.default.join(folder.value, file)))
        .flat();
    const toCovertFromFiles = settings.getObjects(ns_2.ns.convertToTs, ns_2.ns.file, null)
        .map(file => path_1.default.join(file.value));
    const defaultOutputDirectory = settings.getObjects(ns_2.ns.defaults, ns_2.ns.outDir, null)[0]
        || settings.getObjects(ns_2.ns.defaults, ns_2.ns.typescript, null)[0];
    let toConvert = R.union(toCovertFromFolders, toCovertFromFiles);
    for (const ontologyPath of toConvert) {
        if (defaultOutputDirectory?.value) {
            exports.generateTypeScript(ontologyPath, settingsPath, defaultOutputDirectory?.value);
        }
        else {
            throw new Error(`No output folder specified in the settings`);
        }
    }
}
executeFromSettings(`settings.ttl`);
