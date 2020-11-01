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
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTypeScript = void 0;
const create_store_1 = require("./create-store");
const writeFilesFromAST_1 = require("./writeFilesFromAST");
const createEnumDeclaration_1 = require("./createEnumDeclaration");
const utils_1 = require("./utils");
const ts = __importStar(require("typescript"));
const createModuleDeclaration_1 = require("./createModuleDeclaration");
// Eventually most of the settings can be auto propogated by
// sending requests to either the expected locations and
// then performing tests or doing something similar?
//export const 
function createImports() {
    ts.createNamedImports();
}
exports.generateTypeScript = async (ontologyPath, settingsPath, outputPath) => {
    const [ontology, ontologyPrefixes] = await create_store_1.createStore(ontologyPath);
    const [settings, settingsPrefixes] = await create_store_1.createStore(settingsPath);
    // Sort results only returns those that are named nodes
    const subjects = utils_1.sortResult(ontology.getSubjects(null, null, null));
    const predicates = utils_1.sortResult(ontology.getPredicates(null, null, null));
    const objects = utils_1.sortResult(ontology.getObjects(null, null, null));
    // console.log(ontologyPrefixes['dc'])
    const imports = createImports();
    const enumDeclarations = createEnumDeclaration_1.createEnumDeclarations(subjects, ontologyPrefixes);
    const moduleDeclaration = createModuleDeclaration_1.createModuleDeclaration('sample_name', [imports, ...enumDeclarations]);
    writeFilesFromAST_1.writeFilesFromAST(outputPath, moduleDeclaration);
    //console.log(ontology, prefixes)
    // const AST = storeToAST(store, prefixes)
};
const x = exports.generateTypeScript(`C:\\Users\\jmwri\\Documents\\AGRIF_PROJECT\\ontology-to-typescript\\src\\shacl.ttl`, `C:\\Users\\jmwri\\Documents\\AGRIF_PROJECT\\ontology-to-typescript\\src\\settings.ttl`, `C:\\Users\\jmwri\\Documents\\AGRIF_PROJECT\\ontology-to-typescript\\src\\outDir.ts`);
