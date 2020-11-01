export enum ns {
    /**
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
     *    
     */
    owl = "http://www.w3.org/2002/07/owl",
    /**
     * The class of OWL individuals.
     * @label Thing
     */
    Thing = "http://www.w3.org/2002/07/owl#Thing",
    /**
     * The class of ontologies.
     * @label Ontology
     */
    Ontology = "http://www.w3.org/2002/07/owl#Ontology",
    /**
     * The class of collections of pairwise different individuals.
     * @label AllDifferent
     */
    AllDifferent = "http://www.w3.org/2002/07/owl#AllDifferent",
    /**
     * The class of collections of pairwise disjoint classes.
     * @label AllDisjointClasses
     */
    AllDisjointClasses = "http://www.w3.org/2002/07/owl#AllDisjointClasses",
    /**
     * The class of collections of pairwise disjoint properties.
     * @label AllDisjointProperties
     */
    AllDisjointProperties = "http://www.w3.org/2002/07/owl#AllDisjointProperties",
    /**
     * The class of annotated annotations for which the RDF serialization consists of an annotated subject, predicate and object.
     * @label Annotation
     */
    Annotation = "http://www.w3.org/2002/07/owl#Annotation",
    /**
     * The class of annotation properties.
     * @label AnnotationProperty
     */
    AnnotationProperty = "http://www.w3.org/2002/07/owl#AnnotationProperty",
    /**
     * The class of asymmetric properties.
     * @label AsymmetricProperty
     */
    AsymmetricProperty = "http://www.w3.org/2002/07/owl#AsymmetricProperty",
    /**
     * The class of object properties.
     * @label ObjectProperty
     */
    ObjectProperty = "http://www.w3.org/2002/07/owl#ObjectProperty",
    /**
     * The class of annotated axioms for which the RDF serialization consists of an annotated subject, predicate and object.
     * @label Axiom
     */
    Axiom = "http://www.w3.org/2002/07/owl#Axiom",
    /**
     * The class of OWL classes.
     * @label Class
     */
    Class = "http://www.w3.org/2002/07/owl#Class",
    /**
     * The class of OWL data ranges, which are special kinds of datatypes. Note: The use of the IRI owl:DataRange has been deprecated as of OWL 2. The IRI rdfs:Datatype SHOULD be used instead.
     * @label DataRange
     */
    DataRange = "http://www.w3.org/2002/07/owl#DataRange",
    /**
     * The class of data properties.
     * @label DatatypeProperty
     */
    DatatypeProperty = "http://www.w3.org/2002/07/owl#DatatypeProperty",
    /**
     * The class of deprecated classes.
     * @label DeprecatedClass
     */
    DeprecatedClass = "http://www.w3.org/2002/07/owl#DeprecatedClass",
    /**
     * The class of deprecated properties.
     * @label DeprecatedProperty
     */
    DeprecatedProperty = "http://www.w3.org/2002/07/owl#DeprecatedProperty",
    /**
     * The class of functional properties.
     * @label FunctionalProperty
     */
    FunctionalProperty = "http://www.w3.org/2002/07/owl#FunctionalProperty",
    /**
     * The class of inverse-functional properties.
     * @label InverseFunctionalProperty
     */
    InverseFunctionalProperty = "http://www.w3.org/2002/07/owl#InverseFunctionalProperty",
    /**
     * The class of irreflexive properties.
     * @label IrreflexiveProperty
     */
    IrreflexiveProperty = "http://www.w3.org/2002/07/owl#IrreflexiveProperty",
    /**
     * The class of named individuals.
     * @label NamedIndividual
     */
    NamedIndividual = "http://www.w3.org/2002/07/owl#NamedIndividual",
    /**
     * The class of negative property assertions.
     * @label NegativePropertyAssertion
     */
    NegativePropertyAssertion = "http://www.w3.org/2002/07/owl#NegativePropertyAssertion",
    /**
     * This is the empty class.
     * @label Nothing
     */
    Nothing = "http://www.w3.org/2002/07/owl#Nothing",
    /**
     * The class of ontology properties.
     * @label OntologyProperty
     */
    OntologyProperty = "http://www.w3.org/2002/07/owl#OntologyProperty",
    /**
     * The class of reflexive properties.
     * @label ReflexiveProperty
     */
    ReflexiveProperty = "http://www.w3.org/2002/07/owl#ReflexiveProperty",
    /**
     * The class of property restrictions.
     * @label Restriction
     */
    Restriction = "http://www.w3.org/2002/07/owl#Restriction",
    /**
     * The class of symmetric properties.
     * @label SymmetricProperty
     */
    SymmetricProperty = "http://www.w3.org/2002/07/owl#SymmetricProperty",
    /**
     * The class of transitive properties.
     * @label TransitiveProperty
     */
    TransitiveProperty = "http://www.w3.org/2002/07/owl#TransitiveProperty",
    /**
     * The property that is used for importing other ontologies into a given ontology.
     * @label imports
     */
    imports = "http://www.w3.org/2002/07/owl#imports",
    /**
     * The property that identifies the version IRI of an ontology.
     * @label versionIRI
     */
    versionIRI = "http://www.w3.org/2002/07/owl#versionIRI",
    /**
     * The annotation property that provides version information for an ontology or another OWL construct.
     * @label versionInfo
     */
    versionInfo = "http://www.w3.org/2002/07/owl#versionInfo",
    /**
     * The property that determines the class that a universal property restriction refers to.
     * @label allValuesFrom
     */
    allValuesFrom = "http://www.w3.org/2002/07/owl#allValuesFrom",
    /**
     * The property that determines the predicate of an annotated axiom or annotated annotation.
     * @label annotatedProperty
     */
    annotatedProperty = "http://www.w3.org/2002/07/owl#annotatedProperty",
    /**
     * The property that determines the subject of an annotated axiom or annotated annotation.
     * @label annotatedSource
     */
    annotatedSource = "http://www.w3.org/2002/07/owl#annotatedSource",
    /**
     * The property that determines the object of an annotated axiom or annotated annotation.
     * @label annotatedTarget
     */
    annotatedTarget = "http://www.w3.org/2002/07/owl#annotatedTarget",
    /**
     * The property that determines the predicate of a negative property assertion.
     * @label assertionProperty
     */
    assertionProperty = "http://www.w3.org/2002/07/owl#assertionProperty",
    /**
     * The annotation property that indicates that a given ontology is backward compatible with another ontology.
     * @label backwardCompatibleWith
     */
    backwardCompatibleWith = "http://www.w3.org/2002/07/owl#backwardCompatibleWith",
    /**
     * The data property that does not relate any individual to any data value.
     * @label bottomDataProperty
     */
    bottomDataProperty = "http://www.w3.org/2002/07/owl#bottomDataProperty",
    /**
     * The object property that does not relate any two individuals.
     * @label bottomObjectProperty
     */
    bottomObjectProperty = "http://www.w3.org/2002/07/owl#bottomObjectProperty",
    /**
     * The property that determines the cardinality of an exact cardinality restriction.
     * @label cardinality
     */
    cardinality = "http://www.w3.org/2002/07/owl#cardinality",
    /**
     * The property that determines that a given class is the complement of another class.
     * @label complementOf
     */
    complementOf = "http://www.w3.org/2002/07/owl#complementOf",
    /**
     * The property that determines that a given data range is the complement of another data range with respect to the data domain.
     * @label datatypeComplementOf
     */
    datatypeComplementOf = "http://www.w3.org/2002/07/owl#datatypeComplementOf",
    /**
     * The annotation property that indicates that a given entity has been deprecated.
     * @label deprecated
     */
    deprecated = "http://www.w3.org/2002/07/owl#deprecated",
    /**
     * The property that determines that two given individuals are different.
     * @label differentFrom
     */
    differentFrom = "http://www.w3.org/2002/07/owl#differentFrom",
    /**
     * The property that determines that a given class is equivalent to the disjoint union of a collection of other classes.
     * @label disjointUnionOf
     */
    disjointUnionOf = "http://www.w3.org/2002/07/owl#disjointUnionOf",
    /**
     * The property that determines that two given classes are disjoint.
     * @label disjointWith
     */
    disjointWith = "http://www.w3.org/2002/07/owl#disjointWith",
    /**
     * The property that determines the collection of pairwise different individuals in a owl:AllDifferent axiom.
     * @label distinctMembers
     */
    distinctMembers = "http://www.w3.org/2002/07/owl#distinctMembers",
    /**
     * The property that determines that two given classes are equivalent, and that is used to specify datatype definitions.
     * @label equivalentClass
     */
    equivalentClass = "http://www.w3.org/2002/07/owl#equivalentClass",
    /**
     * The property that determines that two given properties are equivalent.
     * @label equivalentProperty
     */
    equivalentProperty = "http://www.w3.org/2002/07/owl#equivalentProperty",
    /**
     * The property that determines the collection of properties that jointly build a key.
     * @label hasKey
     */
    hasKey = "http://www.w3.org/2002/07/owl#hasKey",
    /**
     * The property that determines the property that a self restriction refers to.
     * @label hasSelf
     */
    hasSelf = "http://www.w3.org/2002/07/owl#hasSelf",
    /**
     * The property that determines the individual that a has-value restriction refers to.
     * @label hasValue
     */
    hasValue = "http://www.w3.org/2002/07/owl#hasValue",
    /**
     * The annotation property that indicates that a given ontology is incompatible with another ontology.
     * @label incompatibleWith
     */
    incompatibleWith = "http://www.w3.org/2002/07/owl#incompatibleWith",
    /**
     * The property that determines the collection of classes or data ranges that build an intersection.
     * @label intersectionOf
     */
    intersectionOf = "http://www.w3.org/2002/07/owl#intersectionOf",
    /**
     * The property that determines that two given properties are inverse.
     * @label inverseOf
     */
    inverseOf = "http://www.w3.org/2002/07/owl#inverseOf",
    /**
     * The property that determines the cardinality of a maximum cardinality restriction.
     * @label maxCardinality
     */
    maxCardinality = "http://www.w3.org/2002/07/owl#maxCardinality",
    /**
     * The property that determines the cardinality of a maximum qualified cardinality restriction.
     * @label maxQualifiedCardinality
     */
    maxQualifiedCardinality = "http://www.w3.org/2002/07/owl#maxQualifiedCardinality",
    /**
     * The property that determines the collection of members in either a owl:AllDifferent, owl:AllDisjointClasses or owl:AllDisjointProperties axiom.
     * @label members
     */
    members = "http://www.w3.org/2002/07/owl#members",
    /**
     * The property that determines the cardinality of a minimum cardinality restriction.
     * @label minCardinality
     */
    minCardinality = "http://www.w3.org/2002/07/owl#minCardinality",
    /**
     * The property that determines the cardinality of a minimum qualified cardinality restriction.
     * @label minQualifiedCardinality
     */
    minQualifiedCardinality = "http://www.w3.org/2002/07/owl#minQualifiedCardinality",
    /**
     * The property that determines the class that a qualified object cardinality restriction refers to.
     * @label onClass
     */
    onClass = "http://www.w3.org/2002/07/owl#onClass",
    /**
     * The property that determines the data range that a qualified data cardinality restriction refers to.
     * @label onDataRange
     */
    onDataRange = "http://www.w3.org/2002/07/owl#onDataRange",
    /**
     * The property that determines the datatype that a datatype restriction refers to.
     * @label onDatatype
     */
    onDatatype = "http://www.w3.org/2002/07/owl#onDatatype",
    /**
     * The property that determines the collection of individuals or data values that build an enumeration.
     * @label oneOf
     */
    oneOf = "http://www.w3.org/2002/07/owl#oneOf",
    /**
     * The property that determines the n-tuple of properties that a property restriction on an n-ary data range refers to.
     * @label onProperties
     */
    onProperties = "http://www.w3.org/2002/07/owl#onProperties",
    /**
     * The property that determines the property that a property restriction refers to.
     * @label onProperty
     */
    onProperty = "http://www.w3.org/2002/07/owl#onProperty",
    /**
     * The annotation property that indicates the predecessor ontology of a given ontology.
     * @label priorVersion
     */
    priorVersion = "http://www.w3.org/2002/07/owl#priorVersion",
    /**
     * The property that determines the n-tuple of properties that build a sub property chain of a given property.
     * @label propertyChainAxiom
     */
    propertyChainAxiom = "http://www.w3.org/2002/07/owl#propertyChainAxiom",
    /**
     * The property that determines that two given properties are disjoint.
     * @label propertyDisjointWith
     */
    propertyDisjointWith = "http://www.w3.org/2002/07/owl#propertyDisjointWith",
    /**
     * The property that determines the cardinality of an exact qualified cardinality restriction.
     * @label qualifiedCardinality
     */
    qualifiedCardinality = "http://www.w3.org/2002/07/owl#qualifiedCardinality",
    /**
     * The property that determines that two given individuals are equal.
     * @label sameAs
     */
    sameAs = "http://www.w3.org/2002/07/owl#sameAs",
    /**
     * The property that determines the class that an existential property restriction refers to.
     * @label someValuesFrom
     */
    someValuesFrom = "http://www.w3.org/2002/07/owl#someValuesFrom",
    /**
     * The property that determines the subject of a negative property assertion.
     * @label sourceIndividual
     */
    sourceIndividual = "http://www.w3.org/2002/07/owl#sourceIndividual",
    /**
     * The property that determines the object of a negative object property assertion.
     * @label targetIndividual
     */
    targetIndividual = "http://www.w3.org/2002/07/owl#targetIndividual",
    /**
     * The property that determines the value of a negative data property assertion.
     * @label targetValue
     */
    targetValue = "http://www.w3.org/2002/07/owl#targetValue",
    /**
     * The data property that relates every individual to every data value.
     * @label topDataProperty
     */
    topDataProperty = "http://www.w3.org/2002/07/owl#topDataProperty",
    /**
     * The object property that relates every two individuals.
     * @label topObjectProperty
     */
    topObjectProperty = "http://www.w3.org/2002/07/owl#topObjectProperty",
    /**
     * The property that determines the collection of classes or data ranges that build a union.
     * @label unionOf
     */
    unionOf = "http://www.w3.org/2002/07/owl#unionOf",
    /**
     * The property that determines the collection of facet-value pairs that define a datatype restriction.
     * @label withRestrictions
     */
    withRestrictions = "http://www.w3.org/2002/07/owl#withRestrictions"
}
