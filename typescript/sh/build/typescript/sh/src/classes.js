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
require("index.ts");
var classes;
(function (classes) {
    var _ = /** @class */ (function (_super) {
        __extends(_, _super);
        function _() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        _.id = ns._;
        _[Symbol.toStringTag] = "W3C Shapes Constraint Language (SHACL) Vocabulary";
        _.type = Ontology;
        _.subClassOf = [];
        _.SHACLValidators = [];
        _.OnotologyValidators = [];
        return _;
    }(Base.ClassBase));
    classes._ = _;
    var AbstractResult = /** @class */ (function (_super) {
        __extends(AbstractResult, _super);
        function AbstractResult() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AbstractResult.id = ns.AbstractResult;
        AbstractResult[Symbol.toStringTag] = "Abstract result";
        AbstractResult.type = Class;
        AbstractResult.subClassOf = [Resource];
        AbstractResult.SHACLValidators = [];
        AbstractResult.OnotologyValidators = [];
        return AbstractResult;
    }(Base.ClassBase));
    classes.AbstractResult = AbstractResult;
    var AndConstraintComponent = /** @class */ (function (_super) {
        __extends(AndConstraintComponent, _super);
        function AndConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AndConstraintComponent.id = ns.AndConstraintComponent;
        AndConstraintComponent[Symbol.toStringTag] = "And constraint component";
        AndConstraintComponent.type = ConstraintComponent;
        AndConstraintComponent.subClassOf = [];
        AndConstraintComponent.SHACLValidators = [];
        AndConstraintComponent.OnotologyValidators = [];
        return AndConstraintComponent;
    }(Base.ClassBase));
    classes.AndConstraintComponent = AndConstraintComponent;
    var AndConstraintComponent_and = /** @class */ (function (_super) {
        __extends(AndConstraintComponent_and, _super);
        function AndConstraintComponent_and() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AndConstraintComponent_and.id = ns.AndConstraintComponent_and;
        AndConstraintComponent_and[Symbol.toStringTag] = "undefined";
        AndConstraintComponent_and.type = Parameter;
        AndConstraintComponent_and.subClassOf = [];
        AndConstraintComponent_and.SHACLValidators = [];
        AndConstraintComponent_and.OnotologyValidators = [];
        return AndConstraintComponent_and;
    }(Base.ClassBase));
    classes.AndConstraintComponent_and = AndConstraintComponent_and;
    var BlankNode = /** @class */ (function (_super) {
        __extends(BlankNode, _super);
        function BlankNode() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BlankNode.id = ns.BlankNode;
        BlankNode[Symbol.toStringTag] = "Blank node";
        BlankNode.type = NodeKind;
        BlankNode.subClassOf = [];
        BlankNode.SHACLValidators = [];
        BlankNode.OnotologyValidators = [];
        return BlankNode;
    }(Base.ClassBase));
    classes.BlankNode = BlankNode;
    var BlankNodeOrIRI = /** @class */ (function (_super) {
        __extends(BlankNodeOrIRI, _super);
        function BlankNodeOrIRI() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BlankNodeOrIRI.id = ns.BlankNodeOrIRI;
        BlankNodeOrIRI[Symbol.toStringTag] = "Blank node or IRI";
        BlankNodeOrIRI.type = NodeKind;
        BlankNodeOrIRI.subClassOf = [];
        BlankNodeOrIRI.SHACLValidators = [];
        BlankNodeOrIRI.OnotologyValidators = [];
        return BlankNodeOrIRI;
    }(Base.ClassBase));
    classes.BlankNodeOrIRI = BlankNodeOrIRI;
    var BlankNodeOrLiteral = /** @class */ (function (_super) {
        __extends(BlankNodeOrLiteral, _super);
        function BlankNodeOrLiteral() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BlankNodeOrLiteral.id = ns.BlankNodeOrLiteral;
        BlankNodeOrLiteral[Symbol.toStringTag] = "Blank node or literal";
        BlankNodeOrLiteral.type = NodeKind;
        BlankNodeOrLiteral.subClassOf = [];
        BlankNodeOrLiteral.SHACLValidators = [];
        BlankNodeOrLiteral.OnotologyValidators = [];
        return BlankNodeOrLiteral;
    }(Base.ClassBase));
    classes.BlankNodeOrLiteral = BlankNodeOrLiteral;
    var ClassConstraintComponent = /** @class */ (function (_super) {
        __extends(ClassConstraintComponent, _super);
        function ClassConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ClassConstraintComponent.id = ns.ClassConstraintComponent;
        ClassConstraintComponent[Symbol.toStringTag] = "Class constraint component";
        ClassConstraintComponent.type = ConstraintComponent;
        ClassConstraintComponent.subClassOf = [];
        ClassConstraintComponent.SHACLValidators = [];
        ClassConstraintComponent.OnotologyValidators = [];
        return ClassConstraintComponent;
    }(Base.ClassBase));
    classes.ClassConstraintComponent = ClassConstraintComponent;
    var ClassConstraintComponent_class = /** @class */ (function (_super) {
        __extends(ClassConstraintComponent_class, _super);
        function ClassConstraintComponent_class() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ClassConstraintComponent_class.id = ns.ClassConstraintComponent_class;
        ClassConstraintComponent_class[Symbol.toStringTag] = "undefined";
        ClassConstraintComponent_class.type = Parameter;
        ClassConstraintComponent_class.subClassOf = [];
        ClassConstraintComponent_class.SHACLValidators = [];
        ClassConstraintComponent_class.OnotologyValidators = [];
        return ClassConstraintComponent_class;
    }(Base.ClassBase));
    classes.ClassConstraintComponent_class = ClassConstraintComponent_class;
    var ClosedConstraintComponent = /** @class */ (function (_super) {
        __extends(ClosedConstraintComponent, _super);
        function ClosedConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ClosedConstraintComponent.id = ns.ClosedConstraintComponent;
        ClosedConstraintComponent[Symbol.toStringTag] = "Closed constraint component";
        ClosedConstraintComponent.type = ConstraintComponent;
        ClosedConstraintComponent.subClassOf = [];
        ClosedConstraintComponent.SHACLValidators = [];
        ClosedConstraintComponent.OnotologyValidators = [];
        return ClosedConstraintComponent;
    }(Base.ClassBase));
    classes.ClosedConstraintComponent = ClosedConstraintComponent;
    var ClosedConstraintComponent_closed = /** @class */ (function (_super) {
        __extends(ClosedConstraintComponent_closed, _super);
        function ClosedConstraintComponent_closed() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ClosedConstraintComponent_closed.id = ns.ClosedConstraintComponent_closed;
        ClosedConstraintComponent_closed[Symbol.toStringTag] = "undefined";
        ClosedConstraintComponent_closed.type = Parameter;
        ClosedConstraintComponent_closed.subClassOf = [];
        ClosedConstraintComponent_closed.SHACLValidators = [];
        ClosedConstraintComponent_closed.OnotologyValidators = [];
        return ClosedConstraintComponent_closed;
    }(Base.ClassBase));
    classes.ClosedConstraintComponent_closed = ClosedConstraintComponent_closed;
    var ClosedConstraintComponent_ignoredProperties = /** @class */ (function (_super) {
        __extends(ClosedConstraintComponent_ignoredProperties, _super);
        function ClosedConstraintComponent_ignoredProperties() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ClosedConstraintComponent_ignoredProperties.id = ns.ClosedConstraintComponent_ignoredProperties;
        ClosedConstraintComponent_ignoredProperties[Symbol.toStringTag] = "undefined";
        ClosedConstraintComponent_ignoredProperties.type = Parameter;
        ClosedConstraintComponent_ignoredProperties.subClassOf = [];
        ClosedConstraintComponent_ignoredProperties.SHACLValidators = [];
        ClosedConstraintComponent_ignoredProperties.OnotologyValidators = [];
        return ClosedConstraintComponent_ignoredProperties;
    }(Base.ClassBase));
    classes.ClosedConstraintComponent_ignoredProperties = ClosedConstraintComponent_ignoredProperties;
    var ConstraintComponent = /** @class */ (function (_super) {
        __extends(ConstraintComponent, _super);
        function ConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ConstraintComponent.id = ns.ConstraintComponent;
        ConstraintComponent[Symbol.toStringTag] = "Constraint component";
        ConstraintComponent.type = Class;
        ConstraintComponent.subClassOf = [Parameterizable];
        ConstraintComponent.SHACLValidators = [];
        ConstraintComponent.OnotologyValidators = [];
        return ConstraintComponent;
    }(Base.ClassBase));
    classes.ConstraintComponent = ConstraintComponent;
    var DatatypeConstraintComponent = /** @class */ (function (_super) {
        __extends(DatatypeConstraintComponent, _super);
        function DatatypeConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DatatypeConstraintComponent.id = ns.DatatypeConstraintComponent;
        DatatypeConstraintComponent[Symbol.toStringTag] = "Datatype constraint component";
        DatatypeConstraintComponent.type = ConstraintComponent;
        DatatypeConstraintComponent.subClassOf = [];
        DatatypeConstraintComponent.SHACLValidators = [];
        DatatypeConstraintComponent.OnotologyValidators = [];
        return DatatypeConstraintComponent;
    }(Base.ClassBase));
    classes.DatatypeConstraintComponent = DatatypeConstraintComponent;
    var DatatypeConstraintComponent_datatype = /** @class */ (function (_super) {
        __extends(DatatypeConstraintComponent_datatype, _super);
        function DatatypeConstraintComponent_datatype() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DatatypeConstraintComponent_datatype.id = ns.DatatypeConstraintComponent_datatype;
        DatatypeConstraintComponent_datatype[Symbol.toStringTag] = "undefined";
        DatatypeConstraintComponent_datatype.type = Parameter;
        DatatypeConstraintComponent_datatype.subClassOf = [];
        DatatypeConstraintComponent_datatype.SHACLValidators = [];
        DatatypeConstraintComponent_datatype.OnotologyValidators = [];
        return DatatypeConstraintComponent_datatype;
    }(Base.ClassBase));
    classes.DatatypeConstraintComponent_datatype = DatatypeConstraintComponent_datatype;
    var DisjointConstraintComponent = /** @class */ (function (_super) {
        __extends(DisjointConstraintComponent, _super);
        function DisjointConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DisjointConstraintComponent.id = ns.DisjointConstraintComponent;
        DisjointConstraintComponent[Symbol.toStringTag] = "Disjoint constraint component";
        DisjointConstraintComponent.type = ConstraintComponent;
        DisjointConstraintComponent.subClassOf = [];
        DisjointConstraintComponent.SHACLValidators = [];
        DisjointConstraintComponent.OnotologyValidators = [];
        return DisjointConstraintComponent;
    }(Base.ClassBase));
    classes.DisjointConstraintComponent = DisjointConstraintComponent;
    var DisjointConstraintComponent_disjoint = /** @class */ (function (_super) {
        __extends(DisjointConstraintComponent_disjoint, _super);
        function DisjointConstraintComponent_disjoint() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DisjointConstraintComponent_disjoint.id = ns.DisjointConstraintComponent_disjoint;
        DisjointConstraintComponent_disjoint[Symbol.toStringTag] = "undefined";
        DisjointConstraintComponent_disjoint.type = Parameter;
        DisjointConstraintComponent_disjoint.subClassOf = [];
        DisjointConstraintComponent_disjoint.SHACLValidators = [];
        DisjointConstraintComponent_disjoint.OnotologyValidators = [];
        return DisjointConstraintComponent_disjoint;
    }(Base.ClassBase));
    classes.DisjointConstraintComponent_disjoint = DisjointConstraintComponent_disjoint;
    var EqualsConstraintComponent = /** @class */ (function (_super) {
        __extends(EqualsConstraintComponent, _super);
        function EqualsConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EqualsConstraintComponent.id = ns.EqualsConstraintComponent;
        EqualsConstraintComponent[Symbol.toStringTag] = "Equals constraint component";
        EqualsConstraintComponent.type = ConstraintComponent;
        EqualsConstraintComponent.subClassOf = [];
        EqualsConstraintComponent.SHACLValidators = [];
        EqualsConstraintComponent.OnotologyValidators = [];
        return EqualsConstraintComponent;
    }(Base.ClassBase));
    classes.EqualsConstraintComponent = EqualsConstraintComponent;
    var EqualsConstraintComponent_equals = /** @class */ (function (_super) {
        __extends(EqualsConstraintComponent_equals, _super);
        function EqualsConstraintComponent_equals() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EqualsConstraintComponent_equals.id = ns.EqualsConstraintComponent_equals;
        EqualsConstraintComponent_equals[Symbol.toStringTag] = "undefined";
        EqualsConstraintComponent_equals.type = Parameter;
        EqualsConstraintComponent_equals.subClassOf = [];
        EqualsConstraintComponent_equals.SHACLValidators = [];
        EqualsConstraintComponent_equals.OnotologyValidators = [];
        return EqualsConstraintComponent_equals;
    }(Base.ClassBase));
    classes.EqualsConstraintComponent_equals = EqualsConstraintComponent_equals;
    var ExpressionConstraintComponent = /** @class */ (function (_super) {
        __extends(ExpressionConstraintComponent, _super);
        function ExpressionConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ExpressionConstraintComponent.id = ns.ExpressionConstraintComponent;
        ExpressionConstraintComponent[Symbol.toStringTag] = "Expression constraint component";
        ExpressionConstraintComponent.type = ConstraintComponent;
        ExpressionConstraintComponent.subClassOf = [];
        ExpressionConstraintComponent.SHACLValidators = [];
        ExpressionConstraintComponent.OnotologyValidators = [];
        return ExpressionConstraintComponent;
    }(Base.ClassBase));
    classes.ExpressionConstraintComponent = ExpressionConstraintComponent;
    var ExpressionConstraintComponent_expression = /** @class */ (function (_super) {
        __extends(ExpressionConstraintComponent_expression, _super);
        function ExpressionConstraintComponent_expression() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ExpressionConstraintComponent_expression.id = ns.ExpressionConstraintComponent_expression;
        ExpressionConstraintComponent_expression[Symbol.toStringTag] = "undefined";
        ExpressionConstraintComponent_expression.type = Parameter;
        ExpressionConstraintComponent_expression.subClassOf = [];
        ExpressionConstraintComponent_expression.SHACLValidators = [];
        ExpressionConstraintComponent_expression.OnotologyValidators = [];
        return ExpressionConstraintComponent_expression;
    }(Base.ClassBase));
    classes.ExpressionConstraintComponent_expression = ExpressionConstraintComponent_expression;
    var Function = /** @class */ (function (_super) {
        __extends(Function, _super);
        function Function() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Function.id = ns.Function;
        Function[Symbol.toStringTag] = "Function";
        Function.type = Class;
        Function.subClassOf = [Parameterizable];
        Function.SHACLValidators = [];
        Function.OnotologyValidators = [];
        return Function;
    }(Base.ClassBase));
    classes.Function = Function;
    var HasValueConstraintComponent = /** @class */ (function (_super) {
        __extends(HasValueConstraintComponent, _super);
        function HasValueConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HasValueConstraintComponent.id = ns.HasValueConstraintComponent;
        HasValueConstraintComponent[Symbol.toStringTag] = "Has-value constraint component";
        HasValueConstraintComponent.type = ConstraintComponent;
        HasValueConstraintComponent.subClassOf = [];
        HasValueConstraintComponent.SHACLValidators = [];
        HasValueConstraintComponent.OnotologyValidators = [];
        return HasValueConstraintComponent;
    }(Base.ClassBase));
    classes.HasValueConstraintComponent = HasValueConstraintComponent;
    var HasValueConstraintComponent_hasValue = /** @class */ (function (_super) {
        __extends(HasValueConstraintComponent_hasValue, _super);
        function HasValueConstraintComponent_hasValue() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HasValueConstraintComponent_hasValue.id = ns.HasValueConstraintComponent_hasValue;
        HasValueConstraintComponent_hasValue[Symbol.toStringTag] = "undefined";
        HasValueConstraintComponent_hasValue.type = Parameter;
        HasValueConstraintComponent_hasValue.subClassOf = [];
        HasValueConstraintComponent_hasValue.SHACLValidators = [];
        HasValueConstraintComponent_hasValue.OnotologyValidators = [];
        return HasValueConstraintComponent_hasValue;
    }(Base.ClassBase));
    classes.HasValueConstraintComponent_hasValue = HasValueConstraintComponent_hasValue;
    var IRI = /** @class */ (function (_super) {
        __extends(IRI, _super);
        function IRI() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        IRI.id = ns.IRI;
        IRI[Symbol.toStringTag] = "IRI";
        IRI.type = NodeKind;
        IRI.subClassOf = [];
        IRI.SHACLValidators = [];
        IRI.OnotologyValidators = [];
        return IRI;
    }(Base.ClassBase));
    classes.IRI = IRI;
    var IRIOrLiteral = /** @class */ (function (_super) {
        __extends(IRIOrLiteral, _super);
        function IRIOrLiteral() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        IRIOrLiteral.id = ns.IRIOrLiteral;
        IRIOrLiteral[Symbol.toStringTag] = "IRI or literal";
        IRIOrLiteral.type = NodeKind;
        IRIOrLiteral.subClassOf = [];
        IRIOrLiteral.SHACLValidators = [];
        IRIOrLiteral.OnotologyValidators = [];
        return IRIOrLiteral;
    }(Base.ClassBase));
    classes.IRIOrLiteral = IRIOrLiteral;
    var InConstraintComponent = /** @class */ (function (_super) {
        __extends(InConstraintComponent, _super);
        function InConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        InConstraintComponent.id = ns.InConstraintComponent;
        InConstraintComponent[Symbol.toStringTag] = "In constraint component";
        InConstraintComponent.type = ConstraintComponent;
        InConstraintComponent.subClassOf = [];
        InConstraintComponent.SHACLValidators = [];
        InConstraintComponent.OnotologyValidators = [];
        return InConstraintComponent;
    }(Base.ClassBase));
    classes.InConstraintComponent = InConstraintComponent;
    var InConstraintComponent_in = /** @class */ (function (_super) {
        __extends(InConstraintComponent_in, _super);
        function InConstraintComponent_in() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        InConstraintComponent_in.id = ns.InConstraintComponent_in;
        InConstraintComponent_in[Symbol.toStringTag] = "undefined";
        InConstraintComponent_in.type = Parameter;
        InConstraintComponent_in.subClassOf = [];
        InConstraintComponent_in.SHACLValidators = [];
        InConstraintComponent_in.OnotologyValidators = [];
        return InConstraintComponent_in;
    }(Base.ClassBase));
    classes.InConstraintComponent_in = InConstraintComponent_in;
    var Info = /** @class */ (function (_super) {
        __extends(Info, _super);
        function Info() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Info.id = ns.Info;
        Info[Symbol.toStringTag] = "Info";
        Info.type = Severity;
        Info.subClassOf = [];
        Info.SHACLValidators = [];
        Info.OnotologyValidators = [];
        return Info;
    }(Base.ClassBase));
    classes.Info = Info;
    var JSConstraint = /** @class */ (function (_super) {
        __extends(JSConstraint, _super);
        function JSConstraint() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        JSConstraint.id = ns.JSConstraint;
        JSConstraint[Symbol.toStringTag] = "JavaScript-based constraint";
        JSConstraint.type = Class;
        JSConstraint.subClassOf = [JSExecutable];
        JSConstraint.SHACLValidators = [];
        JSConstraint.OnotologyValidators = [];
        return JSConstraint;
    }(Base.ClassBase));
    classes.JSConstraint = JSConstraint;
    var JSConstraint_js = /** @class */ (function (_super) {
        __extends(JSConstraint_js, _super);
        function JSConstraint_js() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        JSConstraint_js.id = ns.JSConstraint_js;
        JSConstraint_js[Symbol.toStringTag] = "undefined";
        JSConstraint_js.type = Parameter;
        JSConstraint_js.subClassOf = [];
        JSConstraint_js.SHACLValidators = [];
        JSConstraint_js.OnotologyValidators = [];
        return JSConstraint_js;
    }(Base.ClassBase));
    classes.JSConstraint_js = JSConstraint_js;
    var JSConstraintComponent = /** @class */ (function (_super) {
        __extends(JSConstraintComponent, _super);
        function JSConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        JSConstraintComponent.id = ns.JSConstraintComponent;
        JSConstraintComponent[Symbol.toStringTag] = "JavaScript constraint component";
        JSConstraintComponent.type = ConstraintComponent;
        JSConstraintComponent.subClassOf = [];
        JSConstraintComponent.SHACLValidators = [];
        JSConstraintComponent.OnotologyValidators = [];
        return JSConstraintComponent;
    }(Base.ClassBase));
    classes.JSConstraintComponent = JSConstraintComponent;
    var JSExecutable = /** @class */ (function (_super) {
        __extends(JSExecutable, _super);
        function JSExecutable() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        JSExecutable.id = ns.JSExecutable;
        JSExecutable[Symbol.toStringTag] = "JavaScript executable";
        JSExecutable.type = Class;
        JSExecutable.subClassOf = [Resource];
        JSExecutable.SHACLValidators = [];
        JSExecutable.OnotologyValidators = [];
        return JSExecutable;
    }(Base.ClassBase));
    classes.JSExecutable = JSExecutable;
    var JSFunction = /** @class */ (function (_super) {
        __extends(JSFunction, _super);
        function JSFunction() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        JSFunction.id = ns.JSFunction;
        JSFunction[Symbol.toStringTag] = "JavaScript function";
        JSFunction.type = Class;
        JSFunction.subClassOf = [Function, JSExecutable];
        JSFunction.SHACLValidators = [];
        JSFunction.OnotologyValidators = [];
        return JSFunction;
    }(Base.ClassBase));
    classes.JSFunction = JSFunction;
    var JSLibrary = /** @class */ (function (_super) {
        __extends(JSLibrary, _super);
        function JSLibrary() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        JSLibrary.id = ns.JSLibrary;
        JSLibrary[Symbol.toStringTag] = "JavaScript library";
        JSLibrary.type = Class;
        JSLibrary.subClassOf = [Resource];
        JSLibrary.SHACLValidators = [];
        JSLibrary.OnotologyValidators = [];
        return JSLibrary;
    }(Base.ClassBase));
    classes.JSLibrary = JSLibrary;
    var JSRule = /** @class */ (function (_super) {
        __extends(JSRule, _super);
        function JSRule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        JSRule.id = ns.JSRule;
        JSRule[Symbol.toStringTag] = "JavaScript rule";
        JSRule.type = Class;
        JSRule.subClassOf = [Rule, JSExecutable];
        JSRule.SHACLValidators = [];
        JSRule.OnotologyValidators = [];
        return JSRule;
    }(Base.ClassBase));
    classes.JSRule = JSRule;
    var JSTarget = /** @class */ (function (_super) {
        __extends(JSTarget, _super);
        function JSTarget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        JSTarget.id = ns.JSTarget;
        JSTarget[Symbol.toStringTag] = "JavaScript target";
        JSTarget.type = Class;
        JSTarget.subClassOf = [Target, JSExecutable];
        JSTarget.SHACLValidators = [];
        JSTarget.OnotologyValidators = [];
        return JSTarget;
    }(Base.ClassBase));
    classes.JSTarget = JSTarget;
    var LanguageInConstraintComponent = /** @class */ (function (_super) {
        __extends(LanguageInConstraintComponent, _super);
        function LanguageInConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        LanguageInConstraintComponent.id = ns.LanguageInConstraintComponent;
        LanguageInConstraintComponent[Symbol.toStringTag] = "Language-in constraint component";
        LanguageInConstraintComponent.type = ConstraintComponent;
        LanguageInConstraintComponent.subClassOf = [];
        LanguageInConstraintComponent.SHACLValidators = [];
        LanguageInConstraintComponent.OnotologyValidators = [];
        return LanguageInConstraintComponent;
    }(Base.ClassBase));
    classes.LanguageInConstraintComponent = LanguageInConstraintComponent;
    var LanguageInConstraintComponent_languageIn = /** @class */ (function (_super) {
        __extends(LanguageInConstraintComponent_languageIn, _super);
        function LanguageInConstraintComponent_languageIn() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        LanguageInConstraintComponent_languageIn.id = ns.LanguageInConstraintComponent_languageIn;
        LanguageInConstraintComponent_languageIn[Symbol.toStringTag] = "undefined";
        LanguageInConstraintComponent_languageIn.type = Parameter;
        LanguageInConstraintComponent_languageIn.subClassOf = [];
        LanguageInConstraintComponent_languageIn.SHACLValidators = [];
        LanguageInConstraintComponent_languageIn.OnotologyValidators = [];
        return LanguageInConstraintComponent_languageIn;
    }(Base.ClassBase));
    classes.LanguageInConstraintComponent_languageIn = LanguageInConstraintComponent_languageIn;
    var LessThanConstraintComponent = /** @class */ (function (_super) {
        __extends(LessThanConstraintComponent, _super);
        function LessThanConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        LessThanConstraintComponent.id = ns.LessThanConstraintComponent;
        LessThanConstraintComponent[Symbol.toStringTag] = "Less-than constraint component";
        LessThanConstraintComponent.type = ConstraintComponent;
        LessThanConstraintComponent.subClassOf = [];
        LessThanConstraintComponent.SHACLValidators = [];
        LessThanConstraintComponent.OnotologyValidators = [];
        return LessThanConstraintComponent;
    }(Base.ClassBase));
    classes.LessThanConstraintComponent = LessThanConstraintComponent;
    var LessThanConstraintComponent_lessThan = /** @class */ (function (_super) {
        __extends(LessThanConstraintComponent_lessThan, _super);
        function LessThanConstraintComponent_lessThan() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        LessThanConstraintComponent_lessThan.id = ns.LessThanConstraintComponent_lessThan;
        LessThanConstraintComponent_lessThan[Symbol.toStringTag] = "undefined";
        LessThanConstraintComponent_lessThan.type = Parameter;
        LessThanConstraintComponent_lessThan.subClassOf = [];
        LessThanConstraintComponent_lessThan.SHACLValidators = [];
        LessThanConstraintComponent_lessThan.OnotologyValidators = [];
        return LessThanConstraintComponent_lessThan;
    }(Base.ClassBase));
    classes.LessThanConstraintComponent_lessThan = LessThanConstraintComponent_lessThan;
    var LessThanOrEqualsConstraintComponent = /** @class */ (function (_super) {
        __extends(LessThanOrEqualsConstraintComponent, _super);
        function LessThanOrEqualsConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        LessThanOrEqualsConstraintComponent.id = ns.LessThanOrEqualsConstraintComponent;
        LessThanOrEqualsConstraintComponent[Symbol.toStringTag] = "less-than-or-equals constraint component";
        LessThanOrEqualsConstraintComponent.type = ConstraintComponent;
        LessThanOrEqualsConstraintComponent.subClassOf = [];
        LessThanOrEqualsConstraintComponent.SHACLValidators = [];
        LessThanOrEqualsConstraintComponent.OnotologyValidators = [];
        return LessThanOrEqualsConstraintComponent;
    }(Base.ClassBase));
    classes.LessThanOrEqualsConstraintComponent = LessThanOrEqualsConstraintComponent;
    var LessThanOrEqualsConstraintComponent_lessThanOrEquals = /** @class */ (function (_super) {
        __extends(LessThanOrEqualsConstraintComponent_lessThanOrEquals, _super);
        function LessThanOrEqualsConstraintComponent_lessThanOrEquals() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        LessThanOrEqualsConstraintComponent_lessThanOrEquals.id = ns.LessThanOrEqualsConstraintComponent_lessThanOrEquals;
        LessThanOrEqualsConstraintComponent_lessThanOrEquals[Symbol.toStringTag] = "undefined";
        LessThanOrEqualsConstraintComponent_lessThanOrEquals.type = Parameter;
        LessThanOrEqualsConstraintComponent_lessThanOrEquals.subClassOf = [];
        LessThanOrEqualsConstraintComponent_lessThanOrEquals.SHACLValidators = [];
        LessThanOrEqualsConstraintComponent_lessThanOrEquals.OnotologyValidators = [];
        return LessThanOrEqualsConstraintComponent_lessThanOrEquals;
    }(Base.ClassBase));
    classes.LessThanOrEqualsConstraintComponent_lessThanOrEquals = LessThanOrEqualsConstraintComponent_lessThanOrEquals;
    var Literal = /** @class */ (function (_super) {
        __extends(Literal, _super);
        function Literal() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Literal.id = ns.Literal;
        Literal[Symbol.toStringTag] = "Literal";
        Literal.type = NodeKind;
        Literal.subClassOf = [];
        Literal.SHACLValidators = [];
        Literal.OnotologyValidators = [];
        return Literal;
    }(Base.ClassBase));
    classes.Literal = Literal;
    var MaxCountConstraintComponent = /** @class */ (function (_super) {
        __extends(MaxCountConstraintComponent, _super);
        function MaxCountConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MaxCountConstraintComponent.id = ns.MaxCountConstraintComponent;
        MaxCountConstraintComponent[Symbol.toStringTag] = "Max-count constraint component";
        MaxCountConstraintComponent.type = ConstraintComponent;
        MaxCountConstraintComponent.subClassOf = [];
        MaxCountConstraintComponent.SHACLValidators = [];
        MaxCountConstraintComponent.OnotologyValidators = [];
        return MaxCountConstraintComponent;
    }(Base.ClassBase));
    classes.MaxCountConstraintComponent = MaxCountConstraintComponent;
    var MaxCountConstraintComponent_maxCount = /** @class */ (function (_super) {
        __extends(MaxCountConstraintComponent_maxCount, _super);
        function MaxCountConstraintComponent_maxCount() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MaxCountConstraintComponent_maxCount.id = ns.MaxCountConstraintComponent_maxCount;
        MaxCountConstraintComponent_maxCount[Symbol.toStringTag] = "undefined";
        MaxCountConstraintComponent_maxCount.type = Parameter;
        MaxCountConstraintComponent_maxCount.subClassOf = [];
        MaxCountConstraintComponent_maxCount.SHACLValidators = [];
        MaxCountConstraintComponent_maxCount.OnotologyValidators = [];
        return MaxCountConstraintComponent_maxCount;
    }(Base.ClassBase));
    classes.MaxCountConstraintComponent_maxCount = MaxCountConstraintComponent_maxCount;
    var MaxExclusiveConstraintComponent = /** @class */ (function (_super) {
        __extends(MaxExclusiveConstraintComponent, _super);
        function MaxExclusiveConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MaxExclusiveConstraintComponent.id = ns.MaxExclusiveConstraintComponent;
        MaxExclusiveConstraintComponent[Symbol.toStringTag] = "Max-exclusive constraint component";
        MaxExclusiveConstraintComponent.type = ConstraintComponent;
        MaxExclusiveConstraintComponent.subClassOf = [];
        MaxExclusiveConstraintComponent.SHACLValidators = [];
        MaxExclusiveConstraintComponent.OnotologyValidators = [];
        return MaxExclusiveConstraintComponent;
    }(Base.ClassBase));
    classes.MaxExclusiveConstraintComponent = MaxExclusiveConstraintComponent;
    var MaxExclusiveConstraintComponent_maxExclusive = /** @class */ (function (_super) {
        __extends(MaxExclusiveConstraintComponent_maxExclusive, _super);
        function MaxExclusiveConstraintComponent_maxExclusive() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MaxExclusiveConstraintComponent_maxExclusive.id = ns.MaxExclusiveConstraintComponent_maxExclusive;
        MaxExclusiveConstraintComponent_maxExclusive[Symbol.toStringTag] = "undefined";
        MaxExclusiveConstraintComponent_maxExclusive.type = Parameter;
        MaxExclusiveConstraintComponent_maxExclusive.subClassOf = [];
        MaxExclusiveConstraintComponent_maxExclusive.SHACLValidators = [];
        MaxExclusiveConstraintComponent_maxExclusive.OnotologyValidators = [];
        return MaxExclusiveConstraintComponent_maxExclusive;
    }(Base.ClassBase));
    classes.MaxExclusiveConstraintComponent_maxExclusive = MaxExclusiveConstraintComponent_maxExclusive;
    var MaxInclusiveConstraintComponent = /** @class */ (function (_super) {
        __extends(MaxInclusiveConstraintComponent, _super);
        function MaxInclusiveConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MaxInclusiveConstraintComponent.id = ns.MaxInclusiveConstraintComponent;
        MaxInclusiveConstraintComponent[Symbol.toStringTag] = "Max-inclusive constraint component";
        MaxInclusiveConstraintComponent.type = ConstraintComponent;
        MaxInclusiveConstraintComponent.subClassOf = [];
        MaxInclusiveConstraintComponent.SHACLValidators = [];
        MaxInclusiveConstraintComponent.OnotologyValidators = [];
        return MaxInclusiveConstraintComponent;
    }(Base.ClassBase));
    classes.MaxInclusiveConstraintComponent = MaxInclusiveConstraintComponent;
    var MaxInclusiveConstraintComponent_maxInclusive = /** @class */ (function (_super) {
        __extends(MaxInclusiveConstraintComponent_maxInclusive, _super);
        function MaxInclusiveConstraintComponent_maxInclusive() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MaxInclusiveConstraintComponent_maxInclusive.id = ns.MaxInclusiveConstraintComponent_maxInclusive;
        MaxInclusiveConstraintComponent_maxInclusive[Symbol.toStringTag] = "undefined";
        MaxInclusiveConstraintComponent_maxInclusive.type = Parameter;
        MaxInclusiveConstraintComponent_maxInclusive.subClassOf = [];
        MaxInclusiveConstraintComponent_maxInclusive.SHACLValidators = [];
        MaxInclusiveConstraintComponent_maxInclusive.OnotologyValidators = [];
        return MaxInclusiveConstraintComponent_maxInclusive;
    }(Base.ClassBase));
    classes.MaxInclusiveConstraintComponent_maxInclusive = MaxInclusiveConstraintComponent_maxInclusive;
    var MaxLengthConstraintComponent = /** @class */ (function (_super) {
        __extends(MaxLengthConstraintComponent, _super);
        function MaxLengthConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MaxLengthConstraintComponent.id = ns.MaxLengthConstraintComponent;
        MaxLengthConstraintComponent[Symbol.toStringTag] = "Max-length constraint component";
        MaxLengthConstraintComponent.type = ConstraintComponent;
        MaxLengthConstraintComponent.subClassOf = [];
        MaxLengthConstraintComponent.SHACLValidators = [];
        MaxLengthConstraintComponent.OnotologyValidators = [];
        return MaxLengthConstraintComponent;
    }(Base.ClassBase));
    classes.MaxLengthConstraintComponent = MaxLengthConstraintComponent;
    var MaxLengthConstraintComponent_maxLength = /** @class */ (function (_super) {
        __extends(MaxLengthConstraintComponent_maxLength, _super);
        function MaxLengthConstraintComponent_maxLength() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MaxLengthConstraintComponent_maxLength.id = ns.MaxLengthConstraintComponent_maxLength;
        MaxLengthConstraintComponent_maxLength[Symbol.toStringTag] = "undefined";
        MaxLengthConstraintComponent_maxLength.type = Parameter;
        MaxLengthConstraintComponent_maxLength.subClassOf = [];
        MaxLengthConstraintComponent_maxLength.SHACLValidators = [];
        MaxLengthConstraintComponent_maxLength.OnotologyValidators = [];
        return MaxLengthConstraintComponent_maxLength;
    }(Base.ClassBase));
    classes.MaxLengthConstraintComponent_maxLength = MaxLengthConstraintComponent_maxLength;
    var MinCountConstraintComponent = /** @class */ (function (_super) {
        __extends(MinCountConstraintComponent, _super);
        function MinCountConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MinCountConstraintComponent.id = ns.MinCountConstraintComponent;
        MinCountConstraintComponent[Symbol.toStringTag] = "Min-count constraint component";
        MinCountConstraintComponent.type = ConstraintComponent;
        MinCountConstraintComponent.subClassOf = [];
        MinCountConstraintComponent.SHACLValidators = [];
        MinCountConstraintComponent.OnotologyValidators = [];
        return MinCountConstraintComponent;
    }(Base.ClassBase));
    classes.MinCountConstraintComponent = MinCountConstraintComponent;
    var MinCountConstraintComponent_minCount = /** @class */ (function (_super) {
        __extends(MinCountConstraintComponent_minCount, _super);
        function MinCountConstraintComponent_minCount() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MinCountConstraintComponent_minCount.id = ns.MinCountConstraintComponent_minCount;
        MinCountConstraintComponent_minCount[Symbol.toStringTag] = "undefined";
        MinCountConstraintComponent_minCount.type = Parameter;
        MinCountConstraintComponent_minCount.subClassOf = [];
        MinCountConstraintComponent_minCount.SHACLValidators = [];
        MinCountConstraintComponent_minCount.OnotologyValidators = [];
        return MinCountConstraintComponent_minCount;
    }(Base.ClassBase));
    classes.MinCountConstraintComponent_minCount = MinCountConstraintComponent_minCount;
    var MinExclusiveConstraintComponent = /** @class */ (function (_super) {
        __extends(MinExclusiveConstraintComponent, _super);
        function MinExclusiveConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MinExclusiveConstraintComponent.id = ns.MinExclusiveConstraintComponent;
        MinExclusiveConstraintComponent[Symbol.toStringTag] = "Min-exclusive constraint component";
        MinExclusiveConstraintComponent.type = ConstraintComponent;
        MinExclusiveConstraintComponent.subClassOf = [];
        MinExclusiveConstraintComponent.SHACLValidators = [];
        MinExclusiveConstraintComponent.OnotologyValidators = [];
        return MinExclusiveConstraintComponent;
    }(Base.ClassBase));
    classes.MinExclusiveConstraintComponent = MinExclusiveConstraintComponent;
    var MinExclusiveConstraintComponent_minExclusive = /** @class */ (function (_super) {
        __extends(MinExclusiveConstraintComponent_minExclusive, _super);
        function MinExclusiveConstraintComponent_minExclusive() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MinExclusiveConstraintComponent_minExclusive.id = ns.MinExclusiveConstraintComponent_minExclusive;
        MinExclusiveConstraintComponent_minExclusive[Symbol.toStringTag] = "undefined";
        MinExclusiveConstraintComponent_minExclusive.type = Parameter;
        MinExclusiveConstraintComponent_minExclusive.subClassOf = [];
        MinExclusiveConstraintComponent_minExclusive.SHACLValidators = [];
        MinExclusiveConstraintComponent_minExclusive.OnotologyValidators = [];
        return MinExclusiveConstraintComponent_minExclusive;
    }(Base.ClassBase));
    classes.MinExclusiveConstraintComponent_minExclusive = MinExclusiveConstraintComponent_minExclusive;
    var MinInclusiveConstraintComponent = /** @class */ (function (_super) {
        __extends(MinInclusiveConstraintComponent, _super);
        function MinInclusiveConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MinInclusiveConstraintComponent.id = ns.MinInclusiveConstraintComponent;
        MinInclusiveConstraintComponent[Symbol.toStringTag] = "Min-inclusive constraint component";
        MinInclusiveConstraintComponent.type = ConstraintComponent;
        MinInclusiveConstraintComponent.subClassOf = [];
        MinInclusiveConstraintComponent.SHACLValidators = [];
        MinInclusiveConstraintComponent.OnotologyValidators = [];
        return MinInclusiveConstraintComponent;
    }(Base.ClassBase));
    classes.MinInclusiveConstraintComponent = MinInclusiveConstraintComponent;
    var MinInclusiveConstraintComponent_minInclusive = /** @class */ (function (_super) {
        __extends(MinInclusiveConstraintComponent_minInclusive, _super);
        function MinInclusiveConstraintComponent_minInclusive() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MinInclusiveConstraintComponent_minInclusive.id = ns.MinInclusiveConstraintComponent_minInclusive;
        MinInclusiveConstraintComponent_minInclusive[Symbol.toStringTag] = "undefined";
        MinInclusiveConstraintComponent_minInclusive.type = Parameter;
        MinInclusiveConstraintComponent_minInclusive.subClassOf = [];
        MinInclusiveConstraintComponent_minInclusive.SHACLValidators = [];
        MinInclusiveConstraintComponent_minInclusive.OnotologyValidators = [];
        return MinInclusiveConstraintComponent_minInclusive;
    }(Base.ClassBase));
    classes.MinInclusiveConstraintComponent_minInclusive = MinInclusiveConstraintComponent_minInclusive;
    var MinLengthConstraintComponent = /** @class */ (function (_super) {
        __extends(MinLengthConstraintComponent, _super);
        function MinLengthConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MinLengthConstraintComponent.id = ns.MinLengthConstraintComponent;
        MinLengthConstraintComponent[Symbol.toStringTag] = "Min-length constraint component";
        MinLengthConstraintComponent.type = ConstraintComponent;
        MinLengthConstraintComponent.subClassOf = [];
        MinLengthConstraintComponent.SHACLValidators = [];
        MinLengthConstraintComponent.OnotologyValidators = [];
        return MinLengthConstraintComponent;
    }(Base.ClassBase));
    classes.MinLengthConstraintComponent = MinLengthConstraintComponent;
    var MinLengthConstraintComponent_minLength = /** @class */ (function (_super) {
        __extends(MinLengthConstraintComponent_minLength, _super);
        function MinLengthConstraintComponent_minLength() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MinLengthConstraintComponent_minLength.id = ns.MinLengthConstraintComponent_minLength;
        MinLengthConstraintComponent_minLength[Symbol.toStringTag] = "undefined";
        MinLengthConstraintComponent_minLength.type = Parameter;
        MinLengthConstraintComponent_minLength.subClassOf = [];
        MinLengthConstraintComponent_minLength.SHACLValidators = [];
        MinLengthConstraintComponent_minLength.OnotologyValidators = [];
        return MinLengthConstraintComponent_minLength;
    }(Base.ClassBase));
    classes.MinLengthConstraintComponent_minLength = MinLengthConstraintComponent_minLength;
    var NodeConstraintComponent = /** @class */ (function (_super) {
        __extends(NodeConstraintComponent, _super);
        function NodeConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NodeConstraintComponent.id = ns.NodeConstraintComponent;
        NodeConstraintComponent[Symbol.toStringTag] = "Node constraint component";
        NodeConstraintComponent.type = ConstraintComponent;
        NodeConstraintComponent.subClassOf = [];
        NodeConstraintComponent.SHACLValidators = [];
        NodeConstraintComponent.OnotologyValidators = [];
        return NodeConstraintComponent;
    }(Base.ClassBase));
    classes.NodeConstraintComponent = NodeConstraintComponent;
    var NodeConstraintComponent_node = /** @class */ (function (_super) {
        __extends(NodeConstraintComponent_node, _super);
        function NodeConstraintComponent_node() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NodeConstraintComponent_node.id = ns.NodeConstraintComponent_node;
        NodeConstraintComponent_node[Symbol.toStringTag] = "undefined";
        NodeConstraintComponent_node.type = Parameter;
        NodeConstraintComponent_node.subClassOf = [];
        NodeConstraintComponent_node.SHACLValidators = [];
        NodeConstraintComponent_node.OnotologyValidators = [];
        return NodeConstraintComponent_node;
    }(Base.ClassBase));
    classes.NodeConstraintComponent_node = NodeConstraintComponent_node;
    var NodeKind = /** @class */ (function (_super) {
        __extends(NodeKind, _super);
        function NodeKind() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NodeKind.id = ns.NodeKind;
        NodeKind[Symbol.toStringTag] = "Node kind";
        NodeKind.type = Class;
        NodeKind.subClassOf = [Resource];
        NodeKind.SHACLValidators = [];
        NodeKind.OnotologyValidators = [];
        return NodeKind;
    }(Base.ClassBase));
    classes.NodeKind = NodeKind;
    var NodeKindConstraintComponent = /** @class */ (function (_super) {
        __extends(NodeKindConstraintComponent, _super);
        function NodeKindConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NodeKindConstraintComponent.id = ns.NodeKindConstraintComponent;
        NodeKindConstraintComponent[Symbol.toStringTag] = "Node-kind constraint component";
        NodeKindConstraintComponent.type = ConstraintComponent;
        NodeKindConstraintComponent.subClassOf = [];
        NodeKindConstraintComponent.SHACLValidators = [];
        NodeKindConstraintComponent.OnotologyValidators = [];
        return NodeKindConstraintComponent;
    }(Base.ClassBase));
    classes.NodeKindConstraintComponent = NodeKindConstraintComponent;
    var NodeKindConstraintComponent_nodeKind = /** @class */ (function (_super) {
        __extends(NodeKindConstraintComponent_nodeKind, _super);
        function NodeKindConstraintComponent_nodeKind() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NodeKindConstraintComponent_nodeKind.id = ns.NodeKindConstraintComponent_nodeKind;
        NodeKindConstraintComponent_nodeKind[Symbol.toStringTag] = "undefined";
        NodeKindConstraintComponent_nodeKind.type = Parameter;
        NodeKindConstraintComponent_nodeKind.subClassOf = [];
        NodeKindConstraintComponent_nodeKind.SHACLValidators = [];
        NodeKindConstraintComponent_nodeKind.OnotologyValidators = [];
        return NodeKindConstraintComponent_nodeKind;
    }(Base.ClassBase));
    classes.NodeKindConstraintComponent_nodeKind = NodeKindConstraintComponent_nodeKind;
    var NodeShape = /** @class */ (function (_super) {
        __extends(NodeShape, _super);
        function NodeShape() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NodeShape.id = ns.NodeShape;
        NodeShape[Symbol.toStringTag] = "Node shape";
        NodeShape.type = Class;
        NodeShape.subClassOf = [Shape];
        NodeShape.SHACLValidators = [];
        NodeShape.OnotologyValidators = [];
        return NodeShape;
    }(Base.ClassBase));
    classes.NodeShape = NodeShape;
    var OrConstraintComponent = /** @class */ (function (_super) {
        __extends(OrConstraintComponent, _super);
        function OrConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        OrConstraintComponent.id = ns.OrConstraintComponent;
        OrConstraintComponent[Symbol.toStringTag] = "Or constraint component";
        OrConstraintComponent.type = ConstraintComponent;
        OrConstraintComponent.subClassOf = [];
        OrConstraintComponent.SHACLValidators = [];
        OrConstraintComponent.OnotologyValidators = [];
        return OrConstraintComponent;
    }(Base.ClassBase));
    classes.OrConstraintComponent = OrConstraintComponent;
    var Parameter = /** @class */ (function (_super) {
        __extends(Parameter, _super);
        function Parameter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Parameter.id = ns.Parameter;
        Parameter[Symbol.toStringTag] = "Parameter";
        Parameter.type = Class;
        Parameter.subClassOf = [PropertyShape];
        Parameter.SHACLValidators = [];
        Parameter.OnotologyValidators = [];
        return Parameter;
    }(Base.ClassBase));
    classes.Parameter = Parameter;
    var Parameterizable = /** @class */ (function (_super) {
        __extends(Parameterizable, _super);
        function Parameterizable() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Parameterizable.id = ns.Parameterizable;
        Parameterizable[Symbol.toStringTag] = "Parameterizable";
        Parameterizable.type = Class;
        Parameterizable.subClassOf = [Resource];
        Parameterizable.SHACLValidators = [];
        Parameterizable.OnotologyValidators = [];
        return Parameterizable;
    }(Base.ClassBase));
    classes.Parameterizable = Parameterizable;
    var PatternConstraintComponent = /** @class */ (function (_super) {
        __extends(PatternConstraintComponent, _super);
        function PatternConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PatternConstraintComponent.id = ns.PatternConstraintComponent;
        PatternConstraintComponent[Symbol.toStringTag] = "Pattern constraint component";
        PatternConstraintComponent.type = ConstraintComponent;
        PatternConstraintComponent.subClassOf = [];
        PatternConstraintComponent.SHACLValidators = [];
        PatternConstraintComponent.OnotologyValidators = [];
        return PatternConstraintComponent;
    }(Base.ClassBase));
    classes.PatternConstraintComponent = PatternConstraintComponent;
    var PatternConstraintComponent_flags = /** @class */ (function (_super) {
        __extends(PatternConstraintComponent_flags, _super);
        function PatternConstraintComponent_flags() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PatternConstraintComponent_flags.id = ns.PatternConstraintComponent_flags;
        PatternConstraintComponent_flags[Symbol.toStringTag] = "undefined";
        PatternConstraintComponent_flags.type = Parameter;
        PatternConstraintComponent_flags.subClassOf = [];
        PatternConstraintComponent_flags.SHACLValidators = [];
        PatternConstraintComponent_flags.OnotologyValidators = [];
        return PatternConstraintComponent_flags;
    }(Base.ClassBase));
    classes.PatternConstraintComponent_flags = PatternConstraintComponent_flags;
    var PatternConstraintComponent_pattern = /** @class */ (function (_super) {
        __extends(PatternConstraintComponent_pattern, _super);
        function PatternConstraintComponent_pattern() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PatternConstraintComponent_pattern.id = ns.PatternConstraintComponent_pattern;
        PatternConstraintComponent_pattern[Symbol.toStringTag] = "undefined";
        PatternConstraintComponent_pattern.type = Parameter;
        PatternConstraintComponent_pattern.subClassOf = [];
        PatternConstraintComponent_pattern.SHACLValidators = [];
        PatternConstraintComponent_pattern.OnotologyValidators = [];
        return PatternConstraintComponent_pattern;
    }(Base.ClassBase));
    classes.PatternConstraintComponent_pattern = PatternConstraintComponent_pattern;
    var PrefixDeclaration = /** @class */ (function (_super) {
        __extends(PrefixDeclaration, _super);
        function PrefixDeclaration() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PrefixDeclaration.id = ns.PrefixDeclaration;
        PrefixDeclaration[Symbol.toStringTag] = "Prefix declaration";
        PrefixDeclaration.type = Class;
        PrefixDeclaration.subClassOf = [Resource];
        PrefixDeclaration.SHACLValidators = [];
        PrefixDeclaration.OnotologyValidators = [];
        return PrefixDeclaration;
    }(Base.ClassBase));
    classes.PrefixDeclaration = PrefixDeclaration;
    var PropertyConstraintComponent = /** @class */ (function (_super) {
        __extends(PropertyConstraintComponent, _super);
        function PropertyConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PropertyConstraintComponent.id = ns.PropertyConstraintComponent;
        PropertyConstraintComponent[Symbol.toStringTag] = "Property constraint component";
        PropertyConstraintComponent.type = ConstraintComponent;
        PropertyConstraintComponent.subClassOf = [];
        PropertyConstraintComponent.SHACLValidators = [];
        PropertyConstraintComponent.OnotologyValidators = [];
        return PropertyConstraintComponent;
    }(Base.ClassBase));
    classes.PropertyConstraintComponent = PropertyConstraintComponent;
    var PropertyGroup = /** @class */ (function (_super) {
        __extends(PropertyGroup, _super);
        function PropertyGroup() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PropertyGroup.id = ns.PropertyGroup;
        PropertyGroup[Symbol.toStringTag] = "Property group";
        PropertyGroup.type = Class;
        PropertyGroup.subClassOf = [Resource];
        PropertyGroup.SHACLValidators = [];
        PropertyGroup.OnotologyValidators = [];
        return PropertyGroup;
    }(Base.ClassBase));
    classes.PropertyGroup = PropertyGroup;
    var PropertyShape = /** @class */ (function (_super) {
        __extends(PropertyShape, _super);
        function PropertyShape() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PropertyShape.id = ns.PropertyShape;
        PropertyShape[Symbol.toStringTag] = "Property shape";
        PropertyShape.type = Class;
        PropertyShape.subClassOf = [Shape];
        PropertyShape.SHACLValidators = [];
        PropertyShape.OnotologyValidators = [];
        return PropertyShape;
    }(Base.ClassBase));
    classes.PropertyShape = PropertyShape;
    var QualifiedMaxCountConstraintComponent = /** @class */ (function (_super) {
        __extends(QualifiedMaxCountConstraintComponent, _super);
        function QualifiedMaxCountConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        QualifiedMaxCountConstraintComponent.id = ns.QualifiedMaxCountConstraintComponent;
        QualifiedMaxCountConstraintComponent[Symbol.toStringTag] = "Qualified-max-count constraint component";
        QualifiedMaxCountConstraintComponent.type = ConstraintComponent;
        QualifiedMaxCountConstraintComponent.subClassOf = [];
        QualifiedMaxCountConstraintComponent.SHACLValidators = [];
        QualifiedMaxCountConstraintComponent.OnotologyValidators = [];
        return QualifiedMaxCountConstraintComponent;
    }(Base.ClassBase));
    classes.QualifiedMaxCountConstraintComponent = QualifiedMaxCountConstraintComponent;
    var QualifiedMaxCountConstraintComponent_qualifiedMaxCount = /** @class */ (function (_super) {
        __extends(QualifiedMaxCountConstraintComponent_qualifiedMaxCount, _super);
        function QualifiedMaxCountConstraintComponent_qualifiedMaxCount() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        QualifiedMaxCountConstraintComponent_qualifiedMaxCount.id = ns.QualifiedMaxCountConstraintComponent_qualifiedMaxCount;
        QualifiedMaxCountConstraintComponent_qualifiedMaxCount[Symbol.toStringTag] = "undefined";
        QualifiedMaxCountConstraintComponent_qualifiedMaxCount.type = Parameter;
        QualifiedMaxCountConstraintComponent_qualifiedMaxCount.subClassOf = [];
        QualifiedMaxCountConstraintComponent_qualifiedMaxCount.SHACLValidators = [];
        QualifiedMaxCountConstraintComponent_qualifiedMaxCount.OnotologyValidators = [];
        return QualifiedMaxCountConstraintComponent_qualifiedMaxCount;
    }(Base.ClassBase));
    classes.QualifiedMaxCountConstraintComponent_qualifiedMaxCount = QualifiedMaxCountConstraintComponent_qualifiedMaxCount;
    var QualifiedMaxCountConstraintComponent_qualifiedValueShape = /** @class */ (function (_super) {
        __extends(QualifiedMaxCountConstraintComponent_qualifiedValueShape, _super);
        function QualifiedMaxCountConstraintComponent_qualifiedValueShape() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        QualifiedMaxCountConstraintComponent_qualifiedValueShape.id = ns.QualifiedMaxCountConstraintComponent_qualifiedValueShape;
        QualifiedMaxCountConstraintComponent_qualifiedValueShape[Symbol.toStringTag] = "undefined";
        QualifiedMaxCountConstraintComponent_qualifiedValueShape.type = Parameter;
        QualifiedMaxCountConstraintComponent_qualifiedValueShape.subClassOf = [];
        QualifiedMaxCountConstraintComponent_qualifiedValueShape.SHACLValidators = [];
        QualifiedMaxCountConstraintComponent_qualifiedValueShape.OnotologyValidators = [];
        return QualifiedMaxCountConstraintComponent_qualifiedValueShape;
    }(Base.ClassBase));
    classes.QualifiedMaxCountConstraintComponent_qualifiedValueShape = QualifiedMaxCountConstraintComponent_qualifiedValueShape;
    var QualifiedMaxCountConstraintComponent_qualifiedValueShapesDisjoint = /** @class */ (function (_super) {
        __extends(QualifiedMaxCountConstraintComponent_qualifiedValueShapesDisjoint, _super);
        function QualifiedMaxCountConstraintComponent_qualifiedValueShapesDisjoint() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        QualifiedMaxCountConstraintComponent_qualifiedValueShapesDisjoint.id = ns.QualifiedMaxCountConstraintComponent_qualifiedValueShapesDisjoint;
        QualifiedMaxCountConstraintComponent_qualifiedValueShapesDisjoint[Symbol.toStringTag] = "undefined";
        QualifiedMaxCountConstraintComponent_qualifiedValueShapesDisjoint.type = Parameter;
        QualifiedMaxCountConstraintComponent_qualifiedValueShapesDisjoint.subClassOf = [];
        QualifiedMaxCountConstraintComponent_qualifiedValueShapesDisjoint.SHACLValidators = [];
        QualifiedMaxCountConstraintComponent_qualifiedValueShapesDisjoint.OnotologyValidators = [];
        return QualifiedMaxCountConstraintComponent_qualifiedValueShapesDisjoint;
    }(Base.ClassBase));
    classes.QualifiedMaxCountConstraintComponent_qualifiedValueShapesDisjoint = QualifiedMaxCountConstraintComponent_qualifiedValueShapesDisjoint;
    var QualifiedMinCountConstraintComponent = /** @class */ (function (_super) {
        __extends(QualifiedMinCountConstraintComponent, _super);
        function QualifiedMinCountConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        QualifiedMinCountConstraintComponent.id = ns.QualifiedMinCountConstraintComponent;
        QualifiedMinCountConstraintComponent[Symbol.toStringTag] = "Qualified-min-count constraint component";
        QualifiedMinCountConstraintComponent.type = ConstraintComponent;
        QualifiedMinCountConstraintComponent.subClassOf = [];
        QualifiedMinCountConstraintComponent.SHACLValidators = [];
        QualifiedMinCountConstraintComponent.OnotologyValidators = [];
        return QualifiedMinCountConstraintComponent;
    }(Base.ClassBase));
    classes.QualifiedMinCountConstraintComponent = QualifiedMinCountConstraintComponent;
    var QualifiedMinCountConstraintComponent_qualifiedValueShapesDisjoint = /** @class */ (function (_super) {
        __extends(QualifiedMinCountConstraintComponent_qualifiedValueShapesDisjoint, _super);
        function QualifiedMinCountConstraintComponent_qualifiedValueShapesDisjoint() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        QualifiedMinCountConstraintComponent_qualifiedValueShapesDisjoint.id = ns.QualifiedMinCountConstraintComponent_qualifiedValueShapesDisjoint;
        QualifiedMinCountConstraintComponent_qualifiedValueShapesDisjoint[Symbol.toStringTag] = "undefined";
        QualifiedMinCountConstraintComponent_qualifiedValueShapesDisjoint.type = Parameter;
        QualifiedMinCountConstraintComponent_qualifiedValueShapesDisjoint.subClassOf = [];
        QualifiedMinCountConstraintComponent_qualifiedValueShapesDisjoint.SHACLValidators = [];
        QualifiedMinCountConstraintComponent_qualifiedValueShapesDisjoint.OnotologyValidators = [];
        return QualifiedMinCountConstraintComponent_qualifiedValueShapesDisjoint;
    }(Base.ClassBase));
    classes.QualifiedMinCountConstraintComponent_qualifiedValueShapesDisjoint = QualifiedMinCountConstraintComponent_qualifiedValueShapesDisjoint;
    var ResultAnnotation = /** @class */ (function (_super) {
        __extends(ResultAnnotation, _super);
        function ResultAnnotation() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ResultAnnotation.id = ns.ResultAnnotation;
        ResultAnnotation[Symbol.toStringTag] = "Result annotation";
        ResultAnnotation.type = Class;
        ResultAnnotation.subClassOf = [Resource];
        ResultAnnotation.SHACLValidators = [];
        ResultAnnotation.OnotologyValidators = [];
        return ResultAnnotation;
    }(Base.ClassBase));
    classes.ResultAnnotation = ResultAnnotation;
    var Rule = /** @class */ (function (_super) {
        __extends(Rule, _super);
        function Rule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Rule.id = ns.Rule;
        Rule[Symbol.toStringTag] = "Rule";
        Rule.type = Class;
        Rule.subClassOf = [Resource];
        Rule.SHACLValidators = [];
        Rule.OnotologyValidators = [];
        return Rule;
    }(Base.ClassBase));
    classes.Rule = Rule;
    var SPARQLAskExecutable = /** @class */ (function (_super) {
        __extends(SPARQLAskExecutable, _super);
        function SPARQLAskExecutable() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SPARQLAskExecutable.id = ns.SPARQLAskExecutable;
        SPARQLAskExecutable[Symbol.toStringTag] = "SPARQL ASK executable";
        SPARQLAskExecutable.type = Class;
        SPARQLAskExecutable.subClassOf = [SPARQLExecutable];
        SPARQLAskExecutable.SHACLValidators = [];
        SPARQLAskExecutable.OnotologyValidators = [];
        return SPARQLAskExecutable;
    }(Base.ClassBase));
    classes.SPARQLAskExecutable = SPARQLAskExecutable;
    var SPARQLAskValidator = /** @class */ (function (_super) {
        __extends(SPARQLAskValidator, _super);
        function SPARQLAskValidator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SPARQLAskValidator.id = ns.SPARQLAskValidator;
        SPARQLAskValidator[Symbol.toStringTag] = "SPARQL ASK validator";
        SPARQLAskValidator.type = Class;
        SPARQLAskValidator.subClassOf = [Validator, SPARQLAskExecutable];
        SPARQLAskValidator.SHACLValidators = [];
        SPARQLAskValidator.OnotologyValidators = [];
        return SPARQLAskValidator;
    }(Base.ClassBase));
    classes.SPARQLAskValidator = SPARQLAskValidator;
    var SPARQLConstraint = /** @class */ (function (_super) {
        __extends(SPARQLConstraint, _super);
        function SPARQLConstraint() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SPARQLConstraint.id = ns.SPARQLConstraint;
        SPARQLConstraint[Symbol.toStringTag] = "SPARQL constraint";
        SPARQLConstraint.type = Class;
        SPARQLConstraint.subClassOf = [SPARQLSelectExecutable];
        SPARQLConstraint.SHACLValidators = [];
        SPARQLConstraint.OnotologyValidators = [];
        return SPARQLConstraint;
    }(Base.ClassBase));
    classes.SPARQLConstraint = SPARQLConstraint;
    var SPARQLConstraintComponent = /** @class */ (function (_super) {
        __extends(SPARQLConstraintComponent, _super);
        function SPARQLConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SPARQLConstraintComponent.id = ns.SPARQLConstraintComponent;
        SPARQLConstraintComponent[Symbol.toStringTag] = "SPARQL constraint component";
        SPARQLConstraintComponent.type = ConstraintComponent;
        SPARQLConstraintComponent.subClassOf = [];
        SPARQLConstraintComponent.SHACLValidators = [];
        SPARQLConstraintComponent.OnotologyValidators = [];
        return SPARQLConstraintComponent;
    }(Base.ClassBase));
    classes.SPARQLConstraintComponent = SPARQLConstraintComponent;
    var SPARQLFunction = /** @class */ (function (_super) {
        __extends(SPARQLFunction, _super);
        function SPARQLFunction() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SPARQLFunction.id = ns.SPARQLFunction;
        SPARQLFunction[Symbol.toStringTag] = "SPARQL function";
        SPARQLFunction.type = Class;
        SPARQLFunction.subClassOf = [SPARQLAskExecutable, SPARQLSelectExecutable, Function];
        SPARQLFunction.SHACLValidators = [];
        SPARQLFunction.OnotologyValidators = [];
        return SPARQLFunction;
    }(Base.ClassBase));
    classes.SPARQLFunction = SPARQLFunction;
    var SPARQLRule = /** @class */ (function (_super) {
        __extends(SPARQLRule, _super);
        function SPARQLRule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SPARQLRule.id = ns.SPARQLRule;
        SPARQLRule[Symbol.toStringTag] = "SPARQL CONSTRUCT rule";
        SPARQLRule.type = Class;
        SPARQLRule.subClassOf = [SPARQLConstructExecutable, Rule];
        SPARQLRule.SHACLValidators = [];
        SPARQLRule.OnotologyValidators = [];
        return SPARQLRule;
    }(Base.ClassBase));
    classes.SPARQLRule = SPARQLRule;
    var SPARQLSelectExecutable = /** @class */ (function (_super) {
        __extends(SPARQLSelectExecutable, _super);
        function SPARQLSelectExecutable() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SPARQLSelectExecutable.id = ns.SPARQLSelectExecutable;
        SPARQLSelectExecutable[Symbol.toStringTag] = "SPARQL SELECT executable";
        SPARQLSelectExecutable.type = Class;
        SPARQLSelectExecutable.subClassOf = [SPARQLExecutable];
        SPARQLSelectExecutable.SHACLValidators = [];
        SPARQLSelectExecutable.OnotologyValidators = [];
        return SPARQLSelectExecutable;
    }(Base.ClassBase));
    classes.SPARQLSelectExecutable = SPARQLSelectExecutable;
    var SPARQLSelectValidator = /** @class */ (function (_super) {
        __extends(SPARQLSelectValidator, _super);
        function SPARQLSelectValidator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SPARQLSelectValidator.id = ns.SPARQLSelectValidator;
        SPARQLSelectValidator[Symbol.toStringTag] = "SPARQL SELECT validator";
        SPARQLSelectValidator.type = Class;
        SPARQLSelectValidator.subClassOf = [Validator, SPARQLSelectExecutable];
        SPARQLSelectValidator.SHACLValidators = [];
        SPARQLSelectValidator.OnotologyValidators = [];
        return SPARQLSelectValidator;
    }(Base.ClassBase));
    classes.SPARQLSelectValidator = SPARQLSelectValidator;
    var SPARQLTarget = /** @class */ (function (_super) {
        __extends(SPARQLTarget, _super);
        function SPARQLTarget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SPARQLTarget.id = ns.SPARQLTarget;
        SPARQLTarget[Symbol.toStringTag] = "SPARQL target";
        SPARQLTarget.type = Class;
        SPARQLTarget.subClassOf = [SPARQLAskExecutable, SPARQLSelectExecutable, Target];
        SPARQLTarget.SHACLValidators = [];
        SPARQLTarget.OnotologyValidators = [];
        return SPARQLTarget;
    }(Base.ClassBase));
    classes.SPARQLTarget = SPARQLTarget;
    var SPARQLTargetType = /** @class */ (function (_super) {
        __extends(SPARQLTargetType, _super);
        function SPARQLTargetType() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SPARQLTargetType.id = ns.SPARQLTargetType;
        SPARQLTargetType[Symbol.toStringTag] = "SPARQL target type";
        SPARQLTargetType.type = Class;
        SPARQLTargetType.subClassOf = [SPARQLAskExecutable, SPARQLSelectExecutable, TargetType];
        SPARQLTargetType.SHACLValidators = [];
        SPARQLTargetType.OnotologyValidators = [];
        return SPARQLTargetType;
    }(Base.ClassBase));
    classes.SPARQLTargetType = SPARQLTargetType;
    var Severity = /** @class */ (function (_super) {
        __extends(Severity, _super);
        function Severity() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Severity.id = ns.Severity;
        Severity[Symbol.toStringTag] = "Severity";
        Severity.type = Class;
        Severity.subClassOf = [Resource];
        Severity.SHACLValidators = [];
        Severity.OnotologyValidators = [];
        return Severity;
    }(Base.ClassBase));
    classes.Severity = Severity;
    var Shape = /** @class */ (function (_super) {
        __extends(Shape, _super);
        function Shape() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Shape.id = ns.Shape;
        Shape[Symbol.toStringTag] = "Shape";
        Shape.type = Class;
        Shape.subClassOf = [Resource];
        Shape.SHACLValidators = [];
        Shape.OnotologyValidators = [];
        return Shape;
    }(Base.ClassBase));
    classes.Shape = Shape;
    var TripleRule = /** @class */ (function (_super) {
        __extends(TripleRule, _super);
        function TripleRule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TripleRule.id = ns.TripleRule;
        TripleRule[Symbol.toStringTag] = "A rule based on triple (subject, predicate, object) pattern.";
        TripleRule.type = Class;
        TripleRule.subClassOf = [Rule];
        TripleRule.SHACLValidators = [];
        TripleRule.OnotologyValidators = [];
        return TripleRule;
    }(Base.ClassBase));
    classes.TripleRule = TripleRule;
    var UniqueLangConstraintComponent = /** @class */ (function (_super) {
        __extends(UniqueLangConstraintComponent, _super);
        function UniqueLangConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UniqueLangConstraintComponent.id = ns.UniqueLangConstraintComponent;
        UniqueLangConstraintComponent[Symbol.toStringTag] = "Unique-languages constraint component";
        UniqueLangConstraintComponent.type = ConstraintComponent;
        UniqueLangConstraintComponent.subClassOf = [];
        UniqueLangConstraintComponent.SHACLValidators = [];
        UniqueLangConstraintComponent.OnotologyValidators = [];
        return UniqueLangConstraintComponent;
    }(Base.ClassBase));
    classes.UniqueLangConstraintComponent = UniqueLangConstraintComponent;
    var UniqueLangConstraintComponent_uniqueLang = /** @class */ (function (_super) {
        __extends(UniqueLangConstraintComponent_uniqueLang, _super);
        function UniqueLangConstraintComponent_uniqueLang() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UniqueLangConstraintComponent_uniqueLang.id = ns.UniqueLangConstraintComponent_uniqueLang;
        UniqueLangConstraintComponent_uniqueLang[Symbol.toStringTag] = "undefined";
        UniqueLangConstraintComponent_uniqueLang.type = Parameter;
        UniqueLangConstraintComponent_uniqueLang.subClassOf = [];
        UniqueLangConstraintComponent_uniqueLang.SHACLValidators = [];
        UniqueLangConstraintComponent_uniqueLang.OnotologyValidators = [];
        return UniqueLangConstraintComponent_uniqueLang;
    }(Base.ClassBase));
    classes.UniqueLangConstraintComponent_uniqueLang = UniqueLangConstraintComponent_uniqueLang;
    var ValidationReport = /** @class */ (function (_super) {
        __extends(ValidationReport, _super);
        function ValidationReport() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ValidationReport.id = ns.ValidationReport;
        ValidationReport[Symbol.toStringTag] = "Validation report";
        ValidationReport.type = Class;
        ValidationReport.subClassOf = [Resource];
        ValidationReport.SHACLValidators = [];
        ValidationReport.OnotologyValidators = [];
        return ValidationReport;
    }(Base.ClassBase));
    classes.ValidationReport = ValidationReport;
    var ValidationResult = /** @class */ (function (_super) {
        __extends(ValidationResult, _super);
        function ValidationResult() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ValidationResult.id = ns.ValidationResult;
        ValidationResult[Symbol.toStringTag] = "Validation result";
        ValidationResult.type = Class;
        ValidationResult.subClassOf = [AbstractResult];
        ValidationResult.SHACLValidators = [];
        ValidationResult.OnotologyValidators = [];
        return ValidationResult;
    }(Base.ClassBase));
    classes.ValidationResult = ValidationResult;
    var Validator = /** @class */ (function (_super) {
        __extends(Validator, _super);
        function Validator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Validator.id = ns.Validator;
        Validator[Symbol.toStringTag] = "Validator";
        Validator.type = Class;
        Validator.subClassOf = [Resource];
        Validator.SHACLValidators = [];
        Validator.OnotologyValidators = [];
        return Validator;
    }(Base.ClassBase));
    classes.Validator = Validator;
    var Violation = /** @class */ (function (_super) {
        __extends(Violation, _super);
        function Violation() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Violation.id = ns.Violation;
        Violation[Symbol.toStringTag] = "Violation";
        Violation.type = Severity;
        Violation.subClassOf = [];
        Violation.SHACLValidators = [];
        Violation.OnotologyValidators = [];
        return Violation;
    }(Base.ClassBase));
    classes.Violation = Violation;
    var Warning = /** @class */ (function (_super) {
        __extends(Warning, _super);
        function Warning() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Warning.id = ns.Warning;
        Warning[Symbol.toStringTag] = "Warning";
        Warning.type = Severity;
        Warning.subClassOf = [];
        Warning.SHACLValidators = [];
        Warning.OnotologyValidators = [];
        return Warning;
    }(Base.ClassBase));
    classes.Warning = Warning;
    var SPARQLConstructExecutable = /** @class */ (function (_super) {
        __extends(SPARQLConstructExecutable, _super);
        function SPARQLConstructExecutable() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SPARQLConstructExecutable.id = ns.SPARQLConstructExecutable;
        SPARQLConstructExecutable[Symbol.toStringTag] = "SPARQL CONSTRUCT executable";
        SPARQLConstructExecutable.type = Class;
        SPARQLConstructExecutable.subClassOf = [SPARQLExecutable];
        SPARQLConstructExecutable.SHACLValidators = [];
        SPARQLConstructExecutable.OnotologyValidators = [];
        return SPARQLConstructExecutable;
    }(Base.ClassBase));
    classes.SPARQLConstructExecutable = SPARQLConstructExecutable;
    var NotConstraintComponent = /** @class */ (function (_super) {
        __extends(NotConstraintComponent, _super);
        function NotConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NotConstraintComponent.id = ns.NotConstraintComponent;
        NotConstraintComponent[Symbol.toStringTag] = "Not constraint component";
        NotConstraintComponent.type = ConstraintComponent;
        NotConstraintComponent.subClassOf = [];
        NotConstraintComponent.SHACLValidators = [];
        NotConstraintComponent.OnotologyValidators = [];
        return NotConstraintComponent;
    }(Base.ClassBase));
    classes.NotConstraintComponent = NotConstraintComponent;
    var TargetType = /** @class */ (function (_super) {
        __extends(TargetType, _super);
        function TargetType() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TargetType.id = ns.TargetType;
        TargetType[Symbol.toStringTag] = "Target type";
        TargetType.type = Class;
        TargetType.subClassOf = [Class, Parameterizable];
        TargetType.SHACLValidators = [];
        TargetType.OnotologyValidators = [];
        return TargetType;
    }(Base.ClassBase));
    classes.TargetType = TargetType;
    var PropertyConstraintComponent_property = /** @class */ (function (_super) {
        __extends(PropertyConstraintComponent_property, _super);
        function PropertyConstraintComponent_property() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PropertyConstraintComponent_property.id = ns.PropertyConstraintComponent_property;
        PropertyConstraintComponent_property[Symbol.toStringTag] = "undefined";
        PropertyConstraintComponent_property.type = Parameter;
        PropertyConstraintComponent_property.subClassOf = [];
        PropertyConstraintComponent_property.SHACLValidators = [];
        PropertyConstraintComponent_property.OnotologyValidators = [];
        return PropertyConstraintComponent_property;
    }(Base.ClassBase));
    classes.PropertyConstraintComponent_property = PropertyConstraintComponent_property;
    var Target = /** @class */ (function (_super) {
        __extends(Target, _super);
        function Target() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Target.id = ns.Target;
        Target[Symbol.toStringTag] = "Target";
        Target.type = Class;
        Target.subClassOf = [Resource];
        Target.SHACLValidators = [];
        Target.OnotologyValidators = [];
        return Target;
    }(Base.ClassBase));
    classes.Target = Target;
    var XoneConstraintComponent = /** @class */ (function (_super) {
        __extends(XoneConstraintComponent, _super);
        function XoneConstraintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        XoneConstraintComponent.id = ns.XoneConstraintComponent;
        XoneConstraintComponent[Symbol.toStringTag] = "Exactly one constraint component";
        XoneConstraintComponent.type = ConstraintComponent;
        XoneConstraintComponent.subClassOf = [];
        XoneConstraintComponent.SHACLValidators = [];
        XoneConstraintComponent.OnotologyValidators = [];
        return XoneConstraintComponent;
    }(Base.ClassBase));
    classes.XoneConstraintComponent = XoneConstraintComponent;
    var NotConstraintComponent_not = /** @class */ (function (_super) {
        __extends(NotConstraintComponent_not, _super);
        function NotConstraintComponent_not() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NotConstraintComponent_not.id = ns.NotConstraintComponent_not;
        NotConstraintComponent_not[Symbol.toStringTag] = "undefined";
        NotConstraintComponent_not.type = Parameter;
        NotConstraintComponent_not.subClassOf = [];
        NotConstraintComponent_not.SHACLValidators = [];
        NotConstraintComponent_not.OnotologyValidators = [];
        return NotConstraintComponent_not;
    }(Base.ClassBase));
    classes.NotConstraintComponent_not = NotConstraintComponent_not;
    var OrConstraintComponent_or = /** @class */ (function (_super) {
        __extends(OrConstraintComponent_or, _super);
        function OrConstraintComponent_or() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        OrConstraintComponent_or.id = ns.OrConstraintComponent_or;
        OrConstraintComponent_or[Symbol.toStringTag] = "undefined";
        OrConstraintComponent_or.type = Parameter;
        OrConstraintComponent_or.subClassOf = [];
        OrConstraintComponent_or.SHACLValidators = [];
        OrConstraintComponent_or.OnotologyValidators = [];
        return OrConstraintComponent_or;
    }(Base.ClassBase));
    classes.OrConstraintComponent_or = OrConstraintComponent_or;
    var JSTargetType = /** @class */ (function (_super) {
        __extends(JSTargetType, _super);
        function JSTargetType() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        JSTargetType.id = ns.JSTargetType;
        JSTargetType[Symbol.toStringTag] = "JavaScript target type";
        JSTargetType.type = Class;
        JSTargetType.subClassOf = [TargetType, JSExecutable];
        JSTargetType.SHACLValidators = [];
        JSTargetType.OnotologyValidators = [];
        return JSTargetType;
    }(Base.ClassBase));
    classes.JSTargetType = JSTargetType;
    var JSValidator = /** @class */ (function (_super) {
        __extends(JSValidator, _super);
        function JSValidator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        JSValidator.id = ns.JSValidator;
        JSValidator[Symbol.toStringTag] = "JavaScript validator";
        JSValidator.type = Class;
        JSValidator.subClassOf = [Validator, JSExecutable];
        JSValidator.SHACLValidators = [];
        JSValidator.OnotologyValidators = [];
        return JSValidator;
    }(Base.ClassBase));
    classes.JSValidator = JSValidator;
    var QualifiedMinCountConstraintComponent_qualifiedMinCount = /** @class */ (function (_super) {
        __extends(QualifiedMinCountConstraintComponent_qualifiedMinCount, _super);
        function QualifiedMinCountConstraintComponent_qualifiedMinCount() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        QualifiedMinCountConstraintComponent_qualifiedMinCount.id = ns.QualifiedMinCountConstraintComponent_qualifiedMinCount;
        QualifiedMinCountConstraintComponent_qualifiedMinCount[Symbol.toStringTag] = "undefined";
        QualifiedMinCountConstraintComponent_qualifiedMinCount.type = Parameter;
        QualifiedMinCountConstraintComponent_qualifiedMinCount.subClassOf = [];
        QualifiedMinCountConstraintComponent_qualifiedMinCount.SHACLValidators = [];
        QualifiedMinCountConstraintComponent_qualifiedMinCount.OnotologyValidators = [];
        return QualifiedMinCountConstraintComponent_qualifiedMinCount;
    }(Base.ClassBase));
    classes.QualifiedMinCountConstraintComponent_qualifiedMinCount = QualifiedMinCountConstraintComponent_qualifiedMinCount;
    var QualifiedMinCountConstraintComponent_qualifiedValueShape = /** @class */ (function (_super) {
        __extends(QualifiedMinCountConstraintComponent_qualifiedValueShape, _super);
        function QualifiedMinCountConstraintComponent_qualifiedValueShape() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        QualifiedMinCountConstraintComponent_qualifiedValueShape.id = ns.QualifiedMinCountConstraintComponent_qualifiedValueShape;
        QualifiedMinCountConstraintComponent_qualifiedValueShape[Symbol.toStringTag] = "undefined";
        QualifiedMinCountConstraintComponent_qualifiedValueShape.type = Parameter;
        QualifiedMinCountConstraintComponent_qualifiedValueShape.subClassOf = [];
        QualifiedMinCountConstraintComponent_qualifiedValueShape.SHACLValidators = [];
        QualifiedMinCountConstraintComponent_qualifiedValueShape.OnotologyValidators = [];
        return QualifiedMinCountConstraintComponent_qualifiedValueShape;
    }(Base.ClassBase));
    classes.QualifiedMinCountConstraintComponent_qualifiedValueShape = QualifiedMinCountConstraintComponent_qualifiedValueShape;
    var SPARQLConstraintComponent_sparql = /** @class */ (function (_super) {
        __extends(SPARQLConstraintComponent_sparql, _super);
        function SPARQLConstraintComponent_sparql() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SPARQLConstraintComponent_sparql.id = ns.SPARQLConstraintComponent_sparql;
        SPARQLConstraintComponent_sparql[Symbol.toStringTag] = "undefined";
        SPARQLConstraintComponent_sparql.type = Parameter;
        SPARQLConstraintComponent_sparql.subClassOf = [];
        SPARQLConstraintComponent_sparql.SHACLValidators = [];
        SPARQLConstraintComponent_sparql.OnotologyValidators = [];
        return SPARQLConstraintComponent_sparql;
    }(Base.ClassBase));
    classes.SPARQLConstraintComponent_sparql = SPARQLConstraintComponent_sparql;
    var SPARQLExecutable = /** @class */ (function (_super) {
        __extends(SPARQLExecutable, _super);
        function SPARQLExecutable() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SPARQLExecutable.id = ns.SPARQLExecutable;
        SPARQLExecutable[Symbol.toStringTag] = "SPARQL executable";
        SPARQLExecutable.type = Class;
        SPARQLExecutable.subClassOf = [Resource];
        SPARQLExecutable.SHACLValidators = [];
        SPARQLExecutable.OnotologyValidators = [];
        return SPARQLExecutable;
    }(Base.ClassBase));
    classes.SPARQLExecutable = SPARQLExecutable;
    var SPARQLUpdateExecutable = /** @class */ (function (_super) {
        __extends(SPARQLUpdateExecutable, _super);
        function SPARQLUpdateExecutable() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SPARQLUpdateExecutable.id = ns.SPARQLUpdateExecutable;
        SPARQLUpdateExecutable[Symbol.toStringTag] = "SPARQL UPDATE executable";
        SPARQLUpdateExecutable.type = Class;
        SPARQLUpdateExecutable.subClassOf = [SPARQLExecutable];
        SPARQLUpdateExecutable.SHACLValidators = [];
        SPARQLUpdateExecutable.OnotologyValidators = [];
        return SPARQLUpdateExecutable;
    }(Base.ClassBase));
    classes.SPARQLUpdateExecutable = SPARQLUpdateExecutable;
    var XoneConstraintComponent_xone = /** @class */ (function (_super) {
        __extends(XoneConstraintComponent_xone, _super);
        function XoneConstraintComponent_xone() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        XoneConstraintComponent_xone.id = ns.XoneConstraintComponent_xone;
        XoneConstraintComponent_xone[Symbol.toStringTag] = "undefined";
        XoneConstraintComponent_xone.type = Parameter;
        XoneConstraintComponent_xone.subClassOf = [];
        XoneConstraintComponent_xone.SHACLValidators = [];
        XoneConstraintComponent_xone.OnotologyValidators = [];
        return XoneConstraintComponent_xone;
    }(Base.ClassBase));
    classes.XoneConstraintComponent_xone = XoneConstraintComponent_xone;
    var _this = /** @class */ (function (_super) {
        __extends(_this, _super);
        function _this() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        _this.id = ns._this;
        _this[Symbol.toStringTag] = "this";
        _this.type = Resource;
        _this.subClassOf = [];
        _this.SHACLValidators = [];
        _this.OnotologyValidators = [];
        return _this;
    }(Base.ClassBase));
    classes._this = _this;
})(classes = exports.classes || (exports.classes = {}));
