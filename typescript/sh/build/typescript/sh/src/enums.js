"use strict";
exports.__esModule = true;
exports.ns = void 0;
/**
 * "This vocabulary defines terms used in SHACL, the W3C Shapes Constraint Language."@en
 * @type <http://www.w3.org/2002/07/owl#Ontology>
 * @label-en W3C Shapes Constraint Language (SHACL) Vocabulary
 * @declare prefix-
 * 	shnamespace-
 * 	http://www.w3.org/ns/shacl#
 * @suggestedShapesGraph <http://www.w3.org/ns/shacl-shacl#>
 */
var ns;
(function (ns) {
    /** */
    ns[""] = "http://www.w3.org/ns/shacl#";
    /** */
    ns["AbstractResult"] = "http://www.w3.org/ns/shacl#AbstractResult";
    /** */
    ns["AndConstraintComponent"] = "http://www.w3.org/ns/shacl#AndConstraintComponent";
    /** */
    ns["AndConstraintComponent-and"] = "http://www.w3.org/ns/shacl#AndConstraintComponent-and";
    /** */
    ns["BlankNode"] = "http://www.w3.org/ns/shacl#BlankNode";
    /** */
    ns["BlankNodeOrIRI"] = "http://www.w3.org/ns/shacl#BlankNodeOrIRI";
    /** */
    ns["BlankNodeOrLiteral"] = "http://www.w3.org/ns/shacl#BlankNodeOrLiteral";
    /** */
    ns["ClassConstraintComponent"] = "http://www.w3.org/ns/shacl#ClassConstraintComponent";
    /** */
    ns["ClassConstraintComponent-class"] = "http://www.w3.org/ns/shacl#ClassConstraintComponent-class";
    /** */
    ns["ClosedConstraintComponent"] = "http://www.w3.org/ns/shacl#ClosedConstraintComponent";
    /** */
    ns["ClosedConstraintComponent-closed"] = "http://www.w3.org/ns/shacl#ClosedConstraintComponent-closed";
    /** */
    ns["ClosedConstraintComponent-ignoredProperties"] = "http://www.w3.org/ns/shacl#ClosedConstraintComponent-ignoredProperties";
    /** */
    ns["ConstraintComponent"] = "http://www.w3.org/ns/shacl#ConstraintComponent";
    /** */
    ns["DatatypeConstraintComponent"] = "http://www.w3.org/ns/shacl#DatatypeConstraintComponent";
    /** */
    ns["DatatypeConstraintComponent-datatype"] = "http://www.w3.org/ns/shacl#DatatypeConstraintComponent-datatype";
    /** */
    ns["DisjointConstraintComponent"] = "http://www.w3.org/ns/shacl#DisjointConstraintComponent";
    /** */
    ns["DisjointConstraintComponent-disjoint"] = "http://www.w3.org/ns/shacl#DisjointConstraintComponent-disjoint";
    /** */
    ns["EqualsConstraintComponent"] = "http://www.w3.org/ns/shacl#EqualsConstraintComponent";
    /** */
    ns["EqualsConstraintComponent-equals"] = "http://www.w3.org/ns/shacl#EqualsConstraintComponent-equals";
    /** */
    ns["ExpressionConstraintComponent"] = "http://www.w3.org/ns/shacl#ExpressionConstraintComponent";
    /** */
    ns["ExpressionConstraintComponent-expression"] = "http://www.w3.org/ns/shacl#ExpressionConstraintComponent-expression";
    /** */
    ns["Function"] = "http://www.w3.org/ns/shacl#Function";
    /** */
    ns["HasValueConstraintComponent"] = "http://www.w3.org/ns/shacl#HasValueConstraintComponent";
    /** */
    ns["HasValueConstraintComponent-hasValue"] = "http://www.w3.org/ns/shacl#HasValueConstraintComponent-hasValue";
    /** */
    ns["IRI"] = "http://www.w3.org/ns/shacl#IRI";
    /** */
    ns["IRIOrLiteral"] = "http://www.w3.org/ns/shacl#IRIOrLiteral";
    /** */
    ns["InConstraintComponent"] = "http://www.w3.org/ns/shacl#InConstraintComponent";
    /** */
    ns["InConstraintComponent-in"] = "http://www.w3.org/ns/shacl#InConstraintComponent-in";
    /** */
    ns["Info"] = "http://www.w3.org/ns/shacl#Info";
    /** */
    ns["JSConstraint"] = "http://www.w3.org/ns/shacl#JSConstraint";
    /** */
    ns["JSConstraint-js"] = "http://www.w3.org/ns/shacl#JSConstraint-js";
    /** */
    ns["JSConstraintComponent"] = "http://www.w3.org/ns/shacl#JSConstraintComponent";
    /** */
    ns["JSExecutable"] = "http://www.w3.org/ns/shacl#JSExecutable";
    /** */
    ns["JSFunction"] = "http://www.w3.org/ns/shacl#JSFunction";
    /** */
    ns["JSLibrary"] = "http://www.w3.org/ns/shacl#JSLibrary";
    /** */
    ns["JSRule"] = "http://www.w3.org/ns/shacl#JSRule";
    /** */
    ns["JSTarget"] = "http://www.w3.org/ns/shacl#JSTarget";
    /** */
    ns["JSTargetType"] = "http://www.w3.org/ns/shacl#JSTargetType";
    /** */
    ns["JSValidator"] = "http://www.w3.org/ns/shacl#JSValidator";
    /** */
    ns["LanguageInConstraintComponent"] = "http://www.w3.org/ns/shacl#LanguageInConstraintComponent";
    /** */
    ns["LanguageInConstraintComponent-languageIn"] = "http://www.w3.org/ns/shacl#LanguageInConstraintComponent-languageIn";
    /** */
    ns["LessThanConstraintComponent"] = "http://www.w3.org/ns/shacl#LessThanConstraintComponent";
    /** */
    ns["LessThanConstraintComponent-lessThan"] = "http://www.w3.org/ns/shacl#LessThanConstraintComponent-lessThan";
    /** */
    ns["LessThanOrEqualsConstraintComponent"] = "http://www.w3.org/ns/shacl#LessThanOrEqualsConstraintComponent";
    /** */
    ns["LessThanOrEqualsConstraintComponent-lessThanOrEquals"] = "http://www.w3.org/ns/shacl#LessThanOrEqualsConstraintComponent-lessThanOrEquals";
    /** */
    ns["Literal"] = "http://www.w3.org/ns/shacl#Literal";
    /** */
    ns["MaxCountConstraintComponent"] = "http://www.w3.org/ns/shacl#MaxCountConstraintComponent";
    /** */
    ns["MaxCountConstraintComponent-maxCount"] = "http://www.w3.org/ns/shacl#MaxCountConstraintComponent-maxCount";
    /** */
    ns["MaxExclusiveConstraintComponent"] = "http://www.w3.org/ns/shacl#MaxExclusiveConstraintComponent";
    /** */
    ns["MaxExclusiveConstraintComponent-maxExclusive"] = "http://www.w3.org/ns/shacl#MaxExclusiveConstraintComponent-maxExclusive";
    /** */
    ns["MaxInclusiveConstraintComponent"] = "http://www.w3.org/ns/shacl#MaxInclusiveConstraintComponent";
    /** */
    ns["MaxInclusiveConstraintComponent-maxInclusive"] = "http://www.w3.org/ns/shacl#MaxInclusiveConstraintComponent-maxInclusive";
    /** */
    ns["MaxLengthConstraintComponent"] = "http://www.w3.org/ns/shacl#MaxLengthConstraintComponent";
    /** */
    ns["MaxLengthConstraintComponent-maxLength"] = "http://www.w3.org/ns/shacl#MaxLengthConstraintComponent-maxLength";
    /** */
    ns["MinCountConstraintComponent"] = "http://www.w3.org/ns/shacl#MinCountConstraintComponent";
    /** */
    ns["MinCountConstraintComponent-minCount"] = "http://www.w3.org/ns/shacl#MinCountConstraintComponent-minCount";
    /** */
    ns["MinExclusiveConstraintComponent"] = "http://www.w3.org/ns/shacl#MinExclusiveConstraintComponent";
    /** */
    ns["MinExclusiveConstraintComponent-minExclusive"] = "http://www.w3.org/ns/shacl#MinExclusiveConstraintComponent-minExclusive";
    /** */
    ns["MinInclusiveConstraintComponent"] = "http://www.w3.org/ns/shacl#MinInclusiveConstraintComponent";
    /** */
    ns["MinInclusiveConstraintComponent-minInclusive"] = "http://www.w3.org/ns/shacl#MinInclusiveConstraintComponent-minInclusive";
    /** */
    ns["MinLengthConstraintComponent"] = "http://www.w3.org/ns/shacl#MinLengthConstraintComponent";
    /** */
    ns["MinLengthConstraintComponent-minLength"] = "http://www.w3.org/ns/shacl#MinLengthConstraintComponent-minLength";
    /** */
    ns["NodeConstraintComponent"] = "http://www.w3.org/ns/shacl#NodeConstraintComponent";
    /** */
    ns["NodeConstraintComponent-node"] = "http://www.w3.org/ns/shacl#NodeConstraintComponent-node";
    /** */
    ns["NodeKind"] = "http://www.w3.org/ns/shacl#NodeKind";
    /** */
    ns["NodeKindConstraintComponent"] = "http://www.w3.org/ns/shacl#NodeKindConstraintComponent";
    /** */
    ns["NodeKindConstraintComponent-nodeKind"] = "http://www.w3.org/ns/shacl#NodeKindConstraintComponent-nodeKind";
    /** */
    ns["NodeShape"] = "http://www.w3.org/ns/shacl#NodeShape";
    /** */
    ns["NotConstraintComponent"] = "http://www.w3.org/ns/shacl#NotConstraintComponent";
    /** */
    ns["NotConstraintComponent-not"] = "http://www.w3.org/ns/shacl#NotConstraintComponent-not";
    /** */
    ns["OrConstraintComponent"] = "http://www.w3.org/ns/shacl#OrConstraintComponent";
    /** */
    ns["OrConstraintComponent-or"] = "http://www.w3.org/ns/shacl#OrConstraintComponent-or";
    /** */
    ns["Parameter"] = "http://www.w3.org/ns/shacl#Parameter";
    /** */
    ns["Parameterizable"] = "http://www.w3.org/ns/shacl#Parameterizable";
    /** */
    ns["PatternConstraintComponent"] = "http://www.w3.org/ns/shacl#PatternConstraintComponent";
    /** */
    ns["PatternConstraintComponent-flags"] = "http://www.w3.org/ns/shacl#PatternConstraintComponent-flags";
    /** */
    ns["PatternConstraintComponent-pattern"] = "http://www.w3.org/ns/shacl#PatternConstraintComponent-pattern";
    /** */
    ns["PrefixDeclaration"] = "http://www.w3.org/ns/shacl#PrefixDeclaration";
    /** */
    ns["PropertyConstraintComponent"] = "http://www.w3.org/ns/shacl#PropertyConstraintComponent";
    /** */
    ns["PropertyConstraintComponent-property"] = "http://www.w3.org/ns/shacl#PropertyConstraintComponent-property";
    /** */
    ns["PropertyGroup"] = "http://www.w3.org/ns/shacl#PropertyGroup";
    /** */
    ns["PropertyShape"] = "http://www.w3.org/ns/shacl#PropertyShape";
    /** */
    ns["QualifiedMaxCountConstraintComponent"] = "http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent";
    /** */
    ns["QualifiedMaxCountConstraintComponent-qualifiedMaxCount"] = "http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent-qualifiedMaxCount";
    /** */
    ns["QualifiedMaxCountConstraintComponent-qualifiedValueShape"] = "http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent-qualifiedValueShape";
    /** */
    ns["QualifiedMaxCountConstraintComponent-qualifiedValueShapesDisjoint"] = "http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent-qualifiedValueShapesDisjoint";
    /** */
    ns["QualifiedMinCountConstraintComponent"] = "http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent";
    /** */
    ns["QualifiedMinCountConstraintComponent-qualifiedMinCount"] = "http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent-qualifiedMinCount";
    /** */
    ns["QualifiedMinCountConstraintComponent-qualifiedValueShape"] = "http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent-qualifiedValueShape";
    /** */
    ns["QualifiedMinCountConstraintComponent-qualifiedValueShapesDisjoint"] = "http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent-qualifiedValueShapesDisjoint";
    /** */
    ns["ResultAnnotation"] = "http://www.w3.org/ns/shacl#ResultAnnotation";
    /** */
    ns["Rule"] = "http://www.w3.org/ns/shacl#Rule";
    /** */
    ns["SPARQLAskExecutable"] = "http://www.w3.org/ns/shacl#SPARQLAskExecutable";
    /** */
    ns["SPARQLAskValidator"] = "http://www.w3.org/ns/shacl#SPARQLAskValidator";
    /** */
    ns["SPARQLConstraint"] = "http://www.w3.org/ns/shacl#SPARQLConstraint";
    /** */
    ns["SPARQLConstraintComponent"] = "http://www.w3.org/ns/shacl#SPARQLConstraintComponent";
    /** */
    ns["SPARQLConstraintComponent-sparql"] = "http://www.w3.org/ns/shacl#SPARQLConstraintComponent-sparql";
    /** */
    ns["SPARQLConstructExecutable"] = "http://www.w3.org/ns/shacl#SPARQLConstructExecutable";
    /** */
    ns["SPARQLExecutable"] = "http://www.w3.org/ns/shacl#SPARQLExecutable";
    /** */
    ns["SPARQLFunction"] = "http://www.w3.org/ns/shacl#SPARQLFunction";
    /** */
    ns["SPARQLRule"] = "http://www.w3.org/ns/shacl#SPARQLRule";
    /** */
    ns["SPARQLSelectExecutable"] = "http://www.w3.org/ns/shacl#SPARQLSelectExecutable";
    /** */
    ns["SPARQLSelectValidator"] = "http://www.w3.org/ns/shacl#SPARQLSelectValidator";
    /** */
    ns["SPARQLTarget"] = "http://www.w3.org/ns/shacl#SPARQLTarget";
    /** */
    ns["SPARQLTargetType"] = "http://www.w3.org/ns/shacl#SPARQLTargetType";
    /** */
    ns["SPARQLUpdateExecutable"] = "http://www.w3.org/ns/shacl#SPARQLUpdateExecutable";
    /** */
    ns["Severity"] = "http://www.w3.org/ns/shacl#Severity";
    /** */
    ns["Shape"] = "http://www.w3.org/ns/shacl#Shape";
    /** */
    ns["Target"] = "http://www.w3.org/ns/shacl#Target";
    /** */
    ns["TargetType"] = "http://www.w3.org/ns/shacl#TargetType";
    /** */
    ns["TripleRule"] = "http://www.w3.org/ns/shacl#TripleRule";
    /** */
    ns["UniqueLangConstraintComponent"] = "http://www.w3.org/ns/shacl#UniqueLangConstraintComponent";
    /** */
    ns["UniqueLangConstraintComponent-uniqueLang"] = "http://www.w3.org/ns/shacl#UniqueLangConstraintComponent-uniqueLang";
    /** */
    ns["ValidationReport"] = "http://www.w3.org/ns/shacl#ValidationReport";
    /** */
    ns["ValidationResult"] = "http://www.w3.org/ns/shacl#ValidationResult";
    /** */
    ns["Validator"] = "http://www.w3.org/ns/shacl#Validator";
    /** */
    ns["Violation"] = "http://www.w3.org/ns/shacl#Violation";
    /** */
    ns["Warning"] = "http://www.w3.org/ns/shacl#Warning";
    /** */
    ns["XoneConstraintComponent"] = "http://www.w3.org/ns/shacl#XoneConstraintComponent";
    /** */
    ns["XoneConstraintComponent-xone"] = "http://www.w3.org/ns/shacl#XoneConstraintComponent-xone";
    /** */
    ns["alternativePath"] = "http://www.w3.org/ns/shacl#alternativePath";
    /** */
    ns["and"] = "http://www.w3.org/ns/shacl#and";
    /** */
    ns["annotationProperty"] = "http://www.w3.org/ns/shacl#annotationProperty";
    /** */
    ns["annotationValue"] = "http://www.w3.org/ns/shacl#annotationValue";
    /** */
    ns["annotationVarName"] = "http://www.w3.org/ns/shacl#annotationVarName";
    /** */
    ns["ask"] = "http://www.w3.org/ns/shacl#ask";
    /** */
    ns["class"] = "http://www.w3.org/ns/shacl#class";
    /** */
    ns["closed"] = "http://www.w3.org/ns/shacl#closed";
    /** */
    ns["condition"] = "http://www.w3.org/ns/shacl#condition";
    /** */
    ns["conforms"] = "http://www.w3.org/ns/shacl#conforms";
    /** */
    ns["construct"] = "http://www.w3.org/ns/shacl#construct";
    /** */
    ns["datatype"] = "http://www.w3.org/ns/shacl#datatype";
    /** */
    ns["deactivated"] = "http://www.w3.org/ns/shacl#deactivated";
    /** */
    ns["declare"] = "http://www.w3.org/ns/shacl#declare";
    /** */
    ns["defaultValue"] = "http://www.w3.org/ns/shacl#defaultValue";
    /** */
    ns["description"] = "http://www.w3.org/ns/shacl#description";
    /** */
    ns["detail"] = "http://www.w3.org/ns/shacl#detail";
    /** */
    ns["disjoint"] = "http://www.w3.org/ns/shacl#disjoint";
    /** */
    ns["entailment"] = "http://www.w3.org/ns/shacl#entailment";
    /** */
    ns["equals"] = "http://www.w3.org/ns/shacl#equals";
    /** */
    ns["expression"] = "http://www.w3.org/ns/shacl#expression";
    /** */
    ns["filterShape"] = "http://www.w3.org/ns/shacl#filterShape";
    /** */
    ns["flags"] = "http://www.w3.org/ns/shacl#flags";
    /** */
    ns["focusNode"] = "http://www.w3.org/ns/shacl#focusNode";
    /** */
    ns["group"] = "http://www.w3.org/ns/shacl#group";
    /** */
    ns["hasValue"] = "http://www.w3.org/ns/shacl#hasValue";
    /** */
    ns["ignoredProperties"] = "http://www.w3.org/ns/shacl#ignoredProperties";
    /** */
    ns["in"] = "http://www.w3.org/ns/shacl#in";
    /** */
    ns["intersection"] = "http://www.w3.org/ns/shacl#intersection";
    /** */
    ns["inversePath"] = "http://www.w3.org/ns/shacl#inversePath";
    /** */
    ns["js"] = "http://www.w3.org/ns/shacl#js";
    /** */
    ns["jsFunctionName"] = "http://www.w3.org/ns/shacl#jsFunctionName";
    /** */
    ns["jsLibrary"] = "http://www.w3.org/ns/shacl#jsLibrary";
    /** */
    ns["jsLibraryURL"] = "http://www.w3.org/ns/shacl#jsLibraryURL";
    /** */
    ns["labelTemplate"] = "http://www.w3.org/ns/shacl#labelTemplate";
    /** */
    ns["languageIn"] = "http://www.w3.org/ns/shacl#languageIn";
    /** */
    ns["lessThan"] = "http://www.w3.org/ns/shacl#lessThan";
    /** */
    ns["lessThanOrEquals"] = "http://www.w3.org/ns/shacl#lessThanOrEquals";
    /** */
    ns["maxCount"] = "http://www.w3.org/ns/shacl#maxCount";
    /** */
    ns["maxExclusive"] = "http://www.w3.org/ns/shacl#maxExclusive";
    /** */
    ns["maxInclusive"] = "http://www.w3.org/ns/shacl#maxInclusive";
    /** */
    ns["maxLength"] = "http://www.w3.org/ns/shacl#maxLength";
    /** */
    ns["message"] = "http://www.w3.org/ns/shacl#message";
    /** */
    ns["minCount"] = "http://www.w3.org/ns/shacl#minCount";
    /** */
    ns["minExclusive"] = "http://www.w3.org/ns/shacl#minExclusive";
    /** */
    ns["minInclusive"] = "http://www.w3.org/ns/shacl#minInclusive";
    /** */
    ns["minLength"] = "http://www.w3.org/ns/shacl#minLength";
    /** */
    ns["name"] = "http://www.w3.org/ns/shacl#name";
    /** */
    ns["namespace"] = "http://www.w3.org/ns/shacl#namespace";
    /** */
    ns["node"] = "http://www.w3.org/ns/shacl#node";
    /** */
    ns["nodeKind"] = "http://www.w3.org/ns/shacl#nodeKind";
    /** */
    ns["nodeValidator"] = "http://www.w3.org/ns/shacl#nodeValidator";
    /** */
    ns["nodes"] = "http://www.w3.org/ns/shacl#nodes";
    /** */
    ns["not"] = "http://www.w3.org/ns/shacl#not";
    /** */
    ns["object"] = "http://www.w3.org/ns/shacl#object";
    /** */
    ns["oneOrMorePath"] = "http://www.w3.org/ns/shacl#oneOrMorePath";
    /** */
    ns["optional"] = "http://www.w3.org/ns/shacl#optional";
    /** */
    ns["or"] = "http://www.w3.org/ns/shacl#or";
    /** */
    ns["order"] = "http://www.w3.org/ns/shacl#order";
    /** */
    ns["parameter"] = "http://www.w3.org/ns/shacl#parameter";
    /** */
    ns["path"] = "http://www.w3.org/ns/shacl#path";
    /** */
    ns["pattern"] = "http://www.w3.org/ns/shacl#pattern";
    /** */
    ns["predicate"] = "http://www.w3.org/ns/shacl#predicate";
    /** */
    ns["prefix"] = "http://www.w3.org/ns/shacl#prefix";
    /** */
    ns["prefixes"] = "http://www.w3.org/ns/shacl#prefixes";
    /** */
    ns["property"] = "http://www.w3.org/ns/shacl#property";
    /** */
    ns["propertyValidator"] = "http://www.w3.org/ns/shacl#propertyValidator";
    /** */
    ns["qualifiedMaxCount"] = "http://www.w3.org/ns/shacl#qualifiedMaxCount";
    /** */
    ns["qualifiedMinCount"] = "http://www.w3.org/ns/shacl#qualifiedMinCount";
    /** */
    ns["qualifiedValueShape"] = "http://www.w3.org/ns/shacl#qualifiedValueShape";
    /** */
    ns["qualifiedValueShapesDisjoint"] = "http://www.w3.org/ns/shacl#qualifiedValueShapesDisjoint";
    /** */
    ns["result"] = "http://www.w3.org/ns/shacl#result";
    /** */
    ns["resultAnnotation"] = "http://www.w3.org/ns/shacl#resultAnnotation";
    /** */
    ns["resultMessage"] = "http://www.w3.org/ns/shacl#resultMessage";
    /** */
    ns["resultPath"] = "http://www.w3.org/ns/shacl#resultPath";
    /** */
    ns["resultSeverity"] = "http://www.w3.org/ns/shacl#resultSeverity";
    /** */
    ns["returnType"] = "http://www.w3.org/ns/shacl#returnType";
    /** */
    ns["rule"] = "http://www.w3.org/ns/shacl#rule";
    /** */
    ns["select"] = "http://www.w3.org/ns/shacl#select";
    /** */
    ns["severity"] = "http://www.w3.org/ns/shacl#severity";
    /** */
    ns["shapesGraph"] = "http://www.w3.org/ns/shacl#shapesGraph";
    /** */
    ns["shapesGraphWellFormed"] = "http://www.w3.org/ns/shacl#shapesGraphWellFormed";
    /** */
    ns["sourceConstraint"] = "http://www.w3.org/ns/shacl#sourceConstraint";
    /** */
    ns["sourceConstraintComponent"] = "http://www.w3.org/ns/shacl#sourceConstraintComponent";
    /** */
    ns["sourceShape"] = "http://www.w3.org/ns/shacl#sourceShape";
    /** */
    ns["sparql"] = "http://www.w3.org/ns/shacl#sparql";
    /** */
    ns["subject"] = "http://www.w3.org/ns/shacl#subject";
    /** */
    ns["suggestedShapesGraph"] = "http://www.w3.org/ns/shacl#suggestedShapesGraph";
    /** */
    ns["target"] = "http://www.w3.org/ns/shacl#target";
    /** */
    ns["targetClass"] = "http://www.w3.org/ns/shacl#targetClass";
    /** */
    ns["targetNode"] = "http://www.w3.org/ns/shacl#targetNode";
    /** */
    ns["targetObjectsOf"] = "http://www.w3.org/ns/shacl#targetObjectsOf";
    /** */
    ns["targetSubjectsOf"] = "http://www.w3.org/ns/shacl#targetSubjectsOf";
    /** */
    ns["this"] = "http://www.w3.org/ns/shacl#this";
    /** */
    ns["union"] = "http://www.w3.org/ns/shacl#union";
    /** */
    ns["uniqueLang"] = "http://www.w3.org/ns/shacl#uniqueLang";
    /** */
    ns["update"] = "http://www.w3.org/ns/shacl#update";
    /** */
    ns["validator"] = "http://www.w3.org/ns/shacl#validator";
    /** */
    ns["value"] = "http://www.w3.org/ns/shacl#value";
    /** */
    ns["xone"] = "http://www.w3.org/ns/shacl#xone";
    /** */
    ns["zeroOrMorePath"] = "http://www.w3.org/ns/shacl#zeroOrMorePath";
    /** */
    ns["zeroOrOnePath"] = "http://www.w3.org/ns/shacl#zeroOrOnePath";
})(ns = exports.ns || (exports.ns = {}));
