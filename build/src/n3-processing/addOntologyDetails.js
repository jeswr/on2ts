"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOntologyDetails = void 0;
const ns_1 = require("../../typescript/owl/typescript/ns");
const ns_2 = require("../../typescript/rdf/typescript/ns");
const utils_1 = require("../utils");
const findBaseInPrefixes = (subjects, prefixes) => {
    const value = subjects.reduce((total, subject) => {
        console.log(total, subject);
        return total.filter(value => {
            console.log(value.slice(0, subject.id.length), subject.id);
            value.slice(0, subject.id.length) === subject.id;
        });
    }, Object.values(prefixes));
    if (value.length === 1) {
        return value[0];
    }
    else {
        return undefined;
        // TODO: Add the ability in the settings file to get around this
        // throw new Error(`Cannot determine the Ontology base, options are ${value}`)
    }
};
const findBaseFromCommonStart = (subjects) => {
    const strings = subjects.map(x => x.id);
    return strings.reduce((start, term) => {
        console.log(start, term);
        console.log(start.length, term.length, Math.min(start.length, term.length));
        const len = Math.min(start.length, term.length);
        let newStart = '';
        for (let i = 0; i < len; i++) {
            console.log(i, start[i], term[i], start[i] === term[i]);
            if (start[i] === term[i]) {
                newStart += start[i];
            }
            else {
                return newStart;
            }
        }
        console.log('after for loop');
        return newStart;
    }, strings[0] ?? '');
};
exports.addOntologyDetails = (ontology, file) => {
    const subjects = ontology.store.sorted.getSubjects(null, null, null);
    const predicates = ontology.store.sorted.getPredicates(null, null, null);
    const objects = ontology.store.sorted.getObjects(null, null, null);
    // Looks for explicit definition of base, if not
    // available, this will be inferred from the prefixes
    // of the subjects.
    console.log(ontology.store.getSubject(ns_2.ns.type, ns_1.ns.Ontology, null, true));
    const base = ontology.store.getSubject(ns_2.ns.type, ns_1.ns.Ontology, null, true)?.id
        || findBaseInPrefixes(subjects, ontology.prefixes)
        || findBaseFromCommonStart(subjects);
    console.log('base IRI', base);
    const ontologyMatch = new RegExp(`^${base}[/#]?$`);
    // TODO: Make this stricter
    let prefix = ontology.store.getObject(base, 'http://purl.org/vocab/vann/preferredNamespacePrefix', null, true)?.value
        ?? Object.entries(ontology.prefixes).find(([, value]) => {
            return ontologyMatch.test(value);
        })?.[0]
        ?? /[a-z]*.ttl$/i.exec(base)?.[0].replace('.ttl', '')
        ?? '';
    if (!(prefix in ontology.prefixes)) {
        ontology.prefixes = { ...ontology.prefixes,
            [prefix]: base
        };
    }
    const namespace = ontology.prefixes[prefix];
    // We need to be *very* careful to not cause names to change
    // across ontologies due to upates because of this
    function createName(node, takenNames, allowInvalidNames = false) {
        // console.log('name: ', node.id)
        let name = node.id.slice(namespace.length);
        name = name.replace('-', '_');
        // console.log(name, takenNames, allowInvalidNames)
        // If it is the empty string, we assume that this is the definition
        // of the ontology itself and hence we replace it with the prefix of
        // the ontology
        if (name === '') {
            name = prefix;
        }
        if (utils_1.isInvalidJavascriptOrTypescriptName(name) && !allowInvalidNames) {
            console.log("invalid ", name);
            name = name.replace(/[^a-z]*/ig, '');
        }
        if (utils_1.isInvalidJavascriptOrTypescriptName(name) && !allowInvalidNames) {
            console.log("invalid ", name);
            name = name[0].toUpperCase() + name.slice(1);
        }
        if (takenNames.includes(name)) {
            throw new Error(`This ontology has very similar names
      so changing names to valid Javascript is not currently
      well handled.
  
      Please create an issue on GitHub so that
      we can update ont-to-ts appropriately!
  
      The name with a duplicate identifier is ${name}
  
      ${takenNames}

      ${node.id}
      `);
        }
        return name;
    }
    return {
        ...ontology,
        base,
        file,
        prefix,
        namespace,
        subjects,
        subjectIRIs: subjects.map(subject => subject.id),
        predicates,
        objects,
        createName
    };
};
