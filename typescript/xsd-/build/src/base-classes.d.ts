export declare type ValidatorFunc<T> = (value: T) => boolean;
export declare type Validator<T = any> = {
    validator: ValidatorFunc<T>;
    message: string | ((value: T) => string);
};
export declare type InternalProperties = {
    [x: string]: PropertyBase[];
};
export interface ValidationOptions<T = any> {
    ontologyValidation?: boolean;
    SHACLValidation?: boolean;
    inheritValidators?: boolean;
    additionalValidators?: Validator<T>[];
}
export interface BaseInterface {
    value: any;
}
export declare class Base implements BaseInterface {
    static id: string;
    static [Symbol.toStringTag]: string;
    static rdfType: typeof ClassBase;
    static getExtends(): (typeof Base)[];
    static [Symbol.hasInstance](obj: any): boolean;
    [Symbol.toStringTag](): any;
    static ontologyValidators: Validator[];
    static SHACLValidators: Validator[];
    static isValidInstance(value: any, options?: ValidationOptions): true | string[];
    value: any;
    constructor(value: any, options?: ValidationOptions);
}
export interface ClassBaseInterface extends BaseInterface {
    language?: string;
    datatype?: string;
    properties: InternalProperties;
    addProperty(): (property: typeof PropertyBase) => void;
}
export declare class ClassBase extends Base {
    static id: string;
    static [Symbol.toStringTag]: string;
    static subClassOf: (typeof ClassBase)[];
    static getExtends(): (typeof ClassBase)[];
    language?: string;
    datatype?: string;
    properties: {
        [x: string]: PropertyBase[];
    };
    addProperty(property: PropertyBase | PropertyBase[]): void;
    static propertyValidatorUsingDomain(obj: PropertyBase): any;
}
export declare class PropertyBase extends Base {
    static id: string;
    static [Symbol.toStringTag]: string;
    static domain: ClassBase[];
    static range: ClassBase[];
    static subPropertyOf: (typeof PropertyBase)[];
    static rangeValidator(node: ClassBase): boolean;
    static domainValidator(node: ClassBase): boolean;
    static ontologyValidators: any[];
    static getExtends(): (typeof PropertyBase)[];
    value: any;
}
