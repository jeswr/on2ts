import { Base } from "./index";

export namespace ClassInterface {
    export interface _ extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface AbstractResult extends Base.ClassBaseInterface, Resource {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface AndConstraintComponent extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface AndConstraintComponent_and extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface BlankNode extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface BlankNodeOrIRI extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface BlankNodeOrLiteral extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface ClassConstraintComponent extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface ClassConstraintComponent_class extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface ClosedConstraintComponent extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface ClosedConstraintComponent_closed extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface ClosedConstraintComponent_ignoredProperties extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface ConstraintComponent extends Base.ClassBaseInterface, Parameterizable {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface DatatypeConstraintComponent extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface DatatypeConstraintComponent_datatype extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface DisjointConstraintComponent extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface DisjointConstraintComponent_disjoint extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface EqualsConstraintComponent extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface EqualsConstraintComponent_equals extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface ExpressionConstraintComponent extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface ExpressionConstraintComponent_expression extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface Function extends Base.ClassBaseInterface, Parameterizable {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface HasValueConstraintComponent extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface HasValueConstraintComponent_hasValue extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface IRI extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface IRIOrLiteral extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface InConstraintComponent extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface InConstraintComponent_in extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface Info extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface JSConstraint extends Base.ClassBaseInterface, JSExecutable {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface JSConstraint_js extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface JSConstraintComponent extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface JSExecutable extends Base.ClassBaseInterface, Resource {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface JSFunction extends Base.ClassBaseInterface, Function, JSExecutable {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface JSLibrary extends Base.ClassBaseInterface, Resource {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface JSRule extends Base.ClassBaseInterface, Rule, JSExecutable {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface JSTarget extends Base.ClassBaseInterface, Target, JSExecutable {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface LanguageInConstraintComponent extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface LanguageInConstraintComponent_languageIn extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface LessThanConstraintComponent extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface LessThanConstraintComponent_lessThan extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface LessThanOrEqualsConstraintComponent extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface LessThanOrEqualsConstraintComponent_lessThanOrEquals extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface Literal extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface MaxCountConstraintComponent extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface MaxCountConstraintComponent_maxCount extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface MaxExclusiveConstraintComponent extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface MaxExclusiveConstraintComponent_maxExclusive extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface MaxInclusiveConstraintComponent extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface MaxInclusiveConstraintComponent_maxInclusive extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface MaxLengthConstraintComponent extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface MaxLengthConstraintComponent_maxLength extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface MinCountConstraintComponent extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface MinCountConstraintComponent_minCount extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface MinExclusiveConstraintComponent extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface MinExclusiveConstraintComponent_minExclusive extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface MinInclusiveConstraintComponent extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface MinInclusiveConstraintComponent_minInclusive extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface MinLengthConstraintComponent extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface MinLengthConstraintComponent_minLength extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface NodeConstraintComponent extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface NodeConstraintComponent_node extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface NodeKind extends Base.ClassBaseInterface, Resource {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface NodeKindConstraintComponent extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface NodeKindConstraintComponent_nodeKind extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface NodeShape extends Base.ClassBaseInterface, Shape {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface OrConstraintComponent extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface Parameter extends Base.ClassBaseInterface, PropertyShape {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface Parameterizable extends Base.ClassBaseInterface, Resource {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface PatternConstraintComponent extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface PatternConstraintComponent_flags extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface PatternConstraintComponent_pattern extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface PrefixDeclaration extends Base.ClassBaseInterface, Resource {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface PropertyConstraintComponent extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface PropertyGroup extends Base.ClassBaseInterface, Resource {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface PropertyShape extends Base.ClassBaseInterface, Shape {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface QualifiedMaxCountConstraintComponent extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface QualifiedMaxCountConstraintComponent_qualifiedMaxCount extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface QualifiedMaxCountConstraintComponent_qualifiedValueShape extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface QualifiedMaxCountConstraintComponent_qualifiedValueShapesDisjoint extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface QualifiedMinCountConstraintComponent extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface QualifiedMinCountConstraintComponent_qualifiedValueShapesDisjoint extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface ResultAnnotation extends Base.ClassBaseInterface, Resource {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface Rule extends Base.ClassBaseInterface, Resource {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface SPARQLAskExecutable extends Base.ClassBaseInterface, SPARQLExecutable {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface SPARQLAskValidator extends Base.ClassBaseInterface, Validator, SPARQLAskExecutable {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface SPARQLConstraint extends Base.ClassBaseInterface, SPARQLSelectExecutable {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface SPARQLConstraintComponent extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface SPARQLFunction extends Base.ClassBaseInterface, SPARQLAskExecutable, SPARQLSelectExecutable, Function {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface SPARQLRule extends Base.ClassBaseInterface, SPARQLConstructExecutable, Rule {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface SPARQLSelectExecutable extends Base.ClassBaseInterface, SPARQLExecutable {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface SPARQLSelectValidator extends Base.ClassBaseInterface, Validator, SPARQLSelectExecutable {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface SPARQLTarget extends Base.ClassBaseInterface, SPARQLAskExecutable, SPARQLSelectExecutable, Target {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface SPARQLTargetType extends Base.ClassBaseInterface, SPARQLAskExecutable, SPARQLSelectExecutable, TargetType {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface Severity extends Base.ClassBaseInterface, Resource {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface Shape extends Base.ClassBaseInterface, Resource {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface TripleRule extends Base.ClassBaseInterface, Rule {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface UniqueLangConstraintComponent extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface UniqueLangConstraintComponent_uniqueLang extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface ValidationReport extends Base.ClassBaseInterface, Resource {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface ValidationResult extends Base.ClassBaseInterface, AbstractResult {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface Validator extends Base.ClassBaseInterface, Resource {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface Violation extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface Warning extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface SPARQLConstructExecutable extends Base.ClassBaseInterface, SPARQLExecutable {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface NotConstraintComponent extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface TargetType extends Base.ClassBaseInterface, Class, Parameterizable {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface PropertyConstraintComponent_property extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface Target extends Base.ClassBaseInterface, Resource {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface XoneConstraintComponent extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface NotConstraintComponent_not extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface OrConstraintComponent_or extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface JSTargetType extends Base.ClassBaseInterface, TargetType, JSExecutable {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface JSValidator extends Base.ClassBaseInterface, Validator, JSExecutable {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface QualifiedMinCountConstraintComponent_qualifiedMinCount extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface QualifiedMinCountConstraintComponent_qualifiedValueShape extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface SPARQLConstraintComponent_sparql extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface SPARQLExecutable extends Base.ClassBaseInterface, Resource {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface SPARQLUpdateExecutable extends Base.ClassBaseInterface, SPARQLExecutable {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface XoneConstraintComponent_xone extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }

    export interface _this extends Base.ClassBaseInterface {
        value: any;
        properties: Base.InternalProperties;
    }
}
