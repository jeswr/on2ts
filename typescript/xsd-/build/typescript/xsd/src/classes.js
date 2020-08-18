"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.classes = void 0;
var Base = require("../../../src/base-classes");
require("index.ts");
var classes;
(function (classes) {
    var _ = /** @class */ (function (_super) {
        __extends(_, _super);
        function _() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        _.id = ns._;
        _[Symbol.toStringTag] = "undefined";
        _.type = Ontology;
        _.subClassOf = [];
        _.SHACLValidators = [];
        _.OnotologyValidators = [];
        return _;
    }(Base.ClassBase));
    classes._ = _;
    var NCName = /** @class */ (function (_super) {
        __extends(NCName, _super);
        function NCName() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NCName.id = ns.NCName;
        NCName[Symbol.toStringTag] = "NCName";
        NCName.type = Datatype;
        NCName.subClassOf = [Literal];
        NCName.SHACLValidators = [];
        NCName.OnotologyValidators = [];
        return NCName;
    }(Base.ClassBase));
    classes.NCName = NCName;
    var NMTOKEN = /** @class */ (function (_super) {
        __extends(NMTOKEN, _super);
        function NMTOKEN() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NMTOKEN.id = ns.NMTOKEN;
        NMTOKEN[Symbol.toStringTag] = "NMTOKEN";
        NMTOKEN.type = Datatype;
        NMTOKEN.subClassOf = [Literal];
        NMTOKEN.SHACLValidators = [];
        NMTOKEN.OnotologyValidators = [];
        return NMTOKEN;
    }(Base.ClassBase));
    classes.NMTOKEN = NMTOKEN;
    var Name = /** @class */ (function (_super) {
        __extends(Name, _super);
        function Name() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Name.id = ns.Name;
        Name[Symbol.toStringTag] = "Name";
        Name.type = Datatype;
        Name.subClassOf = [Literal];
        Name.SHACLValidators = [];
        Name.OnotologyValidators = [];
        return Name;
    }(Base.ClassBase));
    classes.Name = Name;
    var anyURI = /** @class */ (function (_super) {
        __extends(anyURI, _super);
        function anyURI() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        anyURI.id = ns.anyURI;
        anyURI[Symbol.toStringTag] = "anyURI";
        anyURI.type = Datatype;
        anyURI.subClassOf = [Literal];
        anyURI.SHACLValidators = [];
        anyURI.OnotologyValidators = [];
        return anyURI;
    }(Base.ClassBase));
    classes.anyURI = anyURI;
    var base64Binary = /** @class */ (function (_super) {
        __extends(base64Binary, _super);
        function base64Binary() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        base64Binary.id = ns.base64Binary;
        base64Binary[Symbol.toStringTag] = "base64Binary";
        base64Binary.type = Datatype;
        base64Binary.subClassOf = [Literal];
        base64Binary.SHACLValidators = [];
        base64Binary.OnotologyValidators = [];
        return base64Binary;
    }(Base.ClassBase));
    classes.base64Binary = base64Binary;
    var _boolean = /** @class */ (function (_super) {
        __extends(_boolean, _super);
        function _boolean() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        _boolean.id = ns._boolean;
        _boolean[Symbol.toStringTag] = "boolean";
        _boolean.type = Datatype;
        _boolean.subClassOf = [Literal];
        _boolean.SHACLValidators = [];
        _boolean.OnotologyValidators = [];
        return _boolean;
    }(Base.ClassBase));
    classes._boolean = _boolean;
    var byte = /** @class */ (function (_super) {
        __extends(byte, _super);
        function byte() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        byte.id = ns.byte;
        byte[Symbol.toStringTag] = "byte";
        byte.type = Datatype;
        byte.subClassOf = [Literal];
        byte.SHACLValidators = [];
        byte.OnotologyValidators = [];
        return byte;
    }(Base.ClassBase));
    classes.byte = byte;
    var date = /** @class */ (function (_super) {
        __extends(date, _super);
        function date() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        date.id = ns.date;
        date[Symbol.toStringTag] = "date";
        date.type = Datatype;
        date.subClassOf = [Literal];
        date.SHACLValidators = [];
        date.OnotologyValidators = [];
        return date;
    }(Base.ClassBase));
    classes.date = date;
    var dateTime = /** @class */ (function (_super) {
        __extends(dateTime, _super);
        function dateTime() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        dateTime.id = ns.dateTime;
        dateTime[Symbol.toStringTag] = "dateTime";
        dateTime.type = Datatype;
        dateTime.subClassOf = [Literal];
        dateTime.SHACLValidators = [];
        dateTime.OnotologyValidators = [];
        return dateTime;
    }(Base.ClassBase));
    classes.dateTime = dateTime;
    var dateTimeStamp = /** @class */ (function (_super) {
        __extends(dateTimeStamp, _super);
        function dateTimeStamp() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        dateTimeStamp.id = ns.dateTimeStamp;
        dateTimeStamp[Symbol.toStringTag] = "dateTimeStamp";
        dateTimeStamp.type = Datatype;
        dateTimeStamp.subClassOf = [Literal];
        dateTimeStamp.SHACLValidators = [];
        dateTimeStamp.OnotologyValidators = [];
        return dateTimeStamp;
    }(Base.ClassBase));
    classes.dateTimeStamp = dateTimeStamp;
    var dayTimeDuration = /** @class */ (function (_super) {
        __extends(dayTimeDuration, _super);
        function dayTimeDuration() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        dayTimeDuration.id = ns.dayTimeDuration;
        dayTimeDuration[Symbol.toStringTag] = "dayTimeDuration";
        dayTimeDuration.type = Datatype;
        dayTimeDuration.subClassOf = [Literal];
        dayTimeDuration.SHACLValidators = [];
        dayTimeDuration.OnotologyValidators = [];
        return dayTimeDuration;
    }(Base.ClassBase));
    classes.dayTimeDuration = dayTimeDuration;
    var decimal = /** @class */ (function (_super) {
        __extends(decimal, _super);
        function decimal() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        decimal.id = ns.decimal;
        decimal[Symbol.toStringTag] = "decimal";
        decimal.type = Datatype;
        decimal.subClassOf = [Literal];
        decimal.SHACLValidators = [];
        decimal.OnotologyValidators = [];
        return decimal;
    }(Base.ClassBase));
    classes.decimal = decimal;
    var double = /** @class */ (function (_super) {
        __extends(double, _super);
        function double() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        double.id = ns.double;
        double[Symbol.toStringTag] = "double";
        double.type = Datatype;
        double.subClassOf = [Literal];
        double.SHACLValidators = [];
        double.OnotologyValidators = [];
        return double;
    }(Base.ClassBase));
    classes.double = double;
    var duration = /** @class */ (function (_super) {
        __extends(duration, _super);
        function duration() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        duration.id = ns.duration;
        duration[Symbol.toStringTag] = "duration";
        duration.type = Datatype;
        duration.subClassOf = [Literal];
        duration.SHACLValidators = [];
        duration.OnotologyValidators = [];
        return duration;
    }(Base.ClassBase));
    classes.duration = duration;
    var float = /** @class */ (function (_super) {
        __extends(float, _super);
        function float() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        float.id = ns.float;
        float[Symbol.toStringTag] = "float";
        float.type = Datatype;
        float.subClassOf = [Literal];
        float.SHACLValidators = [];
        float.OnotologyValidators = [];
        return float;
    }(Base.ClassBase));
    classes.float = float;
    var gDay = /** @class */ (function (_super) {
        __extends(gDay, _super);
        function gDay() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        gDay.id = ns.gDay;
        gDay[Symbol.toStringTag] = "gDay";
        gDay.type = Datatype;
        gDay.subClassOf = [Literal];
        gDay.SHACLValidators = [];
        gDay.OnotologyValidators = [];
        return gDay;
    }(Base.ClassBase));
    classes.gDay = gDay;
    var gMonth = /** @class */ (function (_super) {
        __extends(gMonth, _super);
        function gMonth() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        gMonth.id = ns.gMonth;
        gMonth[Symbol.toStringTag] = "gMonth";
        gMonth.type = Datatype;
        gMonth.subClassOf = [Literal];
        gMonth.SHACLValidators = [];
        gMonth.OnotologyValidators = [];
        return gMonth;
    }(Base.ClassBase));
    classes.gMonth = gMonth;
    var gMonthDay = /** @class */ (function (_super) {
        __extends(gMonthDay, _super);
        function gMonthDay() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        gMonthDay.id = ns.gMonthDay;
        gMonthDay[Symbol.toStringTag] = "gMonthDay";
        gMonthDay.type = Datatype;
        gMonthDay.subClassOf = [Literal];
        gMonthDay.SHACLValidators = [];
        gMonthDay.OnotologyValidators = [];
        return gMonthDay;
    }(Base.ClassBase));
    classes.gMonthDay = gMonthDay;
    var gYear = /** @class */ (function (_super) {
        __extends(gYear, _super);
        function gYear() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        gYear.id = ns.gYear;
        gYear[Symbol.toStringTag] = "gYear";
        gYear.type = Datatype;
        gYear.subClassOf = [Literal];
        gYear.SHACLValidators = [];
        gYear.OnotologyValidators = [];
        return gYear;
    }(Base.ClassBase));
    classes.gYear = gYear;
    var gYearMonth = /** @class */ (function (_super) {
        __extends(gYearMonth, _super);
        function gYearMonth() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        gYearMonth.id = ns.gYearMonth;
        gYearMonth[Symbol.toStringTag] = "gYearMonth";
        gYearMonth.type = Datatype;
        gYearMonth.subClassOf = [Literal];
        gYearMonth.SHACLValidators = [];
        gYearMonth.OnotologyValidators = [];
        return gYearMonth;
    }(Base.ClassBase));
    classes.gYearMonth = gYearMonth;
    var hexBinary = /** @class */ (function (_super) {
        __extends(hexBinary, _super);
        function hexBinary() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        hexBinary.id = ns.hexBinary;
        hexBinary[Symbol.toStringTag] = "hexBinary";
        hexBinary.type = Datatype;
        hexBinary.subClassOf = [Literal];
        hexBinary.SHACLValidators = [];
        hexBinary.OnotologyValidators = [];
        return hexBinary;
    }(Base.ClassBase));
    classes.hexBinary = hexBinary;
    var int = /** @class */ (function (_super) {
        __extends(int, _super);
        function int() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        int.id = ns.int;
        int[Symbol.toStringTag] = "int";
        int.type = Datatype;
        int.subClassOf = [Literal];
        int.SHACLValidators = [];
        int.OnotologyValidators = [];
        return int;
    }(Base.ClassBase));
    classes.int = int;
    var integer = /** @class */ (function (_super) {
        __extends(integer, _super);
        function integer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        integer.id = ns.integer;
        integer[Symbol.toStringTag] = "integer";
        integer.type = Datatype;
        integer.subClassOf = [Literal];
        integer.SHACLValidators = [];
        integer.OnotologyValidators = [];
        return integer;
    }(Base.ClassBase));
    classes.integer = integer;
    var language = /** @class */ (function (_super) {
        __extends(language, _super);
        function language() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        language.id = ns.language;
        language[Symbol.toStringTag] = "language";
        language.type = Datatype;
        language.subClassOf = [Literal];
        language.SHACLValidators = [];
        language.OnotologyValidators = [];
        return language;
    }(Base.ClassBase));
    classes.language = language;
    var long = /** @class */ (function (_super) {
        __extends(long, _super);
        function long() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        long.id = ns.long;
        long[Symbol.toStringTag] = "long";
        long.type = Datatype;
        long.subClassOf = [Literal];
        long.SHACLValidators = [];
        long.OnotologyValidators = [];
        return long;
    }(Base.ClassBase));
    classes.long = long;
    var negativeInteger = /** @class */ (function (_super) {
        __extends(negativeInteger, _super);
        function negativeInteger() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        negativeInteger.id = ns.negativeInteger;
        negativeInteger[Symbol.toStringTag] = "negativeInteger";
        negativeInteger.type = Datatype;
        negativeInteger.subClassOf = [Literal];
        negativeInteger.SHACLValidators = [];
        negativeInteger.OnotologyValidators = [];
        return negativeInteger;
    }(Base.ClassBase));
    classes.negativeInteger = negativeInteger;
    var nonNegativeInteger = /** @class */ (function (_super) {
        __extends(nonNegativeInteger, _super);
        function nonNegativeInteger() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        nonNegativeInteger.id = ns.nonNegativeInteger;
        nonNegativeInteger[Symbol.toStringTag] = "nonNegativeInteger";
        nonNegativeInteger.type = Datatype;
        nonNegativeInteger.subClassOf = [Literal];
        nonNegativeInteger.SHACLValidators = [];
        nonNegativeInteger.OnotologyValidators = [];
        return nonNegativeInteger;
    }(Base.ClassBase));
    classes.nonNegativeInteger = nonNegativeInteger;
    var nonPositiveInteger = /** @class */ (function (_super) {
        __extends(nonPositiveInteger, _super);
        function nonPositiveInteger() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        nonPositiveInteger.id = ns.nonPositiveInteger;
        nonPositiveInteger[Symbol.toStringTag] = "nonPositiveInteger";
        nonPositiveInteger.type = Datatype;
        nonPositiveInteger.subClassOf = [Literal];
        nonPositiveInteger.SHACLValidators = [];
        nonPositiveInteger.OnotologyValidators = [];
        return nonPositiveInteger;
    }(Base.ClassBase));
    classes.nonPositiveInteger = nonPositiveInteger;
    var normalizedString = /** @class */ (function (_super) {
        __extends(normalizedString, _super);
        function normalizedString() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        normalizedString.id = ns.normalizedString;
        normalizedString[Symbol.toStringTag] = "normalizedString";
        normalizedString.type = Datatype;
        normalizedString.subClassOf = [Literal];
        normalizedString.SHACLValidators = [];
        normalizedString.OnotologyValidators = [];
        return normalizedString;
    }(Base.ClassBase));
    classes.normalizedString = normalizedString;
    var positiveInteger = /** @class */ (function (_super) {
        __extends(positiveInteger, _super);
        function positiveInteger() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        positiveInteger.id = ns.positiveInteger;
        positiveInteger[Symbol.toStringTag] = "positiveInteger";
        positiveInteger.type = Datatype;
        positiveInteger.subClassOf = [Literal];
        positiveInteger.SHACLValidators = [];
        positiveInteger.OnotologyValidators = [];
        return positiveInteger;
    }(Base.ClassBase));
    classes.positiveInteger = positiveInteger;
    var short = /** @class */ (function (_super) {
        __extends(short, _super);
        function short() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        short.id = ns.short;
        short[Symbol.toStringTag] = "short";
        short.type = Datatype;
        short.subClassOf = [Literal];
        short.SHACLValidators = [];
        short.OnotologyValidators = [];
        return short;
    }(Base.ClassBase));
    classes.short = short;
    var _string = /** @class */ (function (_super) {
        __extends(_string, _super);
        function _string() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        _string.id = ns._string;
        _string[Symbol.toStringTag] = "string";
        _string.type = Datatype;
        _string.subClassOf = [Literal];
        _string.SHACLValidators = [];
        _string.OnotologyValidators = [];
        return _string;
    }(Base.ClassBase));
    classes._string = _string;
    var time = /** @class */ (function (_super) {
        __extends(time, _super);
        function time() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        time.id = ns.time;
        time[Symbol.toStringTag] = "time";
        time.type = Datatype;
        time.subClassOf = [Literal];
        time.SHACLValidators = [];
        time.OnotologyValidators = [];
        return time;
    }(Base.ClassBase));
    classes.time = time;
    var token = /** @class */ (function (_super) {
        __extends(token, _super);
        function token() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        token.id = ns.token;
        token[Symbol.toStringTag] = "token";
        token.type = Datatype;
        token.subClassOf = [Literal];
        token.SHACLValidators = [];
        token.OnotologyValidators = [];
        return token;
    }(Base.ClassBase));
    classes.token = token;
    var unsignedByte = /** @class */ (function (_super) {
        __extends(unsignedByte, _super);
        function unsignedByte() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        unsignedByte.id = ns.unsignedByte;
        unsignedByte[Symbol.toStringTag] = "unsignedByte";
        unsignedByte.type = Datatype;
        unsignedByte.subClassOf = [Literal];
        unsignedByte.SHACLValidators = [];
        unsignedByte.OnotologyValidators = [];
        return unsignedByte;
    }(Base.ClassBase));
    classes.unsignedByte = unsignedByte;
    var unsignedInt = /** @class */ (function (_super) {
        __extends(unsignedInt, _super);
        function unsignedInt() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        unsignedInt.id = ns.unsignedInt;
        unsignedInt[Symbol.toStringTag] = "unsignedInt";
        unsignedInt.type = Datatype;
        unsignedInt.subClassOf = [Literal];
        unsignedInt.SHACLValidators = [];
        unsignedInt.OnotologyValidators = [];
        return unsignedInt;
    }(Base.ClassBase));
    classes.unsignedInt = unsignedInt;
    var unsignedLong = /** @class */ (function (_super) {
        __extends(unsignedLong, _super);
        function unsignedLong() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        unsignedLong.id = ns.unsignedLong;
        unsignedLong[Symbol.toStringTag] = "unsignedLong";
        unsignedLong.type = Datatype;
        unsignedLong.subClassOf = [Literal];
        unsignedLong.SHACLValidators = [];
        unsignedLong.OnotologyValidators = [];
        return unsignedLong;
    }(Base.ClassBase));
    classes.unsignedLong = unsignedLong;
    var unsignedShort = /** @class */ (function (_super) {
        __extends(unsignedShort, _super);
        function unsignedShort() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        unsignedShort.id = ns.unsignedShort;
        unsignedShort[Symbol.toStringTag] = "unsignedShort";
        unsignedShort.type = Datatype;
        unsignedShort.subClassOf = [Literal];
        unsignedShort.SHACLValidators = [];
        unsignedShort.OnotologyValidators = [];
        return unsignedShort;
    }(Base.ClassBase));
    classes.unsignedShort = unsignedShort;
    var yearMonthDuration = /** @class */ (function (_super) {
        __extends(yearMonthDuration, _super);
        function yearMonthDuration() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        yearMonthDuration.id = ns.yearMonthDuration;
        yearMonthDuration[Symbol.toStringTag] = "yearMonthDuration";
        yearMonthDuration.type = Datatype;
        yearMonthDuration.subClassOf = [Literal];
        yearMonthDuration.SHACLValidators = [];
        yearMonthDuration.OnotologyValidators = [];
        return yearMonthDuration;
    }(Base.ClassBase));
    classes.yearMonthDuration = yearMonthDuration;
})(classes = exports.classes || (exports.classes = {}));
