import CommunicaEngine from '../../../../comunica-test-3/LDflex-Comunica/src'
// @ts-ignore
// import CommunicaEngine from '@ldflex/comunica'
// import { newEngine } from '@comunica/actor-init-sparql-file'
// @ts-ignore
import { PathFactory } from 'ldflex'
import { namedNode } from '@rdfjs/data-model'
// @ts-ignore
import RdflibQueryEngine from '@ldflex/rdflib'

const warning = '<!-- DO NOT EDIT. This readme is automaitcally generated, please make edits to maintenance/update-readme/base.md -->'

const queryEngine = new CommunicaEngine('ontologies.ttl')
// queryEngine._engine = newEngine()

const ontologiesPath = new PathFactory({
    queryEngine,
    context: {
        'owl': 'http://www.w3.org/2002/07/owl#',
        'packageName': 'http://example.org#packageName', // TODO
        'proposedPackageName': 'http://example.org#proposedPackageName', // TODO
        'a': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type'
    }
});

(async () => {
    
    
    
    const p = ontologiesPath.create({ subject: namedNode('') }).subjects
    const f = ontologiesPath.create({ subject: namedNode('http://example.org/me') })
    await f.a.add(namedNode('http://example.org/me3'))


    for await (const s of p) {
        console.log(s)
    }
    console.log('hi')
})()

// prefcc(ontologiesPath)