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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.properties = void 0;
require("index.ts");
var properties;
(function (properties) {
    /** annotation property */
    var annotationProperty = /** @class */ (function (_super) {
        __extends(annotationProperty, _super);
        function annotationProperty() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        annotationProperty.id = ns.annotationProperty;
        annotationProperty[Symbol.toStringTag] = "annotation property";
        annotationProperty.type = Property;
        annotationProperty.domain = ResultAnnotation;
        annotationProperty.range = Property;
        annotationProperty.subPropertyOf = [];
        annotationProperty.classValidators = [];
        annotationProperty.OntologyValidators = [];
        return annotationProperty;
    }(Base.BaseProperty));
    properties.annotationProperty = annotationProperty;
    /** condition */
    var condition = /** @class */ (function (_super) {
        __extends(condition, _super);
        function condition() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        condition.id = ns.condition;
        condition[Symbol.toStringTag] = "condition";
        condition.type = Property;
        condition.domain = Rule;
        condition.range = Shape;
        condition.subPropertyOf = [];
        condition.classValidators = [];
        condition.OntologyValidators = [];
        return condition;
    }(Base.BaseProperty));
    properties.condition = condition;
    /** description */
    var description = /** @class */ (function (_super) {
        __extends(description, _super);
        function description() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        description.id = ns.description;
        description[Symbol.toStringTag] = "description";
        description.type = Property;
        description.domain = PropertyShape;
        description.range = _undefined;
        description.subPropertyOf = [];
        description.classValidators = [];
        description.OntologyValidators = [];
        return description;
    }(Base.BaseProperty));
    properties.description = description;
    /** group */
    var group = /** @class */ (function (_super) {
        __extends(group, _super);
        function group() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        group.id = ns.group;
        group[Symbol.toStringTag] = "group";
        group.type = Property;
        group.domain = PropertyShape;
        group.range = PropertyGroup;
        group.subPropertyOf = [];
        group.classValidators = [];
        group.OntologyValidators = [];
        return group;
    }(Base.BaseProperty));
    properties.group = group;
    /** annotation variable name */
    var annotationVarName = /** @class */ (function (_super) {
        __extends(annotationVarName, _super);
        function annotationVarName() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        annotationVarName.id = ns.annotationVarName;
        annotationVarName[Symbol.toStringTag] = "annotation variable name";
        annotationVarName.type = Property;
        annotationVarName.domain = ResultAnnotation;
        annotationVarName.range = _string;
        annotationVarName.subPropertyOf = [];
        annotationVarName.classValidators = [];
        annotationVarName.OntologyValidators = [];
        return annotationVarName;
    }(Base.BaseProperty));
    properties.annotationVarName = annotationVarName;
    /** annotation value */
    var annotationValue = /** @class */ (function (_super) {
        __extends(annotationValue, _super);
        function annotationValue() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        annotationValue.id = ns.annotationValue;
        annotationValue[Symbol.toStringTag] = "annotation value";
        annotationValue.type = Property;
        annotationValue.domain = ResultAnnotation;
        annotationValue.range = _undefined;
        annotationValue.subPropertyOf = [];
        annotationValue.classValidators = [];
        annotationValue.OntologyValidators = [];
        return annotationValue;
    }(Base.BaseProperty));
    properties.annotationValue = annotationValue;
    /** default value */
    var defaultValue = /** @class */ (function (_super) {
        __extends(defaultValue, _super);
        function defaultValue() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        defaultValue.id = ns.defaultValue;
        defaultValue[Symbol.toStringTag] = "default value";
        defaultValue.type = Property;
        defaultValue.domain = PropertyShape;
        defaultValue.range = _undefined;
        defaultValue.subPropertyOf = [];
        defaultValue.classValidators = [];
        defaultValue.OntologyValidators = [];
        return defaultValue;
    }(Base.BaseProperty));
    properties.defaultValue = defaultValue;
    /** order */
    var order = /** @class */ (function (_super) {
        __extends(order, _super);
        function order() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        order.id = ns.order;
        order[Symbol.toStringTag] = "order";
        order.type = Property;
        order.domain = _undefined;
        order.range = _undefined;
        order.subPropertyOf = [];
        order.classValidators = [];
        order.OntologyValidators = [];
        return order;
    }(Base.BaseProperty));
    properties.order = order;
    /** qualified min count */
    var qualifiedMinCount = /** @class */ (function (_super) {
        __extends(qualifiedMinCount, _super);
        function qualifiedMinCount() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        qualifiedMinCount.id = ns.qualifiedMinCount;
        qualifiedMinCount[Symbol.toStringTag] = "qualified min count";
        qualifiedMinCount.type = Property;
        qualifiedMinCount.domain = _undefined;
        qualifiedMinCount.range = integer;
        qualifiedMinCount.subPropertyOf = [];
        qualifiedMinCount.classValidators = [];
        qualifiedMinCount.OntologyValidators = [];
        return qualifiedMinCount;
    }(Base.BaseProperty));
    properties.qualifiedMinCount = qualifiedMinCount;
    /** not */
    var not = /** @class */ (function (_super) {
        __extends(not, _super);
        function not() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        not.id = ns.not;
        not[Symbol.toStringTag] = "not";
        not.type = Property;
        not.domain = _undefined;
        not.range = Shape;
        not.subPropertyOf = [];
        not.classValidators = [];
        not.OntologyValidators = [];
        return not;
    }(Base.BaseProperty));
    properties.not = not;
    /** filter shape */
    var filterShape = /** @class */ (function (_super) {
        __extends(filterShape, _super);
        function filterShape() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        filterShape.id = ns.filterShape;
        filterShape[Symbol.toStringTag] = "filter shape";
        filterShape.type = Property;
        filterShape.domain = _undefined;
        filterShape.range = Shape;
        filterShape.subPropertyOf = [];
        filterShape.classValidators = [];
        filterShape.OntologyValidators = [];
        return filterShape;
    }(Base.BaseProperty));
    properties.filterShape = filterShape;
    /** flags */
    var flags = /** @class */ (function (_super) {
        __extends(flags, _super);
        function flags() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        flags.id = ns.flags;
        flags[Symbol.toStringTag] = "flags";
        flags.type = Property;
        flags.domain = _undefined;
        flags.range = _string;
        flags.subPropertyOf = [];
        flags.classValidators = [];
        flags.OntologyValidators = [];
        return flags;
    }(Base.BaseProperty));
    properties.flags = flags;
    /** pattern */
    var pattern = /** @class */ (function (_super) {
        __extends(pattern, _super);
        function pattern() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        pattern.prototype[sh.validator] = function (node) {
            return this.value.test(node.value);
        };
        pattern.prototype[sh.message] = function (node) {
            return "Should match the pattern " + this.value.source;
        };
        pattern.id = ns.pattern;
        pattern[Symbol.toStringTag] = "pattern";
        pattern.type = Property;
        pattern.domain = _undefined;
        pattern.range = _string;
        pattern.subPropertyOf = [];
        pattern.classValidators = [];
        pattern.OntologyValidators = [];
        return pattern;
    }(Base.BaseProperty));
    properties.pattern = pattern;
    /** object */
    var _object = /** @class */ (function (_super) {
        __extends(_object, _super);
        function _object() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        _object.id = ns._object;
        _object[Symbol.toStringTag] = "object";
        _object.type = Property;
        _object.domain = TripleRule;
        _object.range = _undefined;
        _object.subPropertyOf = [];
        _object.classValidators = [];
        _object.OntologyValidators = [];
        return _object;
    }(Base.BaseProperty));
    properties._object = _object;
    /** intersection */
    var intersection = /** @class */ (function (_super) {
        __extends(intersection, _super);
        function intersection() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        intersection.id = ns.intersection;
        intersection[Symbol.toStringTag] = "intersection";
        intersection.type = Property;
        intersection.domain = _undefined;
        intersection.range = _undefined;
        intersection.subPropertyOf = [];
        intersection.classValidators = [];
        intersection.OntologyValidators = [];
        return intersection;
    }(Base.BaseProperty));
    properties.intersection = intersection;
    /** nodes */
    var nodes = /** @class */ (function (_super) {
        __extends(nodes, _super);
        function nodes() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        nodes.id = ns.nodes;
        nodes[Symbol.toStringTag] = "nodes";
        nodes.type = Property;
        nodes.domain = _undefined;
        nodes.range = _undefined;
        nodes.subPropertyOf = [];
        nodes.classValidators = [];
        nodes.OntologyValidators = [];
        return nodes;
    }(Base.BaseProperty));
    properties.nodes = nodes;
    /** predicate */
    var predicate = /** @class */ (function (_super) {
        __extends(predicate, _super);
        function predicate() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        predicate.id = ns.predicate;
        predicate[Symbol.toStringTag] = "predicate";
        predicate.type = Property;
        predicate.domain = TripleRule;
        predicate.range = _undefined;
        predicate.subPropertyOf = [];
        predicate.classValidators = [];
        predicate.OntologyValidators = [];
        return predicate;
    }(Base.BaseProperty));
    properties.predicate = predicate;
    /** qualified value shapes disjoint */
    var qualifiedValueShapesDisjoint = /** @class */ (function (_super) {
        __extends(qualifiedValueShapesDisjoint, _super);
        function qualifiedValueShapesDisjoint() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        qualifiedValueShapesDisjoint.id = ns.qualifiedValueShapesDisjoint;
        qualifiedValueShapesDisjoint[Symbol.toStringTag] = "qualified value shapes disjoint";
        qualifiedValueShapesDisjoint.type = Property;
        qualifiedValueShapesDisjoint.domain = _undefined;
        qualifiedValueShapesDisjoint.range = _boolean;
        qualifiedValueShapesDisjoint.subPropertyOf = [];
        qualifiedValueShapesDisjoint.classValidators = [];
        qualifiedValueShapesDisjoint.OntologyValidators = [];
        return qualifiedValueShapesDisjoint;
    }(Base.BaseProperty));
    properties.qualifiedValueShapesDisjoint = qualifiedValueShapesDisjoint;
    /** unique languages */
    var uniqueLang = /** @class */ (function (_super) {
        __extends(uniqueLang, _super);
        function uniqueLang() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        uniqueLang.id = ns.uniqueLang;
        uniqueLang[Symbol.toStringTag] = "unique languages";
        uniqueLang.type = Property;
        uniqueLang.domain = _undefined;
        uniqueLang.range = _boolean;
        uniqueLang.subPropertyOf = [];
        uniqueLang.classValidators = [];
        uniqueLang.OntologyValidators = [];
        return uniqueLang;
    }(Base.BaseProperty));
    properties.uniqueLang = uniqueLang;
    /** prefixes */
    var prefixes = /** @class */ (function (_super) {
        __extends(prefixes, _super);
        function prefixes() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        prefixes.id = ns.prefixes;
        prefixes[Symbol.toStringTag] = "prefixes";
        prefixes.type = Property;
        prefixes.domain = SPARQLExecutable;
        prefixes.range = Ontology;
        prefixes.subPropertyOf = [];
        prefixes.classValidators = [];
        prefixes.OntologyValidators = [];
        return prefixes;
    }(Base.BaseProperty));
    properties.prefixes = prefixes;
    /** ask */
    var ask = /** @class */ (function (_super) {
        __extends(ask, _super);
        function ask() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ask.id = ns.ask;
        ask[Symbol.toStringTag] = "ask";
        ask.type = Property;
        ask.domain = SPARQLAskExecutable;
        ask.range = _string;
        ask.subPropertyOf = [];
        ask.classValidators = [];
        ask.OntologyValidators = [];
        return ask;
    }(Base.BaseProperty));
    properties.ask = ask;
    /** update */
    var update = /** @class */ (function (_super) {
        __extends(update, _super);
        function update() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        update.id = ns.update;
        update[Symbol.toStringTag] = "update";
        update.type = Property;
        update.domain = SPARQLUpdateExecutable;
        update.range = _string;
        update.subPropertyOf = [];
        update.classValidators = [];
        update.OntologyValidators = [];
        return update;
    }(Base.BaseProperty));
    properties.update = update;
    /** alternative path */
    var alternativePath = /** @class */ (function (_super) {
        __extends(alternativePath, _super);
        function alternativePath() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        alternativePath.id = ns.alternativePath;
        alternativePath[Symbol.toStringTag] = "alternative path";
        alternativePath.type = Property;
        alternativePath.domain = _undefined;
        alternativePath.range = List;
        alternativePath.subPropertyOf = [];
        alternativePath.classValidators = [];
        alternativePath.OntologyValidators = [];
        return alternativePath;
    }(Base.BaseProperty));
    properties.alternativePath = alternativePath;
    /** and */
    var and = /** @class */ (function (_super) {
        __extends(and, _super);
        function and() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        and.id = ns.and;
        and[Symbol.toStringTag] = "and";
        and.type = Property;
        and.domain = _undefined;
        and.range = List;
        and.subPropertyOf = [];
        and.classValidators = [];
        and.OntologyValidators = [];
        return and;
    }(Base.BaseProperty));
    properties.and = and;
    /** class */
    var _class = /** @class */ (function (_super) {
        __extends(_class, _super);
        function _class() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        _class.id = ns._class;
        _class[Symbol.toStringTag] = "class";
        _class.type = Property;
        _class.domain = _undefined;
        _class.range = Class;
        _class.subPropertyOf = [];
        _class.classValidators = [];
        _class.OntologyValidators = [];
        return _class;
    }(Base.BaseProperty));
    properties._class = _class;
    /** closed */
    var closed = /** @class */ (function (_super) {
        __extends(closed, _super);
        function closed() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        closed.id = ns.closed;
        closed[Symbol.toStringTag] = "closed";
        closed.type = Property;
        closed.domain = _undefined;
        closed.range = _boolean;
        closed.subPropertyOf = [];
        closed.classValidators = [];
        closed.OntologyValidators = [];
        return closed;
    }(Base.BaseProperty));
    properties.closed = closed;
    /** conforms */
    var conforms = /** @class */ (function (_super) {
        __extends(conforms, _super);
        function conforms() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        conforms.id = ns.conforms;
        conforms[Symbol.toStringTag] = "conforms";
        conforms.type = Property;
        conforms.domain = ValidationReport;
        conforms.range = _boolean;
        conforms.subPropertyOf = [];
        conforms.classValidators = [];
        conforms.OntologyValidators = [];
        return conforms;
    }(Base.BaseProperty));
    properties.conforms = conforms;
    /** construct */
    var construct = /** @class */ (function (_super) {
        __extends(construct, _super);
        function construct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        construct.id = ns.construct;
        construct[Symbol.toStringTag] = "construct";
        construct.type = Property;
        construct.domain = SPARQLConstructExecutable;
        construct.range = _string;
        construct.subPropertyOf = [];
        construct.classValidators = [];
        construct.OntologyValidators = [];
        return construct;
    }(Base.BaseProperty));
    properties.construct = construct;
    /** datatype */
    var datatype = /** @class */ (function (_super) {
        __extends(datatype, _super);
        function datatype() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        datatype.id = ns.datatype;
        datatype[Symbol.toStringTag] = "datatype";
        datatype.type = Property;
        datatype.domain = _undefined;
        datatype.range = Datatype;
        datatype.subPropertyOf = [];
        datatype.classValidators = [];
        datatype.OntologyValidators = [];
        return datatype;
    }(Base.BaseProperty));
    properties.datatype = datatype;
    /** deactivated */
    var deactivated = /** @class */ (function (_super) {
        __extends(deactivated, _super);
        function deactivated() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        deactivated.id = ns.deactivated;
        deactivated[Symbol.toStringTag] = "deactivated";
        deactivated.type = Property;
        deactivated.domain = _undefined;
        deactivated.range = _boolean;
        deactivated.subPropertyOf = [];
        deactivated.classValidators = [];
        deactivated.OntologyValidators = [];
        return deactivated;
    }(Base.BaseProperty));
    properties.deactivated = deactivated;
    /** declare */
    var declare = /** @class */ (function (_super) {
        __extends(declare, _super);
        function declare() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        declare.id = ns.declare;
        declare[Symbol.toStringTag] = "declare";
        declare.type = Property;
        declare.domain = Ontology;
        declare.range = PrefixDeclaration;
        declare.subPropertyOf = [];
        declare.classValidators = [];
        declare.OntologyValidators = [];
        return declare;
    }(Base.BaseProperty));
    properties.declare = declare;
    /** detail */
    var detail = /** @class */ (function (_super) {
        __extends(detail, _super);
        function detail() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        detail.id = ns.detail;
        detail[Symbol.toStringTag] = "detail";
        detail.type = Property;
        detail.domain = AbstractResult;
        detail.range = AbstractResult;
        detail.subPropertyOf = [];
        detail.classValidators = [];
        detail.OntologyValidators = [];
        return detail;
    }(Base.BaseProperty));
    properties.detail = detail;
    /** disjoint */
    var disjoint = /** @class */ (function (_super) {
        __extends(disjoint, _super);
        function disjoint() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        disjoint.id = ns.disjoint;
        disjoint[Symbol.toStringTag] = "disjoint";
        disjoint.type = Property;
        disjoint.domain = _undefined;
        disjoint.range = Property;
        disjoint.subPropertyOf = [];
        disjoint.classValidators = [];
        disjoint.OntologyValidators = [];
        return disjoint;
    }(Base.BaseProperty));
    properties.disjoint = disjoint;
    /** entailment */
    var entailment = /** @class */ (function (_super) {
        __extends(entailment, _super);
        function entailment() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        entailment.id = ns.entailment;
        entailment[Symbol.toStringTag] = "entailment";
        entailment.type = Property;
        entailment.domain = Ontology;
        entailment.range = Resource;
        entailment.subPropertyOf = [];
        entailment.classValidators = [];
        entailment.OntologyValidators = [];
        return entailment;
    }(Base.BaseProperty));
    properties.entailment = entailment;
    /** equals */
    var equals = /** @class */ (function (_super) {
        __extends(equals, _super);
        function equals() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        equals.id = ns.equals;
        equals[Symbol.toStringTag] = "equals";
        equals.type = Property;
        equals.domain = _undefined;
        equals.range = Property;
        equals.subPropertyOf = [];
        equals.classValidators = [];
        equals.OntologyValidators = [];
        return equals;
    }(Base.BaseProperty));
    properties.equals = equals;
    /** expression */
    var expression = /** @class */ (function (_super) {
        __extends(expression, _super);
        function expression() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        expression.id = ns.expression;
        expression[Symbol.toStringTag] = "expression";
        expression.type = Property;
        expression.domain = _undefined;
        expression.range = _undefined;
        expression.subPropertyOf = [];
        expression.classValidators = [];
        expression.OntologyValidators = [];
        return expression;
    }(Base.BaseProperty));
    properties.expression = expression;
    /** focus node */
    var focusNode = /** @class */ (function (_super) {
        __extends(focusNode, _super);
        function focusNode() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        focusNode.id = ns.focusNode;
        focusNode[Symbol.toStringTag] = "focus node";
        focusNode.type = Property;
        focusNode.domain = AbstractResult;
        focusNode.range = _undefined;
        focusNode.subPropertyOf = [];
        focusNode.classValidators = [];
        focusNode.OntologyValidators = [];
        return focusNode;
    }(Base.BaseProperty));
    properties.focusNode = focusNode;
    /** has value */
    var hasValue = /** @class */ (function (_super) {
        __extends(hasValue, _super);
        function hasValue() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        hasValue.id = ns.hasValue;
        hasValue[Symbol.toStringTag] = "has value";
        hasValue.type = Property;
        hasValue.domain = _undefined;
        hasValue.range = _undefined;
        hasValue.subPropertyOf = [];
        hasValue.classValidators = [];
        hasValue.OntologyValidators = [];
        return hasValue;
    }(Base.BaseProperty));
    properties.hasValue = hasValue;
    /** ignored properties */
    var ignoredProperties = /** @class */ (function (_super) {
        __extends(ignoredProperties, _super);
        function ignoredProperties() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ignoredProperties.id = ns.ignoredProperties;
        ignoredProperties[Symbol.toStringTag] = "ignored properties";
        ignoredProperties.type = Property;
        ignoredProperties.domain = _undefined;
        ignoredProperties.range = List;
        ignoredProperties.subPropertyOf = [];
        ignoredProperties.classValidators = [];
        ignoredProperties.OntologyValidators = [];
        return ignoredProperties;
    }(Base.BaseProperty));
    properties.ignoredProperties = ignoredProperties;
    /** in */
    var _in = /** @class */ (function (_super) {
        __extends(_in, _super);
        function _in() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        _in.id = ns._in;
        _in[Symbol.toStringTag] = "in";
        _in.type = Property;
        _in.domain = _undefined;
        _in.range = List;
        _in.subPropertyOf = [];
        _in.classValidators = [];
        _in.OntologyValidators = [];
        return _in;
    }(Base.BaseProperty));
    properties._in = _in;
    /** inverse path */
    var inversePath = /** @class */ (function (_super) {
        __extends(inversePath, _super);
        function inversePath() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        inversePath.id = ns.inversePath;
        inversePath[Symbol.toStringTag] = "inverse path";
        inversePath.type = Property;
        inversePath.domain = _undefined;
        inversePath.range = Resource;
        inversePath.subPropertyOf = [];
        inversePath.classValidators = [];
        inversePath.OntologyValidators = [];
        return inversePath;
    }(Base.BaseProperty));
    properties.inversePath = inversePath;
    /** JavaScript constraint */
    var js = /** @class */ (function (_super) {
        __extends(js, _super);
        function js() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this[_a] = "Does not pass the function";
            return _this;
        }
        js[(_a = sh.message, sh.validator)] = function (node) {
        };
        var _a;
        js.id = ns.js;
        js[Symbol.toStringTag] = "JavaScript constraint";
        js.type = Property;
        js.domain = _undefined;
        js.range = JSConstraint;
        js.subPropertyOf = [];
        js.classValidators = [];
        js.OntologyValidators = [];
        return js;
    }(Base.BaseProperty));
    properties.js = js;
    /** JavaScript function name */
    var jsFunctionName = /** @class */ (function (_super) {
        __extends(jsFunctionName, _super);
        function jsFunctionName() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        jsFunctionName.id = ns.jsFunctionName;
        jsFunctionName[Symbol.toStringTag] = "JavaScript function name";
        jsFunctionName.type = Property;
        jsFunctionName.domain = JSExecutable;
        jsFunctionName.range = _string;
        jsFunctionName.subPropertyOf = [];
        jsFunctionName.classValidators = [];
        jsFunctionName.OntologyValidators = [];
        return jsFunctionName;
    }(Base.BaseProperty));
    properties.jsFunctionName = jsFunctionName;
    /** JavaScript library */
    var jsLibrary = /** @class */ (function (_super) {
        __extends(jsLibrary, _super);
        function jsLibrary() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        jsLibrary.id = ns.jsLibrary;
        jsLibrary[Symbol.toStringTag] = "JavaScript library";
        jsLibrary.type = Property;
        jsLibrary.domain = _undefined;
        jsLibrary.range = JSLibrary;
        jsLibrary.subPropertyOf = [];
        jsLibrary.classValidators = [];
        jsLibrary.OntologyValidators = [];
        return jsLibrary;
    }(Base.BaseProperty));
    properties.jsLibrary = jsLibrary;
    /** JavaScript library URL */
    var jsLibraryURL = /** @class */ (function (_super) {
        __extends(jsLibraryURL, _super);
        function jsLibraryURL() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        jsLibraryURL.id = ns.jsLibraryURL;
        jsLibraryURL[Symbol.toStringTag] = "JavaScript library URL";
        jsLibraryURL.type = Property;
        jsLibraryURL.domain = JSLibrary;
        jsLibraryURL.range = anyURI;
        jsLibraryURL.subPropertyOf = [];
        jsLibraryURL.classValidators = [];
        jsLibraryURL.OntologyValidators = [];
        return jsLibraryURL;
    }(Base.BaseProperty));
    properties.jsLibraryURL = jsLibraryURL;
    /** label template */
    var labelTemplate = /** @class */ (function (_super) {
        __extends(labelTemplate, _super);
        function labelTemplate() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        labelTemplate.id = ns.labelTemplate;
        labelTemplate[Symbol.toStringTag] = "label template";
        labelTemplate.type = Property;
        labelTemplate.domain = Parameterizable;
        labelTemplate.range = _undefined;
        labelTemplate.subPropertyOf = [];
        labelTemplate.classValidators = [];
        labelTemplate.OntologyValidators = [];
        return labelTemplate;
    }(Base.BaseProperty));
    properties.labelTemplate = labelTemplate;
    /** language in */
    var languageIn = /** @class */ (function (_super) {
        __extends(languageIn, _super);
        function languageIn() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        languageIn.id = ns.languageIn;
        languageIn[Symbol.toStringTag] = "language in";
        languageIn.type = Property;
        languageIn.domain = _undefined;
        languageIn.range = List;
        languageIn.subPropertyOf = [];
        languageIn.classValidators = [];
        languageIn.OntologyValidators = [];
        return languageIn;
    }(Base.BaseProperty));
    properties.languageIn = languageIn;
    /** less than */
    var lessThan = /** @class */ (function (_super) {
        __extends(lessThan, _super);
        function lessThan() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.externallyDependent = true;
            return _this;
        }
        lessThan.prototype[sh.validator] = function (node) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, true]; // TODO
                });
            });
        };
        lessThan.prototype[sh.message] = function (node) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, ''];
                });
            });
        };
        lessThan.id = ns.lessThan;
        lessThan[Symbol.toStringTag] = "less than";
        lessThan.type = Property;
        lessThan.domain = _undefined;
        lessThan.range = Property;
        lessThan.subPropertyOf = [];
        lessThan.classValidators = [];
        lessThan.OntologyValidators = [];
        return lessThan;
    }(Base.BaseProperty));
    properties.lessThan = lessThan;
    /** less than or equals */
    var lessThanOrEquals = /** @class */ (function (_super) {
        __extends(lessThanOrEquals, _super);
        function lessThanOrEquals() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.externallyDependent = true;
            return _this;
        }
        lessThanOrEquals.prototype[sh.validator] = function (node) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, true]; // TODO
                });
            });
        };
        lessThanOrEquals.prototype[sh.message] = function (node) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, ''];
                });
            });
        };
        lessThanOrEquals.id = ns.lessThanOrEquals;
        lessThanOrEquals[Symbol.toStringTag] = "less than or equals";
        lessThanOrEquals.type = Property;
        lessThanOrEquals.domain = _undefined;
        lessThanOrEquals.range = Property;
        lessThanOrEquals.subPropertyOf = [];
        lessThanOrEquals.classValidators = [];
        lessThanOrEquals.OntologyValidators = [];
        return lessThanOrEquals;
    }(Base.BaseProperty));
    properties.lessThanOrEquals = lessThanOrEquals;
    /** max count */
    var maxCount = /** @class */ (function (_super) {
        __extends(maxCount, _super);
        function maxCount() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        maxCount.id = ns.maxCount;
        maxCount[Symbol.toStringTag] = "max count";
        maxCount.type = Property;
        maxCount.domain = _undefined;
        maxCount.range = integer;
        maxCount.subPropertyOf = [];
        maxCount.classValidators = [];
        maxCount.OntologyValidators = [];
        return maxCount;
    }(Base.BaseProperty));
    properties.maxCount = maxCount;
    /** max exclusive */
    var maxExclusive = /** @class */ (function (_super) {
        __extends(maxExclusive, _super);
        function maxExclusive() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        maxExclusive.merge = function (constraints) {
            return Math.min.apply(Math, constraints);
        };
        maxExclusive.prototype[sh.validator] = function (node) {
            return node.value < this.value;
        };
        maxExclusive.prototype[sh.message] = function (node) {
            return "value should be strictly less than " + this.value;
        };
        maxExclusive.id = ns.maxExclusive;
        maxExclusive[Symbol.toStringTag] = "max exclusive";
        maxExclusive.type = Property;
        maxExclusive.domain = _undefined;
        maxExclusive.range = _undefined;
        maxExclusive.subPropertyOf = [];
        maxExclusive.classValidators = [];
        maxExclusive.OntologyValidators = [];
        return maxExclusive;
    }(Base.BaseProperty));
    properties.maxExclusive = maxExclusive;
    /** max inclusive */
    var maxInclusive = /** @class */ (function (_super) {
        __extends(maxInclusive, _super);
        function maxInclusive() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        maxInclusive.id = ns.maxInclusive;
        maxInclusive[Symbol.toStringTag] = "max inclusive";
        maxInclusive.type = Property;
        maxInclusive.domain = _undefined;
        maxInclusive.range = _undefined;
        maxInclusive.subPropertyOf = [];
        maxInclusive.classValidators = [];
        maxInclusive.OntologyValidators = [];
        return maxInclusive;
    }(Base.BaseProperty));
    properties.maxInclusive = maxInclusive;
    /** max length */
    var maxLength = /** @class */ (function (_super) {
        __extends(maxLength, _super);
        function maxLength() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        maxLength.merge = function (constraints) {
            return Math.min.apply(Math, constraints);
        };
        maxLength.prototype[sh.validator] = function (node) {
            return node.value.length <= this.value;
        };
        maxLength.prototype[sh.message] = function (node) {
            return "value should have at most " + this.value + " characters";
        };
        maxLength.id = ns.maxLength;
        maxLength[Symbol.toStringTag] = "max length";
        maxLength.type = Property;
        maxLength.domain = _undefined;
        maxLength.range = integer;
        maxLength.subPropertyOf = [];
        maxLength.classValidators = [];
        maxLength.OntologyValidators = [];
        return maxLength;
    }(Base.BaseProperty));
    properties.maxLength = maxLength;
    /** message */
    var message = /** @class */ (function (_super) {
        __extends(message, _super);
        function message() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        message.id = ns.message;
        message[Symbol.toStringTag] = "message";
        message.type = Property;
        message.domain = _undefined;
        message.range = _undefined;
        message.subPropertyOf = [];
        message.classValidators = [];
        message.OntologyValidators = [];
        return message;
    }(Base.BaseProperty));
    properties.message = message;
    /** min count */
    var minCount = /** @class */ (function (_super) {
        __extends(minCount, _super);
        function minCount() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        minCount.merge = function (constraints) {
            return Math.max.apply(Math, constraints);
        };
        minCount.id = ns.minCount;
        minCount[Symbol.toStringTag] = "min count";
        minCount.type = Property;
        minCount.domain = _undefined;
        minCount.range = integer;
        minCount.subPropertyOf = [];
        minCount.classValidators = [];
        minCount.OntologyValidators = [];
        return minCount;
    }(Base.BaseProperty));
    properties.minCount = minCount;
    /** min exclusive */
    var minExclusive = /** @class */ (function (_super) {
        __extends(minExclusive, _super);
        function minExclusive() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        minExclusive.merge = function (constraints) {
            return Math.max.apply(Math, constraints);
        };
        minExclusive.prototype[sh.validator] = function (node) {
            return node.value > this.value;
        };
        minExclusive.prototype[sh.message] = function (node) {
            return "value should be strictly more than " + this.value;
        };
        minExclusive.id = ns.minExclusive;
        minExclusive[Symbol.toStringTag] = "min exclusive";
        minExclusive.type = Property;
        minExclusive.domain = _undefined;
        minExclusive.range = _undefined;
        minExclusive.subPropertyOf = [];
        minExclusive.classValidators = [];
        minExclusive.OntologyValidators = [];
        return minExclusive;
    }(Base.BaseProperty));
    properties.minExclusive = minExclusive;
    /** min inclusive */
    var minInclusive = /** @class */ (function (_super) {
        __extends(minInclusive, _super);
        function minInclusive() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        minInclusive.merge = function (constraints) {
            return Math.max.apply(Math, constraints);
        };
        minInclusive.prototype[sh.validator] = function (node) {
            return node.value >= this.value;
        };
        minInclusive.prototype[sh.message] = function (node) {
            return "value should be greater than or equal to " + this.value;
        };
        minInclusive.id = ns.minInclusive;
        minInclusive[Symbol.toStringTag] = "min inclusive";
        minInclusive.type = Property;
        minInclusive.domain = _undefined;
        minInclusive.range = _undefined;
        minInclusive.subPropertyOf = [];
        minInclusive.classValidators = [];
        minInclusive.OntologyValidators = [];
        return minInclusive;
    }(Base.BaseProperty));
    properties.minInclusive = minInclusive;
    /** min length */
    var minLength = /** @class */ (function (_super) {
        __extends(minLength, _super);
        function minLength() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        minLength.merge = function (constraints) {
            return Math.max.apply(Math, constraints);
        };
        minLength.prototype[sh.validator] = function (node) {
            return node.value.length >= this.value;
        };
        minLength.prototype[sh.message] = function (node) {
            return "value should have at least " + this.value + " characters";
        };
        minLength.id = ns.minLength;
        minLength[Symbol.toStringTag] = "min length";
        minLength.type = Property;
        minLength.domain = _undefined;
        minLength.range = integer;
        minLength.subPropertyOf = [];
        minLength.classValidators = [];
        minLength.OntologyValidators = [];
        return minLength;
    }(Base.BaseProperty));
    properties.minLength = minLength;
    /** name */
    var name = /** @class */ (function (_super) {
        __extends(name, _super);
        function name() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        name.id = ns.name;
        name[Symbol.toStringTag] = "name";
        name.type = Property;
        name.domain = PropertyShape;
        name.range = _undefined;
        name.subPropertyOf = [];
        name.classValidators = [];
        name.OntologyValidators = [];
        return name;
    }(Base.BaseProperty));
    properties.name = name;
    /** namespace */
    var namespace = /** @class */ (function (_super) {
        __extends(namespace, _super);
        function namespace() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        namespace.id = ns.namespace;
        namespace[Symbol.toStringTag] = "namespace";
        namespace.type = Property;
        namespace.domain = PrefixDeclaration;
        namespace.range = anyURI;
        namespace.subPropertyOf = [];
        namespace.classValidators = [];
        namespace.OntologyValidators = [];
        return namespace;
    }(Base.BaseProperty));
    properties.namespace = namespace;
    /** node */
    var node = /** @class */ (function (_super) {
        __extends(node, _super);
        function node() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        node.id = ns.node;
        node[Symbol.toStringTag] = "node";
        node.type = Property;
        node.domain = _undefined;
        node.range = NodeShape;
        node.subPropertyOf = [];
        node.classValidators = [];
        node.OntologyValidators = [];
        return node;
    }(Base.BaseProperty));
    properties.node = node;
    /** node kind */
    var nodeKind = /** @class */ (function (_super) {
        __extends(nodeKind, _super);
        function nodeKind() {
            var _b;
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._mapping = (_b = {},
                _b[sh.BlankNodeOrLiteral] = [sh.BlankNode, sh.Literal],
                _b[sh.BlankNodeOrIRI] = [sh.BlankNode, sh.IRI],
                _b[sh.IRIOrLiteral] = [sh.IRI, sh.Literal],
                _b[sh.BlankNode] = [sh.BlankNode],
                _b[sh.IRI] = [sh.IRI],
                _b[sh.Literal] = [sh.Literal],
                _b);
            return _this;
        }
        nodeKind.merge = function (constraints) {
            var _this = this;
            var allowed = constraints.reduce(function (allowedList, constraint) {
                var toIntersect = (_this._mapping)[constraint];
                return R.intersection(toIntersect, allowedList);
            }, [
                sh.BlankNode,
                sh.BlankNodeOrIRI,
                sh.BlankNodeOrLiteral,
                sh.IRI,
                sh.IRIOrLiteral,
                sh.Literal
            ]);
            switch (allowed.length) {
                case 1: return allowed[0];
                case 2:
                    switch (R.difference([sh.IRI, sh.Literal, sh.BlankNode], allowed)[0]) {
                        case sh.BlankNode: return sh.IRIOrLiteral;
                        case sh.IRI: return sh.BlankNodeOrLiteral;
                        default: return sh.BlankNodeOrIRI;
                    }
                default:
                    throw new Error('There is no way of merging these constraint components');
            }
        };
        nodeKind.prototype[sh.validator] = function (node) {
            return nodeKind._mapping[this.value].some(function (name) {
                var _b;
                node instanceof (_b = {},
                    _b[sh.IRI] = IRI,
                    _b[sh.BlankNode] = BlankNode,
                    _b[sh.Literal] = Literal,
                    _b)[name];
            });
        };
        nodeKind.prototype[sh.message] = function (node) {
            return "This node, which is " + node.toString() + " should be one of the following: " + nodeKind._mapping[this.value];
        };
        nodeKind.id = ns.nodeKind;
        nodeKind[Symbol.toStringTag] = "node kind";
        nodeKind.type = Property;
        nodeKind.domain = _undefined;
        nodeKind.range = NodeKind;
        nodeKind.subPropertyOf = [];
        nodeKind.classValidators = [];
        nodeKind.OntologyValidators = [];
        return nodeKind;
    }(Base.BaseProperty));
    properties.nodeKind = nodeKind;
    /** shape validator */
    var nodeValidator = /** @class */ (function (_super) {
        __extends(nodeValidator, _super);
        function nodeValidator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        nodeValidator.id = ns.nodeValidator;
        nodeValidator[Symbol.toStringTag] = "shape validator";
        nodeValidator.type = Property;
        nodeValidator.domain = ConstraintComponent;
        nodeValidator.range = Validator;
        nodeValidator.subPropertyOf = [];
        nodeValidator.classValidators = [];
        nodeValidator.OntologyValidators = [];
        return nodeValidator;
    }(Base.BaseProperty));
    properties.nodeValidator = nodeValidator;
    /** one or more path */
    var oneOrMorePath = /** @class */ (function (_super) {
        __extends(oneOrMorePath, _super);
        function oneOrMorePath() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        oneOrMorePath.id = ns.oneOrMorePath;
        oneOrMorePath[Symbol.toStringTag] = "one or more path";
        oneOrMorePath.type = Property;
        oneOrMorePath.domain = _undefined;
        oneOrMorePath.range = Resource;
        oneOrMorePath.subPropertyOf = [];
        oneOrMorePath.classValidators = [];
        oneOrMorePath.OntologyValidators = [];
        return oneOrMorePath;
    }(Base.BaseProperty));
    properties.oneOrMorePath = oneOrMorePath;
    /** parameter */
    var parameter = /** @class */ (function (_super) {
        __extends(parameter, _super);
        function parameter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        parameter.id = ns.parameter;
        parameter[Symbol.toStringTag] = "parameter";
        parameter.type = Property;
        parameter.domain = Parameterizable;
        parameter.range = Parameter;
        parameter.subPropertyOf = [];
        parameter.classValidators = [];
        parameter.OntologyValidators = [];
        return parameter;
    }(Base.BaseProperty));
    properties.parameter = parameter;
    /** path */
    var path = /** @class */ (function (_super) {
        __extends(path, _super);
        function path() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        path.id = ns.path;
        path[Symbol.toStringTag] = "path";
        path.type = Property;
        path.domain = PropertyShape;
        path.range = Resource;
        path.subPropertyOf = [];
        path.classValidators = [];
        path.OntologyValidators = [];
        return path;
    }(Base.BaseProperty));
    properties.path = path;
    /** prefix */
    var prefix = /** @class */ (function (_super) {
        __extends(prefix, _super);
        function prefix() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        prefix.id = ns.prefix;
        prefix[Symbol.toStringTag] = "prefix";
        prefix.type = Property;
        prefix.domain = PrefixDeclaration;
        prefix.range = _string;
        prefix.subPropertyOf = [];
        prefix.classValidators = [];
        prefix.OntologyValidators = [];
        return prefix;
    }(Base.BaseProperty));
    properties.prefix = prefix;
    /** or */
    var or = /** @class */ (function (_super) {
        __extends(or, _super);
        function or() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        or.id = ns.or;
        or[Symbol.toStringTag] = "or";
        or.type = Property;
        or.domain = _undefined;
        or.range = List;
        or.subPropertyOf = [];
        or.classValidators = [];
        or.OntologyValidators = [];
        return or;
    }(Base.BaseProperty));
    properties.or = or;
    /** optional */
    var optional = /** @class */ (function (_super) {
        __extends(optional, _super);
        function optional() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        optional.id = ns.optional;
        optional[Symbol.toStringTag] = "optional";
        optional.type = Property;
        optional.domain = Parameter;
        optional.range = _boolean;
        optional.subPropertyOf = [];
        optional.classValidators = [];
        optional.OntologyValidators = [];
        return optional;
    }(Base.BaseProperty));
    properties.optional = optional;
    /** property */
    var property = /** @class */ (function (_super) {
        __extends(property, _super);
        function property() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        property.id = ns.property;
        property[Symbol.toStringTag] = "property";
        property.type = Property;
        property.domain = Shape;
        property.range = PropertyShape;
        property.subPropertyOf = [];
        property.classValidators = [];
        property.OntologyValidators = [];
        return property;
    }(Base.BaseProperty));
    properties.property = property;
    /** property validator */
    var propertyValidator = /** @class */ (function (_super) {
        __extends(propertyValidator, _super);
        function propertyValidator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        propertyValidator.id = ns.propertyValidator;
        propertyValidator[Symbol.toStringTag] = "property validator";
        propertyValidator.type = Property;
        propertyValidator.domain = ConstraintComponent;
        propertyValidator.range = Validator;
        propertyValidator.subPropertyOf = [];
        propertyValidator.classValidators = [];
        propertyValidator.OntologyValidators = [];
        return propertyValidator;
    }(Base.BaseProperty));
    properties.propertyValidator = propertyValidator;
    /** qualified max count */
    var qualifiedMaxCount = /** @class */ (function (_super) {
        __extends(qualifiedMaxCount, _super);
        function qualifiedMaxCount() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        qualifiedMaxCount.id = ns.qualifiedMaxCount;
        qualifiedMaxCount[Symbol.toStringTag] = "qualified max count";
        qualifiedMaxCount.type = Property;
        qualifiedMaxCount.domain = _undefined;
        qualifiedMaxCount.range = integer;
        qualifiedMaxCount.subPropertyOf = [];
        qualifiedMaxCount.classValidators = [];
        qualifiedMaxCount.OntologyValidators = [];
        return qualifiedMaxCount;
    }(Base.BaseProperty));
    properties.qualifiedMaxCount = qualifiedMaxCount;
    /** qualified value shape */
    var qualifiedValueShape = /** @class */ (function (_super) {
        __extends(qualifiedValueShape, _super);
        function qualifiedValueShape() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        qualifiedValueShape.id = ns.qualifiedValueShape;
        qualifiedValueShape[Symbol.toStringTag] = "qualified value shape";
        qualifiedValueShape.type = Property;
        qualifiedValueShape.domain = _undefined;
        qualifiedValueShape.range = Shape;
        qualifiedValueShape.subPropertyOf = [];
        qualifiedValueShape.classValidators = [];
        qualifiedValueShape.OntologyValidators = [];
        return qualifiedValueShape;
    }(Base.BaseProperty));
    properties.qualifiedValueShape = qualifiedValueShape;
    /** result */
    var result = /** @class */ (function (_super) {
        __extends(result, _super);
        function result() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        result.id = ns.result;
        result[Symbol.toStringTag] = "result";
        result.type = Property;
        result.domain = ValidationReport;
        result.range = ValidationResult;
        result.subPropertyOf = [];
        result.classValidators = [];
        result.OntologyValidators = [];
        return result;
    }(Base.BaseProperty));
    properties.result = result;
    /** result annotation */
    var resultAnnotation = /** @class */ (function (_super) {
        __extends(resultAnnotation, _super);
        function resultAnnotation() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        resultAnnotation.id = ns.resultAnnotation;
        resultAnnotation[Symbol.toStringTag] = "result annotation";
        resultAnnotation.type = Property;
        resultAnnotation.domain = SPARQLSelectValidator;
        resultAnnotation.range = ResultAnnotation;
        resultAnnotation.subPropertyOf = [];
        resultAnnotation.classValidators = [];
        resultAnnotation.OntologyValidators = [];
        return resultAnnotation;
    }(Base.BaseProperty));
    properties.resultAnnotation = resultAnnotation;
    /** result message */
    var resultMessage = /** @class */ (function (_super) {
        __extends(resultMessage, _super);
        function resultMessage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        resultMessage.id = ns.resultMessage;
        resultMessage[Symbol.toStringTag] = "result message";
        resultMessage.type = Property;
        resultMessage.domain = AbstractResult;
        resultMessage.range = _undefined;
        resultMessage.subPropertyOf = [];
        resultMessage.classValidators = [];
        resultMessage.OntologyValidators = [];
        return resultMessage;
    }(Base.BaseProperty));
    properties.resultMessage = resultMessage;
    /** result path */
    var resultPath = /** @class */ (function (_super) {
        __extends(resultPath, _super);
        function resultPath() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        resultPath.id = ns.resultPath;
        resultPath[Symbol.toStringTag] = "result path";
        resultPath.type = Property;
        resultPath.domain = AbstractResult;
        resultPath.range = Resource;
        resultPath.subPropertyOf = [];
        resultPath.classValidators = [];
        resultPath.OntologyValidators = [];
        return resultPath;
    }(Base.BaseProperty));
    properties.resultPath = resultPath;
    /** result severity */
    var resultSeverity = /** @class */ (function (_super) {
        __extends(resultSeverity, _super);
        function resultSeverity() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        resultSeverity.id = ns.resultSeverity;
        resultSeverity[Symbol.toStringTag] = "result severity";
        resultSeverity.type = Property;
        resultSeverity.domain = AbstractResult;
        resultSeverity.range = Severity;
        resultSeverity.subPropertyOf = [];
        resultSeverity.classValidators = [];
        resultSeverity.OntologyValidators = [];
        return resultSeverity;
    }(Base.BaseProperty));
    properties.resultSeverity = resultSeverity;
    /** return type */
    var returnType = /** @class */ (function (_super) {
        __extends(returnType, _super);
        function returnType() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        returnType.id = ns.returnType;
        returnType[Symbol.toStringTag] = "return type";
        returnType.type = Property;
        returnType.domain = Function;
        returnType.range = Class;
        returnType.subPropertyOf = [];
        returnType.classValidators = [];
        returnType.OntologyValidators = [];
        return returnType;
    }(Base.BaseProperty));
    properties.returnType = returnType;
    /** rule */
    var rule = /** @class */ (function (_super) {
        __extends(rule, _super);
        function rule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        rule.id = ns.rule;
        rule[Symbol.toStringTag] = "rule";
        rule.type = Property;
        rule.domain = Shape;
        rule.range = Rule;
        rule.subPropertyOf = [];
        rule.classValidators = [];
        rule.OntologyValidators = [];
        return rule;
    }(Base.BaseProperty));
    properties.rule = rule;
    /** select */
    var select = /** @class */ (function (_super) {
        __extends(select, _super);
        function select() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        select.id = ns.select;
        select[Symbol.toStringTag] = "select";
        select.type = Property;
        select.domain = SPARQLSelectExecutable;
        select.range = _string;
        select.subPropertyOf = [];
        select.classValidators = [];
        select.OntologyValidators = [];
        return select;
    }(Base.BaseProperty));
    properties.select = select;
    /** severity */
    var severity = /** @class */ (function (_super) {
        __extends(severity, _super);
        function severity() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        severity.id = ns.severity;
        severity[Symbol.toStringTag] = "severity";
        severity.type = Property;
        severity.domain = Shape;
        severity.range = Severity;
        severity.subPropertyOf = [];
        severity.classValidators = [];
        severity.OntologyValidators = [];
        return severity;
    }(Base.BaseProperty));
    properties.severity = severity;
    /** shapes graph */
    var shapesGraph = /** @class */ (function (_super) {
        __extends(shapesGraph, _super);
        function shapesGraph() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        shapesGraph.id = ns.shapesGraph;
        shapesGraph[Symbol.toStringTag] = "shapes graph";
        shapesGraph.type = Property;
        shapesGraph.domain = Ontology;
        shapesGraph.range = Ontology;
        shapesGraph.subPropertyOf = [];
        shapesGraph.classValidators = [];
        shapesGraph.OntologyValidators = [];
        return shapesGraph;
    }(Base.BaseProperty));
    properties.shapesGraph = shapesGraph;
    /** shapes graph well-formed */
    var shapesGraphWellFormed = /** @class */ (function (_super) {
        __extends(shapesGraphWellFormed, _super);
        function shapesGraphWellFormed() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        shapesGraphWellFormed.id = ns.shapesGraphWellFormed;
        shapesGraphWellFormed[Symbol.toStringTag] = "shapes graph well-formed";
        shapesGraphWellFormed.type = Property;
        shapesGraphWellFormed.domain = ValidationReport;
        shapesGraphWellFormed.range = _boolean;
        shapesGraphWellFormed.subPropertyOf = [];
        shapesGraphWellFormed.classValidators = [];
        shapesGraphWellFormed.OntologyValidators = [];
        return shapesGraphWellFormed;
    }(Base.BaseProperty));
    properties.shapesGraphWellFormed = shapesGraphWellFormed;
    /** constraint (in SPARQL) */
    var sparql = /** @class */ (function (_super) {
        __extends(sparql, _super);
        function sparql() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        sparql.id = ns.sparql;
        sparql[Symbol.toStringTag] = "constraint (in SPARQL)";
        sparql.type = Property;
        sparql.domain = Shape;
        sparql.range = SPARQLConstraint;
        sparql.subPropertyOf = [];
        sparql.classValidators = [];
        sparql.OntologyValidators = [];
        return sparql;
    }(Base.BaseProperty));
    properties.sparql = sparql;
    /** subject */
    var subject = /** @class */ (function (_super) {
        __extends(subject, _super);
        function subject() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        subject.id = ns.subject;
        subject[Symbol.toStringTag] = "subject";
        subject.type = Property;
        subject.domain = TripleRule;
        subject.range = _undefined;
        subject.subPropertyOf = [];
        subject.classValidators = [];
        subject.OntologyValidators = [];
        return subject;
    }(Base.BaseProperty));
    properties.subject = subject;
    /** target class */
    var targetClass = /** @class */ (function (_super) {
        __extends(targetClass, _super);
        function targetClass() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        targetClass.id = ns.targetClass;
        targetClass[Symbol.toStringTag] = "target class";
        targetClass.type = Property;
        targetClass.domain = Shape;
        targetClass.range = Class;
        targetClass.subPropertyOf = [];
        targetClass.classValidators = [];
        targetClass.OntologyValidators = [];
        return targetClass;
    }(Base.BaseProperty));
    properties.targetClass = targetClass;
    /** suggested shapes graph */
    var suggestedShapesGraph = /** @class */ (function (_super) {
        __extends(suggestedShapesGraph, _super);
        function suggestedShapesGraph() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        suggestedShapesGraph.id = ns.suggestedShapesGraph;
        suggestedShapesGraph[Symbol.toStringTag] = "suggested shapes graph";
        suggestedShapesGraph.type = Property;
        suggestedShapesGraph.domain = Ontology;
        suggestedShapesGraph.range = Ontology;
        suggestedShapesGraph.subPropertyOf = [];
        suggestedShapesGraph.classValidators = [];
        suggestedShapesGraph.OntologyValidators = [];
        return suggestedShapesGraph;
    }(Base.BaseProperty));
    properties.suggestedShapesGraph = suggestedShapesGraph;
    /** source constraint */
    var sourceConstraint = /** @class */ (function (_super) {
        __extends(sourceConstraint, _super);
        function sourceConstraint() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        sourceConstraint.id = ns.sourceConstraint;
        sourceConstraint[Symbol.toStringTag] = "source constraint";
        sourceConstraint.type = Property;
        sourceConstraint.domain = AbstractResult;
        sourceConstraint.range = _undefined;
        sourceConstraint.subPropertyOf = [];
        sourceConstraint.classValidators = [];
        sourceConstraint.OntologyValidators = [];
        return sourceConstraint;
    }(Base.BaseProperty));
    properties.sourceConstraint = sourceConstraint;
    /** source constraint component */
    var sourceConstraintComponent = /** @class */ (function (_super) {
        __extends(sourceConstraintComponent, _super);
        function sourceConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        sourceConstraintComponent.id = ns.sourceConstraintComponent;
        sourceConstraintComponent[Symbol.toStringTag] = "source constraint component";
        sourceConstraintComponent.type = Property;
        sourceConstraintComponent.domain = AbstractResult;
        sourceConstraintComponent.range = ConstraintComponent;
        sourceConstraintComponent.subPropertyOf = [];
        sourceConstraintComponent.classValidators = [];
        sourceConstraintComponent.OntologyValidators = [];
        return sourceConstraintComponent;
    }(Base.BaseProperty));
    properties.sourceConstraintComponent = sourceConstraintComponent;
    /** source shape */
    var sourceShape = /** @class */ (function (_super) {
        __extends(sourceShape, _super);
        function sourceShape() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        sourceShape.id = ns.sourceShape;
        sourceShape[Symbol.toStringTag] = "source shape";
        sourceShape.type = Property;
        sourceShape.domain = AbstractResult;
        sourceShape.range = Shape;
        sourceShape.subPropertyOf = [];
        sourceShape.classValidators = [];
        sourceShape.OntologyValidators = [];
        return sourceShape;
    }(Base.BaseProperty));
    properties.sourceShape = sourceShape;
    /** target */
    var target = /** @class */ (function (_super) {
        __extends(target, _super);
        function target() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        target.id = ns.target;
        target[Symbol.toStringTag] = "target";
        target.type = Property;
        target.domain = Shape;
        target.range = Target;
        target.subPropertyOf = [];
        target.classValidators = [];
        target.OntologyValidators = [];
        return target;
    }(Base.BaseProperty));
    properties.target = target;
    /** target node */
    var targetNode = /** @class */ (function (_super) {
        __extends(targetNode, _super);
        function targetNode() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        targetNode.id = ns.targetNode;
        targetNode[Symbol.toStringTag] = "target node";
        targetNode.type = Property;
        targetNode.domain = Shape;
        targetNode.range = _undefined;
        targetNode.subPropertyOf = [];
        targetNode.classValidators = [];
        targetNode.OntologyValidators = [];
        return targetNode;
    }(Base.BaseProperty));
    properties.targetNode = targetNode;
    /** target objects of */
    var targetObjectsOf = /** @class */ (function (_super) {
        __extends(targetObjectsOf, _super);
        function targetObjectsOf() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        targetObjectsOf.id = ns.targetObjectsOf;
        targetObjectsOf[Symbol.toStringTag] = "target objects of";
        targetObjectsOf.type = Property;
        targetObjectsOf.domain = Shape;
        targetObjectsOf.range = Property;
        targetObjectsOf.subPropertyOf = [];
        targetObjectsOf.classValidators = [];
        targetObjectsOf.OntologyValidators = [];
        return targetObjectsOf;
    }(Base.BaseProperty));
    properties.targetObjectsOf = targetObjectsOf;
    /** target subjects of */
    var targetSubjectsOf = /** @class */ (function (_super) {
        __extends(targetSubjectsOf, _super);
        function targetSubjectsOf() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        targetSubjectsOf.id = ns.targetSubjectsOf;
        targetSubjectsOf[Symbol.toStringTag] = "target subjects of";
        targetSubjectsOf.type = Property;
        targetSubjectsOf.domain = Shape;
        targetSubjectsOf.range = Property;
        targetSubjectsOf.subPropertyOf = [];
        targetSubjectsOf.classValidators = [];
        targetSubjectsOf.OntologyValidators = [];
        return targetSubjectsOf;
    }(Base.BaseProperty));
    properties.targetSubjectsOf = targetSubjectsOf;
    /** union */
    var union = /** @class */ (function (_super) {
        __extends(union, _super);
        function union() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        union.id = ns.union;
        union[Symbol.toStringTag] = "union";
        union.type = Property;
        union.domain = _undefined;
        union.range = _undefined;
        union.subPropertyOf = [];
        union.classValidators = [];
        union.OntologyValidators = [];
        return union;
    }(Base.BaseProperty));
    properties.union = union;
    /** validator */
    var validator = /** @class */ (function (_super) {
        __extends(validator, _super);
        function validator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        validator.id = ns.validator;
        validator[Symbol.toStringTag] = "validator";
        validator.type = Property;
        validator.domain = ConstraintComponent;
        validator.range = Validator;
        validator.subPropertyOf = [];
        validator.classValidators = [];
        validator.OntologyValidators = [];
        return validator;
    }(Base.BaseProperty));
    properties.validator = validator;
    /** value */
    var value = /** @class */ (function (_super) {
        __extends(value, _super);
        function value() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        value.id = ns.value;
        value[Symbol.toStringTag] = "value";
        value.type = Property;
        value.domain = AbstractResult;
        value.range = _undefined;
        value.subPropertyOf = [];
        value.classValidators = [];
        value.OntologyValidators = [];
        return value;
    }(Base.BaseProperty));
    properties.value = value;
    /** exactly one */
    var xone = /** @class */ (function (_super) {
        __extends(xone, _super);
        function xone() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        xone.id = ns.xone;
        xone[Symbol.toStringTag] = "exactly one";
        xone.type = Property;
        xone.domain = _undefined;
        xone.range = List;
        xone.subPropertyOf = [];
        xone.classValidators = [];
        xone.OntologyValidators = [];
        return xone;
    }(Base.BaseProperty));
    properties.xone = xone;
    /** zero or more path */
    var zeroOrMorePath = /** @class */ (function (_super) {
        __extends(zeroOrMorePath, _super);
        function zeroOrMorePath() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        zeroOrMorePath.id = ns.zeroOrMorePath;
        zeroOrMorePath[Symbol.toStringTag] = "zero or more path";
        zeroOrMorePath.type = Property;
        zeroOrMorePath.domain = _undefined;
        zeroOrMorePath.range = Resource;
        zeroOrMorePath.subPropertyOf = [];
        zeroOrMorePath.classValidators = [];
        zeroOrMorePath.OntologyValidators = [];
        return zeroOrMorePath;
    }(Base.BaseProperty));
    properties.zeroOrMorePath = zeroOrMorePath;
    /** zero or one path */
    var zeroOrOnePath = /** @class */ (function (_super) {
        __extends(zeroOrOnePath, _super);
        function zeroOrOnePath() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        zeroOrOnePath.id = ns.zeroOrOnePath;
        zeroOrOnePath[Symbol.toStringTag] = "zero or one path";
        zeroOrOnePath.type = Property;
        zeroOrOnePath.domain = _undefined;
        zeroOrOnePath.range = Resource;
        zeroOrOnePath.subPropertyOf = [];
        zeroOrOnePath.classValidators = [];
        zeroOrOnePath.OntologyValidators = [];
        return zeroOrOnePath;
    }(Base.BaseProperty));
    properties.zeroOrOnePath = zeroOrOnePath;
})(properties = exports.properties || (exports.properties = {}));
