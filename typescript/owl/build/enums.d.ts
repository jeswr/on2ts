/**
 * "
 *   This ontology partially describes the built-in classes and
 *   properties that together form the basis of the RDF/XML syntax of OWL 2.
 *   The content of this ontology is based on Tables 6.1 and 6.2
 *   in Section 6.4 of the OWL 2 RDF-Based Semantics specification,
 *   available at http://www.w3.org/TR/owl2-rdf-based-semantics/.
 *   Please note that those tables do not include the different annotations
 *   (labels, comments and rdfs:isDefinedBy links) used in this file.
 *   Also note that the descriptions provided in this ontology do not
 *   provide a complete and correct formal description of either the syntax
 *   or the semantics of the introduced terms (please see the OWL 2
 *   recommendations for the complete and normative specifications).
 *   Furthermore, the information provided by this ontology may be
 *   misleading if not used with care. This ontology SHOULD NOT be imported
 *   into OWL ontologies. Importing this file into an OWL 2 DL ontology
 *   will cause it to become an OWL 2 Full ontology and may have other,
 *   unexpected, consequences.
 *    "
 * @title The OWL 2 Schema vocabulary (OWL 2)
 * @type <http://www.w3.org/2002/07/owl#Ontology>
 * @isDefinedBy <http://www.w3.org/TR/owl2-mapping-to-rdf/>
 * @isDefinedBy <http://www.w3.org/TR/owl2-rdf-based-semantics/>
 * @isDefinedBy <http://www.w3.org/TR/owl2-syntax/>
 * @seeAlso <http://www.w3.org/TR/owl2-rdf-based-semantics/#table-axiomatic-classes>
 * @seeAlso <http://www.w3.org/TR/owl2-rdf-based-semantics/#table-axiomatic-properties>
 * @imports <http://www.w3.org/2000/01/rdf-schema>
 * @versionIRI <http://www.w3.org/2002/07/owl>
 * @versionInfo $Date: 2009/11/15 10:54:12 $
 * @namespaceTransformation <http://dev.w3.org/cvsweb/2009/owl-grddl/owx2rdf.xsl>
 */
export declare enum ns {
    /** */
    'AllDifferent' = "http://www.w3.org/2002/07/owl#AllDifferent",
    /** */
    'AllDisjointClasses' = "http://www.w3.org/2002/07/owl#AllDisjointClasses",
    /** */
    'AllDisjointProperties' = "http://www.w3.org/2002/07/owl#AllDisjointProperties",
    /** */
    'Annotation' = "http://www.w3.org/2002/07/owl#Annotation",
    /** */
    'AnnotationProperty' = "http://www.w3.org/2002/07/owl#AnnotationProperty",
    /** */
    'AsymmetricProperty' = "http://www.w3.org/2002/07/owl#AsymmetricProperty",
    /** */
    'Axiom' = "http://www.w3.org/2002/07/owl#Axiom",
    /** */
    'Class' = "http://www.w3.org/2002/07/owl#Class",
    /** */
    'DataRange' = "http://www.w3.org/2002/07/owl#DataRange",
    /** */
    'DatatypeProperty' = "http://www.w3.org/2002/07/owl#DatatypeProperty",
    /** */
    'DeprecatedClass' = "http://www.w3.org/2002/07/owl#DeprecatedClass",
    /** */
    'DeprecatedProperty' = "http://www.w3.org/2002/07/owl#DeprecatedProperty",
    /** */
    'FunctionalProperty' = "http://www.w3.org/2002/07/owl#FunctionalProperty",
    /** */
    'InverseFunctionalProperty' = "http://www.w3.org/2002/07/owl#InverseFunctionalProperty",
    /** */
    'IrreflexiveProperty' = "http://www.w3.org/2002/07/owl#IrreflexiveProperty",
    /** */
    'NamedIndividual' = "http://www.w3.org/2002/07/owl#NamedIndividual",
    /** */
    'NegativePropertyAssertion' = "http://www.w3.org/2002/07/owl#NegativePropertyAssertion",
    /** */
    'Nothing' = "http://www.w3.org/2002/07/owl#Nothing",
    /** */
    'ObjectProperty' = "http://www.w3.org/2002/07/owl#ObjectProperty",
    /** */
    'Ontology' = "http://www.w3.org/2002/07/owl#Ontology",
    /** */
    'OntologyProperty' = "http://www.w3.org/2002/07/owl#OntologyProperty",
    /** */
    'ReflexiveProperty' = "http://www.w3.org/2002/07/owl#ReflexiveProperty",
    /** */
    'Restriction' = "http://www.w3.org/2002/07/owl#Restriction",
    /** */
    'SymmetricProperty' = "http://www.w3.org/2002/07/owl#SymmetricProperty",
    /** */
    'Thing' = "http://www.w3.org/2002/07/owl#Thing",
    /** */
    'TransitiveProperty' = "http://www.w3.org/2002/07/owl#TransitiveProperty",
    /** */
    'allValuesFrom' = "http://www.w3.org/2002/07/owl#allValuesFrom",
    /** */
    'annotatedProperty' = "http://www.w3.org/2002/07/owl#annotatedProperty",
    /** */
    'annotatedSource' = "http://www.w3.org/2002/07/owl#annotatedSource",
    /** */
    'annotatedTarget' = "http://www.w3.org/2002/07/owl#annotatedTarget",
    /** */
    'assertionProperty' = "http://www.w3.org/2002/07/owl#assertionProperty",
    /** */
    'backwardCompatibleWith' = "http://www.w3.org/2002/07/owl#backwardCompatibleWith",
    /** */
    'bottomDataProperty' = "http://www.w3.org/2002/07/owl#bottomDataProperty",
    /** */
    'bottomObjectProperty' = "http://www.w3.org/2002/07/owl#bottomObjectProperty",
    /** */
    'cardinality' = "http://www.w3.org/2002/07/owl#cardinality",
    /** */
    'complementOf' = "http://www.w3.org/2002/07/owl#complementOf",
    /** */
    'datatypeComplementOf' = "http://www.w3.org/2002/07/owl#datatypeComplementOf",
    /** */
    'deprecated' = "http://www.w3.org/2002/07/owl#deprecated",
    /** */
    'differentFrom' = "http://www.w3.org/2002/07/owl#differentFrom",
    /** */
    'disjointUnionOf' = "http://www.w3.org/2002/07/owl#disjointUnionOf",
    /** */
    'disjointWith' = "http://www.w3.org/2002/07/owl#disjointWith",
    /** */
    'distinctMembers' = "http://www.w3.org/2002/07/owl#distinctMembers",
    /** */
    'equivalentClass' = "http://www.w3.org/2002/07/owl#equivalentClass",
    /** */
    'equivalentProperty' = "http://www.w3.org/2002/07/owl#equivalentProperty",
    /** */
    'hasKey' = "http://www.w3.org/2002/07/owl#hasKey",
    /** */
    'hasSelf' = "http://www.w3.org/2002/07/owl#hasSelf",
    /** */
    'hasValue' = "http://www.w3.org/2002/07/owl#hasValue",
    /** */
    'imports' = "http://www.w3.org/2002/07/owl#imports",
    /** */
    'incompatibleWith' = "http://www.w3.org/2002/07/owl#incompatibleWith",
    /** */
    'intersectionOf' = "http://www.w3.org/2002/07/owl#intersectionOf",
    /** */
    'inverseOf' = "http://www.w3.org/2002/07/owl#inverseOf",
    /** */
    'maxCardinality' = "http://www.w3.org/2002/07/owl#maxCardinality",
    /** */
    'maxQualifiedCardinality' = "http://www.w3.org/2002/07/owl#maxQualifiedCardinality",
    /** */
    'members' = "http://www.w3.org/2002/07/owl#members",
    /** */
    'minCardinality' = "http://www.w3.org/2002/07/owl#minCardinality",
    /** */
    'minQualifiedCardinality' = "http://www.w3.org/2002/07/owl#minQualifiedCardinality",
    /** */
    'onClass' = "http://www.w3.org/2002/07/owl#onClass",
    /** */
    'onDataRange' = "http://www.w3.org/2002/07/owl#onDataRange",
    /** */
    'onDatatype' = "http://www.w3.org/2002/07/owl#onDatatype",
    /** */
    'onProperties' = "http://www.w3.org/2002/07/owl#onProperties",
    /** */
    'onProperty' = "http://www.w3.org/2002/07/owl#onProperty",
    /** */
    'oneOf' = "http://www.w3.org/2002/07/owl#oneOf",
    /** */
    'priorVersion' = "http://www.w3.org/2002/07/owl#priorVersion",
    /** */
    'propertyChainAxiom' = "http://www.w3.org/2002/07/owl#propertyChainAxiom",
    /** */
    'propertyDisjointWith' = "http://www.w3.org/2002/07/owl#propertyDisjointWith",
    /** */
    'qualifiedCardinality' = "http://www.w3.org/2002/07/owl#qualifiedCardinality",
    /** */
    'sameAs' = "http://www.w3.org/2002/07/owl#sameAs",
    /** */
    'someValuesFrom' = "http://www.w3.org/2002/07/owl#someValuesFrom",
    /** */
    'sourceIndividual' = "http://www.w3.org/2002/07/owl#sourceIndividual",
    /** */
    'targetIndividual' = "http://www.w3.org/2002/07/owl#targetIndividual",
    /** */
    'targetValue' = "http://www.w3.org/2002/07/owl#targetValue",
    /** */
    'topDataProperty' = "http://www.w3.org/2002/07/owl#topDataProperty",
    /** */
    'topObjectProperty' = "http://www.w3.org/2002/07/owl#topObjectProperty",
    /** */
    'unionOf' = "http://www.w3.org/2002/07/owl#unionOf",
    /** */
    'versionIRI' = "http://www.w3.org/2002/07/owl#versionIRI",
    /** */
    'versionInfo' = "http://www.w3.org/2002/07/owl#versionInfo",
    /** */
    'withRestrictions' = "http://www.w3.org/2002/07/owl#withRestrictions"
}
