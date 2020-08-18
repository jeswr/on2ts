import { Base } from "./index";

export namespace PropertyInterface {
    export interface annotationProperty extends Base.BasePropertyInterface {
        value: any;
    }

    export interface condition extends Base.BasePropertyInterface {
        value: any;
    }

    export interface description extends Base.BasePropertyInterface {
        value: any;
    }

    export interface group extends Base.BasePropertyInterface {
        value: any;
    }

    export interface annotationVarName extends Base.BasePropertyInterface {
        value: any;
    }

    export interface annotationValue extends Base.BasePropertyInterface {
        value: any;
    }

    export interface defaultValue extends Base.BasePropertyInterface {
        value: any;
    }

    export interface order extends Base.BasePropertyInterface {
        value: any;
    }

    export interface qualifiedMinCount extends Base.BasePropertyInterface {
        value: any;
    }

    export interface not extends Base.BasePropertyInterface {
        value: any;
    }

    export interface filterShape extends Base.BasePropertyInterface {
        value: any;
    }

    export interface flags extends Base.BasePropertyInterface {
        value: any;
    }

    export interface pattern extends Base.BasePropertyInterface {
        value: any;
        // Note that this deviates slightly from
        // the normal handling of pattern and flags
        // with everything currently handled *just* in
        // the pattern. Long term we could use some sort of proxy here
        value: RegExp;
    }

    export interface _object extends Base.BasePropertyInterface {
        value: any;
    }

    export interface intersection extends Base.BasePropertyInterface {
        value: any;
    }

    export interface nodes extends Base.BasePropertyInterface {
        value: any;
    }

    export interface predicate extends Base.BasePropertyInterface {
        value: any;
    }

    export interface qualifiedValueShapesDisjoint extends Base.BasePropertyInterface {
        value: any;
    }

    export interface uniqueLang extends Base.BasePropertyInterface {
        value: any;
    }

    export interface prefixes extends Base.BasePropertyInterface {
        value: any;
    }

    export interface ask extends Base.BasePropertyInterface {
        value: any;
    }

    export interface update extends Base.BasePropertyInterface {
        value: any;
    }

    export interface alternativePath extends Base.BasePropertyInterface {
        value: any;
    }

    export interface and extends Base.BasePropertyInterface {
        value: any;
    }

    export interface _class extends Base.BasePropertyInterface {
        value: any;
    }

    export interface closed extends Base.BasePropertyInterface {
        value: any;
    }

    export interface conforms extends Base.BasePropertyInterface {
        value: any;
    }

    export interface construct extends Base.BasePropertyInterface {
        value: any;
    }

    export interface datatype extends Base.BasePropertyInterface {
        value: any;
    }

    export interface deactivated extends Base.BasePropertyInterface {
        value: any;
    }

    export interface declare extends Base.BasePropertyInterface {
        value: any;
    }

    export interface detail extends Base.BasePropertyInterface {
        value: any;
    }

    export interface disjoint extends Base.BasePropertyInterface {
        value: any;
    }

    export interface entailment extends Base.BasePropertyInterface {
        value: any;
    }

    export interface equals extends Base.BasePropertyInterface {
        value: any;
    }

    export interface expression extends Base.BasePropertyInterface {
        value: any;
    }

    export interface focusNode extends Base.BasePropertyInterface {
        value: any;
    }

    export interface hasValue extends Base.BasePropertyInterface {
        value: any;
    }

    export interface ignoredProperties extends Base.BasePropertyInterface {
        value: any;
    }

    export interface _in extends Base.BasePropertyInterface {
        value: any;
    }

    export interface inversePath extends Base.BasePropertyInterface {
        value: any;
    }

    export interface js extends Base.BasePropertyInterface {
        value: any;
        [sh.message];
    }

    export interface jsFunctionName extends Base.BasePropertyInterface {
        value: any;
    }

    export interface jsLibrary extends Base.BasePropertyInterface {
        value: any;
    }

    export interface jsLibraryURL extends Base.BasePropertyInterface {
        value: any;
    }

    export interface labelTemplate extends Base.BasePropertyInterface {
        value: any;
    }

    export interface languageIn extends Base.BasePropertyInterface {
        value: any;
    }

    export interface lessThan extends Base.BasePropertyInterface {
        value: any;
        value: any;
        externallyDependent;
    }

    export interface lessThanOrEquals extends Base.BasePropertyInterface {
        value: any;
        value: any;
        externallyDependent;
    }

    export interface maxCount extends Base.BasePropertyInterface {
        value: any;
        value: number;
    }

    export interface maxExclusive extends Base.BasePropertyInterface {
        value: any;
        value: number;
    }

    export interface maxInclusive extends Base.BasePropertyInterface {
        value: any;
    }

    export interface maxLength extends Base.BasePropertyInterface {
        value: any;
        value: number;
    }

    export interface message extends Base.BasePropertyInterface {
        value: any;
    }

    export interface minCount extends Base.BasePropertyInterface {
        value: any;
        value: number;
    }

    export interface minExclusive extends Base.BasePropertyInterface {
        value: any;
        value: number;
    }

    export interface minInclusive extends Base.BasePropertyInterface {
        value: any;
        value: number;
    }

    export interface minLength extends Base.BasePropertyInterface {
        value: any;
        value: number;
    }

    export interface name extends Base.BasePropertyInterface {
        value: any;
    }

    export interface namespace extends Base.BasePropertyInterface {
        value: any;
    }

    export interface node extends Base.BasePropertyInterface {
        value: any;
    }

    export interface nodeKind extends Base.BasePropertyInterface {
        value: any;
        // Check it may possibly be the *actual* class that we put in here 
        value: myNodeKind;
        _mapping;
    }

    export interface nodeValidator extends Base.BasePropertyInterface {
        value: any;
    }

    export interface oneOrMorePath extends Base.BasePropertyInterface {
        value: any;
    }

    export interface parameter extends Base.BasePropertyInterface {
        value: any;
    }

    export interface path extends Base.BasePropertyInterface {
        value: any;
    }

    export interface prefix extends Base.BasePropertyInterface {
        value: any;
    }

    export interface or extends Base.BasePropertyInterface {
        value: any;
    }

    export interface optional extends Base.BasePropertyInterface {
        value: any;
    }

    export interface property extends Base.BasePropertyInterface {
        value: any;
    }

    export interface propertyValidator extends Base.BasePropertyInterface {
        value: any;
    }

    export interface qualifiedMaxCount extends Base.BasePropertyInterface {
        value: any;
    }

    export interface qualifiedValueShape extends Base.BasePropertyInterface {
        value: any;
    }

    export interface result extends Base.BasePropertyInterface {
        value: any;
    }

    export interface resultAnnotation extends Base.BasePropertyInterface {
        value: any;
    }

    export interface resultMessage extends Base.BasePropertyInterface {
        value: any;
    }

    export interface resultPath extends Base.BasePropertyInterface {
        value: any;
    }

    export interface resultSeverity extends Base.BasePropertyInterface {
        value: any;
    }

    export interface returnType extends Base.BasePropertyInterface {
        value: any;
    }

    export interface rule extends Base.BasePropertyInterface {
        value: any;
    }

    export interface select extends Base.BasePropertyInterface {
        value: any;
    }

    export interface severity extends Base.BasePropertyInterface {
        value: any;
    }

    export interface shapesGraph extends Base.BasePropertyInterface {
        value: any;
    }

    export interface shapesGraphWellFormed extends Base.BasePropertyInterface {
        value: any;
    }

    export interface sparql extends Base.BasePropertyInterface {
        value: any;
    }

    export interface subject extends Base.BasePropertyInterface {
        value: any;
    }

    export interface targetClass extends Base.BasePropertyInterface {
        value: any;
    }

    export interface suggestedShapesGraph extends Base.BasePropertyInterface {
        value: any;
    }

    export interface sourceConstraint extends Base.BasePropertyInterface {
        value: any;
    }

    export interface sourceConstraintComponent extends Base.BasePropertyInterface {
        value: any;
    }

    export interface sourceShape extends Base.BasePropertyInterface {
        value: any;
    }

    export interface target extends Base.BasePropertyInterface {
        value: any;
    }

    export interface targetNode extends Base.BasePropertyInterface {
        value: any;
    }

    export interface targetObjectsOf extends Base.BasePropertyInterface {
        value: any;
    }

    export interface targetSubjectsOf extends Base.BasePropertyInterface {
        value: any;
    }

    export interface union extends Base.BasePropertyInterface {
        value: any;
    }

    export interface validator extends Base.BasePropertyInterface {
        value: any;
    }

    export interface value extends Base.BasePropertyInterface {
        value: any;
    }

    export interface xone extends Base.BasePropertyInterface {
        value: any;
    }

    export interface zeroOrMorePath extends Base.BasePropertyInterface {
        value: any;
    }

    export interface zeroOrOnePath extends Base.BasePropertyInterface {
        value: any;
    }
}
