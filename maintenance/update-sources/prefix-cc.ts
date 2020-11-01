import fetch from 'node-fetch'
import { PathFactory } from '../../../../ldflex-3/LDflex/src'
import { literal, namedNode } from '@rdfjs/data-model'

export default (async (p: PathFactory) => {
    const prefixcc = (await (await fetch('http://prefix.cc/context')).json())['@context']
    for (const prefix in prefixcc) {
        const path = p.create({ subject: namedNode(prefixcc[prefix]) })
        console.log(`${await path}`)
        if (`${await path.a}` != 'http://www.w3.org/2002/07/owl#Ontology') {
            await path.a.add(namedNode('http://www.w3.org/2002/07/owl#Ontology'))
            await path.published.add(false); // Allow editing of prefixes etc. before publishing
        }
        if (await path.packageName == undefined && await path.proposedPackageName == undefined) {
            await path.proposedPackageName.add(literal(prefix))
        }
    }
})