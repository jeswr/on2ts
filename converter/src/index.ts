// TODO: Investigate constant enums to aid with minification.
import path from 'path'
import { PathFactory } from '../../../../ldflex-3/LDflex/src'
import ComunicaEngine from '../../../../comunica-test-3/LDflex-Comunica/src'
import { toIdentifier } from '@babel/types'
import * as R from 'ramda'
import { create } from 'ts-node'
import { namedNode } from '@rdfjs/data-model'
import { Project } from './cleanFile'

import { owl, rdf, rdfs, dcterms, skos } from '../../packages'
import { JSDoc, JSDocStructure, JSDocTag, JSDocTagStructure, OptionalKind } from 'ts-morph'
const descriptionPriority: string[] = [
    dcterms.description,
    rdfs.comment,
    skos.note,
    rdfs.label,
    dcterms.title
]

export async function generateOntology(stores: { [x in 'shacl' | 'ontology' | 'imports']: PathFactory }, outDir: string) {
    const project = new Project()

    const createFile = (name: string, folder: string = '', content: string = '') => project.createSourceFile(
        path.join(outDir, 'src', folder, `${name}.ts`), content, { overwrite: true }
    );

    const enums = createFile('ns').addEnum({ name: 'ns', isExported: true })

    // @ts-ignore
    await stores.ontology.subjects.forEach(async instance => {

        const name = toIdentifier(await instance.fragment);
        const value = `${await instance}`;
        // @ts-ignore
        const predicates: string[] = await instance.predicatesOf.toArray(async x => `${await x}`);
        const descriptor = descriptionPriority.find(descriptor => predicates.includes(descriptor));

        const tags: OptionalKind<JSDocTagStructure>[] = await Promise.all(
            // @ts-ignore
            predicates.filter(predicate => descriptionPriority.includes(predicate) && predicate != descriptor)
                // @ts-ignore
                .map(async tagName => ({ tagName: tagName.match(/\w+$/i)[0] ?? '', text: `${await instance[tagName]}` }))
        );

        const docs: OptionalKind<JSDocStructure> = {
            description: descriptor && `${await instance[descriptor]}`,
            tags
        }

        enums.addMember({ name, value, docs: [docs] })

        // console.log(predicates.);

        // stores.ontology.execute()


        // const id = await instance.namespace


        // const description = descriptionPriority.reduce((t, descr) => t ?? s.predicatesOf.find(p => p instanceof descr), undefined)
        // const docs = {
        //     description: await s[description],
        //     tags : s.predicatesOf.filter(p => p instanceof owl.AnnotationProperty && p !== description)
        //         .map(async key => ({ key, value: await s[key] }))
        // }


        // @ts-ignore
        // s.predicatesOf.forEach(async x => {
        //     console.log(toIdentifier(await s.fragment), toIdentifier(await x.fragment))
        // })

    })

    // @ts-ignore
    // console.log(await stores.ontology.subjects.fragments)
    // @ts-ignore
    // for await (const instance of stores.ontology.subjects) {
    //     console.log('instance')
    //     for await (const x of instance) {
    //         console.log(1)
    //     }
    // //     console.log('a')
    // //     console.log(`${await instance}`, await instance.properties)
    // //     // for await (const prop of instance) {
    // //     //     // console.log(`p ${await prop}`)
    // //     // }
    // //     console.log('b')
    // //     // console.log(`${await instance}`)
    // }

    // // @ts-ignore
    // stores.ontology.subjects.every(async instance => {
    //     // @ts-ignore
    //     console.log(`${await instance}`)
    //     // @ts-ignore
    //     // instance.every(async pred => {
    //     //     console.log(`${await instance} `, `${await pred}`)
    //     // })


    //     // const name = toIdentifier(await instance.fragment)
    //     // const id = await instance.namespace

    //     // enums.addMember({ name, value: id })
    //     // console.log(`${await instance}`)
    //     // console.log('the id is', id)
    //     // console.log('the name is', name)

    //     // console.log(await instance.prefix)
    //     await instance
    // })

    console.log('done')

    // for await (const instance of stores.ontology.subjects) {

    //     if (instance.termType === 'NamedNode') {
    //         // @ts-ignore
    //         const name = toIdentifier(await instance.fragment)
    //         const id = await instance.namespace

    //         enums.addMember({ name, value: id })
    //         console.log(`${await instance}`)
    //         console.log('the id is', id)
    //         console.log('the name is', name)

    //         console.log(await instance.prefix)

    //     }
    // }

    project.generateIndexes()

    // Ovveride main index file
    createFile('index', '',
        // import * as Classes from "./Classes";
        // import * as Properties from "./Properties";
        // export * as Classes from "./Classes";
        // export * as ClassInterfaces from "./ClassInterfaces";
        // export * as Properties from "./Properties";
        // export * as PropertyInterfaces from "./PropertyInterfaces";
        `   export { ns } from "./ns";
        export default { ...ns };
    `
        // export default { ...Classes, ...Properties };
    )

    project.finalize()
}


async function make(name: string, pref?: string) {
    await generateOntology({
        ontology: new PathFactory({
            // @ts-ignore
            queryEngine: new ComunicaEngine(`../../ont-to-ts/ontology/${name}.ttl`//'http://www.w3.org/2002/07/owl'
            ),
            context: {}
        }),
        shacl: new PathFactory({
            // @ts-ignore
            queryEngine: new ComunicaEngine(`../../ont-to-ts/ontology/${name}.ttl`//'http://www.w3.org/2002/07/owl'
            ),
            context: {}
        }),
        imports: new PathFactory({
            // @ts-ignore
            queryEngine: new ComunicaEngine(`../../ont-to-ts/ontology/${name}.ttl`//'http://www.w3.org/2002/07/owl'
            ),
            context: {}
        })
    }, `packages/${pref || name}`)
}

(async () => {
    await make('owl')
    // await make('dcelems', 'dcterms')
    // await make('rdf')
    // await make('rdfs')
    // await make('skos')
})();


// import owl from '../../../ont-to-ts/ontology/owl'