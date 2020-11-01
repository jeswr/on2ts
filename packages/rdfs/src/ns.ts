export enum ns {
    /** */
    _ = "http://www.w3.org/2000/01/rdf-schema#",
    /**
     * The class resource, everything.
     * @label Resource
     */
    Resource = "http://www.w3.org/2000/01/rdf-schema#Resource",
    /**
     * The class of classes.
     * @label Class
     */
    Class = "http://www.w3.org/2000/01/rdf-schema#Class",
    /**
     * The class of literal values, eg. textual strings and integers.
     * @label Literal
     */
    Literal = "http://www.w3.org/2000/01/rdf-schema#Literal",
    /**
     * The class of RDF containers.
     * @label Container
     */
    Container = "http://www.w3.org/2000/01/rdf-schema#Container",
    /**
     * The class of container membership properties, rdf:_1, rdf:_2, ...,
     *                     all of which are sub-properties of 'member'.
     * @label ContainerMembershipProperty
     */
    ContainerMembershipProperty = "http://www.w3.org/2000/01/rdf-schema#ContainerMembershipProperty",
    /**
     * The class of RDF datatypes.
     * @label Datatype
     */
    Datatype = "http://www.w3.org/2000/01/rdf-schema#Datatype",
    /**
     * A human-readable name for the subject.
     * @label label
     */
    label = "http://www.w3.org/2000/01/rdf-schema#label",
    /**
     * A description of the subject resource.
     * @label comment
     */
    comment = "http://www.w3.org/2000/01/rdf-schema#comment",
    /**
     * The subject is a subclass of a class.
     * @label subClassOf
     */
    subClassOf = "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    /**
     * A range of the subject property.
     * @label range
     */
    range = "http://www.w3.org/2000/01/rdf-schema#range",
    /**
     * A domain of the subject property.
     * @label domain
     */
    domain = "http://www.w3.org/2000/01/rdf-schema#domain",
    /**
     * The subject is a subproperty of a property.
     * @label subPropertyOf
     */
    subPropertyOf = "http://www.w3.org/2000/01/rdf-schema#subPropertyOf",
    /**
     * Further information about the subject resource.
     * @label seeAlso
     */
    seeAlso = "http://www.w3.org/2000/01/rdf-schema#seeAlso",
    /**
     * A member of the subject resource.
     * @label member
     */
    member = "http://www.w3.org/2000/01/rdf-schema#member",
    /**
     * The defininition of the subject resource.
     * @label isDefinedBy
     */
    isDefinedBy = "http://www.w3.org/2000/01/rdf-schema#isDefinedBy"
}
