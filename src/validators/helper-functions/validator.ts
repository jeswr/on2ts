// import {ns as sh} from '../../../typescript/sh/src/enums'

// import constraintsToValidator from "./constraints-to-validator"

import * as R from 'ramda'


// Consider adding an "externally depndet" property
// on constraints that need to be re-checked after changes
// to the graph


// ex:square
// 	a sh:JSFunction ;
// 	sh:parameter [
// 		sh:path ex:number ;
// 		sh:datatype xsd:integer ;
// 	] ;
// 	sh:returnType xsd:integer ;
// 	sh:jsLibrary [ sh:jsLibraryURL "http://example.org/js/square.js"^^xsd:anyURI ] ;
// 	sh:jsFunctionName "square" .

// validator = new sh.Classes[sh.js](require("http://example.org/js/square.js").square)


class js {
    // value: {
    //     jsLibrary: string;
    //     jsFunctionName: string;
    //     parameter: string
    // } = {}
    // Then add in shacl constraint to say that it requires the
    // 3 propertis jsLibrary, jsFunction name and jsParameter to work

    static [sh.validator](node: Base.BaseClass) {
        const func = require(this.jsLibrary)[this.jsFunctionName]
        return func(R.path(this.parameter, node))


        // Something Like
        // Import requisite code this.property[jsLibrary].forEach(eval) 
        // eval(this.property[Function])(node.value)
    }
    static [sh.message] = `Does not pass the function ${this.value.jsFunctionName}`
}

class labelTemplate {
    // TODO:
}


class langaugeIn {
    value: string[]

    static merge(constraints: string[][]) {
        return constraints.reduce(R.intersection, constraints[0])
    }

    [sh.validator](node: Base.BaseClass) {
        this.value.includes(node.langauge)
    }

    [sh.message](node: Base.BaseClass) {
        return `this entry should be in one of the following languages: ${this.value}`
    }

}

class lessThan {
    value: any

    static externallyDependent = true

    async [sh.validator](node: Base.BaseClass) {
        return true // TODO
    }

    async [sh.message](node: Base.BaseClass) {
        return ''
    }
}

class lessThanOrEquals {
    value: any

    static externallyDependent = true

    async [sh.validator](node: Base.BaseClass) {
        return true // TODO
    }

    async [sh.message](node: Base.BaseClass) {
        return ''
    }
}

class maxCount {
    value: number

}

class maxExclusive {
    value: number

    static merge(constraints: number[]) {
        return Math.min(...constraints)
    }

    [sh.validator](node: Base.BaseClass) {
        return node.value < this.value
    }

    [sh.message](node: Base.BaseClass) {
        return `value should be strictly less than ${this.value}`
    }

}

class maxLength {
    value: number

    static merge(constraints: number[]) {
        return Math.min(...constraints)
    }

    [sh.validator](node: Base.BaseClass) {
        return node.value.length <= this.value
    }

    [sh.message](node: Base.BaseClass) {
        return `value should have at most ${this.value} characters`
    }

}

class minCount {
    value: number

    static merge(constraints: number[]) {
        return Math.max(...constraints)
    }

}

class minExclusive {
    value: number

    static merge(constraints: number[]) {
        return Math.max(...constraints)
    }

    [sh.validator](node: Base.BaseClass) {
        return node.value > this.value
    }

    [sh.message](node: Base.BaseClass) {
        return `value should be strictly more than ${this.value}`
    }
}

class minInclusive {
    value: number

    static merge(constraints: number[]) {
        return Math.max(...constraints)
    }

    [sh.validator](node: Base.BaseClass) {
        return node.value >= this.value
    }

    [sh.message](node: Base.BaseClass) {
        return `value should be greater than or equal to ${this.value}`
    }
}

// class minimizingConstraintcComponent {



// }

class minLength {
    value: number

    // TODO: 
    //static subClassOf [minimizingConstraintcComponent]

    static merge(constraints: number[]) {
        return Math.max(...constraints)
    }

    [sh.validator](node: Base.BaseClass) {
        return node.value.length >= this.value
    }

    [sh.message](node: Base.BaseClass) {
        return `value should have at least ${this.value} characters`
    }

}

type myNodeKind = (
    sh.BlankNode |
    sh.BlankNodeOrIRI |
    sh.BlankNodeOrLiteral |
    sh.IRI |
    sh.IRIOrLiteral |
    sh.Literal
)

// Need a merge and init, perhaps this is a higher order behavior

class nodeKind {
    // Check it may possibly be the *actual* class that we put in here 

    value: myNodeKind

    static _mapping = {
        [sh.BlankNodeOrLiteral]: [sh.BlankNode, sh.Literal],
        [sh.BlankNodeOrIRI]: [sh.BlankNode, sh.IRI],
        [sh.IRIOrLiteral]: [sh.IRI, sh.Literal],
        [sh.BlankNode] : [sh.BlankNode],
        [sh.IRI] : [sh.IRI],
        [sh.Literal] : [sh.Literal]
    }

    static merge(constraints: myNodeKind[]): myNodeKind {

        const allowed = constraints.reduce((allowedList: myNodeKind[], constraint: myNodeKind) => {

            const toIntersect = (this._mapping)[constraint]

            return R.intersection(toIntersect, allowedList)

        }, [
            sh.BlankNode,
            sh.BlankNodeOrIRI,
            sh.BlankNodeOrLiteral,
            sh.IRI,
            sh.IRIOrLiteral,
            sh.Literal
        ])

        switch (allowed.length) {
            case 1: return allowed[0] as myNodeKind;
            case 2: 
                switch (R.difference([sh.IRI, sh.Literal, sh.BlankNode], allowed)[0]) {
                    case sh.BlankNode: return sh.IRIOrLiteral;
                    case sh.IRI: return sh.BlankNodeOrLiteral;
                    default: return sh.BlankNodeOrIRI
                }
            default:
                throw new Error('There is no way of merging these constraint components')
        }
    }

    [sh.validator](node: Base.BaseClass) {
        return nodeKind._mapping[this.value].some(name => {
            node instanceof ({
                [sh.IRI] : IRI,
                [sh.BlankNode] : BlankNode,
                [sh.Literal] : Literal
            })[name]
        })
    }

    [sh.message](node: Base.BaseClass) {
        return `This node, which is ${node.toString()} should be one of the following: ${nodeKind._mapping[this.value]}`
    }
}

class pattern {
    // Note that this deviates slightly from
    // the normal handling of pattern and flags
    // with everything currently handled *just* in
    // the pattern. Long term we could use some sort of proxy here
    value: RegExp


    [sh.validator](node: Base.BaseClass) {
        return this.value.test(node.value)
    }

    [sh.message](node: Base.BaseClass) {
        return `Should match the pattern ${this.value.source}`
    }
}

class in {
    value: any[];
    // TODO: Create  a proxy that defaults to the prefixed item if there
    // is no unprefixed item of the same name

    static merge(constraints: any[][]) {
        return constraints.reduce(R.intersection, constraints[0])
    }

    [sh.validator](node: Base.BaseClass) {
        return node.value in this.value
    }

    [sh.messsage](node: Base.BaseClass) {
        return `Value should be one of the following ${this.value}`
    }
}

class disjoint {

    // TODO: This is also dependent on external data - to determine how to handle

}

class uniqueLang {
    // TODO: This is dependent on external data - to determine how to handle this
}