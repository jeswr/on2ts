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
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        _.id = index_1.ns._;
        _[Symbol.toStringTag] = "W3C Shapes Constraint Language (SHACL) Vocabulary";
        _.type = Ontology;
        _.subClassOf = [];
        _.SHACLValidators = [];
        _.OnotologyValidators = [];
        return _;
    }(index_1.Base.ClassBase));
    Classes._ = _;
    var AbstractResult = /** @class */ (function (_super) {
        __extends(AbstractResult, _super);
        function AbstractResult() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        AbstractResult.id = index_1.ns.AbstractResult;
        AbstractResult[Symbol.toStringTag] = "Abstract result";
        AbstractResult.type = Class;
        AbstractResult.subClassOf = [Resource];
        AbstractResult.SHACLValidators = [];
        AbstractResult.OnotologyValidators = [];
        return AbstractResult;
    }(index_1.Base.ClassBase));
    Classes.AbstractResult = AbstractResult;
    var AndConstraintComponent = /** @class */ (function (_super) {
        __extends(AndConstraintComponent, _super);
        function AndConstraintComponent() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        AndConstraintComponent.id = index_1.ns.AndConstraintComponent;
        AndConstraintComponent[Symbol.toStringTag] = "And constraint component";
        AndConstraintComponent.type = ConstraintComponent;
        AndConstraintComponent.subClassOf = [];
        AndConstraintComponent.SHACLValidators = [];
        AndConstraintComponent.OnotologyValidators = [];
        return AndConstraintComponent;
    }(index_1.Base.ClassBase));
    Classes.AndConstraintComponent = AndConstraintComponent;
    var AndConstraintComponent_and = /** @class */ (function (_super) {
        __extends(AndConstraintComponent_and, _super);
        function AndConstraintComponent_and() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        AndConstraintComponent_and.id = index_1.ns.AndConstraintComponent_and;
        AndConstraintComponent_and[Symbol.toStringTag] = "undefined";
        AndConstraintComponent_and.type = Parameter;
        AndConstraintComponent_and.subClassOf = [];
        AndConstraintComponent_and.SHACLValidators = [];
        AndConstraintComponent_and.OnotologyValidators = [];
        return AndConstraintComponent_and;
    }(index_1.Base.ClassBase));
    Classes.AndConstraintComponent_and = AndConstraintComponent_and;
    var BlankNode = /** @class */ (function (_super) {
        __extends(BlankNode, _super);
        function BlankNode() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        BlankNode.id = index_1.ns.BlankNode;
        BlankNode[Symbol.toStringTag] = "Blank node";
        BlankNode.type = NodeKind;
        BlankNode.subClassOf = [];
        BlankNode.SHACLValidators = [];
        BlankNode.OnotologyValidators = [];
        return BlankNode;
    }(index_1.Base.ClassBase));
    Classes.BlankNode = BlankNode;
    var BlankNodeOrIRI = /** @class */ (function (_super) {
        __extends(BlankNodeOrIRI, _super);
        function BlankNodeOrIRI() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        BlankNodeOrIRI.id = index_1.ns.BlankNodeOrIRI;
        BlankNodeOrIRI[Symbol.toStringTag] = "Blank node or IRI";
        BlankNodeOrIRI.type = NodeKind;
        BlankNodeOrIRI.subClassOf = [];
        BlankNodeOrIRI.SHACLValidators = [];
        BlankNodeOrIRI.OnotologyValidators = [];
        return BlankNodeOrIRI;
    }(index_1.Base.ClassBase));
    Classes.BlankNodeOrIRI = BlankNodeOrIRI;
    var BlankNodeOrLiteral = /** @class */ (function (_super) {
        __extends(BlankNodeOrLiteral, _super);
        function BlankNodeOrLiteral() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        BlankNodeOrLiteral.id = index_1.ns.BlankNodeOrLiteral;
        BlankNodeOrLiteral[Symbol.toStringTag] = "Blank node or literal";
        BlankNodeOrLiteral.type = NodeKind;
        BlankNodeOrLiteral.subClassOf = [];
        BlankNodeOrLiteral.SHACLValidators = [];
        BlankNodeOrLiteral.OnotologyValidators = [];
        return BlankNodeOrLiteral;
    }(index_1.Base.ClassBase));
    Classes.BlankNodeOrLiteral = BlankNodeOrLiteral;
    var ClassConstraintComponent = /** @class */ (function (_super) {
        __extends(ClassConstraintComponent, _super);
        function ClassConstraintComponent() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        ClassConstraintComponent.id = index_1.ns.ClassConstraintComponent;
        ClassConstraintComponent[Symbol.toStringTag] = "Class constraint component";
        ClassConstraintComponent.type = ConstraintComponent;
        ClassConstraintComponent.subClassOf = [];
        ClassConstraintComponent.SHACLValidators = [];
        ClassConstraintComponent.OnotologyValidators = [];
        return ClassConstraintComponent;
    }(index_1.Base.ClassBase));
    Classes.ClassConstraintComponent = ClassConstraintComponent;
    var ClassConstraintComponent_class = /** @class */ (function (_super) {
        __extends(ClassConstraintComponent_class, _super);
        function ClassConstraintComponent_class() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        ClassConstraintComponent_class.id = index_1.ns.ClassConstraintComponent_class;
        ClassConstraintComponent_class[Symbol.toStringTag] = "undefined";
        ClassConstraintComponent_class.type = Parameter;
        ClassConstraintComponent_class.subClassOf = [];
        ClassConstraintComponent_class.SHACLValidators = [];
        ClassConstraintComponent_class.OnotologyValidators = [];
        return ClassConstraintComponent_class;
    }(index_1.Base.ClassBase));
    Classes.ClassConstraintComponent_class = ClassConstraintComponent_class;
    var ClosedConstraintComponent = /** @class */ (function (_super) {
        __extends(ClosedConstraintComponent, _super);
        function ClosedConstraintComponent() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        ClosedConstraintComponent.id = index_1.ns.ClosedConstraintComponent;
        ClosedConstraintComponent[Symbol.toStringTag] = "Closed constraint component";
        ClosedConstraintComponent.type = ConstraintComponent;
        ClosedConstraintComponent.subClassOf = [];
        ClosedConstraintComponent.SHACLValidators = [];
        ClosedConstraintComponent.OnotologyValidators = [];
        return ClosedConstraintComponent;
    }(index_1.Base.ClassBase));
    Classes.ClosedConstraintComponent = ClosedConstraintComponent;
    var ClosedConstraintComponent_closed = /** @class */ (function (_super) {
        __extends(ClosedConstraintComponent_closed, _super);
        function ClosedConstraintComponent_closed() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        ClosedConstraintComponent_closed.id = index_1.ns.ClosedConstraintComponent_closed;
        ClosedConstraintComponent_closed[Symbol.toStringTag] = "undefined";
        ClosedConstraintComponent_closed.type = Parameter;
        ClosedConstraintComponent_closed.subClassOf = [];
        ClosedConstraintComponent_closed.SHACLValidators = [];
        ClosedConstraintComponent_closed.OnotologyValidators = [];
        return ClosedConstraintComponent_closed;
    }(index_1.Base.ClassBase));
    Classes.ClosedConstraintComponent_closed = ClosedConstraintComponent_closed;
    var ClosedConstraintComponent_ignoredProperties = /** @class */ (function (_super) {
        __extends(ClosedConstraintComponent_ignoredProperties, _super);
        function ClosedConstraintComponent_ignoredProperties() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        ClosedConstraintComponent_ignoredProperties.id = index_1.ns.ClosedConstraintComponent_ignoredProperties;
        ClosedConstraintComponent_ignoredProperties[Symbol.toStringTag] = "undefined";
        ClosedConstraintComponent_ignoredProperties.type = Parameter;
        ClosedConstraintComponent_ignoredProperties.subClassOf = [];
        ClosedConstraintComponent_ignoredProperties.SHACLValidators = [];
        ClosedConstraintComponent_ignoredProperties.OnotologyValidators = [];
        return ClosedConstraintComponent_ignoredProperties;
    }(index_1.Base.ClassBase));
    Classes.ClosedConstraintComponent_ignoredProperties = ClosedConstraintComponent_ignoredProperties;
    var ConstraintComponent = /** @class */ (function (_super) {
        __extends(ConstraintComponent, _super);
        function ConstraintComponent() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        ConstraintComponent.id = index_1.ns.ConstraintComponent;
        ConstraintComponent[Symbol.toStringTag] = "Constraint component";
        ConstraintComponent.type = Class;
        ConstraintComponent.subClassOf = [Parameterizable];
        ConstraintComponent.SHACLValidators = [];
        ConstraintComponent.OnotologyValidators = [];
        return ConstraintComponent;
    }(index_1.Base.ClassBase));
    Classes.ConstraintComponent = ConstraintComponent;
    var DatatypeConstraintComponent = /** @class */ (function (_super) {
        __extends(DatatypeConstraintComponent, _super);
        function DatatypeConstraintComponent() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        DatatypeConstraintComponent.id = index_1.ns.DatatypeConstraintComponent;
        DatatypeConstraintComponent[Symbol.toStringTag] = "Datatype constraint component";
        DatatypeConstraintComponent.type = ConstraintComponent;
        DatatypeConstraintComponent.subClassOf = [];
        DatatypeConstraintComponent.SHACLValidators = [];
        DatatypeConstraintComponent.OnotologyValidators = [];
        return DatatypeConstraintComponent;
    }(index_1.Base.ClassBase));
    Classes.DatatypeConstraintComponent = DatatypeConstraintComponent;
    var DatatypeConstraintComponent_datatype = /** @class */ (function (_super) {
        __extends(DatatypeConstraintComponent_datatype, _super);
        function DatatypeConstraintComponent_datatype() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        DatatypeConstraintComponent_datatype.id = index_1.ns.DatatypeConstraintComponent_datatype;
        DatatypeConstraintComponent_datatype[Symbol.toStringTag] = "undefined";
        DatatypeConstraintComponent_datatype.type = Parameter;
        DatatypeConstraintComponent_datatype.subClassOf = [];
        DatatypeConstraintComponent_datatype.SHACLValidators = [];
        DatatypeConstraintComponent_datatype.OnotologyValidators = [];
        return DatatypeConstraintComponent_datatype;
    }(index_1.Base.ClassBase));
    Classes.DatatypeConstraintComponent_datatype = DatatypeConstraintComponent_datatype;
    var DisjointConstraintComponent = /** @class */ (function (_super) {
        __extends(DisjointConstraintComponent, _super);
        function DisjointConstraintComponent() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        DisjointConstraintComponent.id = index_1.ns.DisjointConstraintComponent;
        DisjointConstraintComponent[Symbol.toStringTag] = "Disjoint constraint component";
        DisjointConstraintComponent.type = ConstraintComponent;
        DisjointConstraintComponent.subClassOf = [];
        DisjointConstraintComponent.SHACLValidators = [];
        DisjointConstraintComponent.OnotologyValidators = [];
        return DisjointConstraintComponent;
    }(index_1.Base.ClassBase));
    Classes.DisjointConstraintComponent = DisjointConstraintComponent;
    var DisjointConstraintComponent_disjoint = /** @class */ (function (_super) {
        __extends(DisjointConstraintComponent_disjoint, _super);
        function DisjointConstraintComponent_disjoint() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        DisjointConstraintComponent_disjoint.id = index_1.ns.DisjointConstraintComponent_disjoint;
        DisjointConstraintComponent_disjoint[Symbol.toStringTag] = "undefined";
        DisjointConstraintComponent_disjoint.type = Parameter;
        DisjointConstraintComponent_disjoint.subClassOf = [];
        DisjointConstraintComponent_disjoint.SHACLValidators = [];
        DisjointConstraintComponent_disjoint.OnotologyValidators = [];
        return DisjointConstraintComponent_disjoint;
    }(index_1.Base.ClassBase));
    Classes.DisjointConstraintComponent_disjoint = DisjointConstraintComponent_disjoint;
    var EqualsConstraintComponent = /** @class */ (function (_super) {
        __extends(EqualsConstraintComponent, _super);
        function EqualsConstraintComponent() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        EqualsConstraintComponent.id = index_1.ns.EqualsConstraintComponent;
        EqualsConstraintComponent[Symbol.toStringTag] = "Equals constraint component";
        EqualsConstraintComponent.type = ConstraintComponent;
        EqualsConstraintComponent.subClassOf = [];
        EqualsConstraintComponent.SHACLValidators = [];
        EqualsConstraintComponent.OnotologyValidators = [];
        return EqualsConstraintComponent;
    }(index_1.Base.ClassBase));
    Classes.EqualsConstraintComponent = EqualsConstraintComponent;
    var EqualsConstraintComponent_equals = /** @class */ (function (_super) {
        __extends(EqualsConstraintComponent_equals, _super);
        function EqualsConstraintComponent_equals() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        EqualsConstraintComponent_equals.id = index_1.ns.EqualsConstraintComponent_equals;
        EqualsConstraintComponent_equals[Symbol.toStringTag] = "undefined";
        EqualsConstraintComponent_equals.type = Parameter;
        EqualsConstraintComponent_equals.subClassOf = [];
        EqualsConstraintComponent_equals.SHACLValidators = [];
        EqualsConstraintComponent_equals.OnotologyValidators = [];
        return EqualsConstraintComponent_equals;
    }(index_1.Base.ClassBase));
    Classes.EqualsConstraintComponent_equals = EqualsConstraintComponent_equals;
    var ExpressionConstraintComponent = /** @class */ (function (_super) {
        __extends(ExpressionConstraintComponent, _super);
        function ExpressionConstraintComponent() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        ExpressionConstraintComponent.id = index_1.ns.ExpressionConstraintComponent;
        ExpressionConstraintComponent[Symbol.toStringTag] = "Expression constraint component";
        ExpressionConstraintComponent.type = ConstraintComponent;
        ExpressionConstraintComponent.subClassOf = [];
        ExpressionConstraintComponent.SHACLValidators = [];
        ExpressionConstraintComponent.OnotologyValidators = [];
        return ExpressionConstraintComponent;
    }(index_1.Base.ClassBase));
    Classes.ExpressionConstraintComponent = ExpressionConstraintComponent;
    var ExpressionConstraintComponent_expression = /** @class */ (function (_super) {
        __extends(ExpressionConstraintComponent_expression, _super);
        function ExpressionConstraintComponent_expression() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        ExpressionConstraintComponent_expression.id = index_1.ns.ExpressionConstraintComponent_expression;
        ExpressionConstraintComponent_expression[Symbol.toStringTag] = "undefined";
        ExpressionConstraintComponent_expression.type = Parameter;
        ExpressionConstraintComponent_expression.subClassOf = [];
        ExpressionConstraintComponent_expression.SHACLValidators = [];
        ExpressionConstraintComponent_expression.OnotologyValidators = [];
        return ExpressionConstraintComponent_expression;
    }(index_1.Base.ClassBase));
    Classes.ExpressionConstraintComponent_expression = ExpressionConstraintComponent_expression;
    var Function = /** @class */ (function (_super) {
        __extends(Function, _super);
        function Function() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        Function.id = index_1.ns.Function;
        Function[Symbol.toStringTag] = "Function";
        Function.type = Class;
        Function.subClassOf = [Parameterizable];
        Function.SHACLValidators = [];
        Function.OnotologyValidators = [];
        return Function;
    }(index_1.Base.ClassBase));
    Classes.Function = Function;
    var HasValueConstraintComponent = /** @class */ (function (_super) {
        __extends(HasValueConstraintComponent, _super);
        function HasValueConstraintComponent() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        HasValueConstraintComponent.id = index_1.ns.HasValueConstraintComponent;
        HasValueConstraintComponent[Symbol.toStringTag] = "Has-value constraint component";
        HasValueConstraintComponent.type = ConstraintComponent;
        HasValueConstraintComponent.subClassOf = [];
        HasValueConstraintComponent.SHACLValidators = [];
        HasValueConstraintComponent.OnotologyValidators = [];
        return HasValueConstraintComponent;
    }(index_1.Base.ClassBase));
    Classes.HasValueConstraintComponent = HasValueConstraintComponent;
    var HasValueConstraintComponent_hasValue = /** @class */ (function (_super) {
        __extends(HasValueConstraintComponent_hasValue, _super);
        function HasValueConstraintComponent_hasValue() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        HasValueConstraintComponent_hasValue.id = index_1.ns.HasValueConstraintComponent_hasValue;
        HasValueConstraintComponent_hasValue[Symbol.toStringTag] = "undefined";
        HasValueConstraintComponent_hasValue.type = Parameter;
        HasValueConstraintComponent_hasValue.subClassOf = [];
        HasValueConstraintComponent_hasValue.SHACLValidators = [];
        HasValueConstraintComponent_hasValue.OnotologyValidators = [];
        return HasValueConstraintComponent_hasValue;
    }(index_1.Base.ClassBase));
    Classes.HasValueConstraintComponent_hasValue = HasValueConstraintComponent_hasValue;
    var IRI = /** @class */ (function (_super) {
        __extends(IRI, _super);
        function IRI() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        IRI.id = index_1.ns.IRI;
        IRI[Symbol.toStringTag] = "IRI";
        IRI.type = NodeKind;
        IRI.subClassOf = [];
        IRI.SHACLValidators = [];
        IRI.OnotologyValidators = [];
        return IRI;
    }(index_1.Base.ClassBase));
    Classes.IRI = IRI;
    var IRIOrLiteral = /** @class */ (function (_super) {
        __extends(IRIOrLiteral, _super);
        function IRIOrLiteral() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        IRIOrLiteral.id = index_1.ns.IRIOrLiteral;
        IRIOrLiteral[Symbol.toStringTag] = "IRI or literal";
        IRIOrLiteral.type = NodeKind;
        IRIOrLiteral.subClassOf = [];
        IRIOrLiteral.SHACLValidators = [];
        IRIOrLiteral.OnotologyValidators = [];
        return IRIOrLiteral;
    }(index_1.Base.ClassBase));
    Classes.IRIOrLiteral = IRIOrLiteral;
    var InConstraintComponent = /** @class */ (function (_super) {
        __extends(InConstraintComponent, _super);
        function InConstraintComponent() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        InConstraintComponent.id = index_1.ns.InConstraintComponent;
        InConstraintComponent[Symbol.toStringTag] = "In constraint component";
        InConstraintComponent.type = ConstraintComponent;
        InConstraintComponent.subClassOf = [];
        InConstraintComponent.SHACLValidators = [];
        InConstraintComponent.OnotologyValidators = [];
        return InConstraintComponent;
    }(index_1.Base.ClassBase));
    Classes.InConstraintComponent = InConstraintComponent;
    var InConstraintComponent_in = /** @class */ (function (_super) {
        __extends(InConstraintComponent_in, _super);
        function InConstraintComponent_in() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        InConstraintComponent_in.id = index_1.ns.InConstraintComponent_in;
        InConstraintComponent_in[Symbol.toStringTag] = "undefined";
        InConstraintComponent_in.type = Parameter;
        InConstraintComponent_in.subClassOf = [];
        InConstraintComponent_in.SHACLValidators = [];
        InConstraintComponent_in.OnotologyValidators = [];
        return InConstraintComponent_in;
    }(index_1.Base.ClassBase));
    Classes.InConstraintComponent_in = InConstraintComponent_in;
    var Info = /** @class */ (function (_super) {
        __extends(Info, _super);
        function Info() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        Info.id = index_1.ns.Info;
        Info[Symbol.toStringTag] = "Info";
        Info.type = Severity;
        Info.subClassOf = [];
        Info.SHACLValidators = [];
        Info.OnotologyValidators = [];
        return Info;
    }(index_1.Base.ClassBase));
    Classes.Info = Info;
    var JSConstraint = /** @class */ (function (_super) {
        __extends(JSConstraint, _super);
        function JSConstraint() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        JSConstraint.id = index_1.ns.JSConstraint;
        JSConstraint[Symbol.toStringTag] = "JavaScript-based constraint";
        JSConstraint.type = Class;
        JSConstraint.subClassOf = [JSExecutable];
        JSConstraint.SHACLValidators = [];
        JSConstraint.OnotologyValidators = [];
        return JSConstraint;
    }(index_1.Base.ClassBase));
    Classes.JSConstraint = JSConstraint;
    var JSConstraint_js = /** @class */ (function (_super) {
        __extends(JSConstraint_js, _super);
        function JSConstraint_js() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        JSConstraint_js.id = index_1.ns.JSConstraint_js;
        JSConstraint_js[Symbol.toStringTag] = "undefined";
        JSConstraint_js.type = Parameter;
        JSConstraint_js.subClassOf = [];
        JSConstraint_js.SHACLValidators = [];
        JSConstraint_js.OnotologyValidators = [];
        return JSConstraint_js;
    }(index_1.Base.ClassBase));
    Classes.JSConstraint_js = JSConstraint_js;
    var JSConstraintComponent = /** @class */ (function (_super) {
        __extends(JSConstraintComponent, _super);
        function JSConstraintComponent() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        JSConstraintComponent.id = index_1.ns.JSConstraintComponent;
        JSConstraintComponent[Symbol.toStringTag] = "JavaScript constraint component";
        JSConstraintComponent.type = ConstraintComponent;
        JSConstraintComponent.subClassOf = [];
        JSConstraintComponent.SHACLValidators = [];
        JSConstraintComponent.OnotologyValidators = [];
        return JSConstraintComponent;
    }(index_1.Base.ClassBase));
    Classes.JSConstraintComponent = JSConstraintComponent;
    var JSExecutable = /** @class */ (function (_super) {
        __extends(JSExecutable, _super);
        function JSExecutable() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        JSExecutable.id = index_1.ns.JSExecutable;
        JSExecutable[Symbol.toStringTag] = "JavaScript executable";
        JSExecutable.type = Class;
        JSExecutable.subClassOf = [Resource];
        JSExecutable.SHACLValidators = [];
        JSExecutable.OnotologyValidators = [];
        return JSExecutable;
    }(index_1.Base.ClassBase));
    Classes.JSExecutable = JSExecutable;
    var JSFunction = /** @class */ (function (_super) {
        __extends(JSFunction, _super);
        function JSFunction() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        JSFunction.id = index_1.ns.JSFunction;
        JSFunction[Symbol.toStringTag] = "JavaScript function";
        JSFunction.type = Class;
        JSFunction.subClassOf = [Function, JSExecutable];
        JSFunction.SHACLValidators = [];
        JSFunction.OnotologyValidators = [];
        return JSFunction;
    }(index_1.Base.ClassBase));
    Classes.JSFunction = JSFunction;
    var JSLibrary = /** @class */ (function (_super) {
        __extends(JSLibrary, _super);
        function JSLibrary() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        JSLibrary.id = index_1.ns.JSLibrary;
        JSLibrary[Symbol.toStringTag] = "JavaScript library";
        JSLibrary.type = Class;
        JSLibrary.subClassOf = [Resource];
        JSLibrary.SHACLValidators = [];
        JSLibrary.OnotologyValidators = [];
        return JSLibrary;
    }(index_1.Base.ClassBase));
    Classes.JSLibrary = JSLibrary;
    var JSRule = /** @class */ (function (_super) {
        __extends(JSRule, _super);
        function JSRule() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        JSRule.id = index_1.ns.JSRule;
        JSRule[Symbol.toStringTag] = "JavaScript rule";
        JSRule.type = Class;
        JSRule.subClassOf = [Rule, JSExecutable];
        JSRule.SHACLValidators = [];
        JSRule.OnotologyValidators = [];
        return JSRule;
    }(index_1.Base.ClassBase));
    Classes.JSRule = JSRule;
    var JSTarget = /** @class */ (function (_super) {
        __extends(JSTarget, _super);
        function JSTarget() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        JSTarget.id = index_1.ns.JSTarget;
        JSTarget[Symbol.toStringTag] = "JavaScript target";
        JSTarget.type = Class;
        JSTarget.subClassOf = [Target, JSExecutable];
        JSTarget.SHACLValidators = [];
        JSTarget.OnotologyValidators = [];
        return JSTarget;
    }(index_1.Base.ClassBase));
    Classes.JSTarget = JSTarget;
    var LanguageInConstraintComponent = /** @class */ (function (_super) {
        __extends(LanguageInConstraintComponent, _super);
        function LanguageInConstraintComponent() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        LanguageInConstraintComponent.id = index_1.ns.LanguageInConstraintComponent;
        LanguageInConstraintComponent[Symbol.toStringTag] = "Language-in constraint component";
        LanguageInConstraintComponent.type = ConstraintComponent;
        LanguageInConstraintComponent.subClassOf = [];
        LanguageInConstraintComponent.SHACLValidators = [];
        LanguageInConstraintComponent.OnotologyValidators = [];
        return LanguageInConstraintComponent;
    }(index_1.Base.ClassBase));
    Classes.LanguageInConstraintComponent = LanguageInConstraintComponent;
    var LanguageInConstraintComponent_languageIn = /** @class */ (function (_super) {
        __extends(LanguageInConstraintComponent_languageIn, _super);
        function LanguageInConstraintComponent_languageIn() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        LanguageInConstraintComponent_languageIn.id = index_1.ns.LanguageInConstraintComponent_languageIn;
        LanguageInConstraintComponent_languageIn[Symbol.toStringTag] = "undefined";
        LanguageInConstraintComponent_languageIn.type = Parameter;
        LanguageInConstraintComponent_languageIn.subClassOf = [];
        LanguageInConstraintComponent_languageIn.SHACLValidators = [];
        LanguageInConstraintComponent_languageIn.OnotologyValidators = [];
        return LanguageInConstraintComponent_languageIn;
    }(index_1.Base.ClassBase));
    Classes.LanguageInConstraintComponent_languageIn = LanguageInConstraintComponent_languageIn;
    var LessThanConstraintComponent = /** @class */ (function (_super) {
        __extends(LessThanConstraintComponent, _super);
        function LessThanConstraintComponent() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        LessThanConstraintComponent.id = index_1.ns.LessThanConstraintComponent;
        LessThanConstraintComponent[Symbol.toStringTag] = "Less-than constraint component";
        LessThanConstraintComponent.type = ConstraintComponent;
        LessThanConstraintComponent.subClassOf = [];
        LessThanConstraintComponent.SHACLValidators = [];
        LessThanConstraintComponent.OnotologyValidators = [];
        return LessThanConstraintComponent;
    }(index_1.Base.ClassBase));
    Classes.LessThanConstraintComponent = LessThanConstraintComponent;
    var LessThanConstraintComponent_lessThan = /** @class */ (function (_super) {
        __extends(LessThanConstraintComponent_lessThan, _super);
        function LessThanConstraintComponent_lessThan() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        LessThanConstraintComponent_lessThan.id = index_1.ns.LessThanConstraintComponent_lessThan;
        LessThanConstraintComponent_lessThan[Symbol.toStringTag] = "undefined";
        LessThanConstraintComponent_lessThan.type = Parameter;
        LessThanConstraintComponent_lessThan.subClassOf = [];
        LessThanConstraintComponent_lessThan.SHACLValidators = [];
        LessThanConstraintComponent_lessThan.OnotologyValidators = [];
        return LessThanConstraintComponent_lessThan;
    }(index_1.Base.ClassBase));
    Classes.LessThanConstraintComponent_lessThan = LessThanConstraintComponent_lessThan;
    var LessThanOrEqualsConstraintComponent = /** @class */ (function (_super) {
        __extends(LessThanOrEqualsConstraintComponent, _super);
        function LessThanOrEqualsConstraintComponent() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        LessThanOrEqualsConstraintComponent.id = index_1.ns.LessThanOrEqualsConstraintComponent;
        LessThanOrEqualsConstraintComponent[Symbol.toStringTag] = "less-than-or-equals constraint component";
        LessThanOrEqualsConstraintComponent.type = ConstraintComponent;
        LessThanOrEqualsConstraintComponent.subClassOf = [];
        LessThanOrEqualsConstraintComponent.SHACLValidators = [];
        LessThanOrEqualsConstraintComponent.OnotologyValidators = [];
        return LessThanOrEqualsConstraintComponent;
    }(index_1.Base.ClassBase));
    Classes.LessThanOrEqualsConstraintComponent = LessThanOrEqualsConstraintComponent;
    var LessThanOrEqualsConstraintComponent_lessThanOrEquals = /** @class */ (function (_super) {
        __extends(LessThanOrEqualsConstraintComponent_lessThanOrEquals, _super);
        function LessThanOrEqualsConstraintComponent_lessThanOrEquals() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        LessThanOrEqualsConstraintComponent_lessThanOrEquals.id = index_1.ns.LessThanOrEqualsConstraintComponent_lessThanOrEquals;
        LessThanOrEqualsConstraintComponent_lessThanOrEquals[Symbol.toStringTag] = "undefined";
        LessThanOrEqualsConstraintComponent_lessThanOrEquals.type = Parameter;
        LessThanOrEqualsConstraintComponent_lessThanOrEquals.subClassOf = [];
        LessThanOrEqualsConstraintComponent_lessThanOrEquals.SHACLValidators = [];
        LessThanOrEqualsConstraintComponent_lessThanOrEquals.OnotologyValidators = [];
        return LessThanOrEqualsConstraintComponent_lessThanOrEquals;
    }(index_1.Base.ClassBase));
    Classes.LessThanOrEqualsConstraintComponent_lessThanOrEquals = LessThanOrEqualsConstraintComponent_lessThanOrEquals;
    var Literal = /** @class */ (function (_super) {
        __extends(Literal, _super);
        function Literal() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        Literal.id = index_1.ns.Literal;
        Literal[Symbol.toStringTag] = "Literal";
        Literal.type = NodeKind;
        Literal.subClassOf = [];
        Literal.SHACLValidators = [];
        Literal.OnotologyValidators = [];
        return Literal;
    }(index_1.Base.ClassBase));
    Classes.Literal = Literal;
    var MaxCountConstraintComponent = /** @class */ (function (_super) {
        __extends(MaxCountConstraintComponent, _super);
        function MaxCountConstraintComponent() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        MaxCountConstraintComponent.id = index_1.ns.MaxCountConstraintComponent;
        MaxCountConstraintComponent[Symbol.toStringTag] = "Max-count constraint component";
        MaxCountConstraintComponent.type = ConstraintComponent;
        MaxCountConstraintComponent.subClassOf = [];
        MaxCountConstraintComponent.SHACLValidators = [];
        MaxCountConstraintComponent.OnotologyValidators = [];
        return MaxCountConstraintComponent;
    }(index_1.Base.ClassBase));
    Classes.MaxCountConstraintComponent = MaxCountConstraintComponent;
    var MaxCountConstraintComponent_maxCount = /** @class */ (function (_super) {
        __extends(MaxCountConstraintComponent_maxCount, _super);
        function MaxCountConstraintComponent_maxCount() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        MaxCountConstraintComponent_maxCount.id = index_1.ns.MaxCountConstraintComponent_maxCount;
        MaxCountConstraintComponent_maxCount[Symbol.toStringTag] = "undefined";
        MaxCountConstraintComponent_maxCount.type = Parameter;
        MaxCountConstraintComponent_maxCount.subClassOf = [];
        MaxCountConstraintComponent_maxCount.SHACLValidators = [];
        MaxCountConstraintComponent_maxCount.OnotologyValidators = [];
        return MaxCountConstraintComponent_maxCount;
    }(index_1.Base.ClassBase));
    Classes.MaxCountConstraintComponent_maxCount = MaxCountConstraintComponent_maxCount;
    var MaxExclusiveConstraintComponent = /** @class */ (function (_super) {
        __extends(MaxExclusiveConstraintComponent, _super);
        function MaxExclusiveConstraintComponent() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        MaxExclusiveConstraintComponent.id = index_1.ns.MaxExclusiveConstraintComponent;
        MaxExclusiveConstraintComponent[Symbol.toStringTag] = "Max-exclusive constraint component";
        MaxExclusiveConstraintComponent.type = ConstraintComponent;
        MaxExclusiveConstraintComponent.subClassOf = [];
        MaxExclusiveConstraintComponent.SHACLValidators = [];
        MaxExclusiveConstraintComponent.OnotologyValidators = [];
        return MaxExclusiveConstraintComponent;
    }(index_1.Base.ClassBase));
    Classes.MaxExclusiveConstraintComponent = MaxExclusiveConstraintComponent;
    var MaxExclusiveConstraintComponent_maxExclusive = /** @class */ (function (_super) {
        __extends(MaxExclusiveConstraintComponent_maxExclusive, _super);
        function MaxExclusiveConstraintComponent_maxExclusive() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        MaxExclusiveConstraintComponent_maxExclusive.id = index_1.ns.MaxExclusiveConstraintComponent_maxExclusive;
        MaxExclusiveConstraintComponent_maxExclusive[Symbol.toStringTag] = "undefined";
        MaxExclusiveConstraintComponent_maxExclusive.type = Parameter;
        MaxExclusiveConstraintComponent_maxExclusive.subClassOf = [];
        MaxExclusiveConstraintComponent_maxExclusive.SHACLValidators = [];
        MaxExclusiveConstraintComponent_maxExclusive.OnotologyValidators = [];
        return MaxExclusiveConstraintComponent_maxExclusive;
    }(index_1.Base.ClassBase));
    Classes.MaxExclusiveConstraintComponent_maxExclusive = MaxExclusiveConstraintComponent_maxExclusive;
    var MaxInclusiveConstraintComponent = /** @class */ (function (_super) {
        __extends(MaxInclusiveConstraintComponent, _super);
        function MaxInclusiveConstraintComponent() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        MaxInclusiveConstraintComponent.id = index_1.ns.MaxInclusiveConstraintComponent;
        MaxInclusiveConstraintComponent[Symbol.toStringTag] = "Max-inclusive constraint component";
        MaxInclusiveConstraintComponent.type = ConstraintComponent;
        MaxInclusiveConstraintComponent.subClassOf = [];
        MaxInclusiveConstraintComponent.SHACLValidators = [];
        MaxInclusiveConstraintComponent.OnotologyValidators = [];
        return MaxInclusiveConstraintComponent;
    }(index_1.Base.ClassBase));
    Classes.MaxInclusiveConstraintComponent = MaxInclusiveConstraintComponent;
    var MaxInclusiveConstraintComponent_maxInclusive = /** @class */ (function (_super) {
        __extends(MaxInclusiveConstraintComponent_maxInclusive, _super);
        function MaxInclusiveConstraintComponent_maxInclusive() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        MaxInclusiveConstraintComponent_maxInclusive.id = index_1.ns.MaxInclusiveConstraintComponent_maxInclusive;
        MaxInclusiveConstraintComponent_maxInclusive[Symbol.toStringTag] = "undefined";
        MaxInclusiveConstraintComponent_maxInclusive.type = Parameter;
        MaxInclusiveConstraintComponent_maxInclusive.subClassOf = [];
        MaxInclusiveConstraintComponent_maxInclusive.SHACLValidators = [];
        MaxInclusiveConstraintComponent_maxInclusive.OnotologyValidators = [];
        return MaxInclusiveConstraintComponent_maxInclusive;
    }(index_1.Base.ClassBase));
    Classes.MaxInclusiveConstraintComponent_maxInclusive = MaxInclusiveConstraintComponent_maxInclusive;
    var MaxLengthConstraintComponent = /** @class */ (function (_super) {
        __extends(MaxLengthConstraintComponent, _super);
        function MaxLengthConstraintComponent() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        MaxLengthConstraintComponent.id = index_1.ns.MaxLengthConstraintComponent;
        MaxLengthConstraintComponent[Symbol.toStringTag] = "Max-length constraint component";
        MaxLengthConstraintComponent.type = ConstraintComponent;
        MaxLengthConstraintComponent.subClassOf = [];
        MaxLengthConstraintComponent.SHACLValidators = [];
        MaxLengthConstraintComponent.OnotologyValidators = [];
        return MaxLengthConstraintComponent;
    }(index_1.Base.ClassBase));
    Classes.MaxLengthConstraintComponent = MaxLengthConstraintComponent;
    var MaxLengthConstraintComponent_maxLength = /** @class */ (function (_super) {
        __extends(MaxLengthConstraintComponent_maxLength, _super);
        function MaxLengthConstraintComponent_maxLength() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        MaxLengthConstraintComponent_maxLength.id = index_1.ns.MaxLengthConstraintComponent_maxLength;
        MaxLengthConstraintComponent_maxLength[Symbol.toStringTag] = "undefined";
        MaxLengthConstraintComponent_maxLength.type = Parameter;
        MaxLengthConstraintComponent_maxLength.subClassOf = [];
        MaxLengthConstraintComponent_maxLength.SHACLValidators = [];
        MaxLengthConstraintComponent_maxLength.OnotologyValidators = [];
        return MaxLengthConstraintComponent_maxLength;
    }(index_1.Base.ClassBase));
    Classes.MaxLengthConstraintComponent_maxLength = MaxLengthConstraintComponent_maxLength;
    var MinCountConstraintComponent = /** @class */ (function (_super) {
        __extends(MinCountConstraintComponent, _super);
        function MinCountConstraintComponent() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        MinCountConstraintComponent.id = index_1.ns.MinCountConstraintComponent;
        MinCountConstraintComponent[Symbol.toStringTag] = "Min-count constraint component";
        MinCountConstraintComponent.type = ConstraintComponent;
        MinCountConstraintComponent.subClassOf = [];
        MinCountConstraintComponent.SHACLValidators = [];
        MinCountConstraintComponent.OnotologyValidators = [];
        return MinCountConstraintComponent;
    }(index_1.Base.ClassBase));
    Classes.MinCountConstraintComponent = MinCountConstraintComponent;
    var MinCountConstraintComponent_minCount = /** @class */ (function (_super) {
        __extends(MinCountConstraintComponent_minCount, _super);
        function MinCountConstraintComponent_minCount() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        MinCountConstraintComponent_minCount.id = index_1.ns.MinCountConstraintComponent_minCount;
        MinCountConstraintComponent_minCount[Symbol.toStringTag] = "undefined";
        MinCountConstraintComponent_minCount.type = Parameter;
        MinCountConstraintComponent_minCount.subClassOf = [];
        MinCountConstraintComponent_minCount.SHACLValidators = [];
        MinCountConstraintComponent_minCount.OnotologyValidators = [];
        return MinCountConstraintComponent_minCount;
    }(index_1.Base.ClassBase));
    Classes.MinCountConstraintComponent_minCount = MinCountConstraintComponent_minCount;
    var MinExclusiveConstraintComponent = /** @class */ (function (_super) {
        __extends(MinExclusiveConstraintComponent, _super);
        function MinExclusiveConstraintComponent() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        MinExclusiveConstraintComponent.id = index_1.ns.MinExclusiveConstraintComponent;
        MinExclusiveConstraintComponent[Symbol.toStringTag] = "Min-exclusive constraint component";
        MinExclusiveConstraintComponent.type = ConstraintComponent;
        MinExclusiveConstraintComponent.subClassOf = [];
        MinExclusiveConstraintComponent.SHACLValidators = [];
        MinExclusiveConstraintComponent.OnotologyValidators = [];
        return MinExclusiveConstraintComponent;
    }(index_1.Base.ClassBase));
    Classes.MinExclusiveConstraintComponent = MinExclusiveConstraintComponent;
    var MinExclusiveConstraintComponent_minExclusive = /** @class */ (function (_super) {
        __extends(MinExclusiveConstraintComponent_minExclusive, _super);
        function MinExclusiveConstraintComponent_minExclusive() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        MinExclusiveConstraintComponent_minExclusive.id = index_1.ns.MinExclusiveConstraintComponent_minExclusive;
        MinExclusiveConstraintComponent_minExclusive[Symbol.toStringTag] = "undefined";
        MinExclusiveConstraintComponent_minExclusive.type = Parameter;
        MinExclusiveConstraintComponent_minExclusive.subClassOf = [];
        MinExclusiveConstraintComponent_minExclusive.SHACLValidators = [];
        MinExclusiveConstraintComponent_minExclusive.OnotologyValidators = [];
        return MinExclusiveConstraintComponent_minExclusive;
    }(index_1.Base.ClassBase));
    Classes.MinExclusiveConstraintComponent_minExclusive = MinExclusiveConstraintComponent_minExclusive;
    var MinInclusiveConstraintComponent = /** @class */ (function (_super) {
        __extends(MinInclusiveConstraintComponent, _super);
        function MinInclusiveConstraintComponent() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        MinInclusiveConstraintComponent.id = index_1.ns.MinInclusiveConstraintComponent;
        MinInclusiveConstraintComponent[Symbol.toStringTag] = "Min-inclusive constraint component";
        MinInclusiveConstraintComponent.type = ConstraintComponent;
        MinInclusiveConstraintComponent.subClassOf = [];
        MinInclusiveConstraintComponent.SHACLValidators = [];
        MinInclusiveConstraintComponent.OnotologyValidators = [];
        return MinInclusiveConstraintComponent;
    }(index_1.Base.ClassBase));
    Classes.MinInclusiveConstraintComponent = MinInclusiveConstraintComponent;
    var MinInclusiveConstraintComponent_minInclusive = /** @class */ (function (_super) {
        __extends(MinInclusiveConstraintComponent_minInclusive, _super);
        function MinInclusiveConstraintComponent_minInclusive() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        MinInclusiveConstraintComponent_minInclusive.id = index_1.ns.MinInclusiveConstraintComponent_minInclusive;
        MinInclusiveConstraintComponent_minInclusive[Symbol.toStringTag] = "undefined";
        MinInclusiveConstraintComponent_minInclusive.type = Parameter;
        MinInclusiveConstraintComponent_minInclusive.subClassOf = [];
        MinInclusiveConstraintComponent_minInclusive.SHACLValidators = [];
        MinInclusiveConstraintComponent_minInclusive.OnotologyValidators = [];
        return MinInclusiveConstraintComponent_minInclusive;
    }(index_1.Base.ClassBase));
    Classes.MinInclusiveConstraintComponent_minInclusive = MinInclusiveConstraintComponent_minInclusive;
    var MinLengthConstraintComponent = /** @class */ (function (_super) {
        __extends(MinLengthConstraintComponent, _super);
        function MinLengthConstraintComponent() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        MinLengthConstraintComponent.id = index_1.ns.MinLengthConstraintComponent;
        MinLengthConstraintComponent[Symbol.toStringTag] = "Min-length constraint component";
        MinLengthConstraintComponent.type = ConstraintComponent;
        MinLengthConstraintComponent.subClassOf = [];
        MinLengthConstraintComponent.SHACLValidators = [];
        MinLengthConstraintComponent.OnotologyValidators = [];
        return MinLengthConstraintComponent;
    }(index_1.Base.ClassBase));
    Classes.MinLengthConstraintComponent = MinLengthConstraintComponent;
    var MinLengthConstraintComponent_minLength = /** @class */ (function (_super) {
        __extends(MinLengthConstraintComponent_minLength, _super);
        function MinLengthConstraintComponent_minLength() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        MinLengthConstraintComponent_minLength.id = index_1.ns.MinLengthConstraintComponent_minLength;
        MinLengthConstraintComponent_minLength[Symbol.toStringTag] = "undefined";
        MinLengthConstraintComponent_minLength.type = Parameter;
        MinLengthConstraintComponent_minLength.subClassOf = [];
        MinLengthConstraintComponent_minLength.SHACLValidators = [];
        MinLengthConstraintComponent_minLength.OnotologyValidators = [];
        return MinLengthConstraintComponent_minLength;
    }(index_1.Base.ClassBase));
    Classes.MinLengthConstraintComponent_minLength = MinLengthConstraintComponent_minLength;
    var NodeConstraintComponent = /** @class */ (function (_super) {
        __extends(NodeConstraintComponent, _super);
        function NodeConstraintComponent() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        NodeConstraintComponent.id = index_1.ns.NodeConstraintComponent;
        NodeConstraintComponent[Symbol.toStringTag] = "Node constraint component";
        NodeConstraintComponent.type = ConstraintComponent;
        NodeConstraintComponent.subClassOf = [];
        NodeConstraintComponent.SHACLValidators = [];
        NodeConstraintComponent.OnotologyValidators = [];
        return NodeConstraintComponent;
    }(index_1.Base.ClassBase));
    Classes.NodeConstraintComponent = NodeConstraintComponent;
    var NodeConstraintComponent_node = /** @class */ (function (_super) {
        __extends(NodeConstraintComponent_node, _super);
        function NodeConstraintComponent_node() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        NodeConstraintComponent_node.id = index_1.ns.NodeConstraintComponent_node;
        NodeConstraintComponent_node[Symbol.toStringTag] = "undefined";
        NodeConstraintComponent_node.type = Parameter;
        NodeConstraintComponent_node.subClassOf = [];
        NodeConstraintComponent_node.SHACLValidators = [];
        NodeConstraintComponent_node.OnotologyValidators = [];
        return NodeConstraintComponent_node;
    }(index_1.Base.ClassBase));
    Classes.NodeConstraintComponent_node = NodeConstraintComponent_node;
    var NodeKind = /** @class */ (function (_super) {
        __extends(NodeKind, _super);
        function NodeKind() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        NodeKind.id = index_1.ns.NodeKind;
        NodeKind[Symbol.toStringTag] = "Node kind";
        NodeKind.type = Class;
        NodeKind.subClassOf = [Resource];
        NodeKind.SHACLValidators = [];
        NodeKind.OnotologyValidators = [];
        return NodeKind;
    }(index_1.Base.ClassBase));
    Classes.NodeKind = NodeKind;
    var NodeKindConstraintComponent = /** @class */ (function (_super) {
        __extends(NodeKindConstraintComponent, _super);
        function NodeKindConstraintComponent() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        NodeKindConstraintComponent.id = index_1.ns.NodeKindConstraintComponent;
        NodeKindConstraintComponent[Symbol.toStringTag] = "Node-kind constraint component";
        NodeKindConstraintComponent.type = ConstraintComponent;
        NodeKindConstraintComponent.subClassOf = [];
        NodeKindConstraintComponent.SHACLValidators = [];
        NodeKindConstraintComponent.OnotologyValidators = [];
        return NodeKindConstraintComponent;
    }(index_1.Base.ClassBase));
    Classes.NodeKindConstraintComponent = NodeKindConstraintComponent;
    var NodeKindConstraintComponent_nodeKind = /** @class */ (function (_super) {
        __extends(NodeKindConstraintComponent_nodeKind, _super);
        function NodeKindConstraintComponent_nodeKind() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        NodeKindConstraintComponent_nodeKind.id = index_1.ns.NodeKindConstraintComponent_nodeKind;
        NodeKindConstraintComponent_nodeKind[Symbol.toStringTag] = "undefined";
        NodeKindConstraintComponent_nodeKind.type = Parameter;
        NodeKindConstraintComponent_nodeKind.subClassOf = [];
        NodeKindConstraintComponent_nodeKind.SHACLValidators = [];
        NodeKindConstraintComponent_nodeKind.OnotologyValidators = [];
        return NodeKindConstraintComponent_nodeKind;
    }(index_1.Base.ClassBase));
    Classes.NodeKindConstraintComponent_nodeKind = NodeKindConstraintComponent_nodeKind;
    var NodeShape = /** @class */ (function (_super) {
        __extends(NodeShape, _super);
        function NodeShape() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        NodeShape.id = index_1.ns.NodeShape;
        NodeShape[Symbol.toStringTag] = "Node shape";
        NodeShape.type = Class;
        NodeShape.subClassOf = [Shape];
        NodeShape.SHACLValidators = [];
        NodeShape.OnotologyValidators = [];
        return NodeShape;
    }(index_1.Base.ClassBase));
    Classes.NodeShape = NodeShape;
    var OrConstraintComponent = /** @class */ (function (_super) {
        __extends(OrConstraintComponent, _super);
        function OrConstraintComponent() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        OrConstraintComponent.id = index_1.ns.OrConstraintComponent;
        OrConstraintComponent[Symbol.toStringTag] = "Or constraint component";
        OrConstraintComponent.type = ConstraintComponent;
        OrConstraintComponent.subClassOf = [];
        OrConstraintComponent.SHACLValidators = [];
        OrConstraintComponent.OnotologyValidators = [];
        return OrConstraintComponent;
    }(index_1.Base.ClassBase));
    Classes.OrConstraintComponent = OrConstraintComponent;
    var Parameter = /** @class */ (function (_super) {
        __extends(Parameter, _super);
        function Parameter() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        Parameter.id = index_1.ns.Parameter;
        Parameter[Symbol.toStringTag] = "Parameter";
        Parameter.type = Class;
        Parameter.subClassOf = [PropertyShape];
        Parameter.SHACLValidators = [];
        Parameter.OnotologyValidators = [];
        return Parameter;
    }(index_1.Base.ClassBase));
    Classes.Parameter = Parameter;
    var Parameterizable = /** @class */ (function (_super) {
        __extends(Parameterizable, _super);
        function Parameterizable() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        Parameterizable.id = index_1.ns.Parameterizable;
        Parameterizable[Symbol.toStringTag] = "Parameterizable";
        Parameterizable.type = Class;
        Parameterizable.subClassOf = [Resource];
        Parameterizable.SHACLValidators = [];
        Parameterizable.OnotologyValidators = [];
        return Parameterizable;
    }(index_1.Base.ClassBase));
    Classes.Parameterizable = Parameterizable;
    var PatternConstraintComponent = /** @class */ (function (_super) {
        __extends(PatternConstraintComponent, _super);
        function PatternConstraintComponent() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        PatternConstraintComponent.id = index_1.ns.PatternConstraintComponent;
        PatternConstraintComponent[Symbol.toStringTag] = "Pattern constraint component";
        PatternConstraintComponent.type = ConstraintComponent;
        PatternConstraintComponent.subClassOf = [];
        PatternConstraintComponent.SHACLValidators = [];
        PatternConstraintComponent.OnotologyValidators = [];
        return PatternConstraintComponent;
    }(index_1.Base.ClassBase));
    Classes.PatternConstraintComponent = PatternConstraintComponent;
    var PatternConstraintComponent_flags = /** @class */ (function (_super) {
        __extends(PatternConstraintComponent_flags, _super);
        function PatternConstraintComponent_flags() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        PatternConstraintComponent_flags.id = index_1.ns.PatternConstraintComponent_flags;
        PatternConstraintComponent_flags[Symbol.toStringTag] = "undefined";
        PatternConstraintComponent_flags.type = Parameter;
        PatternConstraintComponent_flags.subClassOf = [];
        PatternConstraintComponent_flags.SHACLValidators = [];
        PatternConstraintComponent_flags.OnotologyValidators = [];
        return PatternConstraintComponent_flags;
    }(index_1.Base.ClassBase));
    Classes.PatternConstraintComponent_flags = PatternConstraintComponent_flags;
    var PatternConstraintComponent_pattern = /** @class */ (function (_super) {
        __extends(PatternConstraintComponent_pattern, _super);
        function PatternConstraintComponent_pattern() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        PatternConstraintComponent_pattern.id = index_1.ns.PatternConstraintComponent_pattern;
        PatternConstraintComponent_pattern[Symbol.toStringTag] = "undefined";
        PatternConstraintComponent_pattern.type = Parameter;
        PatternConstraintComponent_pattern.subClassOf = [];
        PatternConstraintComponent_pattern.SHACLValidators = [];
        PatternConstraintComponent_pattern.OnotologyValidators = [];
        return PatternConstraintComponent_pattern;
    }(index_1.Base.ClassBase));
    Classes.PatternConstraintComponent_pattern = PatternConstraintComponent_pattern;
    var PrefixDeclaration = /** @class */ (function (_super) {
        __extends(PrefixDeclaration, _super);
        function PrefixDeclaration() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        PrefixDeclaration.id = index_1.ns.PrefixDeclaration;
        PrefixDeclaration[Symbol.toStringTag] = "Prefix declaration";
        PrefixDeclaration.type = Class;
        PrefixDeclaration.subClassOf = [Resource];
        PrefixDeclaration.SHACLValidators = [];
        PrefixDeclaration.OnotologyValidators = [];
        return PrefixDeclaration;
    }(index_1.Base.ClassBase));
    Classes.PrefixDeclaration = PrefixDeclaration;
    var PropertyConstraintComponent = /** @class */ (function (_super) {
        __extends(PropertyConstraintComponent, _super);
        function PropertyConstraintComponent() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        PropertyConstraintComponent.id = index_1.ns.PropertyConstraintComponent;
        PropertyConstraintComponent[Symbol.toStringTag] = "Property constraint component";
        PropertyConstraintComponent.type = ConstraintComponent;
        PropertyConstraintComponent.subClassOf = [];
        PropertyConstraintComponent.SHACLValidators = [];
        PropertyConstraintComponent.OnotologyValidators = [];
        return PropertyConstraintComponent;
    }(index_1.Base.ClassBase));
    Classes.PropertyConstraintComponent = PropertyConstraintComponent;
    var PropertyGroup = /** @class */ (function (_super) {
        __extends(PropertyGroup, _super);
        function PropertyGroup() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        PropertyGroup.id = index_1.ns.PropertyGroup;
        PropertyGroup[Symbol.toStringTag] = "Property group";
        PropertyGroup.type = Class;
        PropertyGroup.subClassOf = [Resource];
        PropertyGroup.SHACLValidators = [];
        PropertyGroup.OnotologyValidators = [];
        return PropertyGroup;
    }(index_1.Base.ClassBase));
    Classes.PropertyGroup = PropertyGroup;
    var PropertyShape = /** @class */ (function (_super) {
        __extends(PropertyShape, _super);
        function PropertyShape() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        PropertyShape.id = index_1.ns.PropertyShape;
        PropertyShape[Symbol.toStringTag] = "Property shape";
        PropertyShape.type = Class;
        PropertyShape.subClassOf = [Shape];
        PropertyShape.SHACLValidators = [];
        PropertyShape.OnotologyValidators = [];
        return PropertyShape;
    }(index_1.Base.ClassBase));
    Classes.PropertyShape = PropertyShape;
    var QualifiedMaxCountConstraintComponent = /** @class */ (function (_super) {
        __extends(QualifiedMaxCountConstraintComponent, _super);
        function QualifiedMaxCountConstraintComponent() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        QualifiedMaxCountConstraintComponent.id = index_1.ns.QualifiedMaxCountConstraintComponent;
        QualifiedMaxCountConstraintComponent[Symbol.toStringTag] = "Qualified-max-count constraint component";
        QualifiedMaxCountConstraintComponent.type = ConstraintComponent;
        QualifiedMaxCountConstraintComponent.subClassOf = [];
        QualifiedMaxCountConstraintComponent.SHACLValidators = [];
        QualifiedMaxCountConstraintComponent.OnotologyValidators = [];
        return QualifiedMaxCountConstraintComponent;
    }(index_1.Base.ClassBase));
    Classes.QualifiedMaxCountConstraintComponent = QualifiedMaxCountConstraintComponent;
    var QualifiedMaxCountConstraintComponent_qualifiedMaxCount = /** @class */ (function (_super) {
        __extends(QualifiedMaxCountConstraintComponent_qualifiedMaxCount, _super);
        function QualifiedMaxCountConstraintComponent_qualifiedMaxCount() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        QualifiedMaxCountConstraintComponent_qualifiedMaxCount.id = index_1.ns.QualifiedMaxCountConstraintComponent_qualifiedMaxCount;
        QualifiedMaxCountConstraintComponent_qualifiedMaxCount[Symbol.toStringTag] = "undefined";
        QualifiedMaxCountConstraintComponent_qualifiedMaxCount.type = Parameter;
        QualifiedMaxCountConstraintComponent_qualifiedMaxCount.subClassOf = [];
        QualifiedMaxCountConstraintComponent_qualifiedMaxCount.SHACLValidators = [];
        QualifiedMaxCountConstraintComponent_qualifiedMaxCount.OnotologyValidators = [];
        return QualifiedMaxCountConstraintComponent_qualifiedMaxCount;
    }(index_1.Base.ClassBase));
    Classes.QualifiedMaxCountConstraintComponent_qualifiedMaxCount = QualifiedMaxCountConstraintComponent_qualifiedMaxCount;
    var QualifiedMaxCountConstraintComponent_qualifiedValueShape = /** @class */ (function (_super) {
        __extends(QualifiedMaxCountConstraintComponent_qualifiedValueShape, _super);
        function QualifiedMaxCountConstraintComponent_qualifiedValueShape() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        QualifiedMaxCountConstraintComponent_qualifiedValueShape.id = index_1.ns.QualifiedMaxCountConstraintComponent_qualifiedValueShape;
        QualifiedMaxCountConstraintComponent_qualifiedValueShape[Symbol.toStringTag] = "undefined";
        QualifiedMaxCountConstraintComponent_qualifiedValueShape.type = Parameter;
        QualifiedMaxCountConstraintComponent_qualifiedValueShape.subClassOf = [];
        QualifiedMaxCountConstraintComponent_qualifiedValueShape.SHACLValidators = [];
        QualifiedMaxCountConstraintComponent_qualifiedValueShape.OnotologyValidators = [];
        return QualifiedMaxCountConstraintComponent_qualifiedValueShape;
    }(index_1.Base.ClassBase));
    Classes.QualifiedMaxCountConstraintComponent_qualifiedValueShape = QualifiedMaxCountConstraintComponent_qualifiedValueShape;
    var QualifiedMaxCountConstraintComponent_qualifiedValueShapesDisjoint = /** @class */ (function (_super) {
        __extends(QualifiedMaxCountConstraintComponent_qualifiedValueShapesDisjoint, _super);
        function QualifiedMaxCountConstraintComponent_qualifiedValueShapesDisjoint() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        QualifiedMaxCountConstraintComponent_qualifiedValueShapesDisjoint.id = index_1.ns.QualifiedMaxCountConstraintComponent_qualifiedValueShapesDisjoint;
        QualifiedMaxCountConstraintComponent_qualifiedValueShapesDisjoint[Symbol.toStringTag] = "undefined";
        QualifiedMaxCountConstraintComponent_qualifiedValueShapesDisjoint.type = Parameter;
        QualifiedMaxCountConstraintComponent_qualifiedValueShapesDisjoint.subClassOf = [];
        QualifiedMaxCountConstraintComponent_qualifiedValueShapesDisjoint.SHACLValidators = [];
        QualifiedMaxCountConstraintComponent_qualifiedValueShapesDisjoint.OnotologyValidators = [];
        return QualifiedMaxCountConstraintComponent_qualifiedValueShapesDisjoint;
    }(index_1.Base.ClassBase));
    Classes.QualifiedMaxCountConstraintComponent_qualifiedValueShapesDisjoint = QualifiedMaxCountConstraintComponent_qualifiedValueShapesDisjoint;
    var QualifiedMinCountConstraintComponent = /** @class */ (function (_super) {
        __extends(QualifiedMinCountConstraintComponent, _super);
        function QualifiedMinCountConstraintComponent() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        QualifiedMinCountConstraintComponent.id = index_1.ns.QualifiedMinCountConstraintComponent;
        QualifiedMinCountConstraintComponent[Symbol.toStringTag] = "Qualified-min-count constraint component";
        QualifiedMinCountConstraintComponent.type = ConstraintComponent;
        QualifiedMinCountConstraintComponent.subClassOf = [];
        QualifiedMinCountConstraintComponent.SHACLValidators = [];
        QualifiedMinCountConstraintComponent.OnotologyValidators = [];
        return QualifiedMinCountConstraintComponent;
    }(index_1.Base.ClassBase));
    Classes.QualifiedMinCountConstraintComponent = QualifiedMinCountConstraintComponent;
    var QualifiedMinCountConstraintComponent_qualifiedValueShapesDisjoint = /** @class */ (function (_super) {
        __extends(QualifiedMinCountConstraintComponent_qualifiedValueShapesDisjoint, _super);
        function QualifiedMinCountConstraintComponent_qualifiedValueShapesDisjoint() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        QualifiedMinCountConstraintComponent_qualifiedValueShapesDisjoint.id = index_1.ns.QualifiedMinCountConstraintComponent_qualifiedValueShapesDisjoint;
        QualifiedMinCountConstraintComponent_qualifiedValueShapesDisjoint[Symbol.toStringTag] = "undefined";
        QualifiedMinCountConstraintComponent_qualifiedValueShapesDisjoint.type = Parameter;
        QualifiedMinCountConstraintComponent_qualifiedValueShapesDisjoint.subClassOf = [];
        QualifiedMinCountConstraintComponent_qualifiedValueShapesDisjoint.SHACLValidators = [];
        QualifiedMinCountConstraintComponent_qualifiedValueShapesDisjoint.OnotologyValidators = [];
        return QualifiedMinCountConstraintComponent_qualifiedValueShapesDisjoint;
    }(index_1.Base.ClassBase));
    Classes.QualifiedMinCountConstraintComponent_qualifiedValueShapesDisjoint = QualifiedMinCountConstraintComponent_qualifiedValueShapesDisjoint;
    var ResultAnnotation = /** @class */ (function (_super) {
        __extends(ResultAnnotation, _super);
        function ResultAnnotation() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        ResultAnnotation.id = index_1.ns.ResultAnnotation;
        ResultAnnotation[Symbol.toStringTag] = "Result annotation";
        ResultAnnotation.type = Class;
        ResultAnnotation.subClassOf = [Resource];
        ResultAnnotation.SHACLValidators = [];
        ResultAnnotation.OnotologyValidators = [];
        return ResultAnnotation;
    }(index_1.Base.ClassBase));
    Classes.ResultAnnotation = ResultAnnotation;
    var Rule = /** @class */ (function (_super) {
        __extends(Rule, _super);
        function Rule() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        Rule.id = index_1.ns.Rule;
        Rule[Symbol.toStringTag] = "Rule";
        Rule.type = Class;
        Rule.subClassOf = [Resource];
        Rule.SHACLValidators = [];
        Rule.OnotologyValidators = [];
        return Rule;
    }(index_1.Base.ClassBase));
    Classes.Rule = Rule;
    var SPARQLAskExecutable = /** @class */ (function (_super) {
        __extends(SPARQLAskExecutable, _super);
        function SPARQLAskExecutable() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        SPARQLAskExecutable.id = index_1.ns.SPARQLAskExecutable;
        SPARQLAskExecutable[Symbol.toStringTag] = "SPARQL ASK executable";
        SPARQLAskExecutable.type = Class;
        SPARQLAskExecutable.subClassOf = [SPARQLExecutable];
        SPARQLAskExecutable.SHACLValidators = [];
        SPARQLAskExecutable.OnotologyValidators = [];
        return SPARQLAskExecutable;
    }(index_1.Base.ClassBase));
    Classes.SPARQLAskExecutable = SPARQLAskExecutable;
    var SPARQLAskValidator = /** @class */ (function (_super) {
        __extends(SPARQLAskValidator, _super);
        function SPARQLAskValidator() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        SPARQLAskValidator.id = index_1.ns.SPARQLAskValidator;
        SPARQLAskValidator[Symbol.toStringTag] = "SPARQL ASK validator";
        SPARQLAskValidator.type = Class;
        SPARQLAskValidator.subClassOf = [Validator, SPARQLAskExecutable];
        SPARQLAskValidator.SHACLValidators = [];
        SPARQLAskValidator.OnotologyValidators = [];
        return SPARQLAskValidator;
    }(index_1.Base.ClassBase));
    Classes.SPARQLAskValidator = SPARQLAskValidator;
    var SPARQLConstraint = /** @class */ (function (_super) {
        __extends(SPARQLConstraint, _super);
        function SPARQLConstraint() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        SPARQLConstraint.id = index_1.ns.SPARQLConstraint;
        SPARQLConstraint[Symbol.toStringTag] = "SPARQL constraint";
        SPARQLConstraint.type = Class;
        SPARQLConstraint.subClassOf = [SPARQLSelectExecutable];
        SPARQLConstraint.SHACLValidators = [];
        SPARQLConstraint.OnotologyValidators = [];
        return SPARQLConstraint;
    }(index_1.Base.ClassBase));
    Classes.SPARQLConstraint = SPARQLConstraint;
    var SPARQLConstraintComponent = /** @class */ (function (_super) {
        __extends(SPARQLConstraintComponent, _super);
        function SPARQLConstraintComponent() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        SPARQLConstraintComponent.id = index_1.ns.SPARQLConstraintComponent;
        SPARQLConstraintComponent[Symbol.toStringTag] = "SPARQL constraint component";
        SPARQLConstraintComponent.type = ConstraintComponent;
        SPARQLConstraintComponent.subClassOf = [];
        SPARQLConstraintComponent.SHACLValidators = [];
        SPARQLConstraintComponent.OnotologyValidators = [];
        return SPARQLConstraintComponent;
    }(index_1.Base.ClassBase));
    Classes.SPARQLConstraintComponent = SPARQLConstraintComponent;
    var SPARQLFunction = /** @class */ (function (_super) {
        __extends(SPARQLFunction, _super);
        function SPARQLFunction() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        SPARQLFunction.id = index_1.ns.SPARQLFunction;
        SPARQLFunction[Symbol.toStringTag] = "SPARQL function";
        SPARQLFunction.type = Class;
        SPARQLFunction.subClassOf = [SPARQLAskExecutable, SPARQLSelectExecutable, Function];
        SPARQLFunction.SHACLValidators = [];
        SPARQLFunction.OnotologyValidators = [];
        return SPARQLFunction;
    }(index_1.Base.ClassBase));
    Classes.SPARQLFunction = SPARQLFunction;
    var SPARQLRule = /** @class */ (function (_super) {
        __extends(SPARQLRule, _super);
        function SPARQLRule() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        SPARQLRule.id = index_1.ns.SPARQLRule;
        SPARQLRule[Symbol.toStringTag] = "SPARQL CONSTRUCT rule";
        SPARQLRule.type = Class;
        SPARQLRule.subClassOf = [SPARQLConstructExecutable, Rule];
        SPARQLRule.SHACLValidators = [];
        SPARQLRule.OnotologyValidators = [];
        return SPARQLRule;
    }(index_1.Base.ClassBase));
    Classes.SPARQLRule = SPARQLRule;
    var SPARQLSelectExecutable = /** @class */ (function (_super) {
        __extends(SPARQLSelectExecutable, _super);
        function SPARQLSelectExecutable() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        SPARQLSelectExecutable.id = index_1.ns.SPARQLSelectExecutable;
        SPARQLSelectExecutable[Symbol.toStringTag] = "SPARQL SELECT executable";
        SPARQLSelectExecutable.type = Class;
        SPARQLSelectExecutable.subClassOf = [SPARQLExecutable];
        SPARQLSelectExecutable.SHACLValidators = [];
        SPARQLSelectExecutable.OnotologyValidators = [];
        return SPARQLSelectExecutable;
    }(index_1.Base.ClassBase));
    Classes.SPARQLSelectExecutable = SPARQLSelectExecutable;
    var SPARQLSelectValidator = /** @class */ (function (_super) {
        __extends(SPARQLSelectValidator, _super);
        function SPARQLSelectValidator() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        SPARQLSelectValidator.id = index_1.ns.SPARQLSelectValidator;
        SPARQLSelectValidator[Symbol.toStringTag] = "SPARQL SELECT validator";
        SPARQLSelectValidator.type = Class;
        SPARQLSelectValidator.subClassOf = [Validator, SPARQLSelectExecutable];
        SPARQLSelectValidator.SHACLValidators = [];
        SPARQLSelectValidator.OnotologyValidators = [];
        return SPARQLSelectValidator;
    }(index_1.Base.ClassBase));
    Classes.SPARQLSelectValidator = SPARQLSelectValidator;
    var SPARQLTarget = /** @class */ (function (_super) {
        __extends(SPARQLTarget, _super);
        function SPARQLTarget() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        SPARQLTarget.id = index_1.ns.SPARQLTarget;
        SPARQLTarget[Symbol.toStringTag] = "SPARQL target";
        SPARQLTarget.type = Class;
        SPARQLTarget.subClassOf = [SPARQLAskExecutable, SPARQLSelectExecutable, Target];
        SPARQLTarget.SHACLValidators = [];
        SPARQLTarget.OnotologyValidators = [];
        return SPARQLTarget;
    }(index_1.Base.ClassBase));
    Classes.SPARQLTarget = SPARQLTarget;
    var SPARQLTargetType = /** @class */ (function (_super) {
        __extends(SPARQLTargetType, _super);
        function SPARQLTargetType() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        SPARQLTargetType.id = index_1.ns.SPARQLTargetType;
        SPARQLTargetType[Symbol.toStringTag] = "SPARQL target type";
        SPARQLTargetType.type = Class;
        SPARQLTargetType.subClassOf = [SPARQLAskExecutable, SPARQLSelectExecutable, TargetType];
        SPARQLTargetType.SHACLValidators = [];
        SPARQLTargetType.OnotologyValidators = [];
        return SPARQLTargetType;
    }(index_1.Base.ClassBase));
    Classes.SPARQLTargetType = SPARQLTargetType;
    var Severity = /** @class */ (function (_super) {
        __extends(Severity, _super);
        function Severity() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        Severity.id = index_1.ns.Severity;
        Severity[Symbol.toStringTag] = "Severity";
        Severity.type = Class;
        Severity.subClassOf = [Resource];
        Severity.SHACLValidators = [];
        Severity.OnotologyValidators = [];
        return Severity;
    }(index_1.Base.ClassBase));
    Classes.Severity = Severity;
    var Shape = /** @class */ (function (_super) {
        __extends(Shape, _super);
        function Shape() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        Shape.id = index_1.ns.Shape;
        Shape[Symbol.toStringTag] = "Shape";
        Shape.type = Class;
        Shape.subClassOf = [Resource];
        Shape.SHACLValidators = [];
        Shape.OnotologyValidators = [];
        return Shape;
    }(index_1.Base.ClassBase));
    Classes.Shape = Shape;
    var TripleRule = /** @class */ (function (_super) {
        __extends(TripleRule, _super);
        function TripleRule() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        TripleRule.id = index_1.ns.TripleRule;
        TripleRule[Symbol.toStringTag] = "A rule based on triple (subject, predicate, object) pattern.";
        TripleRule.type = Class;
        TripleRule.subClassOf = [Rule];
        TripleRule.SHACLValidators = [];
        TripleRule.OnotologyValidators = [];
        return TripleRule;
    }(index_1.Base.ClassBase));
    Classes.TripleRule = TripleRule;
    var UniqueLangConstraintComponent = /** @class */ (function (_super) {
        __extends(UniqueLangConstraintComponent, _super);
        function UniqueLangConstraintComponent() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        UniqueLangConstraintComponent.id = index_1.ns.UniqueLangConstraintComponent;
        UniqueLangConstraintComponent[Symbol.toStringTag] = "Unique-languages constraint component";
        UniqueLangConstraintComponent.type = ConstraintComponent;
        UniqueLangConstraintComponent.subClassOf = [];
        UniqueLangConstraintComponent.SHACLValidators = [];
        UniqueLangConstraintComponent.OnotologyValidators = [];
        return UniqueLangConstraintComponent;
    }(index_1.Base.ClassBase));
    Classes.UniqueLangConstraintComponent = UniqueLangConstraintComponent;
    var UniqueLangConstraintComponent_uniqueLang = /** @class */ (function (_super) {
        __extends(UniqueLangConstraintComponent_uniqueLang, _super);
        function UniqueLangConstraintComponent_uniqueLang() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        UniqueLangConstraintComponent_uniqueLang.id = index_1.ns.UniqueLangConstraintComponent_uniqueLang;
        UniqueLangConstraintComponent_uniqueLang[Symbol.toStringTag] = "undefined";
        UniqueLangConstraintComponent_uniqueLang.type = Parameter;
        UniqueLangConstraintComponent_uniqueLang.subClassOf = [];
        UniqueLangConstraintComponent_uniqueLang.SHACLValidators = [];
        UniqueLangConstraintComponent_uniqueLang.OnotologyValidators = [];
        return UniqueLangConstraintComponent_uniqueLang;
    }(index_1.Base.ClassBase));
    Classes.UniqueLangConstraintComponent_uniqueLang = UniqueLangConstraintComponent_uniqueLang;
    var ValidationReport = /** @class */ (function (_super) {
        __extends(ValidationReport, _super);
        function ValidationReport() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        ValidationReport.id = index_1.ns.ValidationReport;
        ValidationReport[Symbol.toStringTag] = "Validation report";
        ValidationReport.type = Class;
        ValidationReport.subClassOf = [Resource];
        ValidationReport.SHACLValidators = [];
        ValidationReport.OnotologyValidators = [];
        return ValidationReport;
    }(index_1.Base.ClassBase));
    Classes.ValidationReport = ValidationReport;
    var ValidationResult = /** @class */ (function (_super) {
        __extends(ValidationResult, _super);
        function ValidationResult() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        ValidationResult.id = index_1.ns.ValidationResult;
        ValidationResult[Symbol.toStringTag] = "Validation result";
        ValidationResult.type = Class;
        ValidationResult.subClassOf = [AbstractResult];
        ValidationResult.SHACLValidators = [];
        ValidationResult.OnotologyValidators = [];
        return ValidationResult;
    }(index_1.Base.ClassBase));
    Classes.ValidationResult = ValidationResult;
    var Validator = /** @class */ (function (_super) {
        __extends(Validator, _super);
        function Validator() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        Validator.id = index_1.ns.Validator;
        Validator[Symbol.toStringTag] = "Validator";
        Validator.type = Class;
        Validator.subClassOf = [Resource];
        Validator.SHACLValidators = [];
        Validator.OnotologyValidators = [];
        return Validator;
    }(index_1.Base.ClassBase));
    Classes.Validator = Validator;
    var Violation = /** @class */ (function (_super) {
        __extends(Violation, _super);
        function Violation() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        Violation.id = index_1.ns.Violation;
        Violation[Symbol.toStringTag] = "Violation";
        Violation.type = Severity;
        Violation.subClassOf = [];
        Violation.SHACLValidators = [];
        Violation.OnotologyValidators = [];
        return Violation;
    }(index_1.Base.ClassBase));
    Classes.Violation = Violation;
    var Warning = /** @class */ (function (_super) {
        __extends(Warning, _super);
        function Warning() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        Warning.id = index_1.ns.Warning;
        Warning[Symbol.toStringTag] = "Warning";
        Warning.type = Severity;
        Warning.subClassOf = [];
        Warning.SHACLValidators = [];
        Warning.OnotologyValidators = [];
        return Warning;
    }(index_1.Base.ClassBase));
    Classes.Warning = Warning;
    var SPARQLConstructExecutable = /** @class */ (function (_super) {
        __extends(SPARQLConstructExecutable, _super);
        function SPARQLConstructExecutable() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        SPARQLConstructExecutable.id = index_1.ns.SPARQLConstructExecutable;
        SPARQLConstructExecutable[Symbol.toStringTag] = "SPARQL CONSTRUCT executable";
        SPARQLConstructExecutable.type = Class;
        SPARQLConstructExecutable.subClassOf = [SPARQLExecutable];
        SPARQLConstructExecutable.SHACLValidators = [];
        SPARQLConstructExecutable.OnotologyValidators = [];
        return SPARQLConstructExecutable;
    }(index_1.Base.ClassBase));
    Classes.SPARQLConstructExecutable = SPARQLConstructExecutable;
    var NotConstraintComponent = /** @class */ (function (_super) {
        __extends(NotConstraintComponent, _super);
        function NotConstraintComponent() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        NotConstraintComponent.id = index_1.ns.NotConstraintComponent;
        NotConstraintComponent[Symbol.toStringTag] = "Not constraint component";
        NotConstraintComponent.type = ConstraintComponent;
        NotConstraintComponent.subClassOf = [];
        NotConstraintComponent.SHACLValidators = [];
        NotConstraintComponent.OnotologyValidators = [];
        return NotConstraintComponent;
    }(index_1.Base.ClassBase));
    Classes.NotConstraintComponent = NotConstraintComponent;
    var TargetType = /** @class */ (function (_super) {
        __extends(TargetType, _super);
        function TargetType() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        TargetType.id = index_1.ns.TargetType;
        TargetType[Symbol.toStringTag] = "Target type";
        TargetType.type = Class;
        TargetType.subClassOf = [Class, Parameterizable];
        TargetType.SHACLValidators = [];
        TargetType.OnotologyValidators = [];
        return TargetType;
    }(index_1.Base.ClassBase));
    Classes.TargetType = TargetType;
    var PropertyConstraintComponent_property = /** @class */ (function (_super) {
        __extends(PropertyConstraintComponent_property, _super);
        function PropertyConstraintComponent_property() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        PropertyConstraintComponent_property.id = index_1.ns.PropertyConstraintComponent_property;
        PropertyConstraintComponent_property[Symbol.toStringTag] = "undefined";
        PropertyConstraintComponent_property.type = Parameter;
        PropertyConstraintComponent_property.subClassOf = [];
        PropertyConstraintComponent_property.SHACLValidators = [];
        PropertyConstraintComponent_property.OnotologyValidators = [];
        return PropertyConstraintComponent_property;
    }(index_1.Base.ClassBase));
    Classes.PropertyConstraintComponent_property = PropertyConstraintComponent_property;
    var Target = /** @class */ (function (_super) {
        __extends(Target, _super);
        function Target() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        Target.id = index_1.ns.Target;
        Target[Symbol.toStringTag] = "Target";
        Target.type = Class;
        Target.subClassOf = [Resource];
        Target.SHACLValidators = [];
        Target.OnotologyValidators = [];
        return Target;
    }(index_1.Base.ClassBase));
    Classes.Target = Target;
    var XoneConstraintComponent = /** @class */ (function (_super) {
        __extends(XoneConstraintComponent, _super);
        function XoneConstraintComponent() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        XoneConstraintComponent.id = index_1.ns.XoneConstraintComponent;
        XoneConstraintComponent[Symbol.toStringTag] = "Exactly one constraint component";
        XoneConstraintComponent.type = ConstraintComponent;
        XoneConstraintComponent.subClassOf = [];
        XoneConstraintComponent.SHACLValidators = [];
        XoneConstraintComponent.OnotologyValidators = [];
        return XoneConstraintComponent;
    }(index_1.Base.ClassBase));
    Classes.XoneConstraintComponent = XoneConstraintComponent;
    var NotConstraintComponent_not = /** @class */ (function (_super) {
        __extends(NotConstraintComponent_not, _super);
        function NotConstraintComponent_not() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        NotConstraintComponent_not.id = index_1.ns.NotConstraintComponent_not;
        NotConstraintComponent_not[Symbol.toStringTag] = "undefined";
        NotConstraintComponent_not.type = Parameter;
        NotConstraintComponent_not.subClassOf = [];
        NotConstraintComponent_not.SHACLValidators = [];
        NotConstraintComponent_not.OnotologyValidators = [];
        return NotConstraintComponent_not;
    }(index_1.Base.ClassBase));
    Classes.NotConstraintComponent_not = NotConstraintComponent_not;
    var OrConstraintComponent_or = /** @class */ (function (_super) {
        __extends(OrConstraintComponent_or, _super);
        function OrConstraintComponent_or() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        OrConstraintComponent_or.id = index_1.ns.OrConstraintComponent_or;
        OrConstraintComponent_or[Symbol.toStringTag] = "undefined";
        OrConstraintComponent_or.type = Parameter;
        OrConstraintComponent_or.subClassOf = [];
        OrConstraintComponent_or.SHACLValidators = [];
        OrConstraintComponent_or.OnotologyValidators = [];
        return OrConstraintComponent_or;
    }(index_1.Base.ClassBase));
    Classes.OrConstraintComponent_or = OrConstraintComponent_or;
    var JSTargetType = /** @class */ (function (_super) {
        __extends(JSTargetType, _super);
        function JSTargetType() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        JSTargetType.id = index_1.ns.JSTargetType;
        JSTargetType[Symbol.toStringTag] = "JavaScript target type";
        JSTargetType.type = Class;
        JSTargetType.subClassOf = [TargetType, JSExecutable];
        JSTargetType.SHACLValidators = [];
        JSTargetType.OnotologyValidators = [];
        return JSTargetType;
    }(index_1.Base.ClassBase));
    Classes.JSTargetType = JSTargetType;
    var JSValidator = /** @class */ (function (_super) {
        __extends(JSValidator, _super);
        function JSValidator() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        JSValidator.id = index_1.ns.JSValidator;
        JSValidator[Symbol.toStringTag] = "JavaScript validator";
        JSValidator.type = Class;
        JSValidator.subClassOf = [Validator, JSExecutable];
        JSValidator.SHACLValidators = [];
        JSValidator.OnotologyValidators = [];
        return JSValidator;
    }(index_1.Base.ClassBase));
    Classes.JSValidator = JSValidator;
    var QualifiedMinCountConstraintComponent_qualifiedMinCount = /** @class */ (function (_super) {
        __extends(QualifiedMinCountConstraintComponent_qualifiedMinCount, _super);
        function QualifiedMinCountConstraintComponent_qualifiedMinCount() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        QualifiedMinCountConstraintComponent_qualifiedMinCount.id = index_1.ns.QualifiedMinCountConstraintComponent_qualifiedMinCount;
        QualifiedMinCountConstraintComponent_qualifiedMinCount[Symbol.toStringTag] = "undefined";
        QualifiedMinCountConstraintComponent_qualifiedMinCount.type = Parameter;
        QualifiedMinCountConstraintComponent_qualifiedMinCount.subClassOf = [];
        QualifiedMinCountConstraintComponent_qualifiedMinCount.SHACLValidators = [];
        QualifiedMinCountConstraintComponent_qualifiedMinCount.OnotologyValidators = [];
        return QualifiedMinCountConstraintComponent_qualifiedMinCount;
    }(index_1.Base.ClassBase));
    Classes.QualifiedMinCountConstraintComponent_qualifiedMinCount = QualifiedMinCountConstraintComponent_qualifiedMinCount;
    var QualifiedMinCountConstraintComponent_qualifiedValueShape = /** @class */ (function (_super) {
        __extends(QualifiedMinCountConstraintComponent_qualifiedValueShape, _super);
        function QualifiedMinCountConstraintComponent_qualifiedValueShape() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        QualifiedMinCountConstraintComponent_qualifiedValueShape.id = index_1.ns.QualifiedMinCountConstraintComponent_qualifiedValueShape;
        QualifiedMinCountConstraintComponent_qualifiedValueShape[Symbol.toStringTag] = "undefined";
        QualifiedMinCountConstraintComponent_qualifiedValueShape.type = Parameter;
        QualifiedMinCountConstraintComponent_qualifiedValueShape.subClassOf = [];
        QualifiedMinCountConstraintComponent_qualifiedValueShape.SHACLValidators = [];
        QualifiedMinCountConstraintComponent_qualifiedValueShape.OnotologyValidators = [];
        return QualifiedMinCountConstraintComponent_qualifiedValueShape;
    }(index_1.Base.ClassBase));
    Classes.QualifiedMinCountConstraintComponent_qualifiedValueShape = QualifiedMinCountConstraintComponent_qualifiedValueShape;
    var SPARQLConstraintComponent_sparql = /** @class */ (function (_super) {
        __extends(SPARQLConstraintComponent_sparql, _super);
        function SPARQLConstraintComponent_sparql() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        SPARQLConstraintComponent_sparql.id = index_1.ns.SPARQLConstraintComponent_sparql;
        SPARQLConstraintComponent_sparql[Symbol.toStringTag] = "undefined";
        SPARQLConstraintComponent_sparql.type = Parameter;
        SPARQLConstraintComponent_sparql.subClassOf = [];
        SPARQLConstraintComponent_sparql.SHACLValidators = [];
        SPARQLConstraintComponent_sparql.OnotologyValidators = [];
        return SPARQLConstraintComponent_sparql;
    }(index_1.Base.ClassBase));
    Classes.SPARQLConstraintComponent_sparql = SPARQLConstraintComponent_sparql;
    var SPARQLExecutable = /** @class */ (function (_super) {
        __extends(SPARQLExecutable, _super);
        function SPARQLExecutable() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        SPARQLExecutable.id = index_1.ns.SPARQLExecutable;
        SPARQLExecutable[Symbol.toStringTag] = "SPARQL executable";
        SPARQLExecutable.type = Class;
        SPARQLExecutable.subClassOf = [Resource];
        SPARQLExecutable.SHACLValidators = [];
        SPARQLExecutable.OnotologyValidators = [];
        return SPARQLExecutable;
    }(index_1.Base.ClassBase));
    Classes.SPARQLExecutable = SPARQLExecutable;
    var SPARQLUpdateExecutable = /** @class */ (function (_super) {
        __extends(SPARQLUpdateExecutable, _super);
        function SPARQLUpdateExecutable() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        SPARQLUpdateExecutable.id = index_1.ns.SPARQLUpdateExecutable;
        SPARQLUpdateExecutable[Symbol.toStringTag] = "SPARQL UPDATE executable";
        SPARQLUpdateExecutable.type = Class;
        SPARQLUpdateExecutable.subClassOf = [SPARQLExecutable];
        SPARQLUpdateExecutable.SHACLValidators = [];
        SPARQLUpdateExecutable.OnotologyValidators = [];
        return SPARQLUpdateExecutable;
    }(index_1.Base.ClassBase));
    Classes.SPARQLUpdateExecutable = SPARQLUpdateExecutable;
    var XoneConstraintComponent_xone = /** @class */ (function (_super) {
        __extends(XoneConstraintComponent_xone, _super);
        function XoneConstraintComponent_xone() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        XoneConstraintComponent_xone.id = index_1.ns.XoneConstraintComponent_xone;
        XoneConstraintComponent_xone[Symbol.toStringTag] = "undefined";
        XoneConstraintComponent_xone.type = Parameter;
        XoneConstraintComponent_xone.subClassOf = [];
        XoneConstraintComponent_xone.SHACLValidators = [];
        XoneConstraintComponent_xone.OnotologyValidators = [];
        return XoneConstraintComponent_xone;
    }(index_1.Base.ClassBase));
    Classes.XoneConstraintComponent_xone = XoneConstraintComponent_xone;
    var _this = /** @class */ (function (_super) {
        __extends(_this, _super);
        function _this() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.properties = {};
            return _this_1;
        }
        _this.id = index_1.ns._this;
        _this[Symbol.toStringTag] = "this";
        _this.type = Resource;
        _this.subClassOf = [];
        _this.SHACLValidators = [];
        _this.OnotologyValidators = [];
        return _this;
    }(index_1.Base.ClassBase));
    Classes._this = _this;
})(Classes = exports.Classes || (exports.Classes = {}));
