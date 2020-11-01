"use strict";
class Base {
    constructor(value, options) {
        const valid = this.constructor.isValidInstance(value, options);
        if (valid === true) {
            this.value = value;
        }
        else {
            throw new Error(`
            ${value} is an invalid instance of ${this.constructor.toString()})

            The following validations failed:
                - ${valid.join('\n\t\t- ')}
            `);
        }
    }
    static getExtends() {
        return [];
    }
    static [Symbol.hasInstance](obj) {
        return obj.constructor === this // myClass instance of Class
            || obj.rdfType === this // Class instancofClass || Class instanceOf Resource
            || obj.constructor.__proto__ === this // myClass instnaceof classBase
            || obj.constructor.getExtends?.().some((extend) => extend instanceof this);
    }
    static [Symbol.toStringTag]() {
        return `${this.label} (${this.id})`;
    }
    static isValidInstance(value, options = {}) {
        const { ontologyValidation = false, SHACLValidation = true, inheritValidators = true } = options;
        const applyValidation = (name, validators, validate) => {
            return validate ? validators.filter(validator => !validator.validator(value))
                .map(({ message }) => (typeof message === 'string'
                ? message
                : message(value))
                + ` - at ${name} validation for ${this.toString()})`)
                : [];
        };
        const ontologyFailures = applyValidation('ontology', this.ontologyValidators, ontologyValidation);
        const SHACLFailures = applyValidation('SHACL', this.SHACLValidators, SHACLValidation);
        const inheritedFailures = inheritValidators
            ? this.getExtends().map(superClass => {
                const isValid = superClass.isValidInstance(value, options);
                return isValid === true ? [] : isValid;
            }).flat()
            : [];
        const allFailures = [...ontologyFailures, ...SHACLFailures, ...inheritedFailures];
        return allFailures.length === 0 ? true : allFailures;
    }
}
Base.id = 'BASE';
Base.label = 'BASE';
Base.ontologyValidators = [];
Base.SHACLValidators = [];
// Could either just make this part of OWL Class
// or make our own ontology. We will see
class ClassBase extends Base {
    constructor() {
        super(...arguments);
        this.properties = {};
    }
    static getExtends() {
        return this.subClassOf;
    }
    addProperty(property) {
        if (Array.isArray(property)) {
            property.forEach(this.addProperty);
        }
        else {
            //(this.properties[(property.constructor as typeof Base).id] ??= []).push(property)
        }
    }
    static propertyValidatorUsingDomain(obj) {
        return obj.constructor.domain.some((domain) => this.prototype === domain);
    }
}
ClassBase.id = 'CLASS BASE';
ClassBase.label = 'BASE FOR MAKING CLASS INSTANCES';
ClassBase.subClassOf = [];
class PropertyBase extends Base {
    // This may ultimately be enforced by a SHACL
    // constraint in and of itself  
    static rangeValidator(value) {
        // Not sure why we need the as any, fix
        //return this.range.some(rangeClass => value instanceof (rangeClass as typeof Base))
    }
    static getExtends() {
        return this.subPropertyOf;
    }
}
PropertyBase.id = 'PROPERTY BASE';
PropertyBase.label = 'PROPERTY BASE';
PropertyBase.ontologyValidators = [
//     {
//     // Checking range restrinctions
//     validator(value: any){
//         this.range.some(rangeClass => value instanceof rangeClass)
//     },
//     message: `Value is not in the range ${this.domain}`
// }
];
