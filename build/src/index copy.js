import { createStore } from "./create-store";
import { writeFilesFromAST } from './writeFilesFromAST';
import { createEnumDeclarations } from './createEnumDeclaration';
import { sortResult } from "./utils";
import * as ts from 'typescript';
import { createModuleDeclaration } from "./createModuleDeclaration";
// Eventually most of the settings can be auto propogated by
// sending requests to either the expected locations and
// then performing tests or doing something similar?
//export const 
function createImports() {
    ts.createNamedImports();
}
export const generateTypeScript = async (ontologyPath, settingsPath, outputPath) => {
    const [ontology, ontologyPrefixes] = await createStore(ontologyPath);
    const [settings, settingsPrefixes] = await createStore(settingsPath);
    // Sort results only returns those that are named nodes
    const subjects = sortResult(ontology.getSubjects(null, null, null));
    const predicates = sortResult(ontology.getPredicates(null, null, null));
    const objects = sortResult(ontology.getObjects(null, null, null));
    // console.log(ontologyPrefixes['dc'])
    const imports = createImports();
    const enumDeclarations = createEnumDeclarations(subjects, ontologyPrefixes);
    const moduleDeclaration = createModuleDeclaration('sample_name', [imports, ...enumDeclarations]);
    writeFilesFromAST(outputPath, moduleDeclaration);
    //console.log(ontology, prefixes)
    // const AST = storeToAST(store, prefixes)
};
const x = generateTypeScript(`C:\\Users\\jmwri\\Documents\\AGRIF_PROJECT\\ontology-to-typescript\\src\\shacl.ttl`, `C:\\Users\\jmwri\\Documents\\AGRIF_PROJECT\\ontology-to-typescript\\src\\settings.ttl`, `C:\\Users\\jmwri\\Documents\\AGRIF_PROJECT\\ontology-to-typescript\\src\\outDir.ts`);
