import CommunicaEngine from '../../../../comunica-test-3/LDflex-Comunica/src'
import { PathFactory } from '../../../../ldflex-3/LDflex/src'
import prefcc from './prefix-cc'

const ontologiesPath = new PathFactory({
    // @ts-ignore
    queryEngine: new CommunicaEngine('ontologies.ttl'),
    context: {
        'owl': 'http://www.w3.org/2002/07/owl#',
        'packageName': 'http://example.org#packageName', // TODO find an existing ontology to use here 
        'published': 'http://example.org#published', // TODO
        'proposedPackageName': 'http://example.org#proposedPackageName', // TODO
        'a': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type'
    }
})

prefcc(ontologiesPath)