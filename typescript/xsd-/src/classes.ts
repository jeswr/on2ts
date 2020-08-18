import "index.ts";

export namespace classes {
    export class _ extends Base.ClassBase implements ClassInterface._ {
        static id: ns = ns._;
        static [Symbol.toStringTag]: string = "undefined";
        static type: typeof Base.ClassBase = Ontology;
        static subClassOf: (typeof Base.ClassBase)[] = [];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class NCName extends Base.ClassBase implements ClassInterface.NCName {
        static id: ns = ns.NCName;
        static [Symbol.toStringTag]: string = "NCName";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class NMTOKEN extends Base.ClassBase implements ClassInterface.NMTOKEN {
        static id: ns = ns.NMTOKEN;
        static [Symbol.toStringTag]: string = "NMTOKEN";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class Name extends Base.ClassBase implements ClassInterface.Name {
        static id: ns = ns.Name;
        static [Symbol.toStringTag]: string = "Name";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class anyURI extends Base.ClassBase implements ClassInterface.anyURI {
        static id: ns = ns.anyURI;
        static [Symbol.toStringTag]: string = "anyURI";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class base64Binary extends Base.ClassBase implements ClassInterface.base64Binary {
        static id: ns = ns.base64Binary;
        static [Symbol.toStringTag]: string = "base64Binary";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class _boolean extends Base.ClassBase implements ClassInterface._boolean {
        static id: ns = ns._boolean;
        static [Symbol.toStringTag]: string = "boolean";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class byte extends Base.ClassBase implements ClassInterface.byte {
        static id: ns = ns.byte;
        static [Symbol.toStringTag]: string = "byte";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class date extends Base.ClassBase implements ClassInterface.date {
        static id: ns = ns.date;
        static [Symbol.toStringTag]: string = "date";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class dateTime extends Base.ClassBase implements ClassInterface.dateTime {
        static id: ns = ns.dateTime;
        static [Symbol.toStringTag]: string = "dateTime";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class dateTimeStamp extends Base.ClassBase implements ClassInterface.dateTimeStamp {
        static id: ns = ns.dateTimeStamp;
        static [Symbol.toStringTag]: string = "dateTimeStamp";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class dayTimeDuration extends Base.ClassBase implements ClassInterface.dayTimeDuration {
        static id: ns = ns.dayTimeDuration;
        static [Symbol.toStringTag]: string = "dayTimeDuration";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class decimal extends Base.ClassBase implements ClassInterface.decimal {
        static id: ns = ns.decimal;
        static [Symbol.toStringTag]: string = "decimal";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class double extends Base.ClassBase implements ClassInterface.double {
        static id: ns = ns.double;
        static [Symbol.toStringTag]: string = "double";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class duration extends Base.ClassBase implements ClassInterface.duration {
        static id: ns = ns.duration;
        static [Symbol.toStringTag]: string = "duration";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class float extends Base.ClassBase implements ClassInterface.float {
        static id: ns = ns.float;
        static [Symbol.toStringTag]: string = "float";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class gDay extends Base.ClassBase implements ClassInterface.gDay {
        static id: ns = ns.gDay;
        static [Symbol.toStringTag]: string = "gDay";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class gMonth extends Base.ClassBase implements ClassInterface.gMonth {
        static id: ns = ns.gMonth;
        static [Symbol.toStringTag]: string = "gMonth";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class gMonthDay extends Base.ClassBase implements ClassInterface.gMonthDay {
        static id: ns = ns.gMonthDay;
        static [Symbol.toStringTag]: string = "gMonthDay";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class gYear extends Base.ClassBase implements ClassInterface.gYear {
        static id: ns = ns.gYear;
        static [Symbol.toStringTag]: string = "gYear";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class gYearMonth extends Base.ClassBase implements ClassInterface.gYearMonth {
        static id: ns = ns.gYearMonth;
        static [Symbol.toStringTag]: string = "gYearMonth";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class hexBinary extends Base.ClassBase implements ClassInterface.hexBinary {
        static id: ns = ns.hexBinary;
        static [Symbol.toStringTag]: string = "hexBinary";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class int extends Base.ClassBase implements ClassInterface.int {
        static id: ns = ns.int;
        static [Symbol.toStringTag]: string = "int";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class integer extends Base.ClassBase implements ClassInterface.integer {
        static id: ns = ns.integer;
        static [Symbol.toStringTag]: string = "integer";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class language extends Base.ClassBase implements ClassInterface.language {
        static id: ns = ns.language;
        static [Symbol.toStringTag]: string = "language";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class long extends Base.ClassBase implements ClassInterface.long {
        static id: ns = ns.long;
        static [Symbol.toStringTag]: string = "long";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class negativeInteger extends Base.ClassBase implements ClassInterface.negativeInteger {
        static id: ns = ns.negativeInteger;
        static [Symbol.toStringTag]: string = "negativeInteger";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class nonNegativeInteger extends Base.ClassBase implements ClassInterface.nonNegativeInteger {
        static id: ns = ns.nonNegativeInteger;
        static [Symbol.toStringTag]: string = "nonNegativeInteger";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class nonPositiveInteger extends Base.ClassBase implements ClassInterface.nonPositiveInteger {
        static id: ns = ns.nonPositiveInteger;
        static [Symbol.toStringTag]: string = "nonPositiveInteger";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class normalizedString extends Base.ClassBase implements ClassInterface.normalizedString {
        static id: ns = ns.normalizedString;
        static [Symbol.toStringTag]: string = "normalizedString";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class positiveInteger extends Base.ClassBase implements ClassInterface.positiveInteger {
        static id: ns = ns.positiveInteger;
        static [Symbol.toStringTag]: string = "positiveInteger";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class short extends Base.ClassBase implements ClassInterface.short {
        static id: ns = ns.short;
        static [Symbol.toStringTag]: string = "short";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class _string extends Base.ClassBase implements ClassInterface._string {
        static id: ns = ns._string;
        static [Symbol.toStringTag]: string = "string";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class time extends Base.ClassBase implements ClassInterface.time {
        static id: ns = ns.time;
        static [Symbol.toStringTag]: string = "time";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class token extends Base.ClassBase implements ClassInterface.token {
        static id: ns = ns.token;
        static [Symbol.toStringTag]: string = "token";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class unsignedByte extends Base.ClassBase implements ClassInterface.unsignedByte {
        static id: ns = ns.unsignedByte;
        static [Symbol.toStringTag]: string = "unsignedByte";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class unsignedInt extends Base.ClassBase implements ClassInterface.unsignedInt {
        static id: ns = ns.unsignedInt;
        static [Symbol.toStringTag]: string = "unsignedInt";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class unsignedLong extends Base.ClassBase implements ClassInterface.unsignedLong {
        static id: ns = ns.unsignedLong;
        static [Symbol.toStringTag]: string = "unsignedLong";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class unsignedShort extends Base.ClassBase implements ClassInterface.unsignedShort {
        static id: ns = ns.unsignedShort;
        static [Symbol.toStringTag]: string = "unsignedShort";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }

    export class yearMonthDuration extends Base.ClassBase implements ClassInterface.yearMonthDuration {
        static id: ns = ns.yearMonthDuration;
        static [Symbol.toStringTag]: string = "yearMonthDuration";
        static type: typeof Base.ClassBase = Datatype;
        static subClassOf: (typeof Base.ClassBase)[] = [Literal];
        static SHACLValidators: Base.Validator[] = [];
        static OnotologyValidators: Base.Validator[] = [];
    }
}
