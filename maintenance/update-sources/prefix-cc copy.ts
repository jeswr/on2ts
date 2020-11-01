// import fetch from 'node-fetch'

// export default (async path => {
//     const prefixcc = (await (await fetch('http://prefix.cc/context')).json())['@context']
//     for (const prefix of prefixcc) {
//         await path.a = Ontology
//     }
// })


// Scrape from google https://www.google.com/search?q=filetype:owl+owl
// Scrape from google https://www.google.com/search?q=filetype:ttl+owl
// Scrape from google https://www.google.com/search?q=filetype:rdf+owl


// // @ts-ignore
// import { html2json } from 'html2json'
// import xregexp from 'xregexp'
// // @ts-ignore
// import CommunicaEngine from '../../../../comunica-test-3/LDflex-Comunica/src'
// import { newEngine } from '@comunica/actor-init-sparql-file'
// // @ts-ignore
// import { PathFactory } from 'ldflex'
// import { namedNode } from '@rdfjs/data-model'
// import async from 'async'
// import { Store, StreamParser } from 'n3'

// const Ontology = namedNode('http://www.w3.org/2002/07/owl#Ontology')

// export default (async () => {
//     const store = new Store()
    
//     // const queryEngine = new CommunicaEngine(new Store)
//     // //queryEngine._engine = newEngine()
//     // const ontologiesPath = new PathFactory({
//     //     queryEngine,
//     //     context: {
//     //         'owl': 'http://www.w3.org/2002/07/owl#',
//     //         'a': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type'
//     //     }
//     // })

//     const prefixcc = (await (await fetch('http://prefix.cc/context')).json())['@context']
//     for (const prefix of prefixcc) {
//         store.addQuad(
//             namedNode(prefixcc[prefix]),
//             namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'),
//             Ontology
//         )
//         store.
        
        
//         if (!store.match(
//             namedNode(prefixcc[prefix]),
//             ,
//             Ontology
//         )) {

//         }
//     }


//     // const bioontology = (await (await fetch('http://data.bioontology.org/ontologies', {
//     //     headers: {
//     //         authorization: 'apikey token=f191b69c-081d-4d44-b3f8-191f6974c014',
//     //     }
//     // })).json())//.bodyUsed//.json()

//     // const dld = (await (await fetch('http://data.bioontology.org/ontologies/ILLNESSINJURY/download', {
//     //     headers: {
//     //         authorization: 'apikey token=f191b69c-081d-4d44-b3f8-191f6974c014',
//     //         download_format: 'rdf'
//     //     }
//     // })).textConverted())

//     // console.log(dld)

//     const schemapediaText = (await (await fetch('https://schemapedia.com/index/', {
//         headers: {
//             type: 'application/json+oembed"'
//         }
//     })).textConverted())

//     const schimapediaMatches = xregexp.match(schemapediaText, /menu\-item\"><a href=\"https:\/\/schemapedia.com\/[a-z\-\_]*\//ig)

//     const schemapediaUrls = ((typeof schimapediaMatches === 'string' ? [schimapediaMatches] : schimapediaMatches) ?? [])
//         .map((x: string) => x.replace('menu\-item\"><a href=\"', ''))

//     async.map(schemapediaUrls, async (url: string) => {
//         const ontologyURL = /http[^"]*$/.exec(xregexp.match(
//             (await (await fetch(url, {
//             headers: {
//                 type: 'application/json+oembed'
//             }
//         })).textConverted()), /Namespace URI:[^]{10}"[^"]*" href="[^"]*/i) as string)?.[0]
//         // console.log(url, ontologyURL)
//         if (ontologyURL && ontologyURL != 'null') {
//             store.addQuad(
//                 namedNode(ontologyURL),
//                 namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'),
//                 Ontology
//             )

//             console.log('adding url', ontologyURL)
//             // ontologiesPath.create({ subject: namedNode(ontologyURL) })['http://www.w3.org/1999/02/22-rdf-syntax-ns#type'].add(Ontology)
//         }
//         // console.log(ontologiesPath.create({ subject: namedNode(ontologyURL ?? '') }).subjects)
//     })



//     // for (const url of schemapediaUrls) {
//     //     const ontologyURL = /[^"]*$/.exec(xregexp.match(
//     //         (await (await fetch(url, {
//     //         headers: {
//     //             type: 'application/json+oembed'
//     //         }
//     //     })).textConverted()), /Namespace URI:[^]{10}"[^"]*" href="[^"]*/i) as string)?.[0]
//     //     console.log(url, ontologyURL)
//     //     ontologiesPath.create({ subject: namedNode(ontologyURL ?? '') }).a = Ontology
//     //     console.log(ontologiesPath.subjects)
//     // }

//     // const skospage = ((xregexp.match(
//     //     (await (await fetch('https://schemapedia.com/webontology/', {
//     //     headers: {
//     //         type: 'application/json+oembed'
//     //     }
//     // })).textConverted()), /?=Namespace URI:[^]{10}"[^"]*" href="[^"]*/ig) ?? []) as string[]).map(/[^"]$/.exec)

        
//     // // @ts-ignore
//     // console.log(bioontology.child[1].child.map(x => x.child).flat().map(x => x?.child).flat().map(x => x?.child).flat().map(x => x?.child).flat().filter(x => x !== undefined))
//     // // @ts-ignore
//     // console.log(bioontology.child[3].child.map(x => x.child).flat().map(x => x?.child).flat().map(x => x?.child).flat().map(x => x?.child).flat().filter(x => x !== undefined))
    
//     // for (const prefix in ontologies) {
//     //     console.log(`prefix is ${prefix} and url is ${ontologies[prefix]}`)
//     //     // const fetched = await fetch(ontologies[prefix])
//     //     // console.log(fetched)
//     // }
    
    
    

    
//     // const file = await new Promise((resolve, reject) => fetchUrl('http://prefix.cc/context', (response: any) => {
//     //     console.log('response', response)
//     //     resolve(response)
//     // }))
// })