import { Base, ClassInterface, ns } from "./index";

export namespace Classes {
    export class _ extends Base.ClassBase implements ClassInterface._ {
        static id: ns = ns._;
        static [Symbol.toStringTag]: string = "W3C Shapes Constraint Language (SHACL) Vocabulary";
        static type: typeof Base.ClassBase = Ontology;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class AbstractResult extends Base.ClassBase implements ClassInterface.AbstractResult {
        static id: ns = ns.AbstractResult;
        static [Symbol.toStringTag]: string = "Abstract result";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [Resource];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class AndConstraintComponent extends Base.ClassBase implements ClassInterface.AndConstraintComponent {
        static id: ns = ns.AndConstraintComponent;
        static [Symbol.toStringTag]: string = "And constraint component";
        static type: typeof Base.ClassBase = ConstraintComponent;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class AndConstraintComponent_and extends Base.ClassBase implements ClassInterface.AndConstraintComponent_and {
        static id: ns = ns.AndConstraintComponent_and;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class BlankNode extends Base.ClassBase implements ClassInterface.BlankNode {
        static id: ns = ns.BlankNode;
        static [Symbol.toStringTag]: string = "Blank node";
        static type: typeof Base.ClassBase = NodeKind;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class BlankNodeOrIRI extends Base.ClassBase implements ClassInterface.BlankNodeOrIRI {
        static id: ns = ns.BlankNodeOrIRI;
        static [Symbol.toStringTag]: string = "Blank node or IRI";
        static type: typeof Base.ClassBase = NodeKind;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class BlankNodeOrLiteral extends Base.ClassBase implements ClassInterface.BlankNodeOrLiteral {
        static id: ns = ns.BlankNodeOrLiteral;
        static [Symbol.toStringTag]: string = "Blank node or literal";
        static type: typeof Base.ClassBase = NodeKind;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class ClassConstraintComponent extends Base.ClassBase implements ClassInterface.ClassConstraintComponent {
        static id: ns = ns.ClassConstraintComponent;
        static [Symbol.toStringTag]: string = "Class constraint component";
        static type: typeof Base.ClassBase = ConstraintComponent;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class ClassConstraintComponent_class extends Base.ClassBase implements ClassInterface.ClassConstraintComponent_class {
        static id: ns = ns.ClassConstraintComponent_class;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class ClosedConstraintComponent extends Base.ClassBase implements ClassInterface.ClosedConstraintComponent {
        static id: ns = ns.ClosedConstraintComponent;
        static [Symbol.toStringTag]: string = "Closed constraint component";
        static type: typeof Base.ClassBase = ConstraintComponent;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class ClosedConstraintComponent_closed extends Base.ClassBase implements ClassInterface.ClosedConstraintComponent_closed {
        static id: ns = ns.ClosedConstraintComponent_closed;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class ClosedConstraintComponent_ignoredProperties extends Base.ClassBase implements ClassInterface.ClosedConstraintComponent_ignoredProperties {
        static id: ns = ns.ClosedConstraintComponent_ignoredProperties;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class ConstraintComponent extends Base.ClassBase implements ClassInterface.ConstraintComponent {
        static id: ns = ns.ConstraintComponent;
        static [Symbol.toStringTag]: string = "Constraint component";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [Parameterizable];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class DatatypeConstraintComponent extends Base.ClassBase implements ClassInterface.DatatypeConstraintComponent {
        static id: ns = ns.DatatypeConstraintComponent;
        static [Symbol.toStringTag]: string = "Datatype constraint component";
        static type: typeof Base.ClassBase = ConstraintComponent;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class DatatypeConstraintComponent_datatype extends Base.ClassBase implements ClassInterface.DatatypeConstraintComponent_datatype {
        static id: ns = ns.DatatypeConstraintComponent_datatype;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class DisjointConstraintComponent extends Base.ClassBase implements ClassInterface.DisjointConstraintComponent {
        static id: ns = ns.DisjointConstraintComponent;
        static [Symbol.toStringTag]: string = "Disjoint constraint component";
        static type: typeof Base.ClassBase = ConstraintComponent;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class DisjointConstraintComponent_disjoint extends Base.ClassBase implements ClassInterface.DisjointConstraintComponent_disjoint {
        static id: ns = ns.DisjointConstraintComponent_disjoint;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class EqualsConstraintComponent extends Base.ClassBase implements ClassInterface.EqualsConstraintComponent {
        static id: ns = ns.EqualsConstraintComponent;
        static [Symbol.toStringTag]: string = "Equals constraint component";
        static type: typeof Base.ClassBase = ConstraintComponent;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class EqualsConstraintComponent_equals extends Base.ClassBase implements ClassInterface.EqualsConstraintComponent_equals {
        static id: ns = ns.EqualsConstraintComponent_equals;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class ExpressionConstraintComponent extends Base.ClassBase implements ClassInterface.ExpressionConstraintComponent {
        static id: ns = ns.ExpressionConstraintComponent;
        static [Symbol.toStringTag]: string = "Expression constraint component";
        static type: typeof Base.ClassBase = ConstraintComponent;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class ExpressionConstraintComponent_expression extends Base.ClassBase implements ClassInterface.ExpressionConstraintComponent_expression {
        static id: ns = ns.ExpressionConstraintComponent_expression;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class Function extends Base.ClassBase implements ClassInterface.Function {
        static id: ns = ns.Function;
        static [Symbol.toStringTag]: string = "Function";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [Parameterizable];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class HasValueConstraintComponent extends Base.ClassBase implements ClassInterface.HasValueConstraintComponent {
        static id: ns = ns.HasValueConstraintComponent;
        static [Symbol.toStringTag]: string = "Has-value constraint component";
        static type: typeof Base.ClassBase = ConstraintComponent;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class HasValueConstraintComponent_hasValue extends Base.ClassBase implements ClassInterface.HasValueConstraintComponent_hasValue {
        static id: ns = ns.HasValueConstraintComponent_hasValue;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class IRI extends Base.ClassBase implements ClassInterface.IRI {
        static id: ns = ns.IRI;
        static [Symbol.toStringTag]: string = "IRI";
        static type: typeof Base.ClassBase = NodeKind;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class IRIOrLiteral extends Base.ClassBase implements ClassInterface.IRIOrLiteral {
        static id: ns = ns.IRIOrLiteral;
        static [Symbol.toStringTag]: string = "IRI or literal";
        static type: typeof Base.ClassBase = NodeKind;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class InConstraintComponent extends Base.ClassBase implements ClassInterface.InConstraintComponent {
        static id: ns = ns.InConstraintComponent;
        static [Symbol.toStringTag]: string = "In constraint component";
        static type: typeof Base.ClassBase = ConstraintComponent;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class InConstraintComponent_in extends Base.ClassBase implements ClassInterface.InConstraintComponent_in {
        static id: ns = ns.InConstraintComponent_in;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class Info extends Base.ClassBase implements ClassInterface.Info {
        static id: ns = ns.Info;
        static [Symbol.toStringTag]: string = "Info";
        static type: typeof Base.ClassBase = Severity;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class JSConstraint extends Base.ClassBase implements ClassInterface.JSConstraint {
        static id: ns = ns.JSConstraint;
        static [Symbol.toStringTag]: string = "JavaScript-based constraint";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [JSExecutable];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class JSConstraint_js extends Base.ClassBase implements ClassInterface.JSConstraint_js {
        static id: ns = ns.JSConstraint_js;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class JSConstraintComponent extends Base.ClassBase implements ClassInterface.JSConstraintComponent {
        static id: ns = ns.JSConstraintComponent;
        static [Symbol.toStringTag]: string = "JavaScript constraint component";
        static type: typeof Base.ClassBase = ConstraintComponent;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class JSExecutable extends Base.ClassBase implements ClassInterface.JSExecutable {
        static id: ns = ns.JSExecutable;
        static [Symbol.toStringTag]: string = "JavaScript executable";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [Resource];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class JSFunction extends Base.ClassBase implements ClassInterface.JSFunction {
        static id: ns = ns.JSFunction;
        static [Symbol.toStringTag]: string = "JavaScript function";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [Function, JSExecutable];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class JSLibrary extends Base.ClassBase implements ClassInterface.JSLibrary {
        static id: ns = ns.JSLibrary;
        static [Symbol.toStringTag]: string = "JavaScript library";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [Resource];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class JSRule extends Base.ClassBase implements ClassInterface.JSRule {
        static id: ns = ns.JSRule;
        static [Symbol.toStringTag]: string = "JavaScript rule";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [Rule, JSExecutable];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class JSTarget extends Base.ClassBase implements ClassInterface.JSTarget {
        static id: ns = ns.JSTarget;
        static [Symbol.toStringTag]: string = "JavaScript target";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [Target, JSExecutable];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class LanguageInConstraintComponent extends Base.ClassBase implements ClassInterface.LanguageInConstraintComponent {
        static id: ns = ns.LanguageInConstraintComponent;
        static [Symbol.toStringTag]: string = "Language-in constraint component";
        static type: typeof Base.ClassBase = ConstraintComponent;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class LanguageInConstraintComponent_languageIn extends Base.ClassBase implements ClassInterface.LanguageInConstraintComponent_languageIn {
        static id: ns = ns.LanguageInConstraintComponent_languageIn;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class LessThanConstraintComponent extends Base.ClassBase implements ClassInterface.LessThanConstraintComponent {
        static id: ns = ns.LessThanConstraintComponent;
        static [Symbol.toStringTag]: string = "Less-than constraint component";
        static type: typeof Base.ClassBase = ConstraintComponent;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class LessThanConstraintComponent_lessThan extends Base.ClassBase implements ClassInterface.LessThanConstraintComponent_lessThan {
        static id: ns = ns.LessThanConstraintComponent_lessThan;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class LessThanOrEqualsConstraintComponent extends Base.ClassBase implements ClassInterface.LessThanOrEqualsConstraintComponent {
        static id: ns = ns.LessThanOrEqualsConstraintComponent;
        static [Symbol.toStringTag]: string = "less-than-or-equals constraint component";
        static type: typeof Base.ClassBase = ConstraintComponent;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class LessThanOrEqualsConstraintComponent_lessThanOrEquals extends Base.ClassBase implements ClassInterface.LessThanOrEqualsConstraintComponent_lessThanOrEquals {
        static id: ns = ns.LessThanOrEqualsConstraintComponent_lessThanOrEquals;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class Literal extends Base.ClassBase implements ClassInterface.Literal {
        static id: ns = ns.Literal;
        static [Symbol.toStringTag]: string = "Literal";
        static type: typeof Base.ClassBase = NodeKind;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class MaxCountConstraintComponent extends Base.ClassBase implements ClassInterface.MaxCountConstraintComponent {
        static id: ns = ns.MaxCountConstraintComponent;
        static [Symbol.toStringTag]: string = "Max-count constraint component";
        static type: typeof Base.ClassBase = ConstraintComponent;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class MaxCountConstraintComponent_maxCount extends Base.ClassBase implements ClassInterface.MaxCountConstraintComponent_maxCount {
        static id: ns = ns.MaxCountConstraintComponent_maxCount;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class MaxExclusiveConstraintComponent extends Base.ClassBase implements ClassInterface.MaxExclusiveConstraintComponent {
        static id: ns = ns.MaxExclusiveConstraintComponent;
        static [Symbol.toStringTag]: string = "Max-exclusive constraint component";
        static type: typeof Base.ClassBase = ConstraintComponent;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class MaxExclusiveConstraintComponent_maxExclusive extends Base.ClassBase implements ClassInterface.MaxExclusiveConstraintComponent_maxExclusive {
        static id: ns = ns.MaxExclusiveConstraintComponent_maxExclusive;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class MaxInclusiveConstraintComponent extends Base.ClassBase implements ClassInterface.MaxInclusiveConstraintComponent {
        static id: ns = ns.MaxInclusiveConstraintComponent;
        static [Symbol.toStringTag]: string = "Max-inclusive constraint component";
        static type: typeof Base.ClassBase = ConstraintComponent;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class MaxInclusiveConstraintComponent_maxInclusive extends Base.ClassBase implements ClassInterface.MaxInclusiveConstraintComponent_maxInclusive {
        static id: ns = ns.MaxInclusiveConstraintComponent_maxInclusive;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class MaxLengthConstraintComponent extends Base.ClassBase implements ClassInterface.MaxLengthConstraintComponent {
        static id: ns = ns.MaxLengthConstraintComponent;
        static [Symbol.toStringTag]: string = "Max-length constraint component";
        static type: typeof Base.ClassBase = ConstraintComponent;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class MaxLengthConstraintComponent_maxLength extends Base.ClassBase implements ClassInterface.MaxLengthConstraintComponent_maxLength {
        static id: ns = ns.MaxLengthConstraintComponent_maxLength;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class MinCountConstraintComponent extends Base.ClassBase implements ClassInterface.MinCountConstraintComponent {
        static id: ns = ns.MinCountConstraintComponent;
        static [Symbol.toStringTag]: string = "Min-count constraint component";
        static type: typeof Base.ClassBase = ConstraintComponent;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class MinCountConstraintComponent_minCount extends Base.ClassBase implements ClassInterface.MinCountConstraintComponent_minCount {
        static id: ns = ns.MinCountConstraintComponent_minCount;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class MinExclusiveConstraintComponent extends Base.ClassBase implements ClassInterface.MinExclusiveConstraintComponent {
        static id: ns = ns.MinExclusiveConstraintComponent;
        static [Symbol.toStringTag]: string = "Min-exclusive constraint component";
        static type: typeof Base.ClassBase = ConstraintComponent;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class MinExclusiveConstraintComponent_minExclusive extends Base.ClassBase implements ClassInterface.MinExclusiveConstraintComponent_minExclusive {
        static id: ns = ns.MinExclusiveConstraintComponent_minExclusive;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class MinInclusiveConstraintComponent extends Base.ClassBase implements ClassInterface.MinInclusiveConstraintComponent {
        static id: ns = ns.MinInclusiveConstraintComponent;
        static [Symbol.toStringTag]: string = "Min-inclusive constraint component";
        static type: typeof Base.ClassBase = ConstraintComponent;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class MinInclusiveConstraintComponent_minInclusive extends Base.ClassBase implements ClassInterface.MinInclusiveConstraintComponent_minInclusive {
        static id: ns = ns.MinInclusiveConstraintComponent_minInclusive;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class MinLengthConstraintComponent extends Base.ClassBase implements ClassInterface.MinLengthConstraintComponent {
        static id: ns = ns.MinLengthConstraintComponent;
        static [Symbol.toStringTag]: string = "Min-length constraint component";
        static type: typeof Base.ClassBase = ConstraintComponent;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class MinLengthConstraintComponent_minLength extends Base.ClassBase implements ClassInterface.MinLengthConstraintComponent_minLength {
        static id: ns = ns.MinLengthConstraintComponent_minLength;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class NodeConstraintComponent extends Base.ClassBase implements ClassInterface.NodeConstraintComponent {
        static id: ns = ns.NodeConstraintComponent;
        static [Symbol.toStringTag]: string = "Node constraint component";
        static type: typeof Base.ClassBase = ConstraintComponent;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class NodeConstraintComponent_node extends Base.ClassBase implements ClassInterface.NodeConstraintComponent_node {
        static id: ns = ns.NodeConstraintComponent_node;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class NodeKind extends Base.ClassBase implements ClassInterface.NodeKind {
        static id: ns = ns.NodeKind;
        static [Symbol.toStringTag]: string = "Node kind";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [Resource];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class NodeKindConstraintComponent extends Base.ClassBase implements ClassInterface.NodeKindConstraintComponent {
        static id: ns = ns.NodeKindConstraintComponent;
        static [Symbol.toStringTag]: string = "Node-kind constraint component";
        static type: typeof Base.ClassBase = ConstraintComponent;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class NodeKindConstraintComponent_nodeKind extends Base.ClassBase implements ClassInterface.NodeKindConstraintComponent_nodeKind {
        static id: ns = ns.NodeKindConstraintComponent_nodeKind;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class NodeShape extends Base.ClassBase implements ClassInterface.NodeShape {
        static id: ns = ns.NodeShape;
        static [Symbol.toStringTag]: string = "Node shape";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [Shape];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class OrConstraintComponent extends Base.ClassBase implements ClassInterface.OrConstraintComponent {
        static id: ns = ns.OrConstraintComponent;
        static [Symbol.toStringTag]: string = "Or constraint component";
        static type: typeof Base.ClassBase = ConstraintComponent;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class Parameter extends Base.ClassBase implements ClassInterface.Parameter {
        static id: ns = ns.Parameter;
        static [Symbol.toStringTag]: string = "Parameter";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [PropertyShape];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class Parameterizable extends Base.ClassBase implements ClassInterface.Parameterizable {
        static id: ns = ns.Parameterizable;
        static [Symbol.toStringTag]: string = "Parameterizable";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [Resource];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class PatternConstraintComponent extends Base.ClassBase implements ClassInterface.PatternConstraintComponent {
        static id: ns = ns.PatternConstraintComponent;
        static [Symbol.toStringTag]: string = "Pattern constraint component";
        static type: typeof Base.ClassBase = ConstraintComponent;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class PatternConstraintComponent_flags extends Base.ClassBase implements ClassInterface.PatternConstraintComponent_flags {
        static id: ns = ns.PatternConstraintComponent_flags;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class PatternConstraintComponent_pattern extends Base.ClassBase implements ClassInterface.PatternConstraintComponent_pattern {
        static id: ns = ns.PatternConstraintComponent_pattern;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class PrefixDeclaration extends Base.ClassBase implements ClassInterface.PrefixDeclaration {
        static id: ns = ns.PrefixDeclaration;
        static [Symbol.toStringTag]: string = "Prefix declaration";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [Resource];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class PropertyConstraintComponent extends Base.ClassBase implements ClassInterface.PropertyConstraintComponent {
        static id: ns = ns.PropertyConstraintComponent;
        static [Symbol.toStringTag]: string = "Property constraint component";
        static type: typeof Base.ClassBase = ConstraintComponent;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class PropertyGroup extends Base.ClassBase implements ClassInterface.PropertyGroup {
        static id: ns = ns.PropertyGroup;
        static [Symbol.toStringTag]: string = "Property group";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [Resource];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class PropertyShape extends Base.ClassBase implements ClassInterface.PropertyShape {
        static id: ns = ns.PropertyShape;
        static [Symbol.toStringTag]: string = "Property shape";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [Shape];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class QualifiedMaxCountConstraintComponent extends Base.ClassBase implements ClassInterface.QualifiedMaxCountConstraintComponent {
        static id: ns = ns.QualifiedMaxCountConstraintComponent;
        static [Symbol.toStringTag]: string = "Qualified-max-count constraint component";
        static type: typeof Base.ClassBase = ConstraintComponent;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class QualifiedMaxCountConstraintComponent_qualifiedMaxCount extends Base.ClassBase implements ClassInterface.QualifiedMaxCountConstraintComponent_qualifiedMaxCount {
        static id: ns = ns.QualifiedMaxCountConstraintComponent_qualifiedMaxCount;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class QualifiedMaxCountConstraintComponent_qualifiedValueShape extends Base.ClassBase implements ClassInterface.QualifiedMaxCountConstraintComponent_qualifiedValueShape {
        static id: ns = ns.QualifiedMaxCountConstraintComponent_qualifiedValueShape;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class QualifiedMaxCountConstraintComponent_qualifiedValueShapesDisjoint extends Base.ClassBase implements ClassInterface.QualifiedMaxCountConstraintComponent_qualifiedValueShapesDisjoint {
        static id: ns = ns.QualifiedMaxCountConstraintComponent_qualifiedValueShapesDisjoint;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class QualifiedMinCountConstraintComponent extends Base.ClassBase implements ClassInterface.QualifiedMinCountConstraintComponent {
        static id: ns = ns.QualifiedMinCountConstraintComponent;
        static [Symbol.toStringTag]: string = "Qualified-min-count constraint component";
        static type: typeof Base.ClassBase = ConstraintComponent;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class QualifiedMinCountConstraintComponent_qualifiedValueShapesDisjoint extends Base.ClassBase implements ClassInterface.QualifiedMinCountConstraintComponent_qualifiedValueShapesDisjoint {
        static id: ns = ns.QualifiedMinCountConstraintComponent_qualifiedValueShapesDisjoint;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class ResultAnnotation extends Base.ClassBase implements ClassInterface.ResultAnnotation {
        static id: ns = ns.ResultAnnotation;
        static [Symbol.toStringTag]: string = "Result annotation";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [Resource];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class Rule extends Base.ClassBase implements ClassInterface.Rule {
        static id: ns = ns.Rule;
        static [Symbol.toStringTag]: string = "Rule";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [Resource];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class SPARQLAskExecutable extends Base.ClassBase implements ClassInterface.SPARQLAskExecutable {
        static id: ns = ns.SPARQLAskExecutable;
        static [Symbol.toStringTag]: string = "SPARQL ASK executable";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [SPARQLExecutable];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class SPARQLAskValidator extends Base.ClassBase implements ClassInterface.SPARQLAskValidator {
        static id: ns = ns.SPARQLAskValidator;
        static [Symbol.toStringTag]: string = "SPARQL ASK validator";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [Validator, SPARQLAskExecutable];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class SPARQLConstraint extends Base.ClassBase implements ClassInterface.SPARQLConstraint {
        static id: ns = ns.SPARQLConstraint;
        static [Symbol.toStringTag]: string = "SPARQL constraint";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [SPARQLSelectExecutable];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class SPARQLConstraintComponent extends Base.ClassBase implements ClassInterface.SPARQLConstraintComponent {
        static id: ns = ns.SPARQLConstraintComponent;
        static [Symbol.toStringTag]: string = "SPARQL constraint component";
        static type: typeof Base.ClassBase = ConstraintComponent;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class SPARQLFunction extends Base.ClassBase implements ClassInterface.SPARQLFunction {
        static id: ns = ns.SPARQLFunction;
        static [Symbol.toStringTag]: string = "SPARQL function";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [SPARQLAskExecutable, SPARQLSelectExecutable, Function];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class SPARQLRule extends Base.ClassBase implements ClassInterface.SPARQLRule {
        static id: ns = ns.SPARQLRule;
        static [Symbol.toStringTag]: string = "SPARQL CONSTRUCT rule";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [SPARQLConstructExecutable, Rule];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class SPARQLSelectExecutable extends Base.ClassBase implements ClassInterface.SPARQLSelectExecutable {
        static id: ns = ns.SPARQLSelectExecutable;
        static [Symbol.toStringTag]: string = "SPARQL SELECT executable";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [SPARQLExecutable];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class SPARQLSelectValidator extends Base.ClassBase implements ClassInterface.SPARQLSelectValidator {
        static id: ns = ns.SPARQLSelectValidator;
        static [Symbol.toStringTag]: string = "SPARQL SELECT validator";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [Validator, SPARQLSelectExecutable];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class SPARQLTarget extends Base.ClassBase implements ClassInterface.SPARQLTarget {
        static id: ns = ns.SPARQLTarget;
        static [Symbol.toStringTag]: string = "SPARQL target";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [SPARQLAskExecutable, SPARQLSelectExecutable, Target];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class SPARQLTargetType extends Base.ClassBase implements ClassInterface.SPARQLTargetType {
        static id: ns = ns.SPARQLTargetType;
        static [Symbol.toStringTag]: string = "SPARQL target type";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [SPARQLAskExecutable, SPARQLSelectExecutable, TargetType];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class Severity extends Base.ClassBase implements ClassInterface.Severity {
        static id: ns = ns.Severity;
        static [Symbol.toStringTag]: string = "Severity";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [Resource];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class Shape extends Base.ClassBase implements ClassInterface.Shape {
        static id: ns = ns.Shape;
        static [Symbol.toStringTag]: string = "Shape";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [Resource];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class TripleRule extends Base.ClassBase implements ClassInterface.TripleRule {
        static id: ns = ns.TripleRule;
        static [Symbol.toStringTag]: string = "A rule based on triple (subject, predicate, object) pattern.";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [Rule];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class UniqueLangConstraintComponent extends Base.ClassBase implements ClassInterface.UniqueLangConstraintComponent {
        static id: ns = ns.UniqueLangConstraintComponent;
        static [Symbol.toStringTag]: string = "Unique-languages constraint component";
        static type: typeof Base.ClassBase = ConstraintComponent;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class UniqueLangConstraintComponent_uniqueLang extends Base.ClassBase implements ClassInterface.UniqueLangConstraintComponent_uniqueLang {
        static id: ns = ns.UniqueLangConstraintComponent_uniqueLang;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class ValidationReport extends Base.ClassBase implements ClassInterface.ValidationReport {
        static id: ns = ns.ValidationReport;
        static [Symbol.toStringTag]: string = "Validation report";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [Resource];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class ValidationResult extends Base.ClassBase implements ClassInterface.ValidationResult {
        static id: ns = ns.ValidationResult;
        static [Symbol.toStringTag]: string = "Validation result";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [AbstractResult];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class Validator extends Base.ClassBase implements ClassInterface.Validator {
        static id: ns = ns.Validator;
        static [Symbol.toStringTag]: string = "Validator";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [Resource];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class Violation extends Base.ClassBase implements ClassInterface.Violation {
        static id: ns = ns.Violation;
        static [Symbol.toStringTag]: string = "Violation";
        static type: typeof Base.ClassBase = Severity;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class Warning extends Base.ClassBase implements ClassInterface.Warning {
        static id: ns = ns.Warning;
        static [Symbol.toStringTag]: string = "Warning";
        static type: typeof Base.ClassBase = Severity;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class SPARQLConstructExecutable extends Base.ClassBase implements ClassInterface.SPARQLConstructExecutable {
        static id: ns = ns.SPARQLConstructExecutable;
        static [Symbol.toStringTag]: string = "SPARQL CONSTRUCT executable";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [SPARQLExecutable];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class NotConstraintComponent extends Base.ClassBase implements ClassInterface.NotConstraintComponent {
        static id: ns = ns.NotConstraintComponent;
        static [Symbol.toStringTag]: string = "Not constraint component";
        static type: typeof Base.ClassBase = ConstraintComponent;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class TargetType extends Base.ClassBase implements ClassInterface.TargetType {
        static id: ns = ns.TargetType;
        static [Symbol.toStringTag]: string = "Target type";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [Class, Parameterizable];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class PropertyConstraintComponent_property extends Base.ClassBase implements ClassInterface.PropertyConstraintComponent_property {
        static id: ns = ns.PropertyConstraintComponent_property;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class Target extends Base.ClassBase implements ClassInterface.Target {
        static id: ns = ns.Target;
        static [Symbol.toStringTag]: string = "Target";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [Resource];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class XoneConstraintComponent extends Base.ClassBase implements ClassInterface.XoneConstraintComponent {
        static id: ns = ns.XoneConstraintComponent;
        static [Symbol.toStringTag]: string = "Exactly one constraint component";
        static type: typeof Base.ClassBase = ConstraintComponent;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class NotConstraintComponent_not extends Base.ClassBase implements ClassInterface.NotConstraintComponent_not {
        static id: ns = ns.NotConstraintComponent_not;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class OrConstraintComponent_or extends Base.ClassBase implements ClassInterface.OrConstraintComponent_or {
        static id: ns = ns.OrConstraintComponent_or;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class JSTargetType extends Base.ClassBase implements ClassInterface.JSTargetType {
        static id: ns = ns.JSTargetType;
        static [Symbol.toStringTag]: string = "JavaScript target type";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [TargetType, JSExecutable];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class JSValidator extends Base.ClassBase implements ClassInterface.JSValidator {
        static id: ns = ns.JSValidator;
        static [Symbol.toStringTag]: string = "JavaScript validator";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [Validator, JSExecutable];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class QualifiedMinCountConstraintComponent_qualifiedMinCount extends Base.ClassBase implements ClassInterface.QualifiedMinCountConstraintComponent_qualifiedMinCount {
        static id: ns = ns.QualifiedMinCountConstraintComponent_qualifiedMinCount;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class QualifiedMinCountConstraintComponent_qualifiedValueShape extends Base.ClassBase implements ClassInterface.QualifiedMinCountConstraintComponent_qualifiedValueShape {
        static id: ns = ns.QualifiedMinCountConstraintComponent_qualifiedValueShape;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class SPARQLConstraintComponent_sparql extends Base.ClassBase implements ClassInterface.SPARQLConstraintComponent_sparql {
        static id: ns = ns.SPARQLConstraintComponent_sparql;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class SPARQLExecutable extends Base.ClassBase implements ClassInterface.SPARQLExecutable {
        static id: ns = ns.SPARQLExecutable;
        static [Symbol.toStringTag]: string = "SPARQL executable";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [Resource];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class SPARQLUpdateExecutable extends Base.ClassBase implements ClassInterface.SPARQLUpdateExecutable {
        static id: ns = ns.SPARQLUpdateExecutable;
        static [Symbol.toStringTag]: string = "SPARQL UPDATE executable";
        static type: typeof Base.ClassBase = Class;
        static subClassOf: (typeof Base.ClassBase)[] = [SPARQLExecutable];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class XoneConstraintComponent_xone extends Base.ClassBase implements ClassInterface.XoneConstraintComponent_xone {
        static id: ns = ns.XoneConstraintComponent_xone;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Parameter;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }

    export class _this extends Base.ClassBase implements ClassInterface._this {
        static id: ns = ns._this;
        static [Symbol.toStringTag]: string = "this";
        static type: typeof Base.ClassBase = Resource;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
        value: any;
        properties: Base.InternalProperties = {};
    }
}
