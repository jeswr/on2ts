"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ns = void 0;
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
var ns;
(function (ns) {
    /** */
    ns["AllDifferent"] = "http://www.w3.org/2002/07/owl#AllDifferent";
    /** */
    ns["AllDisjointClasses"] = "http://www.w3.org/2002/07/owl#AllDisjointClasses";
    /** */
    ns["AllDisjointProperties"] = "http://www.w3.org/2002/07/owl#AllDisjointProperties";
    /** */
    ns["Annotation"] = "http://www.w3.org/2002/07/owl#Annotation";
    /** */
    ns["AnnotationProperty"] = "http://www.w3.org/2002/07/owl#AnnotationProperty";
    /** */
    ns["AsymmetricProperty"] = "http://www.w3.org/2002/07/owl#AsymmetricProperty";
    /** */
    ns["Axiom"] = "http://www.w3.org/2002/07/owl#Axiom";
    /** */
    ns["Class"] = "http://www.w3.org/2002/07/owl#Class";
    /** */
    ns["DataRange"] = "http://www.w3.org/2002/07/owl#DataRange";
    /** */
    ns["DatatypeProperty"] = "http://www.w3.org/2002/07/owl#DatatypeProperty";
    /** */
    ns["DeprecatedClass"] = "http://www.w3.org/2002/07/owl#DeprecatedClass";
    /** */
    ns["DeprecatedProperty"] = "http://www.w3.org/2002/07/owl#DeprecatedProperty";
    /** */
    ns["FunctionalProperty"] = "http://www.w3.org/2002/07/owl#FunctionalProperty";
    /** */
    ns["InverseFunctionalProperty"] = "http://www.w3.org/2002/07/owl#InverseFunctionalProperty";
    /** */
    ns["IrreflexiveProperty"] = "http://www.w3.org/2002/07/owl#IrreflexiveProperty";
    /** */
    ns["NamedIndividual"] = "http://www.w3.org/2002/07/owl#NamedIndividual";
    /** */
    ns["NegativePropertyAssertion"] = "http://www.w3.org/2002/07/owl#NegativePropertyAssertion";
    /** */
    ns["Nothing"] = "http://www.w3.org/2002/07/owl#Nothing";
    /** */
    ns["ObjectProperty"] = "http://www.w3.org/2002/07/owl#ObjectProperty";
    /** */
    ns["Ontology"] = "http://www.w3.org/2002/07/owl#Ontology";
    /** */
    ns["OntologyProperty"] = "http://www.w3.org/2002/07/owl#OntologyProperty";
    /** */
    ns["ReflexiveProperty"] = "http://www.w3.org/2002/07/owl#ReflexiveProperty";
    /** */
    ns["Restriction"] = "http://www.w3.org/2002/07/owl#Restriction";
    /** */
    ns["SymmetricProperty"] = "http://www.w3.org/2002/07/owl#SymmetricProperty";
    /** */
    ns["Thing"] = "http://www.w3.org/2002/07/owl#Thing";
    /** */
    ns["TransitiveProperty"] = "http://www.w3.org/2002/07/owl#TransitiveProperty";
    /** */
    ns["allValuesFrom"] = "http://www.w3.org/2002/07/owl#allValuesFrom";
    /** */
    ns["annotatedProperty"] = "http://www.w3.org/2002/07/owl#annotatedProperty";
    /** */
    ns["annotatedSource"] = "http://www.w3.org/2002/07/owl#annotatedSource";
    /** */
    ns["annotatedTarget"] = "http://www.w3.org/2002/07/owl#annotatedTarget";
    /** */
    ns["assertionProperty"] = "http://www.w3.org/2002/07/owl#assertionProperty";
    /** */
    ns["backwardCompatibleWith"] = "http://www.w3.org/2002/07/owl#backwardCompatibleWith";
    /** */
    ns["bottomDataProperty"] = "http://www.w3.org/2002/07/owl#bottomDataProperty";
    /** */
    ns["bottomObjectProperty"] = "http://www.w3.org/2002/07/owl#bottomObjectProperty";
    /** */
    ns["cardinality"] = "http://www.w3.org/2002/07/owl#cardinality";
    /** */
    ns["complementOf"] = "http://www.w3.org/2002/07/owl#complementOf";
    /** */
    ns["datatypeComplementOf"] = "http://www.w3.org/2002/07/owl#datatypeComplementOf";
    /** */
    ns["deprecated"] = "http://www.w3.org/2002/07/owl#deprecated";
    /** */
    ns["differentFrom"] = "http://www.w3.org/2002/07/owl#differentFrom";
    /** */
    ns["disjointUnionOf"] = "http://www.w3.org/2002/07/owl#disjointUnionOf";
    /** */
    ns["disjointWith"] = "http://www.w3.org/2002/07/owl#disjointWith";
    /** */
    ns["distinctMembers"] = "http://www.w3.org/2002/07/owl#distinctMembers";
    /** */
    ns["equivalentClass"] = "http://www.w3.org/2002/07/owl#equivalentClass";
    /** */
    ns["equivalentProperty"] = "http://www.w3.org/2002/07/owl#equivalentProperty";
    /** */
    ns["hasKey"] = "http://www.w3.org/2002/07/owl#hasKey";
    /** */
    ns["hasSelf"] = "http://www.w3.org/2002/07/owl#hasSelf";
    /** */
    ns["hasValue"] = "http://www.w3.org/2002/07/owl#hasValue";
    /** */
    ns["imports"] = "http://www.w3.org/2002/07/owl#imports";
    /** */
    ns["incompatibleWith"] = "http://www.w3.org/2002/07/owl#incompatibleWith";
    /** */
    ns["intersectionOf"] = "http://www.w3.org/2002/07/owl#intersectionOf";
    /** */
    ns["inverseOf"] = "http://www.w3.org/2002/07/owl#inverseOf";
    /** */
    ns["maxCardinality"] = "http://www.w3.org/2002/07/owl#maxCardinality";
    /** */
    ns["maxQualifiedCardinality"] = "http://www.w3.org/2002/07/owl#maxQualifiedCardinality";
    /** */
    ns["members"] = "http://www.w3.org/2002/07/owl#members";
    /** */
    ns["minCardinality"] = "http://www.w3.org/2002/07/owl#minCardinality";
    /** */
    ns["minQualifiedCardinality"] = "http://www.w3.org/2002/07/owl#minQualifiedCardinality";
    /** */
    ns["onClass"] = "http://www.w3.org/2002/07/owl#onClass";
    /** */
    ns["onDataRange"] = "http://www.w3.org/2002/07/owl#onDataRange";
    /** */
    ns["onDatatype"] = "http://www.w3.org/2002/07/owl#onDatatype";
    /** */
    ns["onProperties"] = "http://www.w3.org/2002/07/owl#onProperties";
    /** */
    ns["onProperty"] = "http://www.w3.org/2002/07/owl#onProperty";
    /** */
    ns["oneOf"] = "http://www.w3.org/2002/07/owl#oneOf";
    /** */
    ns["priorVersion"] = "http://www.w3.org/2002/07/owl#priorVersion";
    /** */
    ns["propertyChainAxiom"] = "http://www.w3.org/2002/07/owl#propertyChainAxiom";
    /** */
    ns["propertyDisjointWith"] = "http://www.w3.org/2002/07/owl#propertyDisjointWith";
    /** */
    ns["qualifiedCardinality"] = "http://www.w3.org/2002/07/owl#qualifiedCardinality";
    /** */
    ns["sameAs"] = "http://www.w3.org/2002/07/owl#sameAs";
    /** */
    ns["someValuesFrom"] = "http://www.w3.org/2002/07/owl#someValuesFrom";
    /** */
    ns["sourceIndividual"] = "http://www.w3.org/2002/07/owl#sourceIndividual";
    /** */
    ns["targetIndividual"] = "http://www.w3.org/2002/07/owl#targetIndividual";
    /** */
    ns["targetValue"] = "http://www.w3.org/2002/07/owl#targetValue";
    /** */
    ns["topDataProperty"] = "http://www.w3.org/2002/07/owl#topDataProperty";
    /** */
    ns["topObjectProperty"] = "http://www.w3.org/2002/07/owl#topObjectProperty";
    /** */
    ns["unionOf"] = "http://www.w3.org/2002/07/owl#unionOf";
    /** */
    ns["versionIRI"] = "http://www.w3.org/2002/07/owl#versionIRI";
    /** */
    ns["versionInfo"] = "http://www.w3.org/2002/07/owl#versionInfo";
    /** */
    ns["withRestrictions"] = "http://www.w3.org/2002/07/owl#withRestrictions";
})(ns = exports.ns || (exports.ns = {}));
