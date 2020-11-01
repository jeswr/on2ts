// @ts-ignore
import { PathFactory } from 'ldflex'
// @ts-ignore
import CommunicaEngine from '@ldflex/comunica'
import { newEngine } from '@comunica/actor-init-sparql-file'
import { ns as RDF } from '../typescript/rdf/src/enums'
import { ns as RDFS } from '../typescript/rdfs/src/enums'
import { ns as OWL } from '../typescript/owl/src/enums'
import { ns as sh } from '../typescript/sh/src/enums'
// import * as sh_class from '../typescript/sh/src/classes'


import { Project, CodeBlockWriter, PropertySignatureStructure, OptionalKind, ChildOrderableNode, SourceFile, NamedNode } from 'ts-morph'
import R, { all, values, project } from 'ramda'
import {cleanName} from './utils'
// import path from 'path'


// type Source = string | { value: string, type: string } | Source[]

// /**
//  * Asynchronous iterator wrapper for the Comunica SPARQL query engine.
//  */
// export default class ComunicaEngine {
//   constructor(
//       defaultSource: string,
//       public _engine = newEngine()
//       ) {
//     // Preload sources but silence errors; they will be thrown during execution
//     this._sources = this.parseSources(defaultSource);
//     this._sources.catch(() => null);
//   }

//   /**
//    * Creates an asynchronous iterable of results for the given SPARQL query.
//    */
//   async* execute(sparql: string, source: string) {
//     if ((/^\s*(?:INSERT|DELETE)/i).test(sparql))
//       yield* this.executeUpdate(sparql, source);

//     // Load the sources if passed, the default sources otherwise
//     const sources = await (source ? this.parseSources(source) : this._sources);
//     if (sources.length !== 0) {
//       // Execute the query and yield the results
//       const queryResult = await this._engine.query(sparql, { sources });
//       yield* queryResult.bindingsStream;
//     }
//   }

//   /**
//    * Creates an asynchronous iterable with the results of the SPARQL UPDATE query.
//    */
//   async* executeUpdate(sparql: string, source: Source) {
//     throw new Error(`SPARQL UPDATE queries are unsupported, received: ${sparql}`);
//   }

//   /**
//    * Parses the source(s) into an array of Comunica sources.
//    */
  
//   async parseSources(
//       source: Promise<Source> = new Promise((res) => res([]))
//     ): Promise<Source> {

//     let sources = await source;

//     // Transform URLs or terms into strings
//     if (sources instanceof URL)
//       sources = sources.href;
//     else if (sources instanceof NamedNode)
//       sources = sources?.value;

//     // Strip the fragment off a URI
//     if (sources instanceof String)
//       sources = [sources.replace(/#.*/, '')];
//     // Flatten recursive calls to this function
//     else if (sources instanceof Array)
//       sources = await flattenAsync(sources.map((s: Promise<Source>) => (this.parseSources(s))));

//     // Needs to be after the string check since those also have a match functions
//     else if (sources.match instanceof Function)
//       sources = {...source, type: 'rdfjsSource'}
      
//     //   [Object.assign({ type: 'rdfjsSource' }, sources)];
//     // Wrap a single source in an array
//     else if (source.value instanceof String)
//       sources = [sources];
//     // Error on unsupported sources
//     else
//       throw new Error(`Unsupported source: ${source}`);

//     // Add Comunica source details
//     return sources.map(src => ({
//       value: src.value || src,
//       type: src.type,
//     }));
//   }


//   /**
//    * Removes the given document (or all, if not specified) from the cache,
//    * such that fresh results are obtained next time.
//    */
//   async clearCache(document) {
//     await this._engine.invalidateHttpCache(document);
//   }
// }

// // Flattens the given array one level deep
// async function flattenAsync(array: Promise<any>[]) {
//   return (await Promise.all(array)).flat()
// }




































// TODO: Auto import and use the suggested shapes graph

type Validator<T = any> = {
    validator: (value: T) => boolean,
    message: string | ((value: T) => string)
}

const quer = `
SELECT DISTINCT ?subject
WHERE {
    ?subject ?predicate ?object
}
ORDER BY str(?subject)
`

const classesQ = async (instance: string) => `
SELECT DISTINCT ?object
WHERE {
    <${instance}> a+ ?object
}
ORDER BY str(?object)
`
const getNodeSHAPES = async (instance: string) => `
SELECT DISTINCT ?nodeshape
WHERE {
    ?nodeshape a <${sh.NodeShape}> ;
        <${sh.targetClass}> <${instance}> .
}`

const getPropertySHAPES = async (instance: string) => `
SELECT DISTINCT ?propertyshape
WHERE {
    ?propertyshape a <${sh.PropertyShape}> ;
        <${sh.targetClass}> <${instance}> .
}`

const quote = (str: string) => {
    return new CodeBlockWriter().quote(`${str}`).toString()
}

const makeName = (IRI: string) => {
    const nameToAppend = cleanName((/(?![\/#])[^\/#]*$/.exec(`${IRI}`) || [])[0] || '')


    return nameToAppend
}

const makeList = (array: string[]) => {
    return '[' + array.join(', ') + ']'//new CodeBlockWriter().write('[' + array.join(', ') + ']').toString()
}

// const findBaseInPrefixes = (subjects: any[], prefixes) => {

//     return Object.values(prefixes).find(prefix => {
//         return subjects.every(subject => {
//             return subject.id.startsWith(prefix)
//         })
//     })
    
//       // TODO: Add the ability in the settings file to get around this
//       // throw new Error(`Cannot determine the Ontology base, options are ${value}`)

//   }
  
//   const findBaseFromCommonStart = (subjects: any[]): string => {
    
    
    
    
//     const strings: string[]  = subjects.map(x => x.id)
  
//     strings.toLocaleString

//     return strings.reduce((start: string, term: string) => {
//     const len = Math.min(start.length, term.length)
    
      
//       let newStart = ''
//       for (let i = 0; i < len; i++) {
//         if (start[i] === term[i]) {
//           newStart += start[i]
//         } else {
//           return newStart
//         }
//       }
//       return newStart
//     }, strings[0] ?? '')
//   }
function cleanFile(file: SourceFile) {
    file.fixMissingImports()
    for (let val; val != (val = file.print());) {
        file.fixUnusedIdentifiers()
        file.organizeImports()
    }
    file.formatText()
}
class MyProject extends Project {
   
    clean() {
        for (let val; val != (val = this.getSourceFiles().map(node => node.print()).toString());) {
            this.getSourceFiles().forEach(cleanFile)
        }
        return this
    }

    initialize() {

    }

    finalize() {
        this.getRootDirectories().forEach(path => path.deleteImmediatelySync())
        // this.getTypeChecker()
        this.clean().saveSync()
        return this.emitSync()
    }

}
  
async function createOntology (filePath: string, emitAt: string, shacl: string) {
    
    const sourceFiles = new MyProject()
    const source = sourceFiles.addSourceFileAtPath(
        'src/validators/helper-functions/validator.ts'
    )


    const project = new MyProject({
        compilerOptions: {
          outDir: require('path').join('typescript', emitAt, 'build'),
          declaration: true
        }
      });
    
    const createFile = (name: string) => project.createSourceFile(
        require('path').join('typescript', emitAt, 'src', `/${name}.ts`),
        '',
        { overwrite: true }
    );

    const createImported = (name: string) => {
        const file = createFile(name)
        // file.addImportDeclaration({ moduleSpecifier: './index', namedImports: ['Classes', 'ClassInterface', 'Properties', 'PropertyInterface', 'ns', 'Base'] })
        return file.addNamespace({
            name,
            isExported: true
        })
    }
    
    const classes = createImported('Classes')
    const classInterface = createImported('ClassInterface')
    const properties = createImported('Properties')
    const propertyInterface = createImported('PropertyInterface')
    
    const enumsFile = createFile('ns')
    enumsFile.addImportDeclaration({ moduleSpecifier: 'index.ts' })

    const enums = enumsFile.addEnum({
        name: 'ns',
        isExported: true
    })


    createFile('index').addExportDeclarations([
        ...project.getSourceFiles().filter(name =>  name.getBaseName() !== 'index.ts')
        .map(name => ({ moduleSpecifier : './' + name.getBaseName().replace('.ts', ''), namedExports : [name.getBaseName().replace('.ts', '')] })), {
            moduleSpecifier: '../../../src/base-classes', namedExports: ['Base']
        }])

    // Setting up the query engine
    // may need to set up bigger quqery
    const queryEngine = new CommunicaEngine(filePath)
    queryEngine._engine = newEngine()
    
    const queryEngineSHACL = new CommunicaEngine(shacl)
    queryEngineSHACL._engine = newEngine()

    const queryEngineMapping = new CommunicaEngine('../ontology-folder-mapping.ttl')
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


    // console.log(queryEngineMapping.)
    
    
    // const base = ontology.store.getSubject(rdf.type, owl.Ontology, null, true)?.id
    // || findBaseInPrefixes(subjects, ontology.prefixes)
    // || findBaseFromCommonStart(subjects)



    for await (const res of queryEngine.execute(quer)) {

        if (res._root.entries[0][1].termType === 'NamedNode') {

            const instance = path.create({ subject: res._root.entries[0][1] });

            // @ts-ignore
          //  const myInstance = ingest(instance)

            // let tags = []


            // The goal is to be *able* to write this
            // for await (const property of myInstance) {
            //     // I think we need to overload these classes
            //     if (property instanceof OWL.Class.AnnotationProperty) {
            //         tags.push(await myInstance[property].toString())
            //     }
            // }
            
            

            
            const docs = [{
                description: `${await instance[RDFS.label]}`,
                tags : [
                    
                ]
            }]
            // console.log('query', getNodeSHAPES(await instance))

            

            // console.log(quer)

            // for await (const shape of queryEngineSHACL.execute(getNodeSHAPES(await instance))) {

            //     // const shapePath = shapes.create({ subject: shape._root.entries[0][1] })

            //     console.log('shape path', shape)

            // }

            // const shacls = shapes.create({ object: instance })

            // for await (const shacl of shacls) {
            //     console.log('shacl', shacl)
            // }

            // console.log('shacls', shacls)

            // TODO: NAME FILTERING
            const id = `${await instance}`
            const name = makeName(id)
            
            enums.addMember({
                name, value: id
            })

            let OWLTYPE: OWL.Class | OWL.ObjectProperty | undefined = undefined

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
            
            // console.log('all classes', allClass)
            // if (OWL.Class in allClass) {
            //     OWLTYPE = OWL.Class
            // } else if (OWL.ObjectProperty in allClass) {
            //     OWLTYPE = OWL.ObjectProperty
            // }

            // for await (const prop of queryEngine.execute(await classesQ(await instance), addedSources)) {
            //     const cl = prop._root.entries[0][1].id
            //     console.log(cl)
                // if (cl === OWL.Class || cl === OWL.ObjectProperty) {
                //     if (OWLTYPE) {
                //         console.log('both', OWLTYPE, cl)
                //     }
                //     OWLTYPE = cl
                // }
            // }

            if (OWLTYPE === OWL.Class) {

                let subClasses = [];

                for await (const subClass of instance[RDFS.subClassOf]) {
                    if (subClass.termType === 'NamedNode') {
                        // TODO: WORK OUT IF A PREFIX NEEDS TO BE ADDED
                        subClasses.push(makeName(await subClass))
                    } else {
                        // TODO: THis is quite complex behavior
                        // where the super class is inferred based
                        // on the properties
                        // console.log(`${await subClass[RDF.type]}`)
                    }
                }

                const quer = queryEngineSHACL.execute(await getNodeSHAPES(await instance))

                let constraints: string[] = []

                for await (const s of quer) {

                    const shape = shapes.create({ subject: s._root.entries[0][1] });
                    
                    for await (const constraint of shape) {
                        // @ts-ignore
                        // if (sh.validator in sh_class[makeName(constraint) as string]) {
                        //     // TODO: Deal with the case where shape[constraint] is a list
                        //     constraints.push(`new sh.classes.${makeName(constraint)}(${shape[constraint]})`)
                        // }
                    }
                }
                    
                    // const sourceClass  = source.getClass(name)
                    // console.log('sourceClass', name, sourceClass)
                    // console.log(sourceClass && sourceClass.getMethods)
                    // console.log(sourceClass && sourceClass.getProperties)

                classes.addClass({ 
                    name,
                    extends: 'Base.ClassBase',
                    isExported: true,
                    implements: [`ClassInterface.${name}`],
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
                        type: 'typeof Base.ClassBase',
                        // TODO: FIX
                        initializer: makeName(await instance[RDF.type])
                    }, {
                        isStatic: true,
                        name: 'subClassOf',
                        // Move this typeof stuff into an external delcaration file
                        type: '(typeof Base.ClassBase)[]',
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
                        type: 'Base.InternalProperties = {}'
                    }]
                })

                classInterface.addInterface({
                    name,
                    isExported: true,
                    extends: ['Base.ClassBaseInterface', ...subClasses],
                    properties: [{
                        name: 'value',
                        type: 'any'
                    }, {
                        name: 'properties',
                        type: 'Base.InternalProperties'
                    }]
                })

            } else if (OWLTYPE === OWL.ObjectProperty) {
                // GENERALISE LIST HANDLING

                let subProperties = [];

                for await (const subClass of instance[RDFS.subPropertyOf]) {
                    if (subClass.termType === 'NamedNode') {
                        // TODO: WORK OUT IF A PREFIX NEEDS TO BE ADDED
                        subProperties.push(makeName(await subClass))
                    } else {
                        // TODO: THis is quite complex behavior
                        // where the super class is inferred based
                        // on the properties
                        // console.log(`${await subClass[RDF.type]}`)
                    }
                }
                // TODO: Properly
                // console.log('domain', `${await instance[RDFS.domain]}`)
                // console.log('range', `${await instance[RDFS.range]}`)

                const sourceClass  = source.getClass(name)
                // console.log('sourceClass', name, sourceClass)
                const methodsFromSource = (sourceClass && sourceClass.getMethods()) || []
                const propertiesFromSource = (sourceClass && sourceClass.getProperties()) || []


                const nodes = methodsFromSource.map(x => x.compilerNode)
                   // x.compilerNode.name)

                // const formattedMethods: Parameter[] = methodsFromSource.map((x): OptionalKind<PropertySignatureStructure> => ({
                //     name: x.getNodeProperty('name').print(),
                //     param: x.getNodeProperty('initializer')

                //     // parameters: x.getNodeProperty('parameters'),
                    
                // }))

                const formattedSourceProperties = propertiesFromSource.map(x => ({
                    name: x.getNodeProperty('name').print(),
                    // @ts-ignore
                    type: x.getNodeProperty('type') && x.getNodeProperty('type').print(),
                    // @ts-ignore
                    isStatic: x.getNodeProperty('isStatic') && x.getNodeProperty('isStatic').print(),
                    // @ts-ignore
                    initializer: x.getNodeProperty('initializer') && x.getNodeProperty('initializer').print()
                })
                )


                // TODO: Filter out stuff like "SubClassOf"
                // and merge this with the existing properties
                console.log(formattedSourceProperties)

                properties.addClass({ 
                    name,
                    docs: docs,
                    isExported: true,
                    extends: 'Base.BaseProperty',
                    implements: [`PropertyInterface.${name}`],
                    methods: 
                    // [{
                    //     name: 'hi',
                    //     parameters: [{
                    //         name: 'test'
                    //     }]
                    // }]
                    
                    methodsFromSource.map(x => ({
                        name: x.compilerNode.name.getText(),
                        parameters: x.compilerNode.parameters.map(y => ({
                            name: y.name.getText(),
                            type: y.type && y.type.getText()
                        })),
                        typeParameters: x.getTypeParameters().map(f => f.print()),
                        isStatic: x.isStatic().valueOf(),
                        isAsync: x.isAsync().valueOf(),
                        returnType: x.getReturnType().getText(),
                        statements: x.getStatements().map(x => x.print())
                        // impleme: x.getImplementation  
                    })),
                    properties : [{
                        isStatic: true,
                        name: 'id',
                        type: 'ns',
                        initializer: `ns.${name}`
                    }, {
                        isStatic: true,
                        name: '[Symbol.toStringTag]',
                        type: 'string',
                        initializer: quote(`${await instance[RDFS.label] || name}`)
                    }, {
                        isStatic: true,
                        name: 'type',
                        type: 'typeof Base.BaseProperty',
                        // TODO: FIX
                        initializer: makeName(await instance[RDF.type])
                    }, {
                        isStatic: true,
                        name: 'domain',
                        initializer: makeName(await instance[RDFS.domain])
                    }, {
                        isStatic: true,
                        name: 'range',
                        initializer: makeName(await instance[RDFS.range])
                    }, {
                        isStatic: true,
                        name: 'subPropertyOf',
                        type: '(typeof Base.ClassBase)[]',
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
                    }, ...formattedSourceProperties//, ...nodes
                ]
                })

                propertyInterface.addInterface({
                    name,
                    isExported: true,
                    extends: ['Base.BasePropertyInterface', ...subProperties],
                    properties: [{
                        name: 'value',
                        type: 'any'
                    }, ...formattedSourceProperties.filter(x => !x.isStatic).map(({isStatic, initializer, ...props}) => props)]
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
    // const typeChecker = project.getTypeChecker()

    project.finalize()
}






// createOntology('ontology/agrif.ttl', 'agrif')
createOntology('ontology/xsd.ttl', 'xsd', '../xsd-shacls/xsd-shacl.ttl')
createOntology('ontology/shacl.ttl', 'sh', 'shacl-shacl.ttl')

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
