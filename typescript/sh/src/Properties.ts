import { Base, ns, PropertyInterface } from "./index";

export namespace Properties {
    /** annotation property */
    export class annotationProperty extends Base.BaseProperty implements PropertyInterface.annotationProperty {
        static id: ns = ns.annotationProperty;
        static [Symbol.toStringTag]: string = "annotation property";
        static type: typeof Base.BaseProperty = Property;
        static domain = ResultAnnotation;
        static range = Property;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** condition */
    export class condition extends Base.BaseProperty implements PropertyInterface.condition {
        static id: ns = ns.condition;
        static [Symbol.toStringTag]: string = "condition";
        static type: typeof Base.BaseProperty = Property;
        static domain = Rule;
        static range = Shape;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** description */
    export class description extends Base.BaseProperty implements PropertyInterface.description {
        static id: ns = ns.description;
        static [Symbol.toStringTag]: string = "description";
        static type: typeof Base.BaseProperty = Property;
        static domain = PropertyShape;
        static range = _undefined;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** group */
    export class group extends Base.BaseProperty implements PropertyInterface.group {
        static id: ns = ns.group;
        static [Symbol.toStringTag]: string = "group";
        static type: typeof Base.BaseProperty = Property;
        static domain = PropertyShape;
        static range = PropertyGroup;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** annotation variable name */
    export class annotationVarName extends Base.BaseProperty implements PropertyInterface.annotationVarName {
        static id: ns = ns.annotationVarName;
        static [Symbol.toStringTag]: string = "annotation variable name";
        static type: typeof Base.BaseProperty = Property;
        static domain = ResultAnnotation;
        static range = _string;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** annotation value */
    export class annotationValue extends Base.BaseProperty implements PropertyInterface.annotationValue {
        static id: ns = ns.annotationValue;
        static [Symbol.toStringTag]: string = "annotation value";
        static type: typeof Base.BaseProperty = Property;
        static domain = ResultAnnotation;
        static range = _undefined;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** default value */
    export class defaultValue extends Base.BaseProperty implements PropertyInterface.defaultValue {
        static id: ns = ns.defaultValue;
        static [Symbol.toStringTag]: string = "default value";
        static type: typeof Base.BaseProperty = Property;
        static domain = PropertyShape;
        static range = _undefined;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** order */
    export class order extends Base.BaseProperty implements PropertyInterface.order {
        static id: ns = ns.order;
        static [Symbol.toStringTag]: string = "order";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = _undefined;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** qualified min count */
    export class qualifiedMinCount extends Base.BaseProperty implements PropertyInterface.qualifiedMinCount {
        static id: ns = ns.qualifiedMinCount;
        static [Symbol.toStringTag]: string = "qualified min count";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = integer;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** not */
    export class not extends Base.BaseProperty implements PropertyInterface.not {
        static id: ns = ns.not;
        static [Symbol.toStringTag]: string = "not";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = Shape;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** filter shape */
    export class filterShape extends Base.BaseProperty implements PropertyInterface.filterShape {
        static id: ns = ns.filterShape;
        static [Symbol.toStringTag]: string = "filter shape";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = Shape;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** flags */
    export class flags extends Base.BaseProperty implements PropertyInterface.flags {
        static id: ns = ns.flags;
        static [Symbol.toStringTag]: string = "flags";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = _string;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** pattern */
    export class pattern extends Base.BaseProperty implements PropertyInterface.pattern {
        static id: ns = ns.pattern;
        static [Symbol.toStringTag]: string = "pattern";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = _string;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
        // Note that this deviates slightly from
        // the normal handling of pattern and flags
        // with everything currently handled *just* in
        // the pattern. Long term we could use some sort of proxy here
        value: RegExp;

        [sh.validator](node: Base.BaseClass): boolean {
            return this.value.test(node.value);
        }

        [sh.message](): string {
            return `Should match the pattern ${this.value.source}`;
        }
    }

    /** object */
    export class _object extends Base.BaseProperty implements PropertyInterface._object {
        static id: ns = ns._object;
        static [Symbol.toStringTag]: string = "object";
        static type: typeof Base.BaseProperty = Property;
        static domain = TripleRule;
        static range = _undefined;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** intersection */
    export class intersection extends Base.BaseProperty implements PropertyInterface.intersection {
        static id: ns = ns.intersection;
        static [Symbol.toStringTag]: string = "intersection";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = _undefined;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** nodes */
    export class nodes extends Base.BaseProperty implements PropertyInterface.nodes {
        static id: ns = ns.nodes;
        static [Symbol.toStringTag]: string = "nodes";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = _undefined;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** predicate */
    export class predicate extends Base.BaseProperty implements PropertyInterface.predicate {
        static id: ns = ns.predicate;
        static [Symbol.toStringTag]: string = "predicate";
        static type: typeof Base.BaseProperty = Property;
        static domain = TripleRule;
        static range = _undefined;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** qualified value shapes disjoint */
    export class qualifiedValueShapesDisjoint extends Base.BaseProperty implements PropertyInterface.qualifiedValueShapesDisjoint {
        static id: ns = ns.qualifiedValueShapesDisjoint;
        static [Symbol.toStringTag]: string = "qualified value shapes disjoint";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = _boolean;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** unique languages */
    export class uniqueLang extends Base.BaseProperty implements PropertyInterface.uniqueLang {
        static id: ns = ns.uniqueLang;
        static [Symbol.toStringTag]: string = "unique languages";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = _boolean;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** prefixes */
    export class prefixes extends Base.BaseProperty implements PropertyInterface.prefixes {
        static id: ns = ns.prefixes;
        static [Symbol.toStringTag]: string = "prefixes";
        static type: typeof Base.BaseProperty = Property;
        static domain = SPARQLExecutable;
        static range = Ontology;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** ask */
    export class ask extends Base.BaseProperty implements PropertyInterface.ask {
        static id: ns = ns.ask;
        static [Symbol.toStringTag]: string = "ask";
        static type: typeof Base.BaseProperty = Property;
        static domain = SPARQLAskExecutable;
        static range = _string;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** update */
    export class update extends Base.BaseProperty implements PropertyInterface.update {
        static id: ns = ns.update;
        static [Symbol.toStringTag]: string = "update";
        static type: typeof Base.BaseProperty = Property;
        static domain = SPARQLUpdateExecutable;
        static range = _string;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** alternative path */
    export class alternativePath extends Base.BaseProperty implements PropertyInterface.alternativePath {
        static id: ns = ns.alternativePath;
        static [Symbol.toStringTag]: string = "alternative path";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = List;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** and */
    export class and extends Base.BaseProperty implements PropertyInterface.and {
        static id: ns = ns.and;
        static [Symbol.toStringTag]: string = "and";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = List;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** class */
    export class _class extends Base.BaseProperty implements PropertyInterface._class {
        static id: ns = ns._class;
        static [Symbol.toStringTag]: string = "class";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = Class;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** closed */
    export class closed extends Base.BaseProperty implements PropertyInterface.closed {
        static id: ns = ns.closed;
        static [Symbol.toStringTag]: string = "closed";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = _boolean;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** conforms */
    export class conforms extends Base.BaseProperty implements PropertyInterface.conforms {
        static id: ns = ns.conforms;
        static [Symbol.toStringTag]: string = "conforms";
        static type: typeof Base.BaseProperty = Property;
        static domain = ValidationReport;
        static range = _boolean;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** construct */
    export class construct extends Base.BaseProperty implements PropertyInterface.construct {
        static id: ns = ns.construct;
        static [Symbol.toStringTag]: string = "construct";
        static type: typeof Base.BaseProperty = Property;
        static domain = SPARQLConstructExecutable;
        static range = _string;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** datatype */
    export class datatype extends Base.BaseProperty implements PropertyInterface.datatype {
        static id: ns = ns.datatype;
        static [Symbol.toStringTag]: string = "datatype";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = Datatype;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** deactivated */
    export class deactivated extends Base.BaseProperty implements PropertyInterface.deactivated {
        static id: ns = ns.deactivated;
        static [Symbol.toStringTag]: string = "deactivated";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = _boolean;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** declare */
    export class declare extends Base.BaseProperty implements PropertyInterface.declare {
        static id: ns = ns.declare;
        static [Symbol.toStringTag]: string = "declare";
        static type: typeof Base.BaseProperty = Property;
        static domain = Ontology;
        static range = PrefixDeclaration;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** detail */
    export class detail extends Base.BaseProperty implements PropertyInterface.detail {
        static id: ns = ns.detail;
        static [Symbol.toStringTag]: string = "detail";
        static type: typeof Base.BaseProperty = Property;
        static domain = AbstractResult;
        static range = AbstractResult;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** disjoint */
    export class disjoint extends Base.BaseProperty implements PropertyInterface.disjoint {
        static id: ns = ns.disjoint;
        static [Symbol.toStringTag]: string = "disjoint";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = Property;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** entailment */
    export class entailment extends Base.BaseProperty implements PropertyInterface.entailment {
        static id: ns = ns.entailment;
        static [Symbol.toStringTag]: string = "entailment";
        static type: typeof Base.BaseProperty = Property;
        static domain = Ontology;
        static range = Resource;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** equals */
    export class equals extends Base.BaseProperty implements PropertyInterface.equals {
        static id: ns = ns.equals;
        static [Symbol.toStringTag]: string = "equals";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = Property;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** expression */
    export class expression extends Base.BaseProperty implements PropertyInterface.expression {
        static id: ns = ns.expression;
        static [Symbol.toStringTag]: string = "expression";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = _undefined;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** focus node */
    export class focusNode extends Base.BaseProperty implements PropertyInterface.focusNode {
        static id: ns = ns.focusNode;
        static [Symbol.toStringTag]: string = "focus node";
        static type: typeof Base.BaseProperty = Property;
        static domain = AbstractResult;
        static range = _undefined;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** has value */
    export class hasValue extends Base.BaseProperty implements PropertyInterface.hasValue {
        static id: ns = ns.hasValue;
        static [Symbol.toStringTag]: string = "has value";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = _undefined;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** ignored properties */
    export class ignoredProperties extends Base.BaseProperty implements PropertyInterface.ignoredProperties {
        static id: ns = ns.ignoredProperties;
        static [Symbol.toStringTag]: string = "ignored properties";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = List;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** in */
    export class _in extends Base.BaseProperty implements PropertyInterface._in {
        static id: ns = ns._in;
        static [Symbol.toStringTag]: string = "in";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = List;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** inverse path */
    export class inversePath extends Base.BaseProperty implements PropertyInterface.inversePath {
        static id: ns = ns.inversePath;
        static [Symbol.toStringTag]: string = "inverse path";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = Resource;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** JavaScript constraint */
    export class js extends Base.BaseProperty implements PropertyInterface.js {
        static id: ns = ns.js;
        static [Symbol.toStringTag]: string = "JavaScript constraint";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = JSConstraint;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
        [sh.message] = `Does not pass the function ${this.value.jsFunctionName}`;

        static [sh.validator](node: Base.BaseClass): any {
            const func = require(this.jsLibrary)[this.jsFunctionName];
            return func(R.path(this.parameter, node));
        }
    }

    /** JavaScript function name */
    export class jsFunctionName extends Base.BaseProperty implements PropertyInterface.jsFunctionName {
        static id: ns = ns.jsFunctionName;
        static [Symbol.toStringTag]: string = "JavaScript function name";
        static type: typeof Base.BaseProperty = Property;
        static domain = JSExecutable;
        static range = _string;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** JavaScript library */
    export class jsLibrary extends Base.BaseProperty implements PropertyInterface.jsLibrary {
        static id: ns = ns.jsLibrary;
        static [Symbol.toStringTag]: string = "JavaScript library";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = JSLibrary;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** JavaScript library URL */
    export class jsLibraryURL extends Base.BaseProperty implements PropertyInterface.jsLibraryURL {
        static id: ns = ns.jsLibraryURL;
        static [Symbol.toStringTag]: string = "JavaScript library URL";
        static type: typeof Base.BaseProperty = Property;
        static domain = JSLibrary;
        static range = anyURI;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** label template */
    export class labelTemplate extends Base.BaseProperty implements PropertyInterface.labelTemplate {
        static id: ns = ns.labelTemplate;
        static [Symbol.toStringTag]: string = "label template";
        static type: typeof Base.BaseProperty = Property;
        static domain = Parameterizable;
        static range = _undefined;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** language in */
    export class languageIn extends Base.BaseProperty implements PropertyInterface.languageIn {
        static id: ns = ns.languageIn;
        static [Symbol.toStringTag]: string = "language in";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = List;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** less than */
    export class lessThan extends Base.BaseProperty implements PropertyInterface.lessThan {
        static id: ns = ns.lessThan;
        static [Symbol.toStringTag]: string = "less than";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = Property;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
        value: any;
        externallyDependent = true;

        async [sh.validator](): Promise<boolean> {
            return true; // TODO
        }

        async [sh.message](): Promise<string> {
            return '';
        }
    }

    /** less than or equals */
    export class lessThanOrEquals extends Base.BaseProperty implements PropertyInterface.lessThanOrEquals {
        static id: ns = ns.lessThanOrEquals;
        static [Symbol.toStringTag]: string = "less than or equals";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = Property;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
        value: any;
        externallyDependent = true;

        async [sh.validator](): Promise<boolean> {
            return true; // TODO
        }

        async [sh.message](): Promise<string> {
            return '';
        }
    }

    /** max count */
    export class maxCount extends Base.BaseProperty implements PropertyInterface.maxCount {
        static id: ns = ns.maxCount;
        static [Symbol.toStringTag]: string = "max count";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = integer;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
        value: number;
    }

    /** max exclusive */
    export class maxExclusive extends Base.BaseProperty implements PropertyInterface.maxExclusive {
        static id: ns = ns.maxExclusive;
        static [Symbol.toStringTag]: string = "max exclusive";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = _undefined;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
        value: number;

        static merge(constraints: number[]): number {
            return Math.min(...constraints);
        }

        [sh.validator](node: Base.BaseClass): boolean {
            return node.value < this.value;
        }

        [sh.message](): string {
            return `value should be strictly less than ${this.value}`;
        }
    }

    /** max inclusive */
    export class maxInclusive extends Base.BaseProperty implements PropertyInterface.maxInclusive {
        static id: ns = ns.maxInclusive;
        static [Symbol.toStringTag]: string = "max inclusive";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = _undefined;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** max length */
    export class maxLength extends Base.BaseProperty implements PropertyInterface.maxLength {
        static id: ns = ns.maxLength;
        static [Symbol.toStringTag]: string = "max length";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = integer;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
        value: number;

        static merge(constraints: number[]): number {
            return Math.min(...constraints);
        }

        [sh.validator](node: Base.BaseClass): boolean {
            return node.value.length <= this.value;
        }

        [sh.message](): string {
            return `value should have at most ${this.value} characters`;
        }
    }

    /** message */
    export class message extends Base.BaseProperty implements PropertyInterface.message {
        static id: ns = ns.message;
        static [Symbol.toStringTag]: string = "message";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = _undefined;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** min count */
    export class minCount extends Base.BaseProperty implements PropertyInterface.minCount {
        static id: ns = ns.minCount;
        static [Symbol.toStringTag]: string = "min count";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = integer;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
        value: number;

        static merge(constraints: number[]): number {
            return Math.max(...constraints);
        }
    }

    /** min exclusive */
    export class minExclusive extends Base.BaseProperty implements PropertyInterface.minExclusive {
        static id: ns = ns.minExclusive;
        static [Symbol.toStringTag]: string = "min exclusive";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = _undefined;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
        value: number;

        static merge(constraints: number[]): number {
            return Math.max(...constraints);
        }

        [sh.validator](node: Base.BaseClass): boolean {
            return node.value > this.value;
        }

        [sh.message](): string {
            return `value should be strictly more than ${this.value}`;
        }
    }

    /** min inclusive */
    export class minInclusive extends Base.BaseProperty implements PropertyInterface.minInclusive {
        static id: ns = ns.minInclusive;
        static [Symbol.toStringTag]: string = "min inclusive";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = _undefined;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
        value: number;

        static merge(constraints: number[]): number {
            return Math.max(...constraints);
        }

        [sh.validator](node: Base.BaseClass): boolean {
            return node.value >= this.value;
        }

        [sh.message](): string {
            return `value should be greater than or equal to ${this.value}`;
        }
    }

    /** min length */
    export class minLength extends Base.BaseProperty implements PropertyInterface.minLength {
        static id: ns = ns.minLength;
        static [Symbol.toStringTag]: string = "min length";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = integer;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
        value: number;

        static merge(constraints: number[]): number {
            return Math.max(...constraints);
        }

        [sh.validator](node: Base.BaseClass): boolean {
            return node.value.length >= this.value;
        }

        [sh.message](): string {
            return `value should have at least ${this.value} characters`;
        }
    }

    /** name */
    export class name extends Base.BaseProperty implements PropertyInterface.name {
        static id: ns = ns.name;
        static [Symbol.toStringTag]: string = "name";
        static type: typeof Base.BaseProperty = Property;
        static domain = PropertyShape;
        static range = _undefined;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** namespace */
    export class namespace extends Base.BaseProperty implements PropertyInterface.namespace {
        static id: ns = ns.namespace;
        static [Symbol.toStringTag]: string = "namespace";
        static type: typeof Base.BaseProperty = Property;
        static domain = PrefixDeclaration;
        static range = anyURI;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** node */
    export class node extends Base.BaseProperty implements PropertyInterface.node {
        static id: ns = ns.node;
        static [Symbol.toStringTag]: string = "node";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = NodeShape;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** node kind */
    export class nodeKind extends Base.BaseProperty implements PropertyInterface.nodeKind {
        static id: ns = ns.nodeKind;
        static [Symbol.toStringTag]: string = "node kind";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = NodeKind;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
        // Check it may possibly be the *actual* class that we put in here 
        value: myNodeKind;
        _mapping = {
            [sh.BlankNodeOrLiteral]: [sh.BlankNode, sh.Literal],
            [sh.BlankNodeOrIRI]: [sh.BlankNode, sh.IRI],
            [sh.IRIOrLiteral]: [sh.IRI, sh.Literal],
            [sh.BlankNode]: [sh.BlankNode],
            [sh.IRI]: [sh.IRI],
            [sh.Literal]: [sh.Literal]
        };

        static merge(constraints: myNodeKind[]): any {
            const allowed = constraints.reduce((allowedList: myNodeKind[], constraint: myNodeKind) => {
                const toIntersect = (this._mapping)[constraint];
                return R.intersection(toIntersect, allowedList);
            }, [
                sh.BlankNode,
                sh.BlankNodeOrIRI,
                sh.BlankNodeOrLiteral,
                sh.IRI,
                sh.IRIOrLiteral,
                sh.Literal
            ]);
            switch (allowed.length) {
                case 1: return allowed[0] as myNodeKind;
                case 2:
                    switch (R.difference([sh.IRI, sh.Literal, sh.BlankNode], allowed)[0]) {
                        case sh.BlankNode: return sh.IRIOrLiteral;
                        case sh.IRI: return sh.BlankNodeOrLiteral;
                        default: return sh.BlankNodeOrIRI;
                    }
                default:
                    throw new Error('There is no way of merging these constraint components');
            }
        }

        [sh.validator](node: Base.BaseClass): boolean {
            return nodeKind._mapping[this.value].some(name => {
                node instanceof ({
                    [sh.IRI]: IRI,
                    [sh.BlankNode]: BlankNode,
                    [sh.Literal]: Literal
                })[name];
            });
        }

        [sh.message](node: Base.BaseClass): string {
            return `This node, which is ${node.toString()} should be one of the following: ${nodeKind._mapping[this.value]}`;
        }
    }

    /** shape validator */
    export class nodeValidator extends Base.BaseProperty implements PropertyInterface.nodeValidator {
        static id: ns = ns.nodeValidator;
        static [Symbol.toStringTag]: string = "shape validator";
        static type: typeof Base.BaseProperty = Property;
        static domain = ConstraintComponent;
        static range = Validator;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** one or more path */
    export class oneOrMorePath extends Base.BaseProperty implements PropertyInterface.oneOrMorePath {
        static id: ns = ns.oneOrMorePath;
        static [Symbol.toStringTag]: string = "one or more path";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = Resource;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** parameter */
    export class parameter extends Base.BaseProperty implements PropertyInterface.parameter {
        static id: ns = ns.parameter;
        static [Symbol.toStringTag]: string = "parameter";
        static type: typeof Base.BaseProperty = Property;
        static domain = Parameterizable;
        static range = Parameter;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** path */
    export class path extends Base.BaseProperty implements PropertyInterface.path {
        static id: ns = ns.path;
        static [Symbol.toStringTag]: string = "path";
        static type: typeof Base.BaseProperty = Property;
        static domain = PropertyShape;
        static range = Resource;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** prefix */
    export class prefix extends Base.BaseProperty implements PropertyInterface.prefix {
        static id: ns = ns.prefix;
        static [Symbol.toStringTag]: string = "prefix";
        static type: typeof Base.BaseProperty = Property;
        static domain = PrefixDeclaration;
        static range = _string;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** or */
    export class or extends Base.BaseProperty implements PropertyInterface.or {
        static id: ns = ns.or;
        static [Symbol.toStringTag]: string = "or";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = List;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** optional */
    export class optional extends Base.BaseProperty implements PropertyInterface.optional {
        static id: ns = ns.optional;
        static [Symbol.toStringTag]: string = "optional";
        static type: typeof Base.BaseProperty = Property;
        static domain = Parameter;
        static range = _boolean;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** property */
    export class property extends Base.BaseProperty implements PropertyInterface.property {
        static id: ns = ns.property;
        static [Symbol.toStringTag]: string = "property";
        static type: typeof Base.BaseProperty = Property;
        static domain = Shape;
        static range = PropertyShape;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** property validator */
    export class propertyValidator extends Base.BaseProperty implements PropertyInterface.propertyValidator {
        static id: ns = ns.propertyValidator;
        static [Symbol.toStringTag]: string = "property validator";
        static type: typeof Base.BaseProperty = Property;
        static domain = ConstraintComponent;
        static range = Validator;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** qualified max count */
    export class qualifiedMaxCount extends Base.BaseProperty implements PropertyInterface.qualifiedMaxCount {
        static id: ns = ns.qualifiedMaxCount;
        static [Symbol.toStringTag]: string = "qualified max count";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = integer;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** qualified value shape */
    export class qualifiedValueShape extends Base.BaseProperty implements PropertyInterface.qualifiedValueShape {
        static id: ns = ns.qualifiedValueShape;
        static [Symbol.toStringTag]: string = "qualified value shape";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = Shape;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** result */
    export class result extends Base.BaseProperty implements PropertyInterface.result {
        static id: ns = ns.result;
        static [Symbol.toStringTag]: string = "result";
        static type: typeof Base.BaseProperty = Property;
        static domain = ValidationReport;
        static range = ValidationResult;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** result annotation */
    export class resultAnnotation extends Base.BaseProperty implements PropertyInterface.resultAnnotation {
        static id: ns = ns.resultAnnotation;
        static [Symbol.toStringTag]: string = "result annotation";
        static type: typeof Base.BaseProperty = Property;
        static domain = SPARQLSelectValidator;
        static range = ResultAnnotation;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** result message */
    export class resultMessage extends Base.BaseProperty implements PropertyInterface.resultMessage {
        static id: ns = ns.resultMessage;
        static [Symbol.toStringTag]: string = "result message";
        static type: typeof Base.BaseProperty = Property;
        static domain = AbstractResult;
        static range = _undefined;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** result path */
    export class resultPath extends Base.BaseProperty implements PropertyInterface.resultPath {
        static id: ns = ns.resultPath;
        static [Symbol.toStringTag]: string = "result path";
        static type: typeof Base.BaseProperty = Property;
        static domain = AbstractResult;
        static range = Resource;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** result severity */
    export class resultSeverity extends Base.BaseProperty implements PropertyInterface.resultSeverity {
        static id: ns = ns.resultSeverity;
        static [Symbol.toStringTag]: string = "result severity";
        static type: typeof Base.BaseProperty = Property;
        static domain = AbstractResult;
        static range = Severity;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** return type */
    export class returnType extends Base.BaseProperty implements PropertyInterface.returnType {
        static id: ns = ns.returnType;
        static [Symbol.toStringTag]: string = "return type";
        static type: typeof Base.BaseProperty = Property;
        static domain = Function;
        static range = Class;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** rule */
    export class rule extends Base.BaseProperty implements PropertyInterface.rule {
        static id: ns = ns.rule;
        static [Symbol.toStringTag]: string = "rule";
        static type: typeof Base.BaseProperty = Property;
        static domain = Shape;
        static range = Rule;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** select */
    export class select extends Base.BaseProperty implements PropertyInterface.select {
        static id: ns = ns.select;
        static [Symbol.toStringTag]: string = "select";
        static type: typeof Base.BaseProperty = Property;
        static domain = SPARQLSelectExecutable;
        static range = _string;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** severity */
    export class severity extends Base.BaseProperty implements PropertyInterface.severity {
        static id: ns = ns.severity;
        static [Symbol.toStringTag]: string = "severity";
        static type: typeof Base.BaseProperty = Property;
        static domain = Shape;
        static range = Severity;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** shapes graph */
    export class shapesGraph extends Base.BaseProperty implements PropertyInterface.shapesGraph {
        static id: ns = ns.shapesGraph;
        static [Symbol.toStringTag]: string = "shapes graph";
        static type: typeof Base.BaseProperty = Property;
        static domain = Ontology;
        static range = Ontology;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** shapes graph well-formed */
    export class shapesGraphWellFormed extends Base.BaseProperty implements PropertyInterface.shapesGraphWellFormed {
        static id: ns = ns.shapesGraphWellFormed;
        static [Symbol.toStringTag]: string = "shapes graph well-formed";
        static type: typeof Base.BaseProperty = Property;
        static domain = ValidationReport;
        static range = _boolean;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** constraint (in SPARQL) */
    export class sparql extends Base.BaseProperty implements PropertyInterface.sparql {
        static id: ns = ns.sparql;
        static [Symbol.toStringTag]: string = "constraint (in SPARQL)";
        static type: typeof Base.BaseProperty = Property;
        static domain = Shape;
        static range = SPARQLConstraint;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** subject */
    export class subject extends Base.BaseProperty implements PropertyInterface.subject {
        static id: ns = ns.subject;
        static [Symbol.toStringTag]: string = "subject";
        static type: typeof Base.BaseProperty = Property;
        static domain = TripleRule;
        static range = _undefined;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** target class */
    export class targetClass extends Base.BaseProperty implements PropertyInterface.targetClass {
        static id: ns = ns.targetClass;
        static [Symbol.toStringTag]: string = "target class";
        static type: typeof Base.BaseProperty = Property;
        static domain = Shape;
        static range = Class;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** suggested shapes graph */
    export class suggestedShapesGraph extends Base.BaseProperty implements PropertyInterface.suggestedShapesGraph {
        static id: ns = ns.suggestedShapesGraph;
        static [Symbol.toStringTag]: string = "suggested shapes graph";
        static type: typeof Base.BaseProperty = Property;
        static domain = Ontology;
        static range = Ontology;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** source constraint */
    export class sourceConstraint extends Base.BaseProperty implements PropertyInterface.sourceConstraint {
        static id: ns = ns.sourceConstraint;
        static [Symbol.toStringTag]: string = "source constraint";
        static type: typeof Base.BaseProperty = Property;
        static domain = AbstractResult;
        static range = _undefined;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** source constraint component */
    export class sourceConstraintComponent extends Base.BaseProperty implements PropertyInterface.sourceConstraintComponent {
        static id: ns = ns.sourceConstraintComponent;
        static [Symbol.toStringTag]: string = "source constraint component";
        static type: typeof Base.BaseProperty = Property;
        static domain = AbstractResult;
        static range = ConstraintComponent;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** source shape */
    export class sourceShape extends Base.BaseProperty implements PropertyInterface.sourceShape {
        static id: ns = ns.sourceShape;
        static [Symbol.toStringTag]: string = "source shape";
        static type: typeof Base.BaseProperty = Property;
        static domain = AbstractResult;
        static range = Shape;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** target */
    export class target extends Base.BaseProperty implements PropertyInterface.target {
        static id: ns = ns.target;
        static [Symbol.toStringTag]: string = "target";
        static type: typeof Base.BaseProperty = Property;
        static domain = Shape;
        static range = Target;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** target node */
    export class targetNode extends Base.BaseProperty implements PropertyInterface.targetNode {
        static id: ns = ns.targetNode;
        static [Symbol.toStringTag]: string = "target node";
        static type: typeof Base.BaseProperty = Property;
        static domain = Shape;
        static range = _undefined;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** target objects of */
    export class targetObjectsOf extends Base.BaseProperty implements PropertyInterface.targetObjectsOf {
        static id: ns = ns.targetObjectsOf;
        static [Symbol.toStringTag]: string = "target objects of";
        static type: typeof Base.BaseProperty = Property;
        static domain = Shape;
        static range = Property;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** target subjects of */
    export class targetSubjectsOf extends Base.BaseProperty implements PropertyInterface.targetSubjectsOf {
        static id: ns = ns.targetSubjectsOf;
        static [Symbol.toStringTag]: string = "target subjects of";
        static type: typeof Base.BaseProperty = Property;
        static domain = Shape;
        static range = Property;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** union */
    export class union extends Base.BaseProperty implements PropertyInterface.union {
        static id: ns = ns.union;
        static [Symbol.toStringTag]: string = "union";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = _undefined;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** validator */
    export class validator extends Base.BaseProperty implements PropertyInterface.validator {
        static id: ns = ns.validator;
        static [Symbol.toStringTag]: string = "validator";
        static type: typeof Base.BaseProperty = Property;
        static domain = ConstraintComponent;
        static range = Validator;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** value */
    export class value extends Base.BaseProperty implements PropertyInterface.value {
        static id: ns = ns.value;
        static [Symbol.toStringTag]: string = "value";
        static type: typeof Base.BaseProperty = Property;
        static domain = AbstractResult;
        static range = _undefined;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** exactly one */
    export class xone extends Base.BaseProperty implements PropertyInterface.xone {
        static id: ns = ns.xone;
        static [Symbol.toStringTag]: string = "exactly one";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = List;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** zero or more path */
    export class zeroOrMorePath extends Base.BaseProperty implements PropertyInterface.zeroOrMorePath {
        static id: ns = ns.zeroOrMorePath;
        static [Symbol.toStringTag]: string = "zero or more path";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = Resource;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }

    /** zero or one path */
    export class zeroOrOnePath extends Base.BaseProperty implements PropertyInterface.zeroOrOnePath {
        static id: ns = ns.zeroOrOnePath;
        static [Symbol.toStringTag]: string = "zero or one path";
        static type: typeof Base.BaseProperty = Property;
        static domain = _undefined;
        static range = Resource;
        static subPropertyOf: (typeof Base.ClassBase)[] = [];
        static classValidators: Base.Validator[] = [];
        static OntologyValidators: Base.Validator[] = [];
        value: any;
    }
}
