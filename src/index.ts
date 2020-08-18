// TODO: CLEAN AND MODULARISE FILE CONTENTS - At the moment it is more just a set of exsperiments

import { newEngine } from '@comunica/actor-init-sparql-file'
import CommunicaEngine from '@ldflex/comunica'
import * as fs from 'fs'
import { PathFactory } from 'ldflex'
import { namedNode } from '@rdfjs/data-model'
import R from 'ramda'
import { CodeBlockWriter, NamespaceDeclaration, Project, SourceFile, NamedNode, ts, HeritageClauseableNode } from 'ts-morph'
import { owl, rdf, rdfs, sh, tsc} from '../typescript'
import { cleanName } from './utils/index'
import asy from 'async'
import { create } from 'domain'
import { Base } from './base-classes'

const classesQ = async (instance: string) => `
SELECT DISTINCT ?object
WHERE {
    <${instance}> a+ ?object
}
ORDER BY str(?object)
`

const quote = (str: string) => {
    return new CodeBlockWriter().quote(`${str}`).toString()
}

const makeName = (IRI: string) => {
    return cleanName((/(?![\/#])[^\/#]*$/.exec(`${IRI}`) || [])[0] || '')
}

const makeList = (array: string[]) => {
    return '[' + array.join(', ') + ']'
}

function cleanFile(file: SourceFile) {
    file.fixMissingImports()
    for (let val; val != (val = file.print());) {
        file.fixUnusedIdentifiers()
        file.organizeImports()
    }
}


class MyProject extends Project {
    clean() {
        for (let val; val != (val = this.getSourceFiles().map(node => node.print()).toString());) {
            this.getSourceFiles().forEach(cleanFile)
        }
        return this
    }

    async finalize(keepOldDir: boolean = false) {
        if (!keepOldDir) {
            [...this.getRootDirectories().map(p => p.getPath(), this.compilerOptions.get().outDir)]
                .forEach(path => {fs.rmdirSync(path, {recursive: true})})
        }
        await this.clean().save()
        await this.emit()
        return this
    }
}

type baseStore = string | NamedNode
type storeObj = {
    primary : baseStore;
    other : baseStore | baseStore[];
} | baseStore | baseStore[]

type storeConstructor = storeObj | {[type: string]: storeObj}


class StoreHandlers {

    stores: {
        [type: string] : {
            primary : PathFactory,
            others: PathFactory[]
        }
    } = {}

    initStore(store: baseStore, settings?: {}) {
        // TODO: Expand this to handle other any triplestore
        const queryEngine = new CommunicaEngine(store)
        queryEngine._engine = newEngine()
        return new PathFactory({ queryEngine, context : {}})
    }

    constructor (stores : storeConstructor) {
        // TODO: Expand to handle any type of the above format

    }
}

// Note that we can use "reverse : true" in LDFlex

// import myRDF from '../typescript_2/rdf/src'

// myRDF.value

// const myBag = new myRDF.Bag('test')

class PathFactoryExtended {
    pathFactory : any
    [x: string] : any
    ontologiesToUse: {
        [x: string]: any;
        ns : Enumerator<string>;
    }[] = [
        rdfs,
        owl,
        rdf
    ]
    
    constructor(location: string) {

        const queryEngine = new CommunicaEngine(location)
        queryEngine._engine = newEngine()

        this.pathFactory = new PathFactory({ queryEngine, context: {} })
    }
}

import myRDF from '../typescript_2/rdf/src'

const myFactory = (location: string) => new Proxy(new PathFactoryExtended(location), {

    get: async function* (target, name) {

        for await (const result of target.pathFactory.create({ subject : namedNode('') })[name]) {
            
            const type = `${await result[RDF.type]}`

            result.subject = target.ontologiesToUse.find(ontology => new ontology[ontology.ns[type]]?.(`${result}`)) || result.subject

            // for (const ontology of target.ontologiesToUse) {
            //     if (type in ontology.ns) {
            //         result.subject = new ontology[ontology.ns[type]](`${result}`)
            //         break;
            //     }
            // }

            yield* result
        }
    }
})

// async function myTestingFunction() {
//     for await (const subject of myFactory('ontology/owl.ttl').subjects) { 
//         console.log(subject instanceof OWL.Ontology)
//         console.log(`${subject}`)
//     }
// }

// myTestingFunction()
// // console.log(`${myRDF.subject}`, `${myRDF.subject.id}`)

// // async function testingExtendedPathFactory() {
// //     const ontology = new PathFactoryExtended('ontology/owl.ttl')

// //     for await (const subject of ontology.subjects) {
// //         const testType = await subject[myRDF.type]
// //         if (testType instanceof myRDF.subject) {
// //             console.log(`${await subject} is of type ${testType} which is an instance of ${myRDF.subject} (${myRDF.subject.id})`)
// //         }
// //     }
// // }

// // testingExtendedPathFactory()


async function createOntology (filePath: string, emitAt: string, shacl: string | undefined, base: string) {
    
    const sourceFiles = new MyProject()
    const source = sourceFiles.addSourceFileAtPath(
        'src/validators/helper-functions/validator.ts'
    )


    const project = new MyProject({
        compilerOptions: {
          outDir: require('path').join('typescript_2', emitAt, 'build'),
          declaration: true
        }
      });
    
    const createFile = (name: string, folder?: string) => project.createSourceFile(
        !folder ? require('path').join('typescript_2', emitAt, 'src', `/${name}.ts`)
            : require('path').join('typescript_2', emitAt, 'src', folder, `/${name}.ts`),
        '',
        { overwrite: true }
    );

        // const stores = new StoreHandlers({
        //     ontology: filePath,
        //     shacl,
        //     mapping
        // })


        const queryEngine = new CommunicaEngine(filePath)
        queryEngine._engine = newEngine()
        
        const queryEngineSHACL = new CommunicaEngine(shacl)
        queryEngineSHACL._engine = newEngine()
    
        const queryEngineMapping = new CommunicaEngine('ontology-folder-mapping.ttl')
        queryEngineMapping._engine = newEngine()
    
        // const queryEngineWithImports = new CommunicaEngine(filePath)
        // queryEngineWithImports._engine = newEngine()
        const addedSources = [
            // filePath, 
            'ontology/owl.ttl',
            'ontology/rdf.ttl',
            'ontology/rdfs.ttl',
            'ontology/xsd.ttl',
            'ontology/dcelems.ttl',
            'ontology/dctype.ttl',
            'ontology/ld.ttl',
            'ontology/schema.ttl',
            'ontology/shacl.ttl',
            'ontology/tsc.ttl'
        ]
        


        const path = new PathFactory({ queryEngine, context: {} })
        const shapes = new PathFactory({ queryEngine: queryEngineSHACL, context: {} })
        const mapping = new PathFactory({ queryEngine: queryEngineMapping, context : {} })
        
        const maps = mapping.create({subject: namedNode('') })



        const createImported = async (name: string, folder?: string) => {
            const file = createFile(name, folder)
            file.addImportDeclaration({ moduleSpecifier: './index', namedImports: ['Classes', 'ClassInterface', 'Properties', 'PropertyInterface', 'ns'] })
            file.addImportDeclaration({ moduleSpecifier: '../../../src/base-classes', namespaceImport: 'Base' })

            for await (const map of maps.subjects) {
                const name = `${await map[tsc.folder]}`
                file.addImportDeclaration({
                    namespaceImport: /[a-z]*$/i.exec(name.replace('/src', ''))?.[0] ?? '',
                    moduleSpecifier: name
                })
            }
     
            
            return file.addNamespace({
                name,
                isExported: true
            })
        }

        const createImported2 = async (name: string, folder?: string) => {
            const file = createFile(name, folder)
            file.addImportDeclaration({ moduleSpecifier: '../index', namedImports: ['Classes', 'ClassInterface', 'Properties', 'PropertyInterface', 'ns'] })
            file.addImportDeclaration({ moduleSpecifier: '../../../../src/base-classes', namespaceImport: 'Base' })

            for await (const map of maps.subjects) {
                const name = `../${await map[tsc.folder]}`
                file.addImportDeclaration({
                    namespaceImport: /[a-z]*$/i.exec(name.replace('/src', ''))?.[0] ?? '',
                    moduleSpecifier: name
                })
            }

            file.addImportDeclaration({
                namespaceImport: 'sh',
                moduleSpecifier: '../../sh'
            })
     
            
            return file
        }
        
        const classes = await createImported2('index', 'Classes')
        const classInterface = await createImported2('index', 'ClassInterfaces')
        const properties = await createImported2('index', 'Properties')
        const propertyInterface = await createImported2('index', 'PropertyInterfaces')
        
        const enumsFile = createFile('ns')
        enumsFile.addImportDeclaration({ moduleSpecifier: 'index.ts' })
    
        const enums = enumsFile.addEnum({
            name: 'ns',
            isExported: true
        })
    
        // createFile('').addExportDeclaration({
        //     expo
        // })

        const index = createFile('index')
        // index.addExportDeclarations([
        //     ...project.getSourceFiles().filter(name =>  name.getBaseName() !== 'index.ts')
        //     .map(name => ({ moduleSpecifier : './' + name.getBaseName().replace('.ts', ''),
        //     namespaceExport : name.getBaseName().replace('.ts', '')
        //     //namedExports : [name.getBaseName().replace('.ts', '')] 
        
        // }))])

        index.addImportDeclarations([{
            moduleSpecifier : './Classes',
            namespaceImport : 'Classes'
        }, {
            moduleSpecifier : './Properties',
            namespaceImport : 'Properties'
        }])

        // index.addStatements([{
        //     statements
        //     isD
        // }])
        
        index.addExportAssignment({
            isExportEquals : false,
            expression : '{ ...Classes, ...Properties }',
        })

        index.addExportDeclarations([{
            moduleSpecifier: './Classes',
            namespaceExport: 'Classes'
        }, {
            moduleSpecifier: './ClassInterfaces',
            namespaceExport: 'ClassInterfaces'
        }, {
            moduleSpecifier: './Properties',
            namespaceExport: 'Properties'
        }, {
            moduleSpecifier: './PropertyInterfaces',
            namespaceExport: 'PropertyInterfaces'
        }, {
            moduleSpecifier: './ns',
            namedExports: ['ns']
        }])
        
        // .addVariableStatement({
        //     isDefaultExport: true,
        //     declarations: [{
        //         name: 'toExport',
        //         initializer: '{ ...Classes, ...Properties }'
        //      }]
        // })
        
        // addExportAssignment({

        //     expression: '{ ...Classes, ...Properties }'
        // })
    
    // console.log(queryEngineMapping.)
    
    
    // const base = ontology.store.getSubject(rdf.type, owl.Ontology, null, true)?.id
    // || findBaseInPrefixes(subjects, ontology.prefixes)
    // || findBaseFromCommonStart(subjects)


        const addName = async (uri: string, navigate?: string, navigateInternal?: boolean): Promise<string> => {
            if (`${uri}`.startsWith(base)) {
                return (navigateInternal ? navigate + '.' : '') + makeName(uri)
            } else {
                for await (const res of queryEngineMapping.execute(`
                SELECT DISTINCT ?prefix
                WHERE {?s ?p ?prefix
                    FILTER(REGEX(str(?s), '${/^[^]*[\/#]/.exec(uri)}[/#]?'))
                }
                `)) {
                    const prefix = /[^\/#]*$/.exec(res._root.entries[0][1].id.replace(/"/g, '').replace('/src', ''))?.[0] ?? ''
                    return `${prefix}${navigate ? '.' + navigate : ''}.${makeName(uri)}`
                }
            }
            return ''
        }
        


    for await (const instance of path.create({ subject : namedNode('') }).subjects) {
        if (await instance.termType === 'NamedNode') {
            
            const docs = [{
                description: `${await instance[RDFS.label]}`,
                tags : [
                    
                ]
            }]

            // TODO: NAME FILTERING
            const id = `${await instance}`
            const name = makeName(id)
            


            enums.addMember({ name, value: id })

            let OWLTYPE: OWL.Class | OWL.ObjectProperty | undefined = undefined

            const types = []

            // const addTypes = async (types: string[]) => {
            //     let queried = []
            //     for (let len = types.length; len != (len = types.length);) {
            //         for await (const prop of queryEngine.execute(await classesQ(type), addedSources)) {
            //             types.push(prop._root.entries[0][1].id)
            //         }
            //     }
            // }

            // for (let len = 0; len != (len = types.length);) {

            // }


            
            // Goal - to be able to import existing typescript conversions and hence write the below 10 lines of code as
            // if (instance instanceof OWL.Class) {
            //     // do thing 1
            // } else if (instanceof OWL.DatatypeProperty) {
            //     // do thing 2
            // } else {
            //     // console.log
            // }

            const addProp = async (prop: string, navigate?: string, navigateInternal?: boolean) => {
                return addName(await instance[prop], navigate, navigateInternal)
            }

            const reQueryType = async (types: string[]): Promise<string[]> => {

                const superClasses = []


                for (const type of types) {
                    for await (const prop of queryEngine.execute(await classesQ(type), addedSources)) {
                        superClasses.push(prop._root.entries[0][1].id)
                    }
                }

                const allClasses = R.uniq([...superClasses, ...types])

                if (allClasses.length === types.length) {
                    return allClasses
                }
                
                return await reQueryType(allClasses)
            }

            const allClass = await reQueryType([await instance])
            
            for await (const cl of allClass) {
                // console.log(`${cl}`)
                if (`${cl}` === OWL.Class || `${cl}` === RDFS.Class) {
                    OWLTYPE = OWL.Class
                } else if (`${cl}` === OWL.ObjectProperty || `${cl}` === RDF.Property) {
                    OWLTYPE = OWL.ObjectProperty
                }
            }
         

            if (OWLTYPE === OWL.Class) {

                let subClasses = [];

                // instance[RDFS.sub]
                
                

                for await (const subClass of instance[RDFS.subClassOf]) {
                    if (subClass.termType === 'NamedNode') {
                        // TODO: WORK OUT IF A PREFIX NEEDS TO BE ADDED
                        subClasses.push(await addName(await subClass, 'Classes'))
                    } else {
                        // TODO: THis is quite complex behavior
                        // where the super class is inferred based
                        // on the properties
                        // console.log(`${await subClass[RDF.type]}`)
                    }
                }

                // WANT shapes[instance].reversed(sh.targetClass)

                // Should we be checking for a nodeShape?
                const relevantShapes = shapes.create({ subject : namedNode(`${await instance}`) })
                

                let constraints: string[] = []
                //asy.forEach
                
                // asy.map(relevantShapes, shape => {

                // })

                tess.r_this
                
                for await (const shape of relevantShapes[{ reverse : true, predicate : sh.targetClass }]) {
                    for await (const constraint of shape) {
                        constraints.push(`new sh.classes.${makeName(constraint)}(${shape[constraint]})`)
                        // @ts-ignore
                        // if (sh.validator in sh_class[makeName(constraint) as string]) {
                        //     constraints.push(`new sh.classes.${makeName(constraint)}(${shape[constraint]})`)
                        // }
                    }
                }

                const newClass = (await createImported2(name, 'Classes')).addClass({ 
                    name,
                    extends: 'Base.ClassBase',
                    isExported: true,
                    implements: [`ClassInterfaces.${name}`, ...subClasses.map(x => x.replace('.Classes.', '.ClassInterfaces.'))],
                    properties: [{
                        isStatic: true,
                        name: 'id',
                        type: 'ns',
                        initializer: `ns.${name}`
                    }, {
                        isStatic: true,
                        name: '[Symbol.toStringTag]',
                        type: 'string',
                        initializer: quote(`${await instance[RDFS.label]}`)
                    }, {
                        isStatic: true,
                        name: 'type',
                        type: 'Base.ClassType',
                        // TODO: FIX
                        initializer: await addProp(RDF.type, 'Classes')
                    }, {
                        isStatic: true,
                        name: 'subClassOf',
                        type: 'Base.ClassType[]',
                        initializer: makeList(subClasses)
                    }, {
                        isStatic: true,
                        name: 'SHACLValidators',
                        type: 'Base.Validator[]',
                        initializer: makeList(constraints)
                    }, {
                        isStatic: true,
                        name: 'OnotologyValidators',
                        type: 'Base.Validator[]',
                        initializer: '[]'
                    }, {
                        name: 'value',
                        type: 'any'
                    }, {
                        name: 'properties',
                        type: 'Base.InternalProperties',
                        initializer: '{}'
                    }]
                });

                for (const file of sourceFiles.getSourceFiles()) {
                    if(name) newClass.addMembers(file.getClass(name)?.getMembers().map(x => x.print()) ?? [])
                }

                (await createImported2(name, 'ClassInterfaces')).addInterface(newClass.extractInterface()).setIsExported(true)

                classes.addExportDeclaration({
                    moduleSpecifier: './' + name
                })

                classInterface.addExportDeclaration({
                    moduleSpecifier: './' + name
                })

            } else if (OWLTYPE === OWL.ObjectProperty) {
                // GENERALISE LIST HANDLING

                let subProperties = [];

                // const subProperties2 = asy.filter(instance[RDFS.subPropertyOf], ({termType}) => termType === 'NamedNode')

                for await (const subClass of instance[RDFS.subPropertyOf]) {
                    if (subClass.termType === 'NamedNode') {
                        // TODO: WORK OUT IF A PREFIX NEEDS TO BE ADDED
                        // console.log('searching for subproperty')
                        subProperties.push(await addName(subClass, 'Properties'))
                    } else {
                        // TODO: THis is quite complex behavior
                        // where the super class is inferred based
                        // on the properties
                        // console.log(`${await subClass[RDF.type]}`)
                    }
                }
 

                // TODO: Filter out stuff like "SubClassOf"
                // and merge this with the existing properties
                // console.log(formattedSourceProperties)

                // TODO: FIx domain and range
                const newProperty = (await createImported2(name, 'Properties')).addClass({ 
                    name,
                    docs: docs,
                    isExported: true,
                    extends: 'Base.PropertyBase',
                    implements: [`PropertyInterfaces.${name}`, ...subProperties.map(x => x.replace('.Properties.', '.PropertyInterfaces.'))],
                    properties : [{
                        isStatic: true,
                        name: 'id',
                        type: 'ns',
                        initializer: `ns.${name}`
                    }, {
                        isStatic: true,
                        name: '[Symbol.toStringTag]',
                        type: 'string',
                        initializer: quote(`${await instance[RDFS.label] ?? name}`)
                    }, {
                        isStatic: true,
                        name: 'type',
                        type: 'Base.PropertyType',
                        // TODO: FIX
                        initializer: await addProp(RDF.type, 'Properties')//makeName(await instance[RDF.type])
                    }, {
                        isStatic: true,
                        name: 'domain',
                        type: 'Base.ClassType[]',
                        initializer: '[' + await addProp(RDFS.domain, 'Classes', true) + ']'
                    }, {
                        isStatic: true,
                        name: 'range',
                        type: 'Base.ClassType[]',
                        initializer: '[' + await addProp(RDFS.range, 'Classes', true) + ']'
                    }, {
                        isStatic: true,
                        name: 'subPropertyOf',
                        type: 'Base.PropertyType[]',
                        initializer: makeList(subProperties)
                    }, {
                        isStatic: true,
                        name: 'classValidators',
                        type: 'Base.Validator[]',
                        initializer: makeList([])
                    }, {
                        isStatic: true,
                        name: 'OntologyValidators',
                        type: 'Base.Validator[]',
                        initializer: makeList([
                            //'something'
                        ])
                    }, {
                        name: 'value',
                        type: 'any'
                    }
                ]
                });


                for (const file of sourceFiles.getSourceFiles()) {
                    if(name) newProperty.addMembers(file.getClass(name)?.getMembers().map(x => x.print()) ?? [])
                }

                (await createImported2(name, 'ClassInterfaces')).addInterface(newProperty.extractInterface()).setIsExported(true)

                properties.addExportDeclaration({
                    moduleSpecifier: './' + name
                })

                propertyInterface.addExportDeclaration({
                    moduleSpecifier: './' + name
                })


            } else {
                // console.log('not done', `${await instance}`)
            }

            // console.log(`${instance}`, OWLTYPE)

            // const isObjectProperty = (await c).some((entry: string) => entry === OWL.ObjectProperty)
            // console.log(isObjectProperty)

            // console.log((await c).some(entry => entry === OWL.ObjectProperty))
    


        //     console.log(`${await instance} has type ${await instance[RDF.type]}`)
        //     // console.log(`${await instance} is subclass of ${await instance[RDFS.subClassOf]}`)

        //     let subclasses = []

            // for await (const subClass of instance[RDFS.subClassOf]) {
            //     if (subClass.termType === 'NamedNode') {
            //         subclasses.push(subClass)
            //     } else {
            //         // TODO: THis is quite complex behavior
            //         // where the super class is inferred based
            //         // on the properties
            //         console.log(`${await subClass[RDF.type]}`)
            //     }

                
        //     }

        //     // for await (const property of instance) {
        //     //     console.log(`${await property} has label ${await property[RDFS.label]}`)
        //     // }

        }



    } 

    // ops(classes, classInterface, sourceFiles)
    // ops(properties, propertyInterface, sourceFiles)
    project.finalize()
}



// function ops(classes: NamespaceDeclaration, iface: NamespaceDeclaration, source: MyProject): void {
//     for (const cl of classes.getClasses()) {
//         iface.addInterface(cl.extractInterface()).setIsExported(true)
//         const name = cl.getName()
//         for (const file of source.getSourceFiles()) {
//             if(name) cl.addMembers(file.getClass(name)?.getMembers().map(x => x.print()) ?? [])
//         }
//     }
// }



// const name = c.getName()
// if (name) {
//     sourceFiles.getSourceFiles().forEach(file => {
//         c.addMembers(file.getClass(name)?.getMembers().map(x => x.print()) ?? [])
//     })


//     for (const file of sourceFiles.getSourceFiles()) {
//         c.addMembers((file.getClass(name)?.getMembers().map(x => x.print()) ?? [])
//         // const cls = file.getClass(name)
//         // if (cls) {
//         //     c.addMembers(cls.getMembers().map(x => x.print()))
//         // }
//     }
// }

// export async function executeFromSettings(settingsPath: string): Promise<void> {
//     const queryEngine = new CommunicaEngine(settingsPath)
//     queryEngine._engine = newEngine()
//     const path = new PathFactory({ queryEngine, context: {} })
//     const settings = path.create({ subject: '' })

//     for await (const ontology of settings.subjects) {

//     }





    
    
//     // const settings = (await createStore(settingsPath)).store;
  
//     // // May need to have better handling of local vs. global
//     // // file paths
//     // const toCovertFromFolders = settings.getObjects(tsc.convertToTs, tsc.folder, null)
//     //   .map(
//     //     folder => {
//     //       console.log('folder', folder);
//     //       return readdirSync(folder.value).map(file => {
//     //         return path.join(folder.value, file);
//     //       });
//     //     })
//     //   .flat();
  
//     // const toCovertFromFiles = settings.getObjects(tsc.convertToTs, tsc.file, null)
//     //   .map(
//     //     file => path.join(file.value)
//     //   );
  
//     // const defaultOutputDirectory = settings.getObjects(tsc.defaults, tsc.outDir, null)[0]
//     //   || settings.getObjects(tsc.defaults, tsc.typescript, null)[0];
  
//     // const toConvert = R.union(toCovertFromFolders, toCovertFromFiles);
  
//     // console.log(`ont-to-ts will generate typescript files for the following files: ${toConvert.join(' ')}\n`)
//     // let count = 1
//     // for (const ontologyPath of toConvert) {
//     //   if (defaultOutputDirectory?.value) {
//     //     console.log(`[${count++}/${toConvert.length}] Generating ontology from ${ontologyPath}...`)
//     //     await generateTypeScript(ontologyPath, settingsPath, defaultOutputDirectory.value);
//     //   }
//     //   else {
//     //     throw new Error(`No output folder specified in the settings`);
//     //   }
//     // }
//   }
  





// createOntology('ontology/agrif.ttl', 'agrif')
createOntology('ontology/rdf.ttl', 'rdf', undefined, 'http://www.w3.org/1999/02/22-rdf-syntax-ns#')
createOntology('ontology/rdfs.ttl', 'rdfs', undefined, 'http://www.w3.org/2000/01/rdf-schema#')
createOntology('ontology/owl.ttl', 'owl', undefined, 'http://www.w3.org/2002/07/owl#')
createOntology('ontology/xsd.ttl', 'xsd', '../xsd-shacls/xsd-shacl.ttl', 'http://www.w3.org/2001/XMLSchema')
createOntology('ontology/shacl.ttl', 'sh', 'shacl-shacl.ttl', 'http://www.w3.org/ns/shacl')

