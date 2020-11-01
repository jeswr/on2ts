export enum ns {
    /** This is the RDF Schema for the RDF vocabulary terms in the RDF Namespace, defined in RDF 1.1 Concepts. */
    _ = "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    /**
     * The empty list, with no items in it. If the rest of a list is nil then the list has no more items in it.
     * @label nil
     */
    nil = "http://www.w3.org/1999/02/22-rdf-syntax-ns#nil",
    /**
     * The class of RDF properties.
     * @label Property
     */
    Property = "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property",
    /**
     * The class of RDF statements.
     * @label Statement
     */
    Statement = "http://www.w3.org/1999/02/22-rdf-syntax-ns#Statement",
    /**
     * The class of unordered containers.
     * @label Bag
     */
    Bag = "http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag",
    /**
     * The class of ordered containers.
     * @label Seq
     */
    Seq = "http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq",
    /**
     * The class of containers of alternatives.
     * @label Alt
     */
    Alt = "http://www.w3.org/1999/02/22-rdf-syntax-ns#Alt",
    /**
     * The class of RDF Lists.
     * @label List
     */
    List = "http://www.w3.org/1999/02/22-rdf-syntax-ns#List",
    /**
     * The datatype of XML literal values.
     * @label XMLLiteral
     */
    XMLLiteral = "http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral",
    /**
     * The subject is an instance of a class.
     * @label type
     */
    type = "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    /**
     * The datatype of RDF literals storing fragments of HTML content
     * @label HTML
     */
    HTML = "http://www.w3.org/1999/02/22-rdf-syntax-ns#HTML",
    /**
     * The datatype of language-tagged string values
     * @label langString
     */
    langString = "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString",
    /**
     * The class of plain (i.e. untyped) literal values, as used in RIF and OWL 2
     * @label PlainLiteral
     */
    PlainLiteral = "http://www.w3.org/1999/02/22-rdf-syntax-ns#PlainLiteral",
    /**
     * The subject of the subject RDF statement.
     * @label subject
     */
    subject = "http://www.w3.org/1999/02/22-rdf-syntax-ns#subject",
    /**
     * The predicate of the subject RDF statement.
     * @label predicate
     */
    predicate = "http://www.w3.org/1999/02/22-rdf-syntax-ns#predicate",
    /**
     * The object of the subject RDF statement.
     * @label object
     */
    object = "http://www.w3.org/1999/02/22-rdf-syntax-ns#object",
    /**
     * Idiomatic property used for structured values.
     * @label value
     */
    value = "http://www.w3.org/1999/02/22-rdf-syntax-ns#value",
    /**
     * The first item in the subject RDF list.
     * @label first
     */
    first = "http://www.w3.org/1999/02/22-rdf-syntax-ns#first",
    /**
     * The rest of the subject RDF list after the first item.
     * @label rest
     */
    rest = "http://www.w3.org/1999/02/22-rdf-syntax-ns#rest"
}
