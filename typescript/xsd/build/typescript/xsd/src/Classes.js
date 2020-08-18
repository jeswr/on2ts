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
exports.Classes = void 0;
var index_1 = require("./index");
var Classes;
(function (Classes) {
    var _ = /** @class */ (function (_super) {
        __extends(_, _super);
        function _() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        _.id = index_1.ns._;
        _[Symbol.toStringTag] = "undefined";
        _.type = Ontology;
        _.subClassOf = [];
        _.SHACLValidators = [];
        _.OnotologyValidators = [];
        return _;
    }(index_1.Base.ClassBase));
    Classes._ = _;
    var NCName = /** @class */ (function (_super) {
        __extends(NCName, _super);
        function NCName() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        NCName.id = index_1.ns.NCName;
        NCName[Symbol.toStringTag] = "NCName";
        NCName.type = Datatype;
        NCName.subClassOf = [Literal];
        NCName.SHACLValidators = [];
        NCName.OnotologyValidators = [];
        return NCName;
    }(index_1.Base.ClassBase));
    Classes.NCName = NCName;
    var NMTOKEN = /** @class */ (function (_super) {
        __extends(NMTOKEN, _super);
        function NMTOKEN() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        NMTOKEN.id = index_1.ns.NMTOKEN;
        NMTOKEN[Symbol.toStringTag] = "NMTOKEN";
        NMTOKEN.type = Datatype;
        NMTOKEN.subClassOf = [Literal];
        NMTOKEN.SHACLValidators = [];
        NMTOKEN.OnotologyValidators = [];
        return NMTOKEN;
    }(index_1.Base.ClassBase));
    Classes.NMTOKEN = NMTOKEN;
    var Name = /** @class */ (function (_super) {
        __extends(Name, _super);
        function Name() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        Name.id = index_1.ns.Name;
        Name[Symbol.toStringTag] = "Name";
        Name.type = Datatype;
        Name.subClassOf = [Literal];
        Name.SHACLValidators = [];
        Name.OnotologyValidators = [];
        return Name;
    }(index_1.Base.ClassBase));
    Classes.Name = Name;
    var anyURI = /** @class */ (function (_super) {
        __extends(anyURI, _super);
        function anyURI() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        anyURI.id = index_1.ns.anyURI;
        anyURI[Symbol.toStringTag] = "anyURI";
        anyURI.type = Datatype;
        anyURI.subClassOf = [Literal];
        anyURI.SHACLValidators = [];
        anyURI.OnotologyValidators = [];
        return anyURI;
    }(index_1.Base.ClassBase));
    Classes.anyURI = anyURI;
    var base64Binary = /** @class */ (function (_super) {
        __extends(base64Binary, _super);
        function base64Binary() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        base64Binary.id = index_1.ns.base64Binary;
        base64Binary[Symbol.toStringTag] = "base64Binary";
        base64Binary.type = Datatype;
        base64Binary.subClassOf = [Literal];
        base64Binary.SHACLValidators = [];
        base64Binary.OnotologyValidators = [];
        return base64Binary;
    }(index_1.Base.ClassBase));
    Classes.base64Binary = base64Binary;
    var _boolean = /** @class */ (function (_super) {
        __extends(_boolean, _super);
        function _boolean() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        _boolean.id = index_1.ns._boolean;
        _boolean[Symbol.toStringTag] = "boolean";
        _boolean.type = Datatype;
        _boolean.subClassOf = [Literal];
        _boolean.SHACLValidators = [];
        _boolean.OnotologyValidators = [];
        return _boolean;
    }(index_1.Base.ClassBase));
    Classes._boolean = _boolean;
    var byte = /** @class */ (function (_super) {
        __extends(byte, _super);
        function byte() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        byte.id = index_1.ns.byte;
        byte[Symbol.toStringTag] = "byte";
        byte.type = Datatype;
        byte.subClassOf = [Literal];
        byte.SHACLValidators = [];
        byte.OnotologyValidators = [];
        return byte;
    }(index_1.Base.ClassBase));
    Classes.byte = byte;
    var date = /** @class */ (function (_super) {
        __extends(date, _super);
        function date() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        date.id = index_1.ns.date;
        date[Symbol.toStringTag] = "date";
        date.type = Datatype;
        date.subClassOf = [Literal];
        date.SHACLValidators = [];
        date.OnotologyValidators = [];
        return date;
    }(index_1.Base.ClassBase));
    Classes.date = date;
    var dateTime = /** @class */ (function (_super) {
        __extends(dateTime, _super);
        function dateTime() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        dateTime.id = index_1.ns.dateTime;
        dateTime[Symbol.toStringTag] = "dateTime";
        dateTime.type = Datatype;
        dateTime.subClassOf = [Literal];
        dateTime.SHACLValidators = [];
        dateTime.OnotologyValidators = [];
        return dateTime;
    }(index_1.Base.ClassBase));
    Classes.dateTime = dateTime;
    var dateTimeStamp = /** @class */ (function (_super) {
        __extends(dateTimeStamp, _super);
        function dateTimeStamp() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        dateTimeStamp.id = index_1.ns.dateTimeStamp;
        dateTimeStamp[Symbol.toStringTag] = "dateTimeStamp";
        dateTimeStamp.type = Datatype;
        dateTimeStamp.subClassOf = [Literal];
        dateTimeStamp.SHACLValidators = [];
        dateTimeStamp.OnotologyValidators = [];
        return dateTimeStamp;
    }(index_1.Base.ClassBase));
    Classes.dateTimeStamp = dateTimeStamp;
    var dayTimeDuration = /** @class */ (function (_super) {
        __extends(dayTimeDuration, _super);
        function dayTimeDuration() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        dayTimeDuration.id = index_1.ns.dayTimeDuration;
        dayTimeDuration[Symbol.toStringTag] = "dayTimeDuration";
        dayTimeDuration.type = Datatype;
        dayTimeDuration.subClassOf = [Literal];
        dayTimeDuration.SHACLValidators = [];
        dayTimeDuration.OnotologyValidators = [];
        return dayTimeDuration;
    }(index_1.Base.ClassBase));
    Classes.dayTimeDuration = dayTimeDuration;
    var decimal = /** @class */ (function (_super) {
        __extends(decimal, _super);
        function decimal() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        decimal.id = index_1.ns.decimal;
        decimal[Symbol.toStringTag] = "decimal";
        decimal.type = Datatype;
        decimal.subClassOf = [Literal];
        decimal.SHACLValidators = [];
        decimal.OnotologyValidators = [];
        return decimal;
    }(index_1.Base.ClassBase));
    Classes.decimal = decimal;
    var double = /** @class */ (function (_super) {
        __extends(double, _super);
        function double() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        double.id = index_1.ns.double;
        double[Symbol.toStringTag] = "double";
        double.type = Datatype;
        double.subClassOf = [Literal];
        double.SHACLValidators = [];
        double.OnotologyValidators = [];
        return double;
    }(index_1.Base.ClassBase));
    Classes.double = double;
    var duration = /** @class */ (function (_super) {
        __extends(duration, _super);
        function duration() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        duration.id = index_1.ns.duration;
        duration[Symbol.toStringTag] = "duration";
        duration.type = Datatype;
        duration.subClassOf = [Literal];
        duration.SHACLValidators = [];
        duration.OnotologyValidators = [];
        return duration;
    }(index_1.Base.ClassBase));
    Classes.duration = duration;
    var float = /** @class */ (function (_super) {
        __extends(float, _super);
        function float() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        float.id = index_1.ns.float;
        float[Symbol.toStringTag] = "float";
        float.type = Datatype;
        float.subClassOf = [Literal];
        float.SHACLValidators = [];
        float.OnotologyValidators = [];
        return float;
    }(index_1.Base.ClassBase));
    Classes.float = float;
    var gDay = /** @class */ (function (_super) {
        __extends(gDay, _super);
        function gDay() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        gDay.id = index_1.ns.gDay;
        gDay[Symbol.toStringTag] = "gDay";
        gDay.type = Datatype;
        gDay.subClassOf = [Literal];
        gDay.SHACLValidators = [];
        gDay.OnotologyValidators = [];
        return gDay;
    }(index_1.Base.ClassBase));
    Classes.gDay = gDay;
    var gMonth = /** @class */ (function (_super) {
        __extends(gMonth, _super);
        function gMonth() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        gMonth.id = index_1.ns.gMonth;
        gMonth[Symbol.toStringTag] = "gMonth";
        gMonth.type = Datatype;
        gMonth.subClassOf = [Literal];
        gMonth.SHACLValidators = [];
        gMonth.OnotologyValidators = [];
        return gMonth;
    }(index_1.Base.ClassBase));
    Classes.gMonth = gMonth;
    var gMonthDay = /** @class */ (function (_super) {
        __extends(gMonthDay, _super);
        function gMonthDay() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        gMonthDay.id = index_1.ns.gMonthDay;
        gMonthDay[Symbol.toStringTag] = "gMonthDay";
        gMonthDay.type = Datatype;
        gMonthDay.subClassOf = [Literal];
        gMonthDay.SHACLValidators = [];
        gMonthDay.OnotologyValidators = [];
        return gMonthDay;
    }(index_1.Base.ClassBase));
    Classes.gMonthDay = gMonthDay;
    var gYear = /** @class */ (function (_super) {
        __extends(gYear, _super);
        function gYear() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        gYear.id = index_1.ns.gYear;
        gYear[Symbol.toStringTag] = "gYear";
        gYear.type = Datatype;
        gYear.subClassOf = [Literal];
        gYear.SHACLValidators = [];
        gYear.OnotologyValidators = [];
        return gYear;
    }(index_1.Base.ClassBase));
    Classes.gYear = gYear;
    var gYearMonth = /** @class */ (function (_super) {
        __extends(gYearMonth, _super);
        function gYearMonth() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        gYearMonth.id = index_1.ns.gYearMonth;
        gYearMonth[Symbol.toStringTag] = "gYearMonth";
        gYearMonth.type = Datatype;
        gYearMonth.subClassOf = [Literal];
        gYearMonth.SHACLValidators = [];
        gYearMonth.OnotologyValidators = [];
        return gYearMonth;
    }(index_1.Base.ClassBase));
    Classes.gYearMonth = gYearMonth;
    var hexBinary = /** @class */ (function (_super) {
        __extends(hexBinary, _super);
        function hexBinary() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        hexBinary.id = index_1.ns.hexBinary;
        hexBinary[Symbol.toStringTag] = "hexBinary";
        hexBinary.type = Datatype;
        hexBinary.subClassOf = [Literal];
        hexBinary.SHACLValidators = [];
        hexBinary.OnotologyValidators = [];
        return hexBinary;
    }(index_1.Base.ClassBase));
    Classes.hexBinary = hexBinary;
    var int = /** @class */ (function (_super) {
        __extends(int, _super);
        function int() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        int.id = index_1.ns.int;
        int[Symbol.toStringTag] = "int";
        int.type = Datatype;
        int.subClassOf = [Literal];
        int.SHACLValidators = [];
        int.OnotologyValidators = [];
        return int;
    }(index_1.Base.ClassBase));
    Classes.int = int;
    var integer = /** @class */ (function (_super) {
        __extends(integer, _super);
        function integer() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        integer.id = index_1.ns.integer;
        integer[Symbol.toStringTag] = "integer";
        integer.type = Datatype;
        integer.subClassOf = [Literal];
        integer.SHACLValidators = [];
        integer.OnotologyValidators = [];
        return integer;
    }(index_1.Base.ClassBase));
    Classes.integer = integer;
    var language = /** @class */ (function (_super) {
        __extends(language, _super);
        function language() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        language.id = index_1.ns.language;
        language[Symbol.toStringTag] = "language";
        language.type = Datatype;
        language.subClassOf = [Literal];
        language.SHACLValidators = [];
        language.OnotologyValidators = [];
        return language;
    }(index_1.Base.ClassBase));
    Classes.language = language;
    var long = /** @class */ (function (_super) {
        __extends(long, _super);
        function long() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        long.id = index_1.ns.long;
        long[Symbol.toStringTag] = "long";
        long.type = Datatype;
        long.subClassOf = [Literal];
        long.SHACLValidators = [];
        long.OnotologyValidators = [];
        return long;
    }(index_1.Base.ClassBase));
    Classes.long = long;
    var negativeInteger = /** @class */ (function (_super) {
        __extends(negativeInteger, _super);
        function negativeInteger() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        negativeInteger.id = index_1.ns.negativeInteger;
        negativeInteger[Symbol.toStringTag] = "negativeInteger";
        negativeInteger.type = Datatype;
        negativeInteger.subClassOf = [Literal];
        negativeInteger.SHACLValidators = [];
        negativeInteger.OnotologyValidators = [];
        return negativeInteger;
    }(index_1.Base.ClassBase));
    Classes.negativeInteger = negativeInteger;
    var nonNegativeInteger = /** @class */ (function (_super) {
        __extends(nonNegativeInteger, _super);
        function nonNegativeInteger() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        nonNegativeInteger.id = index_1.ns.nonNegativeInteger;
        nonNegativeInteger[Symbol.toStringTag] = "nonNegativeInteger";
        nonNegativeInteger.type = Datatype;
        nonNegativeInteger.subClassOf = [Literal];
        nonNegativeInteger.SHACLValidators = [];
        nonNegativeInteger.OnotologyValidators = [];
        return nonNegativeInteger;
    }(index_1.Base.ClassBase));
    Classes.nonNegativeInteger = nonNegativeInteger;
    var nonPositiveInteger = /** @class */ (function (_super) {
        __extends(nonPositiveInteger, _super);
        function nonPositiveInteger() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        nonPositiveInteger.id = index_1.ns.nonPositiveInteger;
        nonPositiveInteger[Symbol.toStringTag] = "nonPositiveInteger";
        nonPositiveInteger.type = Datatype;
        nonPositiveInteger.subClassOf = [Literal];
        nonPositiveInteger.SHACLValidators = [];
        nonPositiveInteger.OnotologyValidators = [];
        return nonPositiveInteger;
    }(index_1.Base.ClassBase));
    Classes.nonPositiveInteger = nonPositiveInteger;
    var normalizedString = /** @class */ (function (_super) {
        __extends(normalizedString, _super);
        function normalizedString() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        normalizedString.id = index_1.ns.normalizedString;
        normalizedString[Symbol.toStringTag] = "normalizedString";
        normalizedString.type = Datatype;
        normalizedString.subClassOf = [Literal];
        normalizedString.SHACLValidators = [];
        normalizedString.OnotologyValidators = [];
        return normalizedString;
    }(index_1.Base.ClassBase));
    Classes.normalizedString = normalizedString;
    var positiveInteger = /** @class */ (function (_super) {
        __extends(positiveInteger, _super);
        function positiveInteger() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        positiveInteger.id = index_1.ns.positiveInteger;
        positiveInteger[Symbol.toStringTag] = "positiveInteger";
        positiveInteger.type = Datatype;
        positiveInteger.subClassOf = [Literal];
        positiveInteger.SHACLValidators = [];
        positiveInteger.OnotologyValidators = [];
        return positiveInteger;
    }(index_1.Base.ClassBase));
    Classes.positiveInteger = positiveInteger;
    var short = /** @class */ (function (_super) {
        __extends(short, _super);
        function short() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        short.id = index_1.ns.short;
        short[Symbol.toStringTag] = "short";
        short.type = Datatype;
        short.subClassOf = [Literal];
        short.SHACLValidators = [];
        short.OnotologyValidators = [];
        return short;
    }(index_1.Base.ClassBase));
    Classes.short = short;
    var _string = /** @class */ (function (_super) {
        __extends(_string, _super);
        function _string() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        _string.id = index_1.ns._string;
        _string[Symbol.toStringTag] = "string";
        _string.type = Datatype;
        _string.subClassOf = [Literal];
        _string.SHACLValidators = [];
        _string.OnotologyValidators = [];
        return _string;
    }(index_1.Base.ClassBase));
    Classes._string = _string;
    var time = /** @class */ (function (_super) {
        __extends(time, _super);
        function time() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        time.id = index_1.ns.time;
        time[Symbol.toStringTag] = "time";
        time.type = Datatype;
        time.subClassOf = [Literal];
        time.SHACLValidators = [];
        time.OnotologyValidators = [];
        return time;
    }(index_1.Base.ClassBase));
    Classes.time = time;
    var token = /** @class */ (function (_super) {
        __extends(token, _super);
        function token() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        token.id = index_1.ns.token;
        token[Symbol.toStringTag] = "token";
        token.type = Datatype;
        token.subClassOf = [Literal];
        token.SHACLValidators = [];
        token.OnotologyValidators = [];
        return token;
    }(index_1.Base.ClassBase));
    Classes.token = token;
    var unsignedByte = /** @class */ (function (_super) {
        __extends(unsignedByte, _super);
        function unsignedByte() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        unsignedByte.id = index_1.ns.unsignedByte;
        unsignedByte[Symbol.toStringTag] = "unsignedByte";
        unsignedByte.type = Datatype;
        unsignedByte.subClassOf = [Literal];
        unsignedByte.SHACLValidators = [];
        unsignedByte.OnotologyValidators = [];
        return unsignedByte;
    }(index_1.Base.ClassBase));
    Classes.unsignedByte = unsignedByte;
    var unsignedInt = /** @class */ (function (_super) {
        __extends(unsignedInt, _super);
        function unsignedInt() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        unsignedInt.id = index_1.ns.unsignedInt;
        unsignedInt[Symbol.toStringTag] = "unsignedInt";
        unsignedInt.type = Datatype;
        unsignedInt.subClassOf = [Literal];
        unsignedInt.SHACLValidators = [];
        unsignedInt.OnotologyValidators = [];
        return unsignedInt;
    }(index_1.Base.ClassBase));
    Classes.unsignedInt = unsignedInt;
    var unsignedLong = /** @class */ (function (_super) {
        __extends(unsignedLong, _super);
        function unsignedLong() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        unsignedLong.id = index_1.ns.unsignedLong;
        unsignedLong[Symbol.toStringTag] = "unsignedLong";
        unsignedLong.type = Datatype;
        unsignedLong.subClassOf = [Literal];
        unsignedLong.SHACLValidators = [];
        unsignedLong.OnotologyValidators = [];
        return unsignedLong;
    }(index_1.Base.ClassBase));
    Classes.unsignedLong = unsignedLong;
    var unsignedShort = /** @class */ (function (_super) {
        __extends(unsignedShort, _super);
        function unsignedShort() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        unsignedShort.id = index_1.ns.unsignedShort;
        unsignedShort[Symbol.toStringTag] = "unsignedShort";
        unsignedShort.type = Datatype;
        unsignedShort.subClassOf = [Literal];
        unsignedShort.SHACLValidators = [];
        unsignedShort.OnotologyValidators = [];
        return unsignedShort;
    }(index_1.Base.ClassBase));
    Classes.unsignedShort = unsignedShort;
    var yearMonthDuration = /** @class */ (function (_super) {
        __extends(yearMonthDuration, _super);
        function yearMonthDuration() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = {};
            return _this;
        }
        yearMonthDuration.id = index_1.ns.yearMonthDuration;
        yearMonthDuration[Symbol.toStringTag] = "yearMonthDuration";
        yearMonthDuration.type = Datatype;
        yearMonthDuration.subClassOf = [Literal];
        yearMonthDuration.SHACLValidators = [];
        yearMonthDuration.OnotologyValidators = [];
        return yearMonthDuration;
    }(index_1.Base.ClassBase));
    Classes.yearMonthDuration = yearMonthDuration;
})(Classes = exports.Classes || (exports.Classes = {}));
