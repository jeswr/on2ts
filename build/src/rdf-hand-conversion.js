"use strict";
// class Base {
//     static sub: Function[];
//     static [Symbol.hasInstance](obj: any) {
//         return this.prototype === obj
//             || this.sub.some(o => obj instanceof o)
//     }
// }
// class PropertyBase extends Base {
//     static subPropertyOf: Function[];
//     static sub = [Symbol.subPropertyOf]
// }
// class Resource {
//     static label = "Resource"
// }
// class Class {
//     static subClassOf = [
//         Resource
//     ]
// }
// class Property { // rdf
// }
// class subClassOf {
//     static label = "subClassOf"
//     static range = Class
//     static domain = Class
// }
// class subPropertyOf {
//     static label = "subPropertyOf"
//     static range = Property
//     static domain = Property
// }
// class comment {
// }
// class domain {
//     static range = Class
//     static domain = Property
// }
// class Literal {
//     static subClassOf = [
//         Resource
//     ]
// }
// rdfs:domain a rdf:Property ;
// 	rdfs:isDefinedBy <http://www.w3.org/2000/01/rdf-schema#> ;
// 	rdfs:label "domain" ;
// 	rdfs:comment "A domain of the subject property." ;
// 	rdfs:range rdfs:Class ;
// 	rdfs:domain rdf:Property .
// rdfs:Resource a rdfs:Class ;
// 	rdfs:isDefinedBy <http://www.w3.org/2000/01/rdf-schema#> ;
// 	rdfs:label "Resource" ;
// 	rdfs:comment "The class resource, everything." .
// rdfs:Class a rdfs:Class ;
// 	rdfs:isDefinedBy <http://www.w3.org/2000/01/rdf-schema#> ;
// 	rdfs:label "Class" ;
// 	rdfs:comment "The class of classes." ;
// 	rdfs:subClassOf rdfs:Resource .
// rdfs:subClassOf a rdf:Property ;
// 	rdfs:isDefinedBy <http://www.w3.org/2000/01/rdf-schema#> ;
// 	rdfs:label "subClassOf" ;
// 	rdfs:comment "The subject is a subclass of a class." ;
// 	rdfs:range rdfs:Class ;
// 	rdfs:domain rdfs:Class .
// rdfs:subPropertyOf a rdf:Property ;
// 	rdfs:isDefinedBy <http://www.w3.org/2000/01/rdf-schema#> ;
// 	rdfs:label "subPropertyOf" ;
// 	rdfs:comment "The subject is a subproperty of a property." ;
// 	rdfs:range rdf:Property ;
// 	rdfs:domain rdf:Property .
// rdfs:comment a rdf:Property ;
// 	rdfs:isDefinedBy <http://www.w3.org/2000/01/rdf-schema#> ;
// 	rdfs:label "comment" ;
// 	rdfs:comment "A description of the subject resource." ;
// 	rdfs:domain rdfs:Resource ;
// 	rdfs:range rdfs:Literal .
// rdfs:label a rdf:Property ;
// 	rdfs:isDefinedBy <http://www.w3.org/2000/01/rdf-schema#> ;
// 	rdfs:label "label" ;
// 	rdfs:comment "A human-readable name for the subject." ;
// 	rdfs:domain rdfs:Resource ;
// 	rdfs:range rdfs:Literal .
// rdfs:domain a rdf:Property ;
// 	rdfs:isDefinedBy <http://www.w3.org/2000/01/rdf-schema#> ;
// 	rdfs:label "domain" ;
// 	rdfs:comment "A domain of the subject property." ;
// 	rdfs:range rdfs:Class ;
// 	rdfs:domain rdf:Property .
// rdfs:range a rdf:Property ;
// 	rdfs:isDefinedBy <http://www.w3.org/2000/01/rdf-schema#> ;
// 	rdfs:label "range" ;
// 	rdfs:comment "A range of the subject property." ;
// 	rdfs:range rdfs:Class ;
// 	rdfs:domain rdf:Property .
// rdfs:seeAlso a rdf:Property ;
// 	rdfs:isDefinedBy <http://www.w3.org/2000/01/rdf-schema#> ;
// 	rdfs:label "seeAlso" ;
// 	rdfs:comment "Further information about the subject resource." ;
// 	rdfs:range rdfs:Resource ;
// 	rdfs:domain rdfs:Resource .
// rdfs:isDefinedBy a rdf:Property ;
// 	rdfs:isDefinedBy <http://www.w3.org/2000/01/rdf-schema#> ;
// 	rdfs:subPropertyOf rdfs:seeAlso ;
// 	rdfs:label "isDefinedBy" ;
// 	rdfs:comment "The defininition of the subject resource." ;
// 	rdfs:range rdfs:Resource ;
// 	rdfs:domain rdfs:Resource .
// rdfs:Literal a rdfs:Class ;
// 	rdfs:isDefinedBy <http://www.w3.org/2000/01/rdf-schema#> ;
// 	rdfs:label "Literal" ;
// 	rdfs:comment "The class of literal values, eg. textual strings and integers." ;
// 	rdfs:subClassOf rdfs:Resource .
// rdfs:Container a rdfs:Class ;
// 	rdfs:isDefinedBy <http://www.w3.org/2000/01/rdf-schema#> ;
// 	rdfs:label "Container" ;
// 	rdfs:subClassOf rdfs:Resource ;
// 	rdfs:comment "The class of RDF containers." .
// rdfs:ContainerMembershipProperty a rdfs:Class ;
// 	rdfs:isDefinedBy <http://www.w3.org/2000/01/rdf-schema#> ;
// 	rdfs:label "ContainerMembershipProperty" ;
// 	rdfs:comment """The class of container membership properties, rdf:_1, rdf:_2, ...,
//                     all of which are sub-properties of 'member'.""" ;
// 	rdfs:subClassOf rdf:Property .
// rdfs:member a rdf:Property ;
// 	rdfs:isDefinedBy <http://www.w3.org/2000/01/rdf-schema#> ;
// 	rdfs:label "member" ;
// 	rdfs:comment "A member of the subject resource." ;
// 	rdfs:domain rdfs:Resource ;
// 	rdfs:range rdfs:Resource .
// rdfs:Datatype a rdfs:Class ;
// 	rdfs:isDefinedBy <http://www.w3.org/2000/01/rdf-schema#> ;
// 	rdfs:label "Datatype" ;
// 	rdfs:comment "The class of RDF datatypes." ;
// 	rdfs:subClassOf rdfs:Class .
