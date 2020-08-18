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
exports.Properties = void 0;
var index_1 = require("./index");
var Properties;
(function (Properties) {
    /** annotation property */
    var annotationProperty = /** @class */ (function (_super) {
        __extends(annotationProperty, _super);
        function annotationProperty() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        annotationProperty.id = index_1.ns.annotationProperty;
        annotationProperty[Symbol.toStringTag] = "annotation property";
        annotationProperty.type = Property;
        annotationProperty.domain = ResultAnnotation;
        annotationProperty.range = Property;
        annotationProperty.subPropertyOf = [];
        annotationProperty.classValidators = [];
        annotationProperty.OntologyValidators = [];
        return annotationProperty;
    }(index_1.Base.BaseProperty));
    Properties.annotationProperty = annotationProperty;
    /** condition */
    var condition = /** @class */ (function (_super) {
        __extends(condition, _super);
        function condition() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        condition.id = index_1.ns.condition;
        condition[Symbol.toStringTag] = "condition";
        condition.type = Property;
        condition.domain = Rule;
        condition.range = Shape;
        condition.subPropertyOf = [];
        condition.classValidators = [];
        condition.OntologyValidators = [];
        return condition;
    }(index_1.Base.BaseProperty));
    Properties.condition = condition;
    /** description */
    var description = /** @class */ (function (_super) {
        __extends(description, _super);
        function description() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        description.id = index_1.ns.description;
        description[Symbol.toStringTag] = "description";
        description.type = Property;
        description.domain = PropertyShape;
        description.range = _undefined;
        description.subPropertyOf = [];
        description.classValidators = [];
        description.OntologyValidators = [];
        return description;
    }(index_1.Base.BaseProperty));
    Properties.description = description;
    /** group */
    var group = /** @class */ (function (_super) {
        __extends(group, _super);
        function group() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        group.id = index_1.ns.group;
        group[Symbol.toStringTag] = "group";
        group.type = Property;
        group.domain = PropertyShape;
        group.range = PropertyGroup;
        group.subPropertyOf = [];
        group.classValidators = [];
        group.OntologyValidators = [];
        return group;
    }(index_1.Base.BaseProperty));
    Properties.group = group;
    /** annotation variable name */
    var annotationVarName = /** @class */ (function (_super) {
        __extends(annotationVarName, _super);
        function annotationVarName() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        annotationVarName.id = index_1.ns.annotationVarName;
        annotationVarName[Symbol.toStringTag] = "annotation variable name";
        annotationVarName.type = Property;
        annotationVarName.domain = ResultAnnotation;
        annotationVarName.range = _string;
        annotationVarName.subPropertyOf = [];
        annotationVarName.classValidators = [];
        annotationVarName.OntologyValidators = [];
        return annotationVarName;
    }(index_1.Base.BaseProperty));
    Properties.annotationVarName = annotationVarName;
    /** annotation value */
    var annotationValue = /** @class */ (function (_super) {
        __extends(annotationValue, _super);
        function annotationValue() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        annotationValue.id = index_1.ns.annotationValue;
        annotationValue[Symbol.toStringTag] = "annotation value";
        annotationValue.type = Property;
        annotationValue.domain = ResultAnnotation;
        annotationValue.range = _undefined;
        annotationValue.subPropertyOf = [];
        annotationValue.classValidators = [];
        annotationValue.OntologyValidators = [];
        return annotationValue;
    }(index_1.Base.BaseProperty));
    Properties.annotationValue = annotationValue;
    /** default value */
    var defaultValue = /** @class */ (function (_super) {
        __extends(defaultValue, _super);
        function defaultValue() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        defaultValue.id = index_1.ns.defaultValue;
        defaultValue[Symbol.toStringTag] = "default value";
        defaultValue.type = Property;
        defaultValue.domain = PropertyShape;
        defaultValue.range = _undefined;
        defaultValue.subPropertyOf = [];
        defaultValue.classValidators = [];
        defaultValue.OntologyValidators = [];
        return defaultValue;
    }(index_1.Base.BaseProperty));
    Properties.defaultValue = defaultValue;
    /** order */
    var order = /** @class */ (function (_super) {
        __extends(order, _super);
        function order() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        order.id = index_1.ns.order;
        order[Symbol.toStringTag] = "order";
        order.type = Property;
        order.domain = _undefined;
        order.range = _undefined;
        order.subPropertyOf = [];
        order.classValidators = [];
        order.OntologyValidators = [];
        return order;
    }(index_1.Base.BaseProperty));
    Properties.order = order;
    /** qualified min count */
    var qualifiedMinCount = /** @class */ (function (_super) {
        __extends(qualifiedMinCount, _super);
        function qualifiedMinCount() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        qualifiedMinCount.id = index_1.ns.qualifiedMinCount;
        qualifiedMinCount[Symbol.toStringTag] = "qualified min count";
        qualifiedMinCount.type = Property;
        qualifiedMinCount.domain = _undefined;
        qualifiedMinCount.range = integer;
        qualifiedMinCount.subPropertyOf = [];
        qualifiedMinCount.classValidators = [];
        qualifiedMinCount.OntologyValidators = [];
        return qualifiedMinCount;
    }(index_1.Base.BaseProperty));
    Properties.qualifiedMinCount = qualifiedMinCount;
    /** not */
    var not = /** @class */ (function (_super) {
        __extends(not, _super);
        function not() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        not.id = index_1.ns.not;
        not[Symbol.toStringTag] = "not";
        not.type = Property;
        not.domain = _undefined;
        not.range = Shape;
        not.subPropertyOf = [];
        not.classValidators = [];
        not.OntologyValidators = [];
        return not;
    }(index_1.Base.BaseProperty));
    Properties.not = not;
    /** filter shape */
    var filterShape = /** @class */ (function (_super) {
        __extends(filterShape, _super);
        function filterShape() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        filterShape.id = index_1.ns.filterShape;
        filterShape[Symbol.toStringTag] = "filter shape";
        filterShape.type = Property;
        filterShape.domain = _undefined;
        filterShape.range = Shape;
        filterShape.subPropertyOf = [];
        filterShape.classValidators = [];
        filterShape.OntologyValidators = [];
        return filterShape;
    }(index_1.Base.BaseProperty));
    Properties.filterShape = filterShape;
    /** flags */
    var flags = /** @class */ (function (_super) {
        __extends(flags, _super);
        function flags() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        flags.id = index_1.ns.flags;
        flags[Symbol.toStringTag] = "flags";
        flags.type = Property;
        flags.domain = _undefined;
        flags.range = _string;
        flags.subPropertyOf = [];
        flags.classValidators = [];
        flags.OntologyValidators = [];
        return flags;
    }(index_1.Base.BaseProperty));
    Properties.flags = flags;
    /** pattern */
    var pattern = /** @class */ (function (_super) {
        __extends(pattern, _super);
        function pattern() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        pattern.prototype[sh.validator] = function (node) {
            return this.value.test(node.value);
        };
        pattern.prototype[sh.message] = function () {
            return "Should match the pattern " + this.value.source;
        };
        pattern.id = index_1.ns.pattern;
        pattern[Symbol.toStringTag] = "pattern";
        pattern.type = Property;
        pattern.domain = _undefined;
        pattern.range = _string;
        pattern.subPropertyOf = [];
        pattern.classValidators = [];
        pattern.OntologyValidators = [];
        return pattern;
    }(index_1.Base.BaseProperty));
    Properties.pattern = pattern;
    /** object */
    var _object = /** @class */ (function (_super) {
        __extends(_object, _super);
        function _object() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        _object.id = index_1.ns._object;
        _object[Symbol.toStringTag] = "object";
        _object.type = Property;
        _object.domain = TripleRule;
        _object.range = _undefined;
        _object.subPropertyOf = [];
        _object.classValidators = [];
        _object.OntologyValidators = [];
        return _object;
    }(index_1.Base.BaseProperty));
    Properties._object = _object;
    /** intersection */
    var intersection = /** @class */ (function (_super) {
        __extends(intersection, _super);
        function intersection() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        intersection.id = index_1.ns.intersection;
        intersection[Symbol.toStringTag] = "intersection";
        intersection.type = Property;
        intersection.domain = _undefined;
        intersection.range = _undefined;
        intersection.subPropertyOf = [];
        intersection.classValidators = [];
        intersection.OntologyValidators = [];
        return intersection;
    }(index_1.Base.BaseProperty));
    Properties.intersection = intersection;
    /** nodes */
    var nodes = /** @class */ (function (_super) {
        __extends(nodes, _super);
        function nodes() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        nodes.id = index_1.ns.nodes;
        nodes[Symbol.toStringTag] = "nodes";
        nodes.type = Property;
        nodes.domain = _undefined;
        nodes.range = _undefined;
        nodes.subPropertyOf = [];
        nodes.classValidators = [];
        nodes.OntologyValidators = [];
        return nodes;
    }(index_1.Base.BaseProperty));
    Properties.nodes = nodes;
    /** predicate */
    var predicate = /** @class */ (function (_super) {
        __extends(predicate, _super);
        function predicate() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        predicate.id = index_1.ns.predicate;
        predicate[Symbol.toStringTag] = "predicate";
        predicate.type = Property;
        predicate.domain = TripleRule;
        predicate.range = _undefined;
        predicate.subPropertyOf = [];
        predicate.classValidators = [];
        predicate.OntologyValidators = [];
        return predicate;
    }(index_1.Base.BaseProperty));
    Properties.predicate = predicate;
    /** qualified value shapes disjoint */
    var qualifiedValueShapesDisjoint = /** @class */ (function (_super) {
        __extends(qualifiedValueShapesDisjoint, _super);
        function qualifiedValueShapesDisjoint() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        qualifiedValueShapesDisjoint.id = index_1.ns.qualifiedValueShapesDisjoint;
        qualifiedValueShapesDisjoint[Symbol.toStringTag] = "qualified value shapes disjoint";
        qualifiedValueShapesDisjoint.type = Property;
        qualifiedValueShapesDisjoint.domain = _undefined;
        qualifiedValueShapesDisjoint.range = _boolean;
        qualifiedValueShapesDisjoint.subPropertyOf = [];
        qualifiedValueShapesDisjoint.classValidators = [];
        qualifiedValueShapesDisjoint.OntologyValidators = [];
        return qualifiedValueShapesDisjoint;
    }(index_1.Base.BaseProperty));
    Properties.qualifiedValueShapesDisjoint = qualifiedValueShapesDisjoint;
    /** unique languages */
    var uniqueLang = /** @class */ (function (_super) {
        __extends(uniqueLang, _super);
        function uniqueLang() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        uniqueLang.id = index_1.ns.uniqueLang;
        uniqueLang[Symbol.toStringTag] = "unique languages";
        uniqueLang.type = Property;
        uniqueLang.domain = _undefined;
        uniqueLang.range = _boolean;
        uniqueLang.subPropertyOf = [];
        uniqueLang.classValidators = [];
        uniqueLang.OntologyValidators = [];
        return uniqueLang;
    }(index_1.Base.BaseProperty));
    Properties.uniqueLang = uniqueLang;
    /** prefixes */
    var prefixes = /** @class */ (function (_super) {
        __extends(prefixes, _super);
        function prefixes() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        prefixes.id = index_1.ns.prefixes;
        prefixes[Symbol.toStringTag] = "prefixes";
        prefixes.type = Property;
        prefixes.domain = SPARQLExecutable;
        prefixes.range = Ontology;
        prefixes.subPropertyOf = [];
        prefixes.classValidators = [];
        prefixes.OntologyValidators = [];
        return prefixes;
    }(index_1.Base.BaseProperty));
    Properties.prefixes = prefixes;
    /** ask */
    var ask = /** @class */ (function (_super) {
        __extends(ask, _super);
        function ask() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ask.id = index_1.ns.ask;
        ask[Symbol.toStringTag] = "ask";
        ask.type = Property;
        ask.domain = SPARQLAskExecutable;
        ask.range = _string;
        ask.subPropertyOf = [];
        ask.classValidators = [];
        ask.OntologyValidators = [];
        return ask;
    }(index_1.Base.BaseProperty));
    Properties.ask = ask;
    /** update */
    var update = /** @class */ (function (_super) {
        __extends(update, _super);
        function update() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        update.id = index_1.ns.update;
        update[Symbol.toStringTag] = "update";
        update.type = Property;
        update.domain = SPARQLUpdateExecutable;
        update.range = _string;
        update.subPropertyOf = [];
        update.classValidators = [];
        update.OntologyValidators = [];
        return update;
    }(index_1.Base.BaseProperty));
    Properties.update = update;
    /** alternative path */
    var alternativePath = /** @class */ (function (_super) {
        __extends(alternativePath, _super);
        function alternativePath() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        alternativePath.id = index_1.ns.alternativePath;
        alternativePath[Symbol.toStringTag] = "alternative path";
        alternativePath.type = Property;
        alternativePath.domain = _undefined;
        alternativePath.range = List;
        alternativePath.subPropertyOf = [];
        alternativePath.classValidators = [];
        alternativePath.OntologyValidators = [];
        return alternativePath;
    }(index_1.Base.BaseProperty));
    Properties.alternativePath = alternativePath;
    /** and */
    var and = /** @class */ (function (_super) {
        __extends(and, _super);
        function and() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        and.id = index_1.ns.and;
        and[Symbol.toStringTag] = "and";
        and.type = Property;
        and.domain = _undefined;
        and.range = List;
        and.subPropertyOf = [];
        and.classValidators = [];
        and.OntologyValidators = [];
        return and;
    }(index_1.Base.BaseProperty));
    Properties.and = and;
    /** class */
    var _class = /** @class */ (function (_super) {
        __extends(_class, _super);
        function _class() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        _class.id = index_1.ns._class;
        _class[Symbol.toStringTag] = "class";
        _class.type = Property;
        _class.domain = _undefined;
        _class.range = Class;
        _class.subPropertyOf = [];
        _class.classValidators = [];
        _class.OntologyValidators = [];
        return _class;
    }(index_1.Base.BaseProperty));
    Properties._class = _class;
    /** closed */
    var closed = /** @class */ (function (_super) {
        __extends(closed, _super);
        function closed() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        closed.id = index_1.ns.closed;
        closed[Symbol.toStringTag] = "closed";
        closed.type = Property;
        closed.domain = _undefined;
        closed.range = _boolean;
        closed.subPropertyOf = [];
        closed.classValidators = [];
        closed.OntologyValidators = [];
        return closed;
    }(index_1.Base.BaseProperty));
    Properties.closed = closed;
    /** conforms */
    var conforms = /** @class */ (function (_super) {
        __extends(conforms, _super);
        function conforms() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        conforms.id = index_1.ns.conforms;
        conforms[Symbol.toStringTag] = "conforms";
        conforms.type = Property;
        conforms.domain = ValidationReport;
        conforms.range = _boolean;
        conforms.subPropertyOf = [];
        conforms.classValidators = [];
        conforms.OntologyValidators = [];
        return conforms;
    }(index_1.Base.BaseProperty));
    Properties.conforms = conforms;
    /** construct */
    var construct = /** @class */ (function (_super) {
        __extends(construct, _super);
        function construct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        construct.id = index_1.ns.construct;
        construct[Symbol.toStringTag] = "construct";
        construct.type = Property;
        construct.domain = SPARQLConstructExecutable;
        construct.range = _string;
        construct.subPropertyOf = [];
        construct.classValidators = [];
        construct.OntologyValidators = [];
        return construct;
    }(index_1.Base.BaseProperty));
    Properties.construct = construct;
    /** datatype */
    var datatype = /** @class */ (function (_super) {
        __extends(datatype, _super);
        function datatype() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        datatype.id = index_1.ns.datatype;
        datatype[Symbol.toStringTag] = "datatype";
        datatype.type = Property;
        datatype.domain = _undefined;
        datatype.range = Datatype;
        datatype.subPropertyOf = [];
        datatype.classValidators = [];
        datatype.OntologyValidators = [];
        return datatype;
    }(index_1.Base.BaseProperty));
    Properties.datatype = datatype;
    /** deactivated */
    var deactivated = /** @class */ (function (_super) {
        __extends(deactivated, _super);
        function deactivated() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        deactivated.id = index_1.ns.deactivated;
        deactivated[Symbol.toStringTag] = "deactivated";
        deactivated.type = Property;
        deactivated.domain = _undefined;
        deactivated.range = _boolean;
        deactivated.subPropertyOf = [];
        deactivated.classValidators = [];
        deactivated.OntologyValidators = [];
        return deactivated;
    }(index_1.Base.BaseProperty));
    Properties.deactivated = deactivated;
    /** declare */
    var declare = /** @class */ (function (_super) {
        __extends(declare, _super);
        function declare() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        declare.id = index_1.ns.declare;
        declare[Symbol.toStringTag] = "declare";
        declare.type = Property;
        declare.domain = Ontology;
        declare.range = PrefixDeclaration;
        declare.subPropertyOf = [];
        declare.classValidators = [];
        declare.OntologyValidators = [];
        return declare;
    }(index_1.Base.BaseProperty));
    Properties.declare = declare;
    /** detail */
    var detail = /** @class */ (function (_super) {
        __extends(detail, _super);
        function detail() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        detail.id = index_1.ns.detail;
        detail[Symbol.toStringTag] = "detail";
        detail.type = Property;
        detail.domain = AbstractResult;
        detail.range = AbstractResult;
        detail.subPropertyOf = [];
        detail.classValidators = [];
        detail.OntologyValidators = [];
        return detail;
    }(index_1.Base.BaseProperty));
    Properties.detail = detail;
    /** disjoint */
    var disjoint = /** @class */ (function (_super) {
        __extends(disjoint, _super);
        function disjoint() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        disjoint.id = index_1.ns.disjoint;
        disjoint[Symbol.toStringTag] = "disjoint";
        disjoint.type = Property;
        disjoint.domain = _undefined;
        disjoint.range = Property;
        disjoint.subPropertyOf = [];
        disjoint.classValidators = [];
        disjoint.OntologyValidators = [];
        return disjoint;
    }(index_1.Base.BaseProperty));
    Properties.disjoint = disjoint;
    /** entailment */
    var entailment = /** @class */ (function (_super) {
        __extends(entailment, _super);
        function entailment() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        entailment.id = index_1.ns.entailment;
        entailment[Symbol.toStringTag] = "entailment";
        entailment.type = Property;
        entailment.domain = Ontology;
        entailment.range = Resource;
        entailment.subPropertyOf = [];
        entailment.classValidators = [];
        entailment.OntologyValidators = [];
        return entailment;
    }(index_1.Base.BaseProperty));
    Properties.entailment = entailment;
    /** equals */
    var equals = /** @class */ (function (_super) {
        __extends(equals, _super);
        function equals() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        equals.id = index_1.ns.equals;
        equals[Symbol.toStringTag] = "equals";
        equals.type = Property;
        equals.domain = _undefined;
        equals.range = Property;
        equals.subPropertyOf = [];
        equals.classValidators = [];
        equals.OntologyValidators = [];
        return equals;
    }(index_1.Base.BaseProperty));
    Properties.equals = equals;
    /** expression */
    var expression = /** @class */ (function (_super) {
        __extends(expression, _super);
        function expression() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        expression.id = index_1.ns.expression;
        expression[Symbol.toStringTag] = "expression";
        expression.type = Property;
        expression.domain = _undefined;
        expression.range = _undefined;
        expression.subPropertyOf = [];
        expression.classValidators = [];
        expression.OntologyValidators = [];
        return expression;
    }(index_1.Base.BaseProperty));
    Properties.expression = expression;
    /** focus node */
    var focusNode = /** @class */ (function (_super) {
        __extends(focusNode, _super);
        function focusNode() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        focusNode.id = index_1.ns.focusNode;
        focusNode[Symbol.toStringTag] = "focus node";
        focusNode.type = Property;
        focusNode.domain = AbstractResult;
        focusNode.range = _undefined;
        focusNode.subPropertyOf = [];
        focusNode.classValidators = [];
        focusNode.OntologyValidators = [];
        return focusNode;
    }(index_1.Base.BaseProperty));
    Properties.focusNode = focusNode;
    /** has value */
    var hasValue = /** @class */ (function (_super) {
        __extends(hasValue, _super);
        function hasValue() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        hasValue.id = index_1.ns.hasValue;
        hasValue[Symbol.toStringTag] = "has value";
        hasValue.type = Property;
        hasValue.domain = _undefined;
        hasValue.range = _undefined;
        hasValue.subPropertyOf = [];
        hasValue.classValidators = [];
        hasValue.OntologyValidators = [];
        return hasValue;
    }(index_1.Base.BaseProperty));
    Properties.hasValue = hasValue;
    /** ignored properties */
    var ignoredProperties = /** @class */ (function (_super) {
        __extends(ignoredProperties, _super);
        function ignoredProperties() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ignoredProperties.id = index_1.ns.ignoredProperties;
        ignoredProperties[Symbol.toStringTag] = "ignored properties";
        ignoredProperties.type = Property;
        ignoredProperties.domain = _undefined;
        ignoredProperties.range = List;
        ignoredProperties.subPropertyOf = [];
        ignoredProperties.classValidators = [];
        ignoredProperties.OntologyValidators = [];
        return ignoredProperties;
    }(index_1.Base.BaseProperty));
    Properties.ignoredProperties = ignoredProperties;
    /** in */
    var _in = /** @class */ (function (_super) {
        __extends(_in, _super);
        function _in() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        _in.id = index_1.ns._in;
        _in[Symbol.toStringTag] = "in";
        _in.type = Property;
        _in.domain = _undefined;
        _in.range = List;
        _in.subPropertyOf = [];
        _in.classValidators = [];
        _in.OntologyValidators = [];
        return _in;
    }(index_1.Base.BaseProperty));
    Properties._in = _in;
    /** inverse path */
    var inversePath = /** @class */ (function (_super) {
        __extends(inversePath, _super);
        function inversePath() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        inversePath.id = index_1.ns.inversePath;
        inversePath[Symbol.toStringTag] = "inverse path";
        inversePath.type = Property;
        inversePath.domain = _undefined;
        inversePath.range = Resource;
        inversePath.subPropertyOf = [];
        inversePath.classValidators = [];
        inversePath.OntologyValidators = [];
        return inversePath;
    }(index_1.Base.BaseProperty));
    Properties.inversePath = inversePath;
    /** JavaScript constraint */
    var js = /** @class */ (function (_super) {
        __extends(js, _super);
        function js() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this[_a] = "Does not pass the function " + _this.value.jsFunctionName;
            return _this;
        }
        js[(_a = sh.message, sh.validator)] = function (node) {
            var func = require(this.jsLibrary)[this.jsFunctionName];
            return func(R.path(this.parameter, node));
        };
        var _a;
        js.id = index_1.ns.js;
        js[Symbol.toStringTag] = "JavaScript constraint";
        js.type = Property;
        js.domain = _undefined;
        js.range = JSConstraint;
        js.subPropertyOf = [];
        js.classValidators = [];
        js.OntologyValidators = [];
        return js;
    }(index_1.Base.BaseProperty));
    Properties.js = js;
    /** JavaScript function name */
    var jsFunctionName = /** @class */ (function (_super) {
        __extends(jsFunctionName, _super);
        function jsFunctionName() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        jsFunctionName.id = index_1.ns.jsFunctionName;
        jsFunctionName[Symbol.toStringTag] = "JavaScript function name";
        jsFunctionName.type = Property;
        jsFunctionName.domain = JSExecutable;
        jsFunctionName.range = _string;
        jsFunctionName.subPropertyOf = [];
        jsFunctionName.classValidators = [];
        jsFunctionName.OntologyValidators = [];
        return jsFunctionName;
    }(index_1.Base.BaseProperty));
    Properties.jsFunctionName = jsFunctionName;
    /** JavaScript library */
    var jsLibrary = /** @class */ (function (_super) {
        __extends(jsLibrary, _super);
        function jsLibrary() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        jsLibrary.id = index_1.ns.jsLibrary;
        jsLibrary[Symbol.toStringTag] = "JavaScript library";
        jsLibrary.type = Property;
        jsLibrary.domain = _undefined;
        jsLibrary.range = JSLibrary;
        jsLibrary.subPropertyOf = [];
        jsLibrary.classValidators = [];
        jsLibrary.OntologyValidators = [];
        return jsLibrary;
    }(index_1.Base.BaseProperty));
    Properties.jsLibrary = jsLibrary;
    /** JavaScript library URL */
    var jsLibraryURL = /** @class */ (function (_super) {
        __extends(jsLibraryURL, _super);
        function jsLibraryURL() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        jsLibraryURL.id = index_1.ns.jsLibraryURL;
        jsLibraryURL[Symbol.toStringTag] = "JavaScript library URL";
        jsLibraryURL.type = Property;
        jsLibraryURL.domain = JSLibrary;
        jsLibraryURL.range = anyURI;
        jsLibraryURL.subPropertyOf = [];
        jsLibraryURL.classValidators = [];
        jsLibraryURL.OntologyValidators = [];
        return jsLibraryURL;
    }(index_1.Base.BaseProperty));
    Properties.jsLibraryURL = jsLibraryURL;
    /** label template */
    var labelTemplate = /** @class */ (function (_super) {
        __extends(labelTemplate, _super);
        function labelTemplate() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        labelTemplate.id = index_1.ns.labelTemplate;
        labelTemplate[Symbol.toStringTag] = "label template";
        labelTemplate.type = Property;
        labelTemplate.domain = Parameterizable;
        labelTemplate.range = _undefined;
        labelTemplate.subPropertyOf = [];
        labelTemplate.classValidators = [];
        labelTemplate.OntologyValidators = [];
        return labelTemplate;
    }(index_1.Base.BaseProperty));
    Properties.labelTemplate = labelTemplate;
    /** language in */
    var languageIn = /** @class */ (function (_super) {
        __extends(languageIn, _super);
        function languageIn() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        languageIn.id = index_1.ns.languageIn;
        languageIn[Symbol.toStringTag] = "language in";
        languageIn.type = Property;
        languageIn.domain = _undefined;
        languageIn.range = List;
        languageIn.subPropertyOf = [];
        languageIn.classValidators = [];
        languageIn.OntologyValidators = [];
        return languageIn;
    }(index_1.Base.BaseProperty));
    Properties.languageIn = languageIn;
    /** less than */
    var lessThan = /** @class */ (function (_super) {
        __extends(lessThan, _super);
        function lessThan() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.externallyDependent = true;
            return _this;
        }
        lessThan.prototype[sh.validator] = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, true]; // TODO
                });
            });
        };
        lessThan.prototype[sh.message] = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, ''];
                });
            });
        };
        lessThan.id = index_1.ns.lessThan;
        lessThan[Symbol.toStringTag] = "less than";
        lessThan.type = Property;
        lessThan.domain = _undefined;
        lessThan.range = Property;
        lessThan.subPropertyOf = [];
        lessThan.classValidators = [];
        lessThan.OntologyValidators = [];
        return lessThan;
    }(index_1.Base.BaseProperty));
    Properties.lessThan = lessThan;
    /** less than or equals */
    var lessThanOrEquals = /** @class */ (function (_super) {
        __extends(lessThanOrEquals, _super);
        function lessThanOrEquals() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.externallyDependent = true;
            return _this;
        }
        lessThanOrEquals.prototype[sh.validator] = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, true]; // TODO
                });
            });
        };
        lessThanOrEquals.prototype[sh.message] = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, ''];
                });
            });
        };
        lessThanOrEquals.id = index_1.ns.lessThanOrEquals;
        lessThanOrEquals[Symbol.toStringTag] = "less than or equals";
        lessThanOrEquals.type = Property;
        lessThanOrEquals.domain = _undefined;
        lessThanOrEquals.range = Property;
        lessThanOrEquals.subPropertyOf = [];
        lessThanOrEquals.classValidators = [];
        lessThanOrEquals.OntologyValidators = [];
        return lessThanOrEquals;
    }(index_1.Base.BaseProperty));
    Properties.lessThanOrEquals = lessThanOrEquals;
    /** max count */
    var maxCount = /** @class */ (function (_super) {
        __extends(maxCount, _super);
        function maxCount() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        maxCount.id = index_1.ns.maxCount;
        maxCount[Symbol.toStringTag] = "max count";
        maxCount.type = Property;
        maxCount.domain = _undefined;
        maxCount.range = integer;
        maxCount.subPropertyOf = [];
        maxCount.classValidators = [];
        maxCount.OntologyValidators = [];
        return maxCount;
    }(index_1.Base.BaseProperty));
    Properties.maxCount = maxCount;
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
        maxExclusive.prototype[sh.message] = function () {
            return "value should be strictly less than " + this.value;
        };
        maxExclusive.id = index_1.ns.maxExclusive;
        maxExclusive[Symbol.toStringTag] = "max exclusive";
        maxExclusive.type = Property;
        maxExclusive.domain = _undefined;
        maxExclusive.range = _undefined;
        maxExclusive.subPropertyOf = [];
        maxExclusive.classValidators = [];
        maxExclusive.OntologyValidators = [];
        return maxExclusive;
    }(index_1.Base.BaseProperty));
    Properties.maxExclusive = maxExclusive;
    /** max inclusive */
    var maxInclusive = /** @class */ (function (_super) {
        __extends(maxInclusive, _super);
        function maxInclusive() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        maxInclusive.id = index_1.ns.maxInclusive;
        maxInclusive[Symbol.toStringTag] = "max inclusive";
        maxInclusive.type = Property;
        maxInclusive.domain = _undefined;
        maxInclusive.range = _undefined;
        maxInclusive.subPropertyOf = [];
        maxInclusive.classValidators = [];
        maxInclusive.OntologyValidators = [];
        return maxInclusive;
    }(index_1.Base.BaseProperty));
    Properties.maxInclusive = maxInclusive;
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
        maxLength.prototype[sh.message] = function () {
            return "value should have at most " + this.value + " characters";
        };
        maxLength.id = index_1.ns.maxLength;
        maxLength[Symbol.toStringTag] = "max length";
        maxLength.type = Property;
        maxLength.domain = _undefined;
        maxLength.range = integer;
        maxLength.subPropertyOf = [];
        maxLength.classValidators = [];
        maxLength.OntologyValidators = [];
        return maxLength;
    }(index_1.Base.BaseProperty));
    Properties.maxLength = maxLength;
    /** message */
    var message = /** @class */ (function (_super) {
        __extends(message, _super);
        function message() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        message.id = index_1.ns.message;
        message[Symbol.toStringTag] = "message";
        message.type = Property;
        message.domain = _undefined;
        message.range = _undefined;
        message.subPropertyOf = [];
        message.classValidators = [];
        message.OntologyValidators = [];
        return message;
    }(index_1.Base.BaseProperty));
    Properties.message = message;
    /** min count */
    var minCount = /** @class */ (function (_super) {
        __extends(minCount, _super);
        function minCount() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        minCount.merge = function (constraints) {
            return Math.max.apply(Math, constraints);
        };
        minCount.id = index_1.ns.minCount;
        minCount[Symbol.toStringTag] = "min count";
        minCount.type = Property;
        minCount.domain = _undefined;
        minCount.range = integer;
        minCount.subPropertyOf = [];
        minCount.classValidators = [];
        minCount.OntologyValidators = [];
        return minCount;
    }(index_1.Base.BaseProperty));
    Properties.minCount = minCount;
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
        minExclusive.prototype[sh.message] = function () {
            return "value should be strictly more than " + this.value;
        };
        minExclusive.id = index_1.ns.minExclusive;
        minExclusive[Symbol.toStringTag] = "min exclusive";
        minExclusive.type = Property;
        minExclusive.domain = _undefined;
        minExclusive.range = _undefined;
        minExclusive.subPropertyOf = [];
        minExclusive.classValidators = [];
        minExclusive.OntologyValidators = [];
        return minExclusive;
    }(index_1.Base.BaseProperty));
    Properties.minExclusive = minExclusive;
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
        minInclusive.prototype[sh.message] = function () {
            return "value should be greater than or equal to " + this.value;
        };
        minInclusive.id = index_1.ns.minInclusive;
        minInclusive[Symbol.toStringTag] = "min inclusive";
        minInclusive.type = Property;
        minInclusive.domain = _undefined;
        minInclusive.range = _undefined;
        minInclusive.subPropertyOf = [];
        minInclusive.classValidators = [];
        minInclusive.OntologyValidators = [];
        return minInclusive;
    }(index_1.Base.BaseProperty));
    Properties.minInclusive = minInclusive;
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
        minLength.prototype[sh.message] = function () {
            return "value should have at least " + this.value + " characters";
        };
        minLength.id = index_1.ns.minLength;
        minLength[Symbol.toStringTag] = "min length";
        minLength.type = Property;
        minLength.domain = _undefined;
        minLength.range = integer;
        minLength.subPropertyOf = [];
        minLength.classValidators = [];
        minLength.OntologyValidators = [];
        return minLength;
    }(index_1.Base.BaseProperty));
    Properties.minLength = minLength;
    /** name */
    var name = /** @class */ (function (_super) {
        __extends(name, _super);
        function name() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        name.id = index_1.ns.name;
        name[Symbol.toStringTag] = "name";
        name.type = Property;
        name.domain = PropertyShape;
        name.range = _undefined;
        name.subPropertyOf = [];
        name.classValidators = [];
        name.OntologyValidators = [];
        return name;
    }(index_1.Base.BaseProperty));
    Properties.name = name;
    /** namespace */
    var namespace = /** @class */ (function (_super) {
        __extends(namespace, _super);
        function namespace() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        namespace.id = index_1.ns.namespace;
        namespace[Symbol.toStringTag] = "namespace";
        namespace.type = Property;
        namespace.domain = PrefixDeclaration;
        namespace.range = anyURI;
        namespace.subPropertyOf = [];
        namespace.classValidators = [];
        namespace.OntologyValidators = [];
        return namespace;
    }(index_1.Base.BaseProperty));
    Properties.namespace = namespace;
    /** node */
    var node = /** @class */ (function (_super) {
        __extends(node, _super);
        function node() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        node.id = index_1.ns.node;
        node[Symbol.toStringTag] = "node";
        node.type = Property;
        node.domain = _undefined;
        node.range = NodeShape;
        node.subPropertyOf = [];
        node.classValidators = [];
        node.OntologyValidators = [];
        return node;
    }(index_1.Base.BaseProperty));
    Properties.node = node;
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
        nodeKind.id = index_1.ns.nodeKind;
        nodeKind[Symbol.toStringTag] = "node kind";
        nodeKind.type = Property;
        nodeKind.domain = _undefined;
        nodeKind.range = NodeKind;
        nodeKind.subPropertyOf = [];
        nodeKind.classValidators = [];
        nodeKind.OntologyValidators = [];
        return nodeKind;
    }(index_1.Base.BaseProperty));
    Properties.nodeKind = nodeKind;
    /** shape validator */
    var nodeValidator = /** @class */ (function (_super) {
        __extends(nodeValidator, _super);
        function nodeValidator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        nodeValidator.id = index_1.ns.nodeValidator;
        nodeValidator[Symbol.toStringTag] = "shape validator";
        nodeValidator.type = Property;
        nodeValidator.domain = ConstraintComponent;
        nodeValidator.range = Validator;
        nodeValidator.subPropertyOf = [];
        nodeValidator.classValidators = [];
        nodeValidator.OntologyValidators = [];
        return nodeValidator;
    }(index_1.Base.BaseProperty));
    Properties.nodeValidator = nodeValidator;
    /** one or more path */
    var oneOrMorePath = /** @class */ (function (_super) {
        __extends(oneOrMorePath, _super);
        function oneOrMorePath() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        oneOrMorePath.id = index_1.ns.oneOrMorePath;
        oneOrMorePath[Symbol.toStringTag] = "one or more path";
        oneOrMorePath.type = Property;
        oneOrMorePath.domain = _undefined;
        oneOrMorePath.range = Resource;
        oneOrMorePath.subPropertyOf = [];
        oneOrMorePath.classValidators = [];
        oneOrMorePath.OntologyValidators = [];
        return oneOrMorePath;
    }(index_1.Base.BaseProperty));
    Properties.oneOrMorePath = oneOrMorePath;
    /** parameter */
    var parameter = /** @class */ (function (_super) {
        __extends(parameter, _super);
        function parameter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        parameter.id = index_1.ns.parameter;
        parameter[Symbol.toStringTag] = "parameter";
        parameter.type = Property;
        parameter.domain = Parameterizable;
        parameter.range = Parameter;
        parameter.subPropertyOf = [];
        parameter.classValidators = [];
        parameter.OntologyValidators = [];
        return parameter;
    }(index_1.Base.BaseProperty));
    Properties.parameter = parameter;
    /** path */
    var path = /** @class */ (function (_super) {
        __extends(path, _super);
        function path() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        path.id = index_1.ns.path;
        path[Symbol.toStringTag] = "path";
        path.type = Property;
        path.domain = PropertyShape;
        path.range = Resource;
        path.subPropertyOf = [];
        path.classValidators = [];
        path.OntologyValidators = [];
        return path;
    }(index_1.Base.BaseProperty));
    Properties.path = path;
    /** prefix */
    var prefix = /** @class */ (function (_super) {
        __extends(prefix, _super);
        function prefix() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        prefix.id = index_1.ns.prefix;
        prefix[Symbol.toStringTag] = "prefix";
        prefix.type = Property;
        prefix.domain = PrefixDeclaration;
        prefix.range = _string;
        prefix.subPropertyOf = [];
        prefix.classValidators = [];
        prefix.OntologyValidators = [];
        return prefix;
    }(index_1.Base.BaseProperty));
    Properties.prefix = prefix;
    /** or */
    var or = /** @class */ (function (_super) {
        __extends(or, _super);
        function or() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        or.id = index_1.ns.or;
        or[Symbol.toStringTag] = "or";
        or.type = Property;
        or.domain = _undefined;
        or.range = List;
        or.subPropertyOf = [];
        or.classValidators = [];
        or.OntologyValidators = [];
        return or;
    }(index_1.Base.BaseProperty));
    Properties.or = or;
    /** optional */
    var optional = /** @class */ (function (_super) {
        __extends(optional, _super);
        function optional() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        optional.id = index_1.ns.optional;
        optional[Symbol.toStringTag] = "optional";
        optional.type = Property;
        optional.domain = Parameter;
        optional.range = _boolean;
        optional.subPropertyOf = [];
        optional.classValidators = [];
        optional.OntologyValidators = [];
        return optional;
    }(index_1.Base.BaseProperty));
    Properties.optional = optional;
    /** property */
    var property = /** @class */ (function (_super) {
        __extends(property, _super);
        function property() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        property.id = index_1.ns.property;
        property[Symbol.toStringTag] = "property";
        property.type = Property;
        property.domain = Shape;
        property.range = PropertyShape;
        property.subPropertyOf = [];
        property.classValidators = [];
        property.OntologyValidators = [];
        return property;
    }(index_1.Base.BaseProperty));
    Properties.property = property;
    /** property validator */
    var propertyValidator = /** @class */ (function (_super) {
        __extends(propertyValidator, _super);
        function propertyValidator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        propertyValidator.id = index_1.ns.propertyValidator;
        propertyValidator[Symbol.toStringTag] = "property validator";
        propertyValidator.type = Property;
        propertyValidator.domain = ConstraintComponent;
        propertyValidator.range = Validator;
        propertyValidator.subPropertyOf = [];
        propertyValidator.classValidators = [];
        propertyValidator.OntologyValidators = [];
        return propertyValidator;
    }(index_1.Base.BaseProperty));
    Properties.propertyValidator = propertyValidator;
    /** qualified max count */
    var qualifiedMaxCount = /** @class */ (function (_super) {
        __extends(qualifiedMaxCount, _super);
        function qualifiedMaxCount() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        qualifiedMaxCount.id = index_1.ns.qualifiedMaxCount;
        qualifiedMaxCount[Symbol.toStringTag] = "qualified max count";
        qualifiedMaxCount.type = Property;
        qualifiedMaxCount.domain = _undefined;
        qualifiedMaxCount.range = integer;
        qualifiedMaxCount.subPropertyOf = [];
        qualifiedMaxCount.classValidators = [];
        qualifiedMaxCount.OntologyValidators = [];
        return qualifiedMaxCount;
    }(index_1.Base.BaseProperty));
    Properties.qualifiedMaxCount = qualifiedMaxCount;
    /** qualified value shape */
    var qualifiedValueShape = /** @class */ (function (_super) {
        __extends(qualifiedValueShape, _super);
        function qualifiedValueShape() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        qualifiedValueShape.id = index_1.ns.qualifiedValueShape;
        qualifiedValueShape[Symbol.toStringTag] = "qualified value shape";
        qualifiedValueShape.type = Property;
        qualifiedValueShape.domain = _undefined;
        qualifiedValueShape.range = Shape;
        qualifiedValueShape.subPropertyOf = [];
        qualifiedValueShape.classValidators = [];
        qualifiedValueShape.OntologyValidators = [];
        return qualifiedValueShape;
    }(index_1.Base.BaseProperty));
    Properties.qualifiedValueShape = qualifiedValueShape;
    /** result */
    var result = /** @class */ (function (_super) {
        __extends(result, _super);
        function result() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        result.id = index_1.ns.result;
        result[Symbol.toStringTag] = "result";
        result.type = Property;
        result.domain = ValidationReport;
        result.range = ValidationResult;
        result.subPropertyOf = [];
        result.classValidators = [];
        result.OntologyValidators = [];
        return result;
    }(index_1.Base.BaseProperty));
    Properties.result = result;
    /** result annotation */
    var resultAnnotation = /** @class */ (function (_super) {
        __extends(resultAnnotation, _super);
        function resultAnnotation() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        resultAnnotation.id = index_1.ns.resultAnnotation;
        resultAnnotation[Symbol.toStringTag] = "result annotation";
        resultAnnotation.type = Property;
        resultAnnotation.domain = SPARQLSelectValidator;
        resultAnnotation.range = ResultAnnotation;
        resultAnnotation.subPropertyOf = [];
        resultAnnotation.classValidators = [];
        resultAnnotation.OntologyValidators = [];
        return resultAnnotation;
    }(index_1.Base.BaseProperty));
    Properties.resultAnnotation = resultAnnotation;
    /** result message */
    var resultMessage = /** @class */ (function (_super) {
        __extends(resultMessage, _super);
        function resultMessage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        resultMessage.id = index_1.ns.resultMessage;
        resultMessage[Symbol.toStringTag] = "result message";
        resultMessage.type = Property;
        resultMessage.domain = AbstractResult;
        resultMessage.range = _undefined;
        resultMessage.subPropertyOf = [];
        resultMessage.classValidators = [];
        resultMessage.OntologyValidators = [];
        return resultMessage;
    }(index_1.Base.BaseProperty));
    Properties.resultMessage = resultMessage;
    /** result path */
    var resultPath = /** @class */ (function (_super) {
        __extends(resultPath, _super);
        function resultPath() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        resultPath.id = index_1.ns.resultPath;
        resultPath[Symbol.toStringTag] = "result path";
        resultPath.type = Property;
        resultPath.domain = AbstractResult;
        resultPath.range = Resource;
        resultPath.subPropertyOf = [];
        resultPath.classValidators = [];
        resultPath.OntologyValidators = [];
        return resultPath;
    }(index_1.Base.BaseProperty));
    Properties.resultPath = resultPath;
    /** result severity */
    var resultSeverity = /** @class */ (function (_super) {
        __extends(resultSeverity, _super);
        function resultSeverity() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        resultSeverity.id = index_1.ns.resultSeverity;
        resultSeverity[Symbol.toStringTag] = "result severity";
        resultSeverity.type = Property;
        resultSeverity.domain = AbstractResult;
        resultSeverity.range = Severity;
        resultSeverity.subPropertyOf = [];
        resultSeverity.classValidators = [];
        resultSeverity.OntologyValidators = [];
        return resultSeverity;
    }(index_1.Base.BaseProperty));
    Properties.resultSeverity = resultSeverity;
    /** return type */
    var returnType = /** @class */ (function (_super) {
        __extends(returnType, _super);
        function returnType() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        returnType.id = index_1.ns.returnType;
        returnType[Symbol.toStringTag] = "return type";
        returnType.type = Property;
        returnType.domain = Function;
        returnType.range = Class;
        returnType.subPropertyOf = [];
        returnType.classValidators = [];
        returnType.OntologyValidators = [];
        return returnType;
    }(index_1.Base.BaseProperty));
    Properties.returnType = returnType;
    /** rule */
    var rule = /** @class */ (function (_super) {
        __extends(rule, _super);
        function rule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        rule.id = index_1.ns.rule;
        rule[Symbol.toStringTag] = "rule";
        rule.type = Property;
        rule.domain = Shape;
        rule.range = Rule;
        rule.subPropertyOf = [];
        rule.classValidators = [];
        rule.OntologyValidators = [];
        return rule;
    }(index_1.Base.BaseProperty));
    Properties.rule = rule;
    /** select */
    var select = /** @class */ (function (_super) {
        __extends(select, _super);
        function select() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        select.id = index_1.ns.select;
        select[Symbol.toStringTag] = "select";
        select.type = Property;
        select.domain = SPARQLSelectExecutable;
        select.range = _string;
        select.subPropertyOf = [];
        select.classValidators = [];
        select.OntologyValidators = [];
        return select;
    }(index_1.Base.BaseProperty));
    Properties.select = select;
    /** severity */
    var severity = /** @class */ (function (_super) {
        __extends(severity, _super);
        function severity() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        severity.id = index_1.ns.severity;
        severity[Symbol.toStringTag] = "severity";
        severity.type = Property;
        severity.domain = Shape;
        severity.range = Severity;
        severity.subPropertyOf = [];
        severity.classValidators = [];
        severity.OntologyValidators = [];
        return severity;
    }(index_1.Base.BaseProperty));
    Properties.severity = severity;
    /** shapes graph */
    var shapesGraph = /** @class */ (function (_super) {
        __extends(shapesGraph, _super);
        function shapesGraph() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        shapesGraph.id = index_1.ns.shapesGraph;
        shapesGraph[Symbol.toStringTag] = "shapes graph";
        shapesGraph.type = Property;
        shapesGraph.domain = Ontology;
        shapesGraph.range = Ontology;
        shapesGraph.subPropertyOf = [];
        shapesGraph.classValidators = [];
        shapesGraph.OntologyValidators = [];
        return shapesGraph;
    }(index_1.Base.BaseProperty));
    Properties.shapesGraph = shapesGraph;
    /** shapes graph well-formed */
    var shapesGraphWellFormed = /** @class */ (function (_super) {
        __extends(shapesGraphWellFormed, _super);
        function shapesGraphWellFormed() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        shapesGraphWellFormed.id = index_1.ns.shapesGraphWellFormed;
        shapesGraphWellFormed[Symbol.toStringTag] = "shapes graph well-formed";
        shapesGraphWellFormed.type = Property;
        shapesGraphWellFormed.domain = ValidationReport;
        shapesGraphWellFormed.range = _boolean;
        shapesGraphWellFormed.subPropertyOf = [];
        shapesGraphWellFormed.classValidators = [];
        shapesGraphWellFormed.OntologyValidators = [];
        return shapesGraphWellFormed;
    }(index_1.Base.BaseProperty));
    Properties.shapesGraphWellFormed = shapesGraphWellFormed;
    /** constraint (in SPARQL) */
    var sparql = /** @class */ (function (_super) {
        __extends(sparql, _super);
        function sparql() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        sparql.id = index_1.ns.sparql;
        sparql[Symbol.toStringTag] = "constraint (in SPARQL)";
        sparql.type = Property;
        sparql.domain = Shape;
        sparql.range = SPARQLConstraint;
        sparql.subPropertyOf = [];
        sparql.classValidators = [];
        sparql.OntologyValidators = [];
        return sparql;
    }(index_1.Base.BaseProperty));
    Properties.sparql = sparql;
    /** subject */
    var subject = /** @class */ (function (_super) {
        __extends(subject, _super);
        function subject() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        subject.id = index_1.ns.subject;
        subject[Symbol.toStringTag] = "subject";
        subject.type = Property;
        subject.domain = TripleRule;
        subject.range = _undefined;
        subject.subPropertyOf = [];
        subject.classValidators = [];
        subject.OntologyValidators = [];
        return subject;
    }(index_1.Base.BaseProperty));
    Properties.subject = subject;
    /** target class */
    var targetClass = /** @class */ (function (_super) {
        __extends(targetClass, _super);
        function targetClass() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        targetClass.id = index_1.ns.targetClass;
        targetClass[Symbol.toStringTag] = "target class";
        targetClass.type = Property;
        targetClass.domain = Shape;
        targetClass.range = Class;
        targetClass.subPropertyOf = [];
        targetClass.classValidators = [];
        targetClass.OntologyValidators = [];
        return targetClass;
    }(index_1.Base.BaseProperty));
    Properties.targetClass = targetClass;
    /** suggested shapes graph */
    var suggestedShapesGraph = /** @class */ (function (_super) {
        __extends(suggestedShapesGraph, _super);
        function suggestedShapesGraph() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        suggestedShapesGraph.id = index_1.ns.suggestedShapesGraph;
        suggestedShapesGraph[Symbol.toStringTag] = "suggested shapes graph";
        suggestedShapesGraph.type = Property;
        suggestedShapesGraph.domain = Ontology;
        suggestedShapesGraph.range = Ontology;
        suggestedShapesGraph.subPropertyOf = [];
        suggestedShapesGraph.classValidators = [];
        suggestedShapesGraph.OntologyValidators = [];
        return suggestedShapesGraph;
    }(index_1.Base.BaseProperty));
    Properties.suggestedShapesGraph = suggestedShapesGraph;
    /** source constraint */
    var sourceConstraint = /** @class */ (function (_super) {
        __extends(sourceConstraint, _super);
        function sourceConstraint() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        sourceConstraint.id = index_1.ns.sourceConstraint;
        sourceConstraint[Symbol.toStringTag] = "source constraint";
        sourceConstraint.type = Property;
        sourceConstraint.domain = AbstractResult;
        sourceConstraint.range = _undefined;
        sourceConstraint.subPropertyOf = [];
        sourceConstraint.classValidators = [];
        sourceConstraint.OntologyValidators = [];
        return sourceConstraint;
    }(index_1.Base.BaseProperty));
    Properties.sourceConstraint = sourceConstraint;
    /** source constraint component */
    var sourceConstraintComponent = /** @class */ (function (_super) {
        __extends(sourceConstraintComponent, _super);
        function sourceConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        sourceConstraintComponent.id = index_1.ns.sourceConstraintComponent;
        sourceConstraintComponent[Symbol.toStringTag] = "source constraint component";
        sourceConstraintComponent.type = Property;
        sourceConstraintComponent.domain = AbstractResult;
        sourceConstraintComponent.range = ConstraintComponent;
        sourceConstraintComponent.subPropertyOf = [];
        sourceConstraintComponent.classValidators = [];
        sourceConstraintComponent.OntologyValidators = [];
        return sourceConstraintComponent;
    }(index_1.Base.BaseProperty));
    Properties.sourceConstraintComponent = sourceConstraintComponent;
    /** source shape */
    var sourceShape = /** @class */ (function (_super) {
        __extends(sourceShape, _super);
        function sourceShape() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        sourceShape.id = index_1.ns.sourceShape;
        sourceShape[Symbol.toStringTag] = "source shape";
        sourceShape.type = Property;
        sourceShape.domain = AbstractResult;
        sourceShape.range = Shape;
        sourceShape.subPropertyOf = [];
        sourceShape.classValidators = [];
        sourceShape.OntologyValidators = [];
        return sourceShape;
    }(index_1.Base.BaseProperty));
    Properties.sourceShape = sourceShape;
    /** target */
    var target = /** @class */ (function (_super) {
        __extends(target, _super);
        function target() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        target.id = index_1.ns.target;
        target[Symbol.toStringTag] = "target";
        target.type = Property;
        target.domain = Shape;
        target.range = Target;
        target.subPropertyOf = [];
        target.classValidators = [];
        target.OntologyValidators = [];
        return target;
    }(index_1.Base.BaseProperty));
    Properties.target = target;
    /** target node */
    var targetNode = /** @class */ (function (_super) {
        __extends(targetNode, _super);
        function targetNode() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        targetNode.id = index_1.ns.targetNode;
        targetNode[Symbol.toStringTag] = "target node";
        targetNode.type = Property;
        targetNode.domain = Shape;
        targetNode.range = _undefined;
        targetNode.subPropertyOf = [];
        targetNode.classValidators = [];
        targetNode.OntologyValidators = [];
        return targetNode;
    }(index_1.Base.BaseProperty));
    Properties.targetNode = targetNode;
    /** target objects of */
    var targetObjectsOf = /** @class */ (function (_super) {
        __extends(targetObjectsOf, _super);
        function targetObjectsOf() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        targetObjectsOf.id = index_1.ns.targetObjectsOf;
        targetObjectsOf[Symbol.toStringTag] = "target objects of";
        targetObjectsOf.type = Property;
        targetObjectsOf.domain = Shape;
        targetObjectsOf.range = Property;
        targetObjectsOf.subPropertyOf = [];
        targetObjectsOf.classValidators = [];
        targetObjectsOf.OntologyValidators = [];
        return targetObjectsOf;
    }(index_1.Base.BaseProperty));
    Properties.targetObjectsOf = targetObjectsOf;
    /** target subjects of */
    var targetSubjectsOf = /** @class */ (function (_super) {
        __extends(targetSubjectsOf, _super);
        function targetSubjectsOf() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        targetSubjectsOf.id = index_1.ns.targetSubjectsOf;
        targetSubjectsOf[Symbol.toStringTag] = "target subjects of";
        targetSubjectsOf.type = Property;
        targetSubjectsOf.domain = Shape;
        targetSubjectsOf.range = Property;
        targetSubjectsOf.subPropertyOf = [];
        targetSubjectsOf.classValidators = [];
        targetSubjectsOf.OntologyValidators = [];
        return targetSubjectsOf;
    }(index_1.Base.BaseProperty));
    Properties.targetSubjectsOf = targetSubjectsOf;
    /** union */
    var union = /** @class */ (function (_super) {
        __extends(union, _super);
        function union() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        union.id = index_1.ns.union;
        union[Symbol.toStringTag] = "union";
        union.type = Property;
        union.domain = _undefined;
        union.range = _undefined;
        union.subPropertyOf = [];
        union.classValidators = [];
        union.OntologyValidators = [];
        return union;
    }(index_1.Base.BaseProperty));
    Properties.union = union;
    /** validator */
    var validator = /** @class */ (function (_super) {
        __extends(validator, _super);
        function validator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        validator.id = index_1.ns.validator;
        validator[Symbol.toStringTag] = "validator";
        validator.type = Property;
        validator.domain = ConstraintComponent;
        validator.range = Validator;
        validator.subPropertyOf = [];
        validator.classValidators = [];
        validator.OntologyValidators = [];
        return validator;
    }(index_1.Base.BaseProperty));
    Properties.validator = validator;
    /** value */
    var value = /** @class */ (function (_super) {
        __extends(value, _super);
        function value() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        value.id = index_1.ns.value;
        value[Symbol.toStringTag] = "value";
        value.type = Property;
        value.domain = AbstractResult;
        value.range = _undefined;
        value.subPropertyOf = [];
        value.classValidators = [];
        value.OntologyValidators = [];
        return value;
    }(index_1.Base.BaseProperty));
    Properties.value = value;
    /** exactly one */
    var xone = /** @class */ (function (_super) {
        __extends(xone, _super);
        function xone() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        xone.id = index_1.ns.xone;
        xone[Symbol.toStringTag] = "exactly one";
        xone.type = Property;
        xone.domain = _undefined;
        xone.range = List;
        xone.subPropertyOf = [];
        xone.classValidators = [];
        xone.OntologyValidators = [];
        return xone;
    }(index_1.Base.BaseProperty));
    Properties.xone = xone;
    /** zero or more path */
    var zeroOrMorePath = /** @class */ (function (_super) {
        __extends(zeroOrMorePath, _super);
        function zeroOrMorePath() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        zeroOrMorePath.id = index_1.ns.zeroOrMorePath;
        zeroOrMorePath[Symbol.toStringTag] = "zero or more path";
        zeroOrMorePath.type = Property;
        zeroOrMorePath.domain = _undefined;
        zeroOrMorePath.range = Resource;
        zeroOrMorePath.subPropertyOf = [];
        zeroOrMorePath.classValidators = [];
        zeroOrMorePath.OntologyValidators = [];
        return zeroOrMorePath;
    }(index_1.Base.BaseProperty));
    Properties.zeroOrMorePath = zeroOrMorePath;
    /** zero or one path */
    var zeroOrOnePath = /** @class */ (function (_super) {
        __extends(zeroOrOnePath, _super);
        function zeroOrOnePath() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        zeroOrOnePath.id = index_1.ns.zeroOrOnePath;
        zeroOrOnePath[Symbol.toStringTag] = "zero or one path";
        zeroOrOnePath.type = Property;
        zeroOrOnePath.domain = _undefined;
        zeroOrOnePath.range = Resource;
        zeroOrOnePath.subPropertyOf = [];
        zeroOrOnePath.classValidators = [];
        zeroOrOnePath.OntologyValidators = [];
        return zeroOrOnePath;
    }(index_1.Base.BaseProperty));
    Properties.zeroOrOnePath = zeroOrOnePath;
})(Properties = exports.Properties || (exports.Properties = {}));
