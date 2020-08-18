// export namespace Base {
    export type ValidatorFunc<T> = (value: T) => boolean

    export type Validator<T = any> = {
        validator: ValidatorFunc<T>,
        message: string | ((value: T) => string)
    }

    export type InternalProperties = {
        [x: string]: PropertyBase[]
    }

    export type PropertySet = {
        [x: string]: PropertyBase[]
    }

    export type BaseType = typeof Base
    export type ClassType = typeof ClassBase
    export type PropertyType = typeof PropertyBase

    export interface ValidationOptions<T = any> {
        ontologyValidation?: boolean,
        SHACLValidation?: boolean,
        inheritValidators?: boolean,
        additionalValidators?: Validator<T>[]
    }

    export interface BaseInterface {
        value: any;
    }

    export class Base implements BaseInterface {

        static id: string = 'BASE';
        static [Symbol.toStringTag]: string = 'BASE';
        static rdfType: ClassType;
        static getExtends(): BaseType[] {
            return []
        }

        static [Symbol.hasInstance](obj: any, checked : BaseType[] = []): boolean {
            return obj.constructor === this // myClass instance of Class
                || obj.rdfType === this  // Class instancofClass || Class instanceOf Resource
                || obj.constructor.__proto__ === this // myClass instnaceof classBase
                || obj.constructor.getExtends?.().some((extend: typeof Base) => extend instanceof this) // this.hasInstance(extend, checked) ?
                // Need to prevent infinite loops with classes that reference themselves
        }

        [Symbol.toStringTag]() {
            return this.value
        }

        // [Symbol.toString](): string {
        //     return `${this.value}`
        // }

        static ontologyValidators: Validator[] = [];

        static SHACLValidators: Validator[] = [];

        static isValidInstance(
            value: any,
            options: ValidationOptions = {}
        ): true | string[] {

            const {
                ontologyValidation = false,
                SHACLValidation = true,
                inheritValidators = true
            } = options

            const applyValidation = (name: string, validators: Validator[], validate: boolean) => {
                return validate ? validators.filter(validator => !validator.validator(value))
                    .map(
                        ({ message }) => (typeof message === 'string'
                            ? message
                            : message(value))
                            + ` - at ${name} validation for ${this.toString()})`
                    )
                    : []
            }

            const ontologyFailures = applyValidation('ontology', this.ontologyValidators, ontologyValidation)
            const SHACLFailures = applyValidation('SHACL', this.SHACLValidators, SHACLValidation)

            const inheritedFailures = inheritValidators
                ? this.getExtends().map(superClass => {
                    const isValid = superClass.isValidInstance(value, options)
                    return isValid === true ? [] : isValid
                }).flat()
                : []

            const allFailures: string[] = [...ontologyFailures, ...SHACLFailures, ...inheritedFailures]

            return allFailures.length === 0 ? true : allFailures
        }

        value: any;

        constructor(value: any, options?: ValidationOptions) {
            const valid = (this.constructor as typeof Base).isValidInstance(value, options)
            if (valid === true) {
                this.value = value
            } else {
                throw new Error(`
            ${value} is an invalid instance of ${this.constructor.toString()})

            The following validations failed:
                - ${valid.join('\n\t\t- ')}
            `)
            }
        }
    }

    export interface ClassBaseInterface extends BaseInterface {
        language?: string;
        datatype?: string; //This will become the class datatype
        properties: InternalProperties;
     //   addProperty(property: PropertyBase | PropertyBase[]): void;

    }

    // Could either just make this part of OWL Class
    // or make our own ontology. We will see
    export class ClassBase extends Base implements ClassBaseInterface {

        static id = 'CLASS BASE'
        static [Symbol.toStringTag] = 'BASE FOR MAKING CLASS INSTANCES'

        static subClassOf: ClassType[] = []

        static getExtends(): ClassType[] {
            return this.subClassOf
        }

        // value: any;
        language?: string;
        datatype?: string;


        properties: PropertySet = {}


        addProperty(property: PropertyBase | PropertyBase[]) {
            if (Array.isArray(property)) {
                property.forEach(this.addProperty)
            } else {
                if ((this.constructor as ClassType).propertyValidatorUsingDomain(property)) {
                    // Add the thing
                } else {
                    // Throw error
                }
                //(this.properties[(property.constructor as typeof Base).id] ??= []).push(property)
            }
        }

        static propertyValidatorUsingDomain(obj: PropertyBase) {
            // @ts-ignore TODO: FIX THSI
            return obj.constructor.domainValidator(this)
        }

        constructor(value: any, properties?: PropertySet, options?: ValidationOptions) {
            super(value, options)
            this.properties = properties || {}
        }

    }

    export class PropertyBase extends Base {

        static id = 'PROPERTY BASE'
        static [Symbol.toStringTag] = 'PROPERTY BASE'

        static domain: ClassType[]
        static range: ClassType[]
        static type: PropertyType

        static subPropertyOf: PropertyType[]

        // This may ultimately be enforced by a SHACL
        // constraint in and of itself  
        static rangeValidator(node: ClassBase): boolean {

            if (this.range === undefined) {
                return true
            }


            // Why on earth do we need any with these?
            return this.range.some((rangeClass: any) => {
                return node instanceof rangeClass
            })

        }

        static domainValidator(node: ClassBase) {

            if (this.domain === undefined) {
                return true
            }

            return this.domain.some((domainClass: any) => {
                return node instanceof domainClass
            })

        }

        static internallyGeneratedValidators() {
            return [
                this.rangeValidator
            ]
        }

        static ontologyValidators = [
            //     {
            //     // Checking range restrinctions
            //     validator(value: any){
            //         this.range.some(rangeClass => value instanceof rangeClass)
            //     },
            //     message: `Value is not in the range ${this.domain}`
            // }
        ]

        static getExtends(): PropertyType[] {
            return this.subPropertyOf
        }

        value: any;
    }
// }


