export declare namespace Base {
    type ValidatorFunc<T> = (value: T) => boolean;
    type Validator<T = any> = {
        validator: ValidatorFunc<T>;
        message: string | ((value: T) => string);
    };
    type InternalProperties = {
        [x: string]: PropertyBase[];
    };
    type PropertySet = {
        [x: string]: PropertyBase[];
    };
    type BaseType = typeof Base;
    type ClassType = typeof ClassBase;
    type PropertyType = typeof PropertyBase;
    interface ValidationOptions<T = any> {
        ontologyValidation?: boolean;
        SHACLValidation?: boolean;
        inheritValidators?: boolean;
        additionalValidators?: Validator<T>[];
    }
    interface BaseInterface {
        value: any;
    }
    class Base implements BaseInterface {
        static id: string;
        static [Symbol.toStringTag]: string;
        static rdfType: ClassType;
        static getExtends(): BaseType[];
        static [Symbol.hasInstance](obj: any): boolean;
        [Symbol.toStringTag](): any;
        static ontologyValidators: Validator[];
        static SHACLValidators: Validator[];
        static isValidInstance(value: any, options?: ValidationOptions): true | string[];
        value: any;
        constructor(value: any, options?: ValidationOptions);
    }
    interface ClassBaseInterface extends BaseInterface {
        language?: string;
        datatype?: string;
        properties: InternalProperties;
    }
    class ClassBase extends Base implements ClassBaseInterface {
        static id: string;
        static [Symbol.toStringTag]: string;
        static subClassOf: ClassType[];
        static getExtends(): ClassType[];
        language?: string;
        datatype?: string;
        properties: PropertySet;
        addProperty(property: PropertyBase | PropertyBase[]): void;
        static propertyValidatorUsingDomain(obj: PropertyBase): any;
        constructor(value: any, properties?: PropertySet, options?: ValidationOptions);
    }
    class PropertyBase extends Base {
        static id: string;
        static [Symbol.toStringTag]: string;
        static domain: ClassBase[];
        static range: ClassBase[];
        static subPropertyOf: PropertyType[];
        static rangeValidator(node: ClassBase): boolean;
        static domainValidator(node: ClassBase): boolean;
        static internallyGeneratedValidators(): (typeof PropertyBase.rangeValidator)[];
        static ontologyValidators: any[];
        static getExtends(): PropertyType[];
        value: any;
    }
}
