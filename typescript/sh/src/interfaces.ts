import { ns } from "./enum";

/**
 * "This vocabulary defines terms used in SHACL, the W3C Shapes Constraint Language."@en
 * @type <http://www.w3.org/2002/07/owl#Ontology>
 * @label-en W3C Shapes Constraint Language (SHACL) Vocabulary
 * @declare prefix-
 * 	shnamespace-
 * 	http://www.w3.org/ns/shacl#
 * @suggestedShapesGraph <http://www.w3.org/ns/shacl-shacl#>
 */
export namespace interfaces {
    /** */
    export interface sh {
        value: any;
    }

    /** */
    export interface AbstractResult extends dfschemaResource {
        value: any;
    }

    /** */
    export interface AndConstraintComponent {
        value: any;
    }

    /** */
    export interface AndConstraintComponent_and {
        value: any;
    }

    /** */
    export interface BlankNode {
        value: any;
    }

    /** */
    export interface BlankNodeOrIRI {
        value: any;
    }

    /** */
    export interface BlankNodeOrLiteral {
        value: any;
    }

    /** */
    export interface ClassConstraintComponent {
        value: any;
    }

    /** */
    export interface ClassConstraintComponent_class {
        value: any;
    }

    /** */
    export interface ClosedConstraintComponent {
        value: any;
    }

    /** */
    export interface ClosedConstraintComponent_closed {
        value: any;
    }

    /** */
    export interface ClosedConstraintComponent_ignoredProperties {
        value: any;
    }

    /** */
    export interface ConstraintComponent extends Parameterizable {
        value: any;
    }

    /** */
    export interface DatatypeConstraintComponent {
        value: any;
    }

    /** */
    export interface DatatypeConstraintComponent_datatype {
        value: any;
    }

    /** */
    export interface DisjointConstraintComponent {
        value: any;
    }

    /** */
    export interface DisjointConstraintComponent_disjoint {
        value: any;
    }

    /** */
    export interface EqualsConstraintComponent {
        value: any;
    }

    /** */
    export interface EqualsConstraintComponent_equals {
        value: any;
    }

    /** */
    export interface ExpressionConstraintComponent {
        value: any;
    }

    /** */
    export interface ExpressionConstraintComponent_expression {
        value: any;
    }

    /** */
    export interface Function extends Parameterizable {
        value: any;
    }

    /** */
    export interface HasValueConstraintComponent {
        value: any;
    }

    /** */
    export interface HasValueConstraintComponent_hasValue {
        value: any;
    }

    /** */
    export interface IRI {
        value: any;
    }

    /** */
    export interface IRIOrLiteral {
        value: any;
    }

    /** */
    export interface InConstraintComponent {
        value: any;
    }

    /** */
    export interface InConstraintComponent_in {
        value: any;
    }

    /** */
    export interface Info {
        value: any;
    }

    /** */
    export interface JSConstraint extends JSExecutable {
        value: any;
    }

    /** */
    export interface JSConstraint_js {
        value: any;
    }

    /** */
    export interface JSConstraintComponent {
        value: any;
    }

    /** */
    export interface JSExecutable extends dfschemaResource {
        value: any;
    }

    /** */
    export interface JSFunction extends Function, JSExecutable {
        value: any;
    }

    /** */
    export interface JSLibrary extends dfschemaResource {
        value: any;
    }

    /** */
    export interface JSRule extends JSExecutable, Rule {
        value: any;
    }

    /** */
    export interface JSTarget extends JSExecutable, Target {
        value: any;
    }

    /** */
    export interface JSTargetType extends JSExecutable, TargetType {
        value: any;
    }

    /** */
    export interface JSValidator extends JSExecutable, Validator {
        value: any;
    }

    /** */
    export interface LanguageInConstraintComponent {
        value: any;
    }

    /** */
    export interface LanguageInConstraintComponent_languageIn {
        value: any;
    }

    /** */
    export interface LessThanConstraintComponent {
        value: any;
    }

    /** */
    export interface LessThanConstraintComponent_lessThan {
        value: any;
    }

    /** */
    export interface LessThanOrEqualsConstraintComponent {
        value: any;
    }

    /** */
    export interface LessThanOrEqualsConstraintComponent_lessThanOrEquals {
        value: any;
    }

    /** */
    export interface Literal {
        value: any;
    }

    /** */
    export interface MaxCountConstraintComponent {
        value: any;
    }

    /** */
    export interface MaxCountConstraintComponent_maxCount {
        value: any;
    }

    /** */
    export interface MaxExclusiveConstraintComponent {
        value: any;
    }

    /** */
    export interface MaxExclusiveConstraintComponent_maxExclusive {
        value: any;
    }

    /** */
    export interface MaxInclusiveConstraintComponent {
        value: any;
    }

    /** */
    export interface MaxInclusiveConstraintComponent_maxInclusive {
        value: any;
    }

    /** */
    export interface MaxLengthConstraintComponent {
        value: any;
    }

    /** */
    export interface MaxLengthConstraintComponent_maxLength {
        value: any;
    }

    /** */
    export interface MinCountConstraintComponent {
        value: any;
    }

    /** */
    export interface MinCountConstraintComponent_minCount {
        value: any;
    }

    /** */
    export interface MinExclusiveConstraintComponent {
        value: any;
    }

    /** */
    export interface MinExclusiveConstraintComponent_minExclusive {
        value: any;
    }

    /** */
    export interface MinInclusiveConstraintComponent {
        value: any;
    }

    /** */
    export interface MinInclusiveConstraintComponent_minInclusive {
        value: any;
    }

    /** */
    export interface MinLengthConstraintComponent {
        value: any;
    }

    /** */
    export interface MinLengthConstraintComponent_minLength {
        value: any;
    }

    /** */
    export interface NodeConstraintComponent {
        value: any;
    }

    /** */
    export interface NodeConstraintComponent_node {
        value: any;
    }

    /** */
    export interface NodeKind extends dfschemaResource {
        value: any;
    }

    /** */
    export interface NodeKindConstraintComponent {
        value: any;
    }

    /** */
    export interface NodeKindConstraintComponent_nodeKind {
        value: any;
    }

    /** */
    export interface NodeShape extends Shape {
        value: any;
    }

    /** */
    export interface NotConstraintComponent {
        value: any;
    }

    /** */
    export interface NotConstraintComponent_not {
        value: any;
    }

    /** */
    export interface OrConstraintComponent {
        value: any;
    }

    /** */
    export interface OrConstraintComponent_or {
        value: any;
    }

    /** */
    export interface Parameter extends PropertyShape {
        value: any;
    }

    /** */
    export interface Parameterizable extends dfschemaResource {
        value: any;
    }

    /** */
    export interface PatternConstraintComponent {
        value: any;
    }

    /** */
    export interface PatternConstraintComponent_flags {
        value: any;
    }

    /** */
    export interface PatternConstraintComponent_pattern {
        value: any;
    }

    /** */
    export interface PrefixDeclaration extends dfschemaResource {
        value: any;
    }

    /** */
    export interface PropertyConstraintComponent {
        value: any;
    }

    /** */
    export interface PropertyConstraintComponent_property {
        value: any;
    }

    /** */
    export interface PropertyGroup extends dfschemaResource {
        value: any;
    }

    /** */
    export interface PropertyShape extends Shape {
        value: any;
    }

    /** */
    export interface QualifiedMaxCountConstraintComponent {
        value: any;
    }

    /** */
    export interface QualifiedMaxCountConstraintComponent_qualifiedMaxCount {
        value: any;
    }

    /** */
    export interface QualifiedMaxCountConstraintComponent_qualifiedValueShape {
        value: any;
    }

    /** */
    export interface QualifiedMaxCountConstraintComponent_qualifiedValueShapesDisjoint {
        value: any;
    }

    /** */
    export interface QualifiedMinCountConstraintComponent {
        value: any;
    }

    /** */
    export interface QualifiedMinCountConstraintComponent_qualifiedMinCount {
        value: any;
    }

    /** */
    export interface QualifiedMinCountConstraintComponent_qualifiedValueShape {
        value: any;
    }

    /** */
    export interface QualifiedMinCountConstraintComponent_qualifiedValueShapesDisjoint {
        value: any;
    }

    /** */
    export interface ResultAnnotation extends dfschemaResource {
        value: any;
    }

    /** */
    export interface Rule extends dfschemaResource {
        value: any;
    }

    /** */
    export interface SPARQLAskExecutable extends SPARQLExecutable {
        value: any;
    }

    /** */
    export interface SPARQLAskValidator extends SPARQLAskExecutable, Validator {
        value: any;
    }

    /** */
    export interface SPARQLConstraint extends SPARQLSelectExecutable {
        value: any;
    }

    /** */
    export interface SPARQLConstraintComponent {
        value: any;
    }

    /** */
    export interface SPARQLConstraintComponent_sparql {
        value: any;
    }

    /** */
    export interface SPARQLConstructExecutable extends SPARQLExecutable {
        value: any;
    }

    /** */
    export interface SPARQLExecutable extends dfschemaResource {
        value: any;
    }

    /** */
    export interface SPARQLFunction extends Function, SPARQLAskExecutable, SPARQLSelectExecutable {
        value: any;
    }

    /** */
    export interface SPARQLRule extends Rule, SPARQLConstructExecutable {
        value: any;
    }

    /** */
    export interface SPARQLSelectExecutable extends SPARQLExecutable {
        value: any;
    }

    /** */
    export interface SPARQLSelectValidator extends SPARQLSelectExecutable, Validator {
        value: any;
    }

    /** */
    export interface SPARQLTarget extends SPARQLAskExecutable, SPARQLSelectExecutable, Target {
        value: any;
    }

    /** */
    export interface SPARQLTargetType extends SPARQLAskExecutable, SPARQLSelectExecutable, TargetType {
        value: any;
    }

    /** */
    export interface SPARQLUpdateExecutable extends SPARQLExecutable {
        value: any;
    }

    /** */
    export interface Severity extends dfschemaResource {
        value: any;
    }

    /** */
    export interface Shape extends dfschemaResource {
        value: any;
    }

    /** */
    export interface Target extends dfschemaResource {
        value: any;
    }

    /** */
    export interface TargetType extends dfschemaClass, Parameterizable {
        value: any;
    }

    /** */
    export interface TripleRule extends Rule {
        value: any;
    }

    /** */
    export interface UniqueLangConstraintComponent {
        value: any;
    }

    /** */
    export interface UniqueLangConstraintComponent_uniqueLang {
        value: any;
    }

    /** */
    export interface ValidationReport extends dfschemaResource {
        value: any;
    }

    /** */
    export interface ValidationResult extends AbstractResult {
        value: any;
    }

    /** */
    export interface Validator extends dfschemaResource {
        value: any;
    }

    /** */
    export interface Violation {
        value: any;
    }

    /** */
    export interface Warning {
        value: any;
    }

    /** */
    export interface XoneConstraintComponent {
        value: any;
    }

    /** */
    export interface XoneConstraintComponent_xone {
        value: any;
    }

    /** */
    export interface alternativePath {
        value: any;
    }

    /** */
    export interface and {
        value: any;
    }

    /** */
    export interface annotationProperty {
        value: any;
    }

    /** */
    export interface annotationValue {
        value: any;
    }

    /** */
    export interface annotationVarName {
        value: any;
    }

    /** */
    export interface ask {
        value: any;
    }

    /** */
    export interface Class {
        value: any;
    }

    /** */
    export interface closed {
        value: any;
    }

    /** */
    export interface condition {
        value: any;
    }

    /** */
    export interface conforms {
        value: any;
    }

    /** */
    export interface construct {
        value: any;
    }

    /** */
    export interface datatype {
        value: any;
    }

    /** */
    export interface deactivated {
        value: any;
    }

    /** */
    export interface declare {
        value: any;
    }

    /** */
    export interface defaultValue {
        value: any;
    }

    /** */
    export interface description {
        value: any;
    }

    /** */
    export interface detail {
        value: any;
    }

    /** */
    export interface disjoint {
        value: any;
    }

    /** */
    export interface entailment {
        value: any;
    }

    /** */
    export interface equals {
        value: any;
    }

    /** */
    export interface expression {
        value: any;
    }

    /** */
    export interface filterShape {
        value: any;
    }

    /** */
    export interface flags {
        value: any;
    }

    /** */
    export interface focusNode {
        value: any;
    }

    /** */
    export interface group {
        value: any;
    }

    /** */
    export interface hasValue {
        value: any;
    }

    /** */
    export interface ignoredProperties {
        value: any;
    }

    /** */
    export interface In {
        value: any;
    }

    /** */
    export interface intersection {
        value: any;
    }

    /** */
    export interface inversePath {
        value: any;
    }

    /** */
    export interface js {
        value: any;
    }

    /** */
    export interface jsFunctionName {
        value: any;
    }

    /** */
    export interface jsLibrary {
        value: any;
    }

    /** */
    export interface jsLibraryURL {
        value: any;
    }

    /** */
    export interface labelTemplate {
        value: any;
    }

    /** */
    export interface languageIn {
        value: any;
    }

    /** */
    export interface lessThan {
        value: any;
    }

    /** */
    export interface lessThanOrEquals {
        value: any;
    }

    /** */
    export interface maxCount {
        value: any;
    }

    /** */
    export interface maxExclusive {
        value: any;
    }

    /** */
    export interface maxInclusive {
        value: any;
    }

    /** */
    export interface maxLength {
        value: any;
    }

    /** */
    export interface message {
        value: any;
    }

    /** */
    export interface minCount {
        value: any;
    }

    /** */
    export interface minExclusive {
        value: any;
    }

    /** */
    export interface minInclusive {
        value: any;
    }

    /** */
    export interface minLength {
        value: any;
    }

    /** */
    export interface name {
        value: any;
    }

    /** */
    export interface namespace {
        value: any;
    }

    /** */
    export interface node {
        value: any;
    }

    /** */
    export interface nodeKind {
        value: any;
    }

    /** */
    export interface nodeValidator {
        value: any;
    }

    /** */
    export interface nodes {
        value: any;
    }

    /** */
    export interface not {
        value: any;
    }

    /** */
    export interface Object {
        value: any;
    }

    /** */
    export interface oneOrMorePath {
        value: any;
    }

    /** */
    export interface optional {
        value: any;
    }

    /** */
    export interface or {
        value: any;
    }

    /** */
    export interface order {
        value: any;
    }

    /** */
    export interface parameter {
        value: any;
    }

    /** */
    export interface path {
        value: any;
    }

    /** */
    export interface pattern {
        value: any;
    }

    /** */
    export interface predicate {
        value: any;
    }

    /** */
    export interface prefix {
        value: any;
    }

    /** */
    export interface prefixes {
        value: any;
    }

    /** */
    export interface property {
        value: any;
    }

    /** */
    export interface propertyValidator {
        value: any;
    }

    /** */
    export interface qualifiedMaxCount {
        value: any;
    }

    /** */
    export interface qualifiedMinCount {
        value: any;
    }

    /** */
    export interface qualifiedValueShape {
        value: any;
    }

    /** */
    export interface qualifiedValueShapesDisjoint {
        value: any;
    }

    /** */
    export interface result {
        value: any;
    }

    /** */
    export interface resultAnnotation {
        value: any;
    }

    /** */
    export interface resultMessage {
        value: any;
    }

    /** */
    export interface resultPath {
        value: any;
    }

    /** */
    export interface resultSeverity {
        value: any;
    }

    /** */
    export interface returnType {
        value: any;
    }

    /** */
    export interface rule {
        value: any;
    }

    /** */
    export interface select {
        value: any;
    }

    /** */
    export interface severity {
        value: any;
    }

    /** */
    export interface shapesGraph {
        value: any;
    }

    /** */
    export interface shapesGraphWellFormed {
        value: any;
    }

    /** */
    export interface sourceConstraint {
        value: any;
    }

    /** */
    export interface sourceConstraintComponent {
        value: any;
    }

    /** */
    export interface sourceShape {
        value: any;
    }

    /** */
    export interface sparql {
        value: any;
    }

    /** */
    export interface subject {
        value: any;
    }

    /** */
    export interface suggestedShapesGraph {
        value: any;
    }

    /** */
    export interface target {
        value: any;
    }

    /** */
    export interface targetClass {
        value: any;
    }

    /** */
    export interface targetNode {
        value: any;
    }

    /** */
    export interface targetObjectsOf {
        value: any;
    }

    /** */
    export interface targetSubjectsOf {
        value: any;
    }

    /** */
    export interface This {
        value: any;
    }

    /** */
    export interface union {
        value: any;
    }

    /** */
    export interface uniqueLang {
        value: any;
    }

    /** */
    export interface update {
        value: any;
    }

    /** */
    export interface validator {
        value: any;
    }

    /** */
    export interface value {
        value: any;
    }

    /** */
    export interface xone {
        value: any;
    }

    /** */
    export interface zeroOrMorePath {
        value: any;
    }

    /** */
    export interface zeroOrOnePath {
        value: any;
    }
}
