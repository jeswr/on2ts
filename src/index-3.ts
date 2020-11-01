const generateTagText = (object: Quad_Object, ontology: Ontology) => {
  if (object instanceof NamedNode) {
    return `<${object.value}>`
  } else if (object instanceof Literal) {
    return object.value
  } else if (object instanceof BlankNode) {
    
    let text = ''

    ontology.store.forEach(({predicate, object}) => {
      if (predicate instanceof NamedNode) {
        text += ontology.createName(predicate, [], true) + '-\n\t' + generateTagText(object, ontology)
      } else {
        throw new Error(`Predicates should not be variables when generating tag text`)
      }
    }, object, null, null, null)

    return text

  } else {
    throw new Error(`${typeof object} is an invalid tag value`)
  }
}

const createTag = (predicate: Quad_Predicate, object: Quad_Object, ontology: Ontology) => {
  return {
    tagName: generateTagName(predicate, object),
    text: generateTagText(object, ontology)
  }
}

// const createEnum = (ontology: Ontology, project: OntologyProject) => {
//   const members = project.file.enum.addEnum({ name: "ns", isExported: true })
//   const docs = members.addJsDoc({})

//   ontology.subjects.forEach(subject => {
//     if (subject.id.includes(ontology.namespace)) {
//       members.addMember({ name: `'${ontology.createName(subject)}'`, value: subject.id })
//     }
//   });

//   const ignoreTag = ontology.store.has(ontology.base, dcterms.description, null) 
//     ? dcterms.description 
//     : rdfs.comment

//   ontology.store.sorted.forEach(({predicate, object}: Quad) => {
//     if (predicate.id !== ignoreTag) {
//       docs.addTag(createTag(predicate, object, ontology))
//     } else {
//       docs.setDescription(generateTagText(object, ontology))
//     }
//   },
//   ontology.base, null, null, null)
// }

// // const createFactory = (ontology: Ontology, project: OntologyProject, settings: )
// // createClasses may need to be integrated here 
// const createInterfaces = (ontology: Ontology, project: OntologyProject, settings: {store: ExtendedStore, prefixes: Prefixes<string>}) => {
  
//   // Break into 2 sets of interfaces, class interfaces and property interfaces

//   ontology.subjects.forEach(subject => {

//     // const forObj = (pred: OTerm, f: (object: Quad_Object) => void) => ontology.store.sorted.forObjects(f, subject, pred)
    
//     project.file.interfaces.addImportDeclaration({
//       moduleSpecifier: './enums'
//     })
    
//     const interface = project.file.interfaces.addInterface({ 
//       name : ontology.createName(subject), 
//       isExported: true 
//     })
//     const docs = interface.addJsDoc({})

    

//     interface.addExtends
//     interface.addIndexSignature
//     interface.addMember
//     interface.addProperty
//     interface.addTypeParameter
//     interface.addMethod


//     ontology.store.sorted.forEach(({predicate, object}: Quad) => {
//       switch(predicate.id) {
//         case rdfs.subPropertyOf:
//         case rdfs.subClassOf:
//           // @ts-ignore this is because object could
//           // be a string but we can get around this
//           // once we have generated the class definition
//           // for rdfs
//           interface.addExtends(ontology.createName(object))
//         case rdfs.range:
//           // Create error fallbacks to ensure there is only once instance
//           // for this and others such as domain? - might not always be the case
//           // though
//           interface.addProperty({
//             name: 'range',
//             // @ts-ignore - for starters it is
//             // not always going to be the same ontology
//             // so we need to find a much cleaner way of doing this
//             type: ontology.createName(object)
//           })
//         case rdfs.domain:
//           interface.addProperty({
//             name: 'domain',
//             // @ts-ignore ditto above
//             type: ontology.createName(object)
//           })
//         case rdfs.member
//       }

//       if (predicate.id === rdfs.subPropertyOf) {

//       } else if (predicate.id =)
//     }, subject, null, null, null)

//     forObj(rdfs.subClassOf, object => {
//       // TODO: Make this actually work - we can add type checking
//       // once we ave the definition of rdfs.subClassOf build
//       interface.addExtends(object.id)
//     })

//     forObj(rdfs.subPropertyOf, object => {
//       interface.addExtends(object.id)
//     })

//     settings.store.sorted.forSubjects(subject => {
//       interface.addJsDoc({})
//     }, tsc.propertyConversion, tsc.JSDoc)

//     forObj(null, )

//     ontology.store.sorted.forObjects(object => {

//     }, subject, rdfs.subClassOf)


//     ontology.store.sorted.forPredicates((predicate: Quad_Predicate) => {
//       if (settings.store.)
//       ontology.store.sorted.forObjects((object: Quad_Object) => {

//       })
//     }, subject, null)
//   })


//   ontology.store.sorted.forEach(())
  
//   ontology.subjects.forEach(subject => {

//     const predicates = sortResult(ontology.store.getPredicates(subject, null, null))
//     let description = undefined
//     let tags = []

//     for (const predicate of predicates) {

//       if (settings.store.has(predicate.id, tsc.propertyConversion, tsc.JSDoc)) {
        
//         const objects = sortResult(ontology.store.getObjects(subject, predicate, null))

//         for (const object of objects) {
//           tags.push({
//             tagName: 
//               (/[^/#]*$/.exec(predicate.value)?.[0] ?? '')
//               + (predicate.id
//           })
//         }
//       }

//     }


//     project.file.interfaces.addInterface({

//     })
//   })

// }

const createIndex = (project: OntologyProject): void => {
  Object.keys(project.file).forEach(name => {
    if (name !== 'index') {
      project.file.index.addExportDeclaration({ moduleSpecifier: './enums' })
    }
  })
}

// const createClasses = (project: OntologyProject) => {
//   // I think the strategy here is to not use the ontology at all and instead just build based
//   // on what aleady exists in the interface file. This will help with consistency and code breviy
//   const classes = project.file.classes
  
//   classes.addImportDeclaration({
//     moduleSpecifier: './enum',
//     namedImports: ['ns']
//   })
//   classes.addImportDeclaration({
//     moduleSpecifier: './interfaces',
//     namedImports: ['interface']
//   })
  
  
  
//   const interfaces = project.file.interfaces.getInterfaces()
//   interfaces.forEach(interface => {
//     // To be determined how to include validators
//     const name = interface.getName()
//     const docs = interface.getJsDocs()
//     classes.addClass({
//       name,
//       docs,
//       implements: [`interface.${name}`],
//       methods: interface.getMethods(),

//     })
//   })
// }

// export const generateTypeScript = async (ontologyPath: string, settingsPath: string, outDir: string) => {
  
//   const ontology = await createOntology(ontologyPath)
//   const settings = await createStore(settingsPath)
//   console.log('base prefix', ontology.prefix)
//   const project: OntologyProject = setupProject(outDir, ontology.prefix)
  
//   const {interfaces, enums, classes} = project.file
//   const fileDocs: {tagName: string, text: string}[]  = []

//   const ignoreTag = ontology.store.has(ontology.base, dcterms.description, null) 
//     ? dcterms.description 
//     : rdfs.comment

//   ontology.store.sorted.forEach(({predicate, object}: Quad) => {
//     if (predicate.id !== ignoreTag) {
//       fileDocs.push(createTag(predicate, object, ontology))
//     }
//   },
//   ontology.base, null, null, null)
  
//   const doc = {
//     tags: fileDocs,
//     description: 
//       ontology.store.getObject(ontology.base, dcterms.description, null, true)?.id
//       ?? ontology.store.getObject(ontology.base, rdfs.comment, null, true)?.id
//       ?? undefined 
//   }
  
//   enums.addJsDoc(doc)
//   // interfaces.addJsDoc(doc)
//   classes.addJsDoc(doc)

//   // interfaces.addImportDeclaration({
//   //   moduleSpecifier: './enum',
//   //   namedImports: ['ns']
//   // })

//   classes.addImportDeclaration({
//     moduleSpecifier: './enum',
//     namedImports: ['ns']
//   })

//   classes.addImportDeclaration({
//     moduleSpecifier: './interfaces',
//     namedImports: ['interface']
//   })

//   ontology.subjects.forEach(subject => {

//     const name = ontology.createName(subject)
//     const { id } = subject

//     // Otherwise it is saying something outside the ontology
//     if (id.includes(ontology.namespace)) {

//       // console.log(interfaces)
//       const Enum = enums.addMember({ name: `'${name}'`, value : subject.id })
//       const Class = classes.addClass({ name, isExported: true })
//       // const Interface = interfaces.addClass({ 
//       //   name, 
//       //   isExported: true 
//       // })

//       // This may not be necessary due to extends
//       // Interface.addProperty({
//       //   name: 'value',
//       //   type: 'any'
//       // })

//       // Class.addProperty({
//       //   name: 'value',
//       //   type: 'any'
//       // })

//       const tags: {tagName: string, text: string}[] = []

//       ontology.store.sorted.forEach(({predicate, object}: Quad) => {
//         // Check if it is an annotation type
//         if (settings.store.has(object, tsc.propertyConversion, tsc.JSDoc)) {

//           tags.push(createTag(predicate, object, ontology))

//         } else {

//           switch(predicate.id) {
//             case rdfs.subPropertyOf:
//             case rdfs.subClassOf:

//               if (Class.getExtends()) {
//                 // This is not actuall an error and 
//                 // does occur in some ontologies, we 
//                 // just need to work out how to deal with it
//                 throw new Error(`Multiple extends error`)
//               }
//               // Object can be a blank node in cases where it
//               // is part of a list (for instance in AGRIF)
//               if (object instanceof NamedNode) {
//                 //Interface.addExtends(ontology.createName(object))
//                 Class.setExtends(ontology.createName(object))
//               } else {
//                 // TODO: Handle list case
//                 console.log(`Sub class/property should be a named node
//                 subject: ${subject.value} - ${typeof subject} - ${subject instanceof NamedNode}
//                 predicate: ${predicate.value} - ${typeof predicate} - ${predicate instanceof NamedNode}
//                 object: ${object.value} - ${typeof object} - ${object instanceof NamedNode}
//                 `)
//               }

//             case rdfs.range:
//               // Create error fallbacks to ensure there is only once instance
//               // for this and others such as domain? - might not always be the case
//               // though
//               // Interface.addProperty({
//               //   name: 'value',
//               //     // @ts-ignore - for starters it is
//               //     // not always going to be the same ontology
//               //     // so we need to find a much cleaner way of doing this
//               //   // TODO: MAKE IMPORT CORRECT
//               //   type: ontology.createName(object)
//               // })

//             case rdfs.domain:
//               // Interface.addProperty({
//               //   name: 'domain',
//               //   // @ts-ignore ditto above
//               //   type: ontology.createName(object)
//               // })
//           }

//         }
//       }, subject, null, null, null)
      
//       const JSDoc = {
//         tags: tags.filter(x => x.tagName !== rdfs.comment),
//         description : tags.find(x => x.tagName === rdfs.comment)?.text
//       }
      
//       Enum.addJsDoc(JSDoc)
//       // Interface.addJsDoc(JSDoc)
//       Class.addJsDoc(JSDoc)

//     } else {
//       // Use this section to generate *extensions* to other ontologies
//     }


//   })

//   createIndex(project)

//   await finishAndSave(project)
// }

// We need to be *very* careful to not cause names to change
// across ontologies due to upates because of this
// const nameConversion = (name: string, takenNames: string[], prefix: string): string => {
//   console.log('name: ', name)
  
//   name = name.replace('-', '_')

//   // If it is the empty string, we assume that this is the definition
//   // of the ontology itself and hence we replace it with the prefix of
//   // the ontology
//   if (name === '') {
//     name = prefix
//   }

//   if (!isValidVariableName(name)) {
//     name = name.replace(/[^a-z]*/ig, '')
//   }

//   if (!isValidVariableName(name)) {
//     name = name[0].toUpperCase() + name.slice(1,)
//   }

//   console.log('out: ', name)

//   if (takenNames.includes(name)) {

//     throw new Error(`This ontology has very similar names
//     so changing names to valid Javascript is not currently
//     well handled.

//     Please create an issue on GitHub so that
//     we can update ont-to-ts appropriately!

//     The name with a duplicate identifier is ${name}

//     ${takenNames}
//     `)

//   }

//   return name

// }





export const generateTypeScript = async (ontologyPath: string, settingsPath: string, outDir: string) => {
  
  const ontology = await createOntology(ontologyPath)
  const settings = await createStore(settingsPath)
  const project: OntologyProject = setupProject(outDir, ontology.prefix)
  
  const {interfaces, enums, classes} = project.file
  const fileDocs: {tagName: string, text: string}[]  = []

  const ignoreTag = ontology.store.has(ontology.base, dcterms.description, null) 
    ? dcterms.description 
    : rdfs.comment

  ontology.store.sorted.forEach(({predicate, object}: Quad) => {
    if (predicate.id !== ignoreTag) {
      fileDocs.push(createTag(predicate, object, ontology))
    }
  },
  ontology.base, null, null, null)
  
  const doc = {
    tags: fileDocs,
    description: 
      ontology.store.getObject(ontology.base, dcterms.description, null, true)?.id
      ?? ontology.store.getObject(ontology.base, rdfs.comment, null, true)?.id
      ?? undefined 
  }
  

  interfaces.addImportDeclaration({
    moduleSpecifier: './enum',
    namedImports: ['ns']
  })

  classes.addImportDeclaration({
    moduleSpecifier: './enum',
    namedImports: ['ns']
  })

  classes.addImportDeclaration({
    moduleSpecifier: './interfaces',
    namedImports: ['interfaces']
  })

  const interfacesNamespace = interfaces.addNamespace({
    name: 'interfaces',
    isExported: true
  })

  const classesNamespace = classes.addNamespace({
    name: 'classes',
    isExported: true
  })

  let takenNames: string[] = []

  ontology.subjects.forEach(subject => {

    // console.log(`subject id: ${subject.id}`)
    
    const { id } = subject

    // Otherwise it is saying something outside the ontology
    if (id.includes(ontology.namespace)) {

      // console.log(interfaces)
      const name = ontology.createName(subject, takenNames)
      if (name === 'NodeKind') {
        console.log(id)
      }
      takenNames.push(name)
      const Enum = enums.addMember({ name, value : subject.id })
      const Class = classesNamespace.addClass({ 
        name, 
        isExported: true, 
        implements: [`interfaces.${name}`]
      })
      const Interface = interfacesNamespace.addInterface({ name, isExported: true })

      // This may not be necessary due to extends
      // In fact do this *only* if there is an extends
      Interface.addProperty({
        name: 'value',
        type: 'any'
      })

      Class.addProperty({
        name: 'value'
      })

      const tags: {tagName: string, text: string}[] = []

      ontology.store.sorted.forEach(({predicate, object}: Quad) => {
        // Check if it is an annotation type
        if (settings.store.has(object, tsc.propertyConversion, tsc.JSDoc)) {

          tags.push(createTag(predicate, object, ontology))

        } else {

          switch(predicate.id) {
            case rdfs.subPropertyOf:
            case rdfs.subClassOf:

              // if (Class.getExtends()) {
              //   // This is not actuall an error and 
              //   // does occur in some ontologies, we 
              //   // just need to work out how to deal with it
              //   throw new Error(`Multiple extends error`)
              // }
              // Object can be a blank node in cases where it
              // is part of a list (for instance in AGRIF)
              if (object instanceof NamedNode) {
                if (object.id === subject.id) {
                  throw new Error(`Recursive class definition for ${object.id}`)
                }
                Interface.addExtends(ontology.createName(object, []))
                // Class.setExtends(ontology.createName(object))
              } else {
                // TODO: Handle list case
                console.log(`Sub class/property should be a named node
                subject: ${subject.value} - ${typeof subject} - ${subject instanceof NamedNode}
                predicate: ${predicate.value} - ${typeof predicate} - ${predicate instanceof NamedNode}
                object: ${object.value} - ${typeof object} - ${object instanceof NamedNode}
                `)
              }

            case rdfs.range:
              // Create error fallbacks to ensure there is only once instance
              // for this and others such as domain? - might not always be the case
              // though
              // Interface.addProperty({
              //   name: 'value',
              //     // @ts-ignore - for starters it is
              //     // not always going to be the same ontology
              //     // so we need to find a much cleaner way of doing this
              //   // TODO: MAKE IMPORT CORRECT
              //   type: ontology.createName(object)
              // })

            case rdfs.domain:
              // Interface.addProperty({
              //   name: 'domain',
              //   // @ts-ignore ditto above
              //   type: ontology.createName(object)
              // })
          }

        }
      }, subject, null, null, null)
      
      const JSDoc = {
        tags: tags.filter(x => x.tagName !== rdfs.comment),
        description : tags.find(x => x.tagName === rdfs.comment)?.text
      }
      
      Enum.addJsDoc(JSDoc)
      Interface.addJsDoc(JSDoc)
      Class.addJsDoc(JSDoc)

    } else {
      // Use this section to generate *extensions* to other ontologies
    }


  })

  // const interfaceMapping = interfaces.addVariableStatement({
  //   isExported: true,
  //   declarationKind: VariableDeclarationKind.Const,
  //   declarations: [{
  //     name: 'interfaces',
  //     initializer: JSON.stringify(map)
  //   }]
  // })

  // const classMapping = classes.addVariableStatement({
  //   isExported: true,
  //   declarationKind: VariableDeclarationKind.Const,
  //   declarations: [{
  //     name: 'classes',
  //     initializer: JSON.stringify(map)
  //   }]
  // })


  // const classesNamespace = classes.addNamespace({
  //   name: 'classes',
  //   isExported: true
  // })

  enums.addJsDoc(doc)
  classesNamespace.addJsDoc(doc)
  interfacesNamespace.addJsDoc(doc)

  createIndex(project)

  await finishAndSave(project)
}

executeFromSettings(`settings.ttl`)

