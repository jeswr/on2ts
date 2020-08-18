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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.Base = void 0;
var Base;
(function (Base_1) {
    var Base = /** @class */ (function () {
        function Base(value, options) {
            var valid = this.constructor.isValidInstance(value, options);
            if (valid === true) {
                this.value = value;
            }
            else {
                throw new Error("\n            " + value + " is an invalid instance of " + this.constructor.toString() + ")\n\n            The following validations failed:\n                - " + valid.join('\n\t\t- ') + "\n            ");
            }
        }
        Base.getExtends = function () {
            return [];
        };
        Base[Symbol.hasInstance] = function (obj) {
            var _this = this;
            var _a, _b;
            return obj.constructor === this // myClass instance of Class
                || obj.rdfType === this // Class instancofClass || Class instanceOf Resource
                || obj.constructor.__proto__ === this // myClass instnaceof classBase
                || ((_b = (_a = obj.constructor).getExtends) === null || _b === void 0 ? void 0 : _b.call(_a).some(function (extend) { return extend instanceof _this; }));
        };
        Base.prototype[Symbol.toStringTag] = function () {
            return this.value;
        };
        Base.isValidInstance = function (value, options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            var _a = options.ontologyValidation, ontologyValidation = _a === void 0 ? false : _a, _b = options.SHACLValidation, SHACLValidation = _b === void 0 ? true : _b, _c = options.inheritValidators, inheritValidators = _c === void 0 ? true : _c;
            var applyValidation = function (name, validators, validate) {
                return validate ? validators.filter(function (validator) { return !validator.validator(value); })
                    .map(function (_a) {
                    var message = _a.message;
                    return (typeof message === 'string'
                        ? message
                        : message(value))
                        + (" - at " + name + " validation for " + _this.toString() + ")");
                })
                    : [];
            };
            var ontologyFailures = applyValidation('ontology', this.ontologyValidators, ontologyValidation);
            var SHACLFailures = applyValidation('SHACL', this.SHACLValidators, SHACLValidation);
            var inheritedFailures = inheritValidators
                ? this.getExtends().map(function (superClass) {
                    var isValid = superClass.isValidInstance(value, options);
                    return isValid === true ? [] : isValid;
                }).flat()
                : [];
            var allFailures = __spreadArrays(ontologyFailures, SHACLFailures, inheritedFailures);
            return allFailures.length === 0 ? true : allFailures;
        };
        Base.id = 'BASE';
        Base[Symbol.toStringTag] = 'BASE';
        // [Symbol.toString](): string {
        //     return `${this.value}`
        // }
        Base.ontologyValidators = [];
        Base.SHACLValidators = [];
        return Base;
    }());
    Base_1.Base = Base;
    // Could either just make this part of OWL Class
    // or make our own ontology. We will see
    var ClassBase = /** @class */ (function (_super) {
        __extends(ClassBase, _super);
        function ClassBase(value, properties, options) {
            var _this = _super.call(this, value, options) || this;
            _this.properties = {};
            _this.properties = properties || {};
            return _this;
        }
        ClassBase.getExtends = function () {
            return this.subClassOf;
        };
        ClassBase.prototype.addProperty = function (property) {
            if (Array.isArray(property)) {
                property.forEach(this.addProperty);
            }
            else {
                if (this.constructor.propertyValidatorUsingDomain(property)) {
                    // Add the thing
                }
                else {
                    // Throw error
                }
                //(this.properties[(property.constructor as typeof Base).id] ??= []).push(property)
            }
        };
        ClassBase.propertyValidatorUsingDomain = function (obj) {
            // @ts-ignore TODO: FIX THSI
            return obj.constructor.domainValidator(this);
        };
        ClassBase.id = 'CLASS BASE';
        ClassBase[Symbol.toStringTag] = 'BASE FOR MAKING CLASS INSTANCES';
        ClassBase.subClassOf = [];
        return ClassBase;
    }(Base));
    Base_1.ClassBase = ClassBase;
    var PropertyBase = /** @class */ (function (_super) {
        __extends(PropertyBase, _super);
        function PropertyBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // This may ultimately be enforced by a SHACL
        // constraint in and of itself  
        PropertyBase.rangeValidator = function (node) {
            if (this.range === undefined) {
                return true;
            }
            // Why on earth do we need any with these?
            return this.range.some(function (rangeClass) {
                return node instanceof rangeClass;
            });
        };
        PropertyBase.domainValidator = function (node) {
            if (this.domain === undefined) {
                return true;
            }
            return this.domain.some(function (domainClass) {
                return node instanceof domainClass;
            });
        };
        PropertyBase.internallyGeneratedValidators = function () {
            return [
                this.rangeValidator
            ];
        };
        PropertyBase.getExtends = function () {
            return this.subPropertyOf;
        };
        PropertyBase.id = 'PROPERTY BASE';
        PropertyBase[Symbol.toStringTag] = 'PROPERTY BASE';
        PropertyBase.ontologyValidators = [
        //     {
        //     // Checking range restrinctions
        //     validator(value: any){
        //         this.range.some(rangeClass => value instanceof rangeClass)
        //     },
        //     message: `Value is not in the range ${this.domain}`
        // }
        ];
        return PropertyBase;
    }(Base));
    Base_1.PropertyBase = PropertyBase;
})(Base = exports.Base || (exports.Base = {}));
