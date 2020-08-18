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
exports.Trigger = exports.Control = exports.Role = exports.PhysicalHoldingSpace = exports.TemporalCoverage = exports.LogicalCollection = exports.PhysicalArtefact = exports.RecordControlEvent = exports.RecordStorageStandard = exports.HoldingSpace = exports.Classifier = exports.Organisation = exports.ArtefactSendEvent = exports.DecisionStatus = exports.CreationEvent = exports.RecordDisposalEvent = exports.DisposalClass = exports.Quality = exports.RecordReplacementEvent = exports.User = exports.SpatialCoverage = exports.ShareActivity = exports.SecurityControl = exports.RecordsAuthorityFunction = exports.RecordTransferEvent = exports.RecordSentencingEvent = exports.VersionHistory = exports.RecordFreezeEvent = exports.RecordDestructionEvent = exports.RecordDecisionEvent = exports.RecordAuditEvent = exports.Series = exports.PhysicalCollection = exports.Person = exports.OrganisationalUnit = exports.MinimumMetadataSetPolicy = exports.Manifest = exports.MaintainActivity = exports.JurisdictionalCoverage = exports.InformationManagementPolicy = exports.FormFactor = exports.RecordsAuthorityPolicy = exports.DigitalPreservationPolicy = exports.DigitalHoldingSpace = exports.DigitalArtefact = exports.Creator = exports.Coverage = exports.ControlledVocabulary = exports.Collection = exports.BusinessOwner = exports.ArtefactShareEvent = exports.ArtefactPublishEvent = exports.ArtefactControlEvent = exports.ArtefactChangeEvent = exports.IntellectualControlSystem = exports.InformationSystem = exports.Event = exports.PreservationQuality = exports.Permission = exports.Administrator = exports.Record = exports.SecurityClassification = exports.Status = exports.SpatialLocation = exports.Policy = exports.Association = exports.AccessTrigger = exports.Agent = exports.Function = exports.Activity = exports.AccessControl = exports.AccessActivity = exports.AGIFTFunction = exports.Artefact = void 0;
var bases_1 = require("../bases");
var enum_1 = require("./enum");
var Artefact = /** @class */ (function (_super) {
    __extends(Artefact, _super);
    function Artefact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Artefact.id = enum_1.ns.Artefact;
    Artefact.label = "Artefact";
    Artefact.type = Class;
    Artefact.subClassOf = [];
    Artefact.SHACLValidators = [];
    Artefact.OnotologyValidators = [];
    return Artefact;
}(bases_1.Base.BaseClass));
exports.Artefact = Artefact;
var AGIFTFunction = /** @class */ (function (_super) {
    __extends(AGIFTFunction, _super);
    function AGIFTFunction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AGIFTFunction.id = enum_1.ns.AGIFTFunction;
    AGIFTFunction.label = "AGIFT Function";
    AGIFTFunction.type = Class;
    AGIFTFunction.subClassOf = [Function];
    AGIFTFunction.SHACLValidators = [];
    AGIFTFunction.OnotologyValidators = [];
    return AGIFTFunction;
}(bases_1.Base.BaseClass));
exports.AGIFTFunction = AGIFTFunction;
var AccessActivity = /** @class */ (function (_super) {
    __extends(AccessActivity, _super);
    function AccessActivity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccessActivity.id = enum_1.ns.AccessActivity;
    AccessActivity.label = "Access Activity";
    AccessActivity.type = Class;
    AccessActivity.subClassOf = [Activity];
    AccessActivity.SHACLValidators = [];
    AccessActivity.OnotologyValidators = [];
    return AccessActivity;
}(bases_1.Base.BaseClass));
exports.AccessActivity = AccessActivity;
var AccessControl = /** @class */ (function (_super) {
    __extends(AccessControl, _super);
    function AccessControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccessControl.id = enum_1.ns.AccessControl;
    AccessControl.label = "Access Control";
    AccessControl.type = Class;
    AccessControl.subClassOf = [Control];
    AccessControl.SHACLValidators = [];
    AccessControl.OnotologyValidators = [];
    return AccessControl;
}(bases_1.Base.BaseClass));
exports.AccessControl = AccessControl;
var Activity = /** @class */ (function (_super) {
    __extends(Activity, _super);
    function Activity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Activity.id = enum_1.ns.Activity;
    Activity.label = "Activity";
    Activity.type = Class;
    Activity.subClassOf = [];
    Activity.SHACLValidators = [];
    Activity.OnotologyValidators = [];
    return Activity;
}(bases_1.Base.BaseClass));
exports.Activity = Activity;
var Function = /** @class */ (function (_super) {
    __extends(Function, _super);
    function Function() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Function.id = enum_1.ns.Function;
    Function.label = "Function";
    Function.type = Class;
    Function.subClassOf = [];
    Function.SHACLValidators = [];
    Function.OnotologyValidators = [];
    return Function;
}(bases_1.Base.BaseClass));
exports.Function = Function;
var Agent = /** @class */ (function (_super) {
    __extends(Agent, _super);
    function Agent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Agent.id = enum_1.ns.Agent;
    Agent.label = "Agent";
    Agent.type = Class;
    Agent.subClassOf = [];
    Agent.SHACLValidators = [];
    Agent.OnotologyValidators = [];
    return Agent;
}(bases_1.Base.BaseClass));
exports.Agent = Agent;
var AccessTrigger = /** @class */ (function (_super) {
    __extends(AccessTrigger, _super);
    function AccessTrigger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccessTrigger.id = enum_1.ns.AccessTrigger;
    AccessTrigger.label = "Access Trigger";
    AccessTrigger.type = Class;
    AccessTrigger.subClassOf = [Trigger];
    AccessTrigger.SHACLValidators = [];
    AccessTrigger.OnotologyValidators = [];
    return AccessTrigger;
}(bases_1.Base.BaseClass));
exports.AccessTrigger = AccessTrigger;
var Association = /** @class */ (function (_super) {
    __extends(Association, _super);
    function Association() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Association.id = enum_1.ns.Association;
    Association.label = "Association";
    Association.type = Class;
    Association.subClassOf = [];
    Association.SHACLValidators = [];
    Association.OnotologyValidators = [];
    return Association;
}(bases_1.Base.BaseClass));
exports.Association = Association;
var Policy = /** @class */ (function (_super) {
    __extends(Policy, _super);
    function Policy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Policy.id = enum_1.ns.Policy;
    Policy.label = "Policy";
    Policy.type = Class;
    Policy.subClassOf = [];
    Policy.SHACLValidators = [];
    Policy.OnotologyValidators = [];
    return Policy;
}(bases_1.Base.BaseClass));
exports.Policy = Policy;
var SpatialLocation = /** @class */ (function (_super) {
    __extends(SpatialLocation, _super);
    function SpatialLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpatialLocation.id = enum_1.ns.SpatialLocation;
    SpatialLocation.label = "Spatial Location";
    SpatialLocation.type = Class;
    SpatialLocation.subClassOf = [];
    SpatialLocation.SHACLValidators = [];
    SpatialLocation.OnotologyValidators = [];
    return SpatialLocation;
}(bases_1.Base.BaseClass));
exports.SpatialLocation = SpatialLocation;
var Status = /** @class */ (function (_super) {
    __extends(Status, _super);
    function Status() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Status.id = enum_1.ns.Status;
    Status.label = "Status";
    Status.type = Class;
    Status.subClassOf = [];
    Status.SHACLValidators = [];
    Status.OnotologyValidators = [];
    return Status;
}(bases_1.Base.BaseClass));
exports.Status = Status;
var SecurityClassification = /** @class */ (function (_super) {
    __extends(SecurityClassification, _super);
    function SecurityClassification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecurityClassification.id = enum_1.ns.SecurityClassification;
    SecurityClassification.label = "Security Classification";
    SecurityClassification.type = Class;
    SecurityClassification.subClassOf = [AccessControl];
    SecurityClassification.SHACLValidators = [];
    SecurityClassification.OnotologyValidators = [];
    return SecurityClassification;
}(bases_1.Base.BaseClass));
exports.SecurityClassification = SecurityClassification;
var Record = /** @class */ (function (_super) {
    __extends(Record, _super);
    function Record() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Record.id = enum_1.ns.Record;
    Record.label = "Record";
    Record.type = Class;
    Record.subClassOf = [];
    Record.SHACLValidators = [];
    Record.OnotologyValidators = [];
    return Record;
}(bases_1.Base.BaseClass));
exports.Record = Record;
var Administrator = /** @class */ (function (_super) {
    __extends(Administrator, _super);
    function Administrator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Administrator.id = enum_1.ns.Administrator;
    Administrator.label = "Administrator";
    Administrator.type = Class;
    Administrator.subClassOf = [Role];
    Administrator.SHACLValidators = [];
    Administrator.OnotologyValidators = [];
    return Administrator;
}(bases_1.Base.BaseClass));
exports.Administrator = Administrator;
var Permission = /** @class */ (function (_super) {
    __extends(Permission, _super);
    function Permission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Permission.id = enum_1.ns.Permission;
    Permission.label = "Permission";
    Permission.type = Class;
    Permission.subClassOf = [];
    Permission.SHACLValidators = [];
    Permission.OnotologyValidators = [];
    return Permission;
}(bases_1.Base.BaseClass));
exports.Permission = Permission;
var PreservationQuality = /** @class */ (function (_super) {
    __extends(PreservationQuality, _super);
    function PreservationQuality() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PreservationQuality.id = enum_1.ns.PreservationQuality;
    PreservationQuality.label = "Preservation Quality";
    PreservationQuality.type = Class;
    PreservationQuality.subClassOf = [Quality];
    PreservationQuality.SHACLValidators = [];
    PreservationQuality.OnotologyValidators = [];
    return PreservationQuality;
}(bases_1.Base.BaseClass));
exports.PreservationQuality = PreservationQuality;
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Event.id = enum_1.ns.Event;
    Event.label = "Event";
    Event.type = Class;
    Event.subClassOf = [];
    Event.SHACLValidators = [];
    Event.OnotologyValidators = [];
    return Event;
}(bases_1.Base.BaseClass));
exports.Event = Event;
var InformationSystem = /** @class */ (function (_super) {
    __extends(InformationSystem, _super);
    function InformationSystem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InformationSystem.id = enum_1.ns.InformationSystem;
    InformationSystem.label = "Information System";
    InformationSystem.type = Class;
    InformationSystem.subClassOf = [];
    InformationSystem.SHACLValidators = [];
    InformationSystem.OnotologyValidators = [];
    return InformationSystem;
}(bases_1.Base.BaseClass));
exports.InformationSystem = InformationSystem;
var IntellectualControlSystem = /** @class */ (function (_super) {
    __extends(IntellectualControlSystem, _super);
    function IntellectualControlSystem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntellectualControlSystem.id = enum_1.ns.IntellectualControlSystem;
    IntellectualControlSystem.label = "Intellectual Control System";
    IntellectualControlSystem.type = Class;
    IntellectualControlSystem.subClassOf = [InformationSystem];
    IntellectualControlSystem.SHACLValidators = [];
    IntellectualControlSystem.OnotologyValidators = [];
    return IntellectualControlSystem;
}(bases_1.Base.BaseClass));
exports.IntellectualControlSystem = IntellectualControlSystem;
var ArtefactChangeEvent = /** @class */ (function (_super) {
    __extends(ArtefactChangeEvent, _super);
    function ArtefactChangeEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArtefactChangeEvent.id = enum_1.ns.ArtefactChangeEvent;
    ArtefactChangeEvent.label = "Artefact Change Event";
    ArtefactChangeEvent.type = Class;
    ArtefactChangeEvent.subClassOf = [Event];
    ArtefactChangeEvent.SHACLValidators = [];
    ArtefactChangeEvent.OnotologyValidators = [];
    return ArtefactChangeEvent;
}(bases_1.Base.BaseClass));
exports.ArtefactChangeEvent = ArtefactChangeEvent;
var ArtefactControlEvent = /** @class */ (function (_super) {
    __extends(ArtefactControlEvent, _super);
    function ArtefactControlEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArtefactControlEvent.id = enum_1.ns.ArtefactControlEvent;
    ArtefactControlEvent.label = "Artefact Control Event";
    ArtefactControlEvent.type = Class;
    ArtefactControlEvent.subClassOf = [Event];
    ArtefactControlEvent.SHACLValidators = [];
    ArtefactControlEvent.OnotologyValidators = [];
    return ArtefactControlEvent;
}(bases_1.Base.BaseClass));
exports.ArtefactControlEvent = ArtefactControlEvent;
var ArtefactPublishEvent = /** @class */ (function (_super) {
    __extends(ArtefactPublishEvent, _super);
    function ArtefactPublishEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArtefactPublishEvent.id = enum_1.ns.ArtefactPublishEvent;
    ArtefactPublishEvent.label = "Artefact Publish Event";
    ArtefactPublishEvent.type = Class;
    ArtefactPublishEvent.subClassOf = [ArtefactControlEvent];
    ArtefactPublishEvent.SHACLValidators = [];
    ArtefactPublishEvent.OnotologyValidators = [];
    return ArtefactPublishEvent;
}(bases_1.Base.BaseClass));
exports.ArtefactPublishEvent = ArtefactPublishEvent;
var ArtefactShareEvent = /** @class */ (function (_super) {
    __extends(ArtefactShareEvent, _super);
    function ArtefactShareEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArtefactShareEvent.id = enum_1.ns.ArtefactShareEvent;
    ArtefactShareEvent.label = "Artefact Share Event";
    ArtefactShareEvent.type = Class;
    ArtefactShareEvent.subClassOf = [ArtefactControlEvent];
    ArtefactShareEvent.SHACLValidators = [];
    ArtefactShareEvent.OnotologyValidators = [];
    return ArtefactShareEvent;
}(bases_1.Base.BaseClass));
exports.ArtefactShareEvent = ArtefactShareEvent;
var BusinessOwner = /** @class */ (function (_super) {
    __extends(BusinessOwner, _super);
    function BusinessOwner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BusinessOwner.id = enum_1.ns.BusinessOwner;
    BusinessOwner.label = "Business Owner";
    BusinessOwner.type = Class;
    BusinessOwner.subClassOf = [Role];
    BusinessOwner.SHACLValidators = [];
    BusinessOwner.OnotologyValidators = [];
    return BusinessOwner;
}(bases_1.Base.BaseClass));
exports.BusinessOwner = BusinessOwner;
var Collection = /** @class */ (function (_super) {
    __extends(Collection, _super);
    function Collection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Collection.id = enum_1.ns.Collection;
    Collection.label = "Collection";
    Collection.type = Class;
    Collection.subClassOf = [];
    Collection.SHACLValidators = [];
    Collection.OnotologyValidators = [];
    return Collection;
}(bases_1.Base.BaseClass));
exports.Collection = Collection;
var ControlledVocabulary = /** @class */ (function (_super) {
    __extends(ControlledVocabulary, _super);
    function ControlledVocabulary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlledVocabulary.id = enum_1.ns.ControlledVocabulary;
    ControlledVocabulary.label = "Controlled Vocabulary";
    ControlledVocabulary.type = Class;
    ControlledVocabulary.subClassOf = [IntellectualControlSystem];
    ControlledVocabulary.SHACLValidators = [];
    ControlledVocabulary.OnotologyValidators = [];
    return ControlledVocabulary;
}(bases_1.Base.BaseClass));
exports.ControlledVocabulary = ControlledVocabulary;
var Coverage = /** @class */ (function (_super) {
    __extends(Coverage, _super);
    function Coverage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Coverage.id = enum_1.ns.Coverage;
    Coverage.label = "Coverage";
    Coverage.type = Class;
    Coverage.subClassOf = [];
    Coverage.SHACLValidators = [];
    Coverage.OnotologyValidators = [];
    return Coverage;
}(bases_1.Base.BaseClass));
exports.Coverage = Coverage;
var Creator = /** @class */ (function (_super) {
    __extends(Creator, _super);
    function Creator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Creator.id = enum_1.ns.Creator;
    Creator.label = "Creator";
    Creator.type = Class;
    Creator.subClassOf = [Role];
    Creator.SHACLValidators = [];
    Creator.OnotologyValidators = [];
    return Creator;
}(bases_1.Base.BaseClass));
exports.Creator = Creator;
var DigitalArtefact = /** @class */ (function (_super) {
    __extends(DigitalArtefact, _super);
    function DigitalArtefact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DigitalArtefact.id = enum_1.ns.DigitalArtefact;
    DigitalArtefact.label = "Digital Artefact";
    DigitalArtefact.type = Class;
    DigitalArtefact.subClassOf = [Artefact];
    DigitalArtefact.SHACLValidators = [];
    DigitalArtefact.OnotologyValidators = [];
    return DigitalArtefact;
}(bases_1.Base.BaseClass));
exports.DigitalArtefact = DigitalArtefact;
var DigitalHoldingSpace = /** @class */ (function (_super) {
    __extends(DigitalHoldingSpace, _super);
    function DigitalHoldingSpace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DigitalHoldingSpace.id = enum_1.ns.DigitalHoldingSpace;
    DigitalHoldingSpace.label = "Digital Holding Space";
    DigitalHoldingSpace.type = Class;
    DigitalHoldingSpace.subClassOf = [HoldingSpace];
    DigitalHoldingSpace.SHACLValidators = [];
    DigitalHoldingSpace.OnotologyValidators = [];
    return DigitalHoldingSpace;
}(bases_1.Base.BaseClass));
exports.DigitalHoldingSpace = DigitalHoldingSpace;
var DigitalPreservationPolicy = /** @class */ (function (_super) {
    __extends(DigitalPreservationPolicy, _super);
    function DigitalPreservationPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DigitalPreservationPolicy.id = enum_1.ns.DigitalPreservationPolicy;
    DigitalPreservationPolicy.label = "Digital Preservation Policy";
    DigitalPreservationPolicy.type = Class;
    DigitalPreservationPolicy.subClassOf = [Policy];
    DigitalPreservationPolicy.SHACLValidators = [];
    DigitalPreservationPolicy.OnotologyValidators = [];
    return DigitalPreservationPolicy;
}(bases_1.Base.BaseClass));
exports.DigitalPreservationPolicy = DigitalPreservationPolicy;
var RecordsAuthorityPolicy = /** @class */ (function (_super) {
    __extends(RecordsAuthorityPolicy, _super);
    function RecordsAuthorityPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RecordsAuthorityPolicy.id = enum_1.ns.RecordsAuthorityPolicy;
    RecordsAuthorityPolicy.label = "Records Authority Disposal Class Policy";
    RecordsAuthorityPolicy.type = Class;
    RecordsAuthorityPolicy.subClassOf = [Policy];
    RecordsAuthorityPolicy.SHACLValidators = [];
    RecordsAuthorityPolicy.OnotologyValidators = [];
    return RecordsAuthorityPolicy;
}(bases_1.Base.BaseClass));
exports.RecordsAuthorityPolicy = RecordsAuthorityPolicy;
var FormFactor = /** @class */ (function (_super) {
    __extends(FormFactor, _super);
    function FormFactor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormFactor.id = enum_1.ns.FormFactor;
    FormFactor.label = "Form Factor";
    FormFactor.type = Class;
    FormFactor.subClassOf = [];
    FormFactor.SHACLValidators = [];
    FormFactor.OnotologyValidators = [];
    return FormFactor;
}(bases_1.Base.BaseClass));
exports.FormFactor = FormFactor;
var InformationManagementPolicy = /** @class */ (function (_super) {
    __extends(InformationManagementPolicy, _super);
    function InformationManagementPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InformationManagementPolicy.id = enum_1.ns.InformationManagementPolicy;
    InformationManagementPolicy.label = "Information Management Policy";
    InformationManagementPolicy.type = Class;
    InformationManagementPolicy.subClassOf = [Policy];
    InformationManagementPolicy.SHACLValidators = [];
    InformationManagementPolicy.OnotologyValidators = [];
    return InformationManagementPolicy;
}(bases_1.Base.BaseClass));
exports.InformationManagementPolicy = InformationManagementPolicy;
var JurisdictionalCoverage = /** @class */ (function (_super) {
    __extends(JurisdictionalCoverage, _super);
    function JurisdictionalCoverage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JurisdictionalCoverage.id = enum_1.ns.JurisdictionalCoverage;
    JurisdictionalCoverage.label = "Jurisdictional Coverage";
    JurisdictionalCoverage.type = Class;
    JurisdictionalCoverage.subClassOf = [Coverage];
    JurisdictionalCoverage.SHACLValidators = [];
    JurisdictionalCoverage.OnotologyValidators = [];
    return JurisdictionalCoverage;
}(bases_1.Base.BaseClass));
exports.JurisdictionalCoverage = JurisdictionalCoverage;
var MaintainActivity = /** @class */ (function (_super) {
    __extends(MaintainActivity, _super);
    function MaintainActivity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MaintainActivity.id = enum_1.ns.MaintainActivity;
    MaintainActivity.label = "Maintain Activity";
    MaintainActivity.type = Class;
    MaintainActivity.subClassOf = [Activity];
    MaintainActivity.SHACLValidators = [];
    MaintainActivity.OnotologyValidators = [];
    return MaintainActivity;
}(bases_1.Base.BaseClass));
exports.MaintainActivity = MaintainActivity;
var Manifest = /** @class */ (function (_super) {
    __extends(Manifest, _super);
    function Manifest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manifest.id = enum_1.ns.Manifest;
    Manifest.label = "Manifest";
    Manifest.type = Class;
    Manifest.subClassOf = [];
    Manifest.SHACLValidators = [];
    Manifest.OnotologyValidators = [];
    return Manifest;
}(bases_1.Base.BaseClass));
exports.Manifest = Manifest;
var MinimumMetadataSetPolicy = /** @class */ (function (_super) {
    __extends(MinimumMetadataSetPolicy, _super);
    function MinimumMetadataSetPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MinimumMetadataSetPolicy.id = enum_1.ns.MinimumMetadataSetPolicy;
    MinimumMetadataSetPolicy.label = "Minimum Metadata Set Policy";
    MinimumMetadataSetPolicy.type = Class;
    MinimumMetadataSetPolicy.subClassOf = [Policy];
    MinimumMetadataSetPolicy.SHACLValidators = [];
    MinimumMetadataSetPolicy.OnotologyValidators = [];
    return MinimumMetadataSetPolicy;
}(bases_1.Base.BaseClass));
exports.MinimumMetadataSetPolicy = MinimumMetadataSetPolicy;
var OrganisationalUnit = /** @class */ (function (_super) {
    __extends(OrganisationalUnit, _super);
    function OrganisationalUnit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OrganisationalUnit.id = enum_1.ns.OrganisationalUnit;
    OrganisationalUnit.label = "Organisational Unit";
    OrganisationalUnit.type = Class;
    OrganisationalUnit.subClassOf = [Organisation];
    OrganisationalUnit.SHACLValidators = [];
    OrganisationalUnit.OnotologyValidators = [];
    return OrganisationalUnit;
}(bases_1.Base.BaseClass));
exports.OrganisationalUnit = OrganisationalUnit;
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Person.id = enum_1.ns.Person;
    Person.label = "Person";
    Person.type = Class;
    Person.subClassOf = [Agent];
    Person.SHACLValidators = [];
    Person.OnotologyValidators = [];
    return Person;
}(bases_1.Base.BaseClass));
exports.Person = Person;
var PhysicalCollection = /** @class */ (function (_super) {
    __extends(PhysicalCollection, _super);
    function PhysicalCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PhysicalCollection.id = enum_1.ns.PhysicalCollection;
    PhysicalCollection.label = "Physical Collection";
    PhysicalCollection.type = Class;
    PhysicalCollection.subClassOf = [Collection];
    PhysicalCollection.SHACLValidators = [];
    PhysicalCollection.OnotologyValidators = [];
    return PhysicalCollection;
}(bases_1.Base.BaseClass));
exports.PhysicalCollection = PhysicalCollection;
var Series = /** @class */ (function (_super) {
    __extends(Series, _super);
    function Series() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Series.id = enum_1.ns.Series;
    Series.label = "Series";
    Series.type = Class;
    Series.subClassOf = [IntellectualControlSystem];
    Series.SHACLValidators = [];
    Series.OnotologyValidators = [];
    return Series;
}(bases_1.Base.BaseClass));
exports.Series = Series;
var RecordAuditEvent = /** @class */ (function (_super) {
    __extends(RecordAuditEvent, _super);
    function RecordAuditEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RecordAuditEvent.id = enum_1.ns.RecordAuditEvent;
    RecordAuditEvent.label = "Record Audit Event";
    RecordAuditEvent.type = Class;
    RecordAuditEvent.subClassOf = [RecordControlEvent];
    RecordAuditEvent.SHACLValidators = [];
    RecordAuditEvent.OnotologyValidators = [];
    return RecordAuditEvent;
}(bases_1.Base.BaseClass));
exports.RecordAuditEvent = RecordAuditEvent;
var RecordDecisionEvent = /** @class */ (function (_super) {
    __extends(RecordDecisionEvent, _super);
    function RecordDecisionEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RecordDecisionEvent.id = enum_1.ns.RecordDecisionEvent;
    RecordDecisionEvent.label = "Record Decision Event";
    RecordDecisionEvent.type = Class;
    RecordDecisionEvent.subClassOf = [RecordControlEvent];
    RecordDecisionEvent.SHACLValidators = [];
    RecordDecisionEvent.OnotologyValidators = [];
    return RecordDecisionEvent;
}(bases_1.Base.BaseClass));
exports.RecordDecisionEvent = RecordDecisionEvent;
var RecordDestructionEvent = /** @class */ (function (_super) {
    __extends(RecordDestructionEvent, _super);
    function RecordDestructionEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RecordDestructionEvent.id = enum_1.ns.RecordDestructionEvent;
    RecordDestructionEvent.label = "Record Destruction Event";
    RecordDestructionEvent.type = Class;
    RecordDestructionEvent.subClassOf = [RecordDisposalEvent];
    RecordDestructionEvent.SHACLValidators = [];
    RecordDestructionEvent.OnotologyValidators = [];
    return RecordDestructionEvent;
}(bases_1.Base.BaseClass));
exports.RecordDestructionEvent = RecordDestructionEvent;
var RecordFreezeEvent = /** @class */ (function (_super) {
    __extends(RecordFreezeEvent, _super);
    function RecordFreezeEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RecordFreezeEvent.id = enum_1.ns.RecordFreezeEvent;
    RecordFreezeEvent.label = "Record Freeze Event";
    RecordFreezeEvent.type = Class;
    RecordFreezeEvent.subClassOf = [RecordDisposalEvent];
    RecordFreezeEvent.SHACLValidators = [];
    RecordFreezeEvent.OnotologyValidators = [];
    return RecordFreezeEvent;
}(bases_1.Base.BaseClass));
exports.RecordFreezeEvent = RecordFreezeEvent;
var VersionHistory = /** @class */ (function (_super) {
    __extends(VersionHistory, _super);
    function VersionHistory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VersionHistory.id = enum_1.ns.VersionHistory;
    VersionHistory.label = "Version History";
    VersionHistory.type = Class;
    VersionHistory.subClassOf = [];
    VersionHistory.SHACLValidators = [];
    VersionHistory.OnotologyValidators = [];
    return VersionHistory;
}(bases_1.Base.BaseClass));
exports.VersionHistory = VersionHistory;
var RecordSentencingEvent = /** @class */ (function (_super) {
    __extends(RecordSentencingEvent, _super);
    function RecordSentencingEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RecordSentencingEvent.id = enum_1.ns.RecordSentencingEvent;
    RecordSentencingEvent.label = "Record Sentencing Event";
    RecordSentencingEvent.type = Class;
    RecordSentencingEvent.subClassOf = [RecordControlEvent];
    RecordSentencingEvent.SHACLValidators = [];
    RecordSentencingEvent.OnotologyValidators = [];
    return RecordSentencingEvent;
}(bases_1.Base.BaseClass));
exports.RecordSentencingEvent = RecordSentencingEvent;
var RecordTransferEvent = /** @class */ (function (_super) {
    __extends(RecordTransferEvent, _super);
    function RecordTransferEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RecordTransferEvent.id = enum_1.ns.RecordTransferEvent;
    RecordTransferEvent.label = "Record Transfer Event";
    RecordTransferEvent.type = Class;
    RecordTransferEvent.subClassOf = [RecordDisposalEvent];
    RecordTransferEvent.SHACLValidators = [];
    RecordTransferEvent.OnotologyValidators = [];
    return RecordTransferEvent;
}(bases_1.Base.BaseClass));
exports.RecordTransferEvent = RecordTransferEvent;
var RecordsAuthorityFunction = /** @class */ (function (_super) {
    __extends(RecordsAuthorityFunction, _super);
    function RecordsAuthorityFunction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RecordsAuthorityFunction.id = enum_1.ns.RecordsAuthorityFunction;
    RecordsAuthorityFunction.label = "Records Authority Function";
    RecordsAuthorityFunction.type = Class;
    RecordsAuthorityFunction.subClassOf = [Function];
    RecordsAuthorityFunction.SHACLValidators = [];
    RecordsAuthorityFunction.OnotologyValidators = [];
    return RecordsAuthorityFunction;
}(bases_1.Base.BaseClass));
exports.RecordsAuthorityFunction = RecordsAuthorityFunction;
var SecurityControl = /** @class */ (function (_super) {
    __extends(SecurityControl, _super);
    function SecurityControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecurityControl.id = enum_1.ns.SecurityControl;
    SecurityControl.label = "Security Control";
    SecurityControl.type = Class;
    SecurityControl.subClassOf = [Control];
    SecurityControl.SHACLValidators = [];
    SecurityControl.OnotologyValidators = [];
    return SecurityControl;
}(bases_1.Base.BaseClass));
exports.SecurityControl = SecurityControl;
var ShareActivity = /** @class */ (function (_super) {
    __extends(ShareActivity, _super);
    function ShareActivity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShareActivity.id = enum_1.ns.ShareActivity;
    ShareActivity.label = "Share Activity";
    ShareActivity.type = Class;
    ShareActivity.subClassOf = [Activity];
    ShareActivity.SHACLValidators = [];
    ShareActivity.OnotologyValidators = [];
    return ShareActivity;
}(bases_1.Base.BaseClass));
exports.ShareActivity = ShareActivity;
var SpatialCoverage = /** @class */ (function (_super) {
    __extends(SpatialCoverage, _super);
    function SpatialCoverage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpatialCoverage.id = enum_1.ns.SpatialCoverage;
    SpatialCoverage.label = "Spatial Coverage";
    SpatialCoverage.type = Class;
    SpatialCoverage.subClassOf = [Coverage];
    SpatialCoverage.SHACLValidators = [];
    SpatialCoverage.OnotologyValidators = [];
    return SpatialCoverage;
}(bases_1.Base.BaseClass));
exports.SpatialCoverage = SpatialCoverage;
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User.id = enum_1.ns.User;
    User.label = "User";
    User.type = Class;
    User.subClassOf = [Role];
    User.SHACLValidators = [];
    User.OnotologyValidators = [];
    return User;
}(bases_1.Base.BaseClass));
exports.User = User;
var RecordReplacementEvent = /** @class */ (function (_super) {
    __extends(RecordReplacementEvent, _super);
    function RecordReplacementEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RecordReplacementEvent.id = enum_1.ns.RecordReplacementEvent;
    RecordReplacementEvent.label = "Record Replacement Event";
    RecordReplacementEvent.type = Class;
    RecordReplacementEvent.subClassOf = [RecordControlEvent];
    RecordReplacementEvent.SHACLValidators = [];
    RecordReplacementEvent.OnotologyValidators = [];
    return RecordReplacementEvent;
}(bases_1.Base.BaseClass));
exports.RecordReplacementEvent = RecordReplacementEvent;
var Quality = /** @class */ (function (_super) {
    __extends(Quality, _super);
    function Quality() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Quality.id = enum_1.ns.Quality;
    Quality.label = "Quality";
    Quality.type = Class;
    Quality.subClassOf = [];
    Quality.SHACLValidators = [];
    Quality.OnotologyValidators = [];
    return Quality;
}(bases_1.Base.BaseClass));
exports.Quality = Quality;
var DisposalClass = /** @class */ (function (_super) {
    __extends(DisposalClass, _super);
    function DisposalClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DisposalClass.id = enum_1.ns.DisposalClass;
    DisposalClass.label = "Disposal Class";
    DisposalClass.type = Class;
    DisposalClass.subClassOf = [RecordsAuthorityPolicy];
    DisposalClass.SHACLValidators = [];
    DisposalClass.OnotologyValidators = [];
    return DisposalClass;
}(bases_1.Base.BaseClass));
exports.DisposalClass = DisposalClass;
var RecordDisposalEvent = /** @class */ (function (_super) {
    __extends(RecordDisposalEvent, _super);
    function RecordDisposalEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RecordDisposalEvent.id = enum_1.ns.RecordDisposalEvent;
    RecordDisposalEvent.label = "Record Disposal Event";
    RecordDisposalEvent.type = Class;
    RecordDisposalEvent.subClassOf = [RecordControlEvent];
    RecordDisposalEvent.SHACLValidators = [];
    RecordDisposalEvent.OnotologyValidators = [];
    return RecordDisposalEvent;
}(bases_1.Base.BaseClass));
exports.RecordDisposalEvent = RecordDisposalEvent;
var CreationEvent = /** @class */ (function (_super) {
    __extends(CreationEvent, _super);
    function CreationEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreationEvent.id = enum_1.ns.CreationEvent;
    CreationEvent.label = "Record Creation Event";
    CreationEvent.type = Class;
    CreationEvent.subClassOf = [Event];
    CreationEvent.SHACLValidators = [];
    CreationEvent.OnotologyValidators = [];
    return CreationEvent;
}(bases_1.Base.BaseClass));
exports.CreationEvent = CreationEvent;
var DecisionStatus = /** @class */ (function (_super) {
    __extends(DecisionStatus, _super);
    function DecisionStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DecisionStatus.id = enum_1.ns.DecisionStatus;
    DecisionStatus.label = "Decision Status";
    DecisionStatus.type = Class;
    DecisionStatus.subClassOf = [Status];
    DecisionStatus.SHACLValidators = [];
    DecisionStatus.OnotologyValidators = [];
    return DecisionStatus;
}(bases_1.Base.BaseClass));
exports.DecisionStatus = DecisionStatus;
var ArtefactSendEvent = /** @class */ (function (_super) {
    __extends(ArtefactSendEvent, _super);
    function ArtefactSendEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArtefactSendEvent.id = enum_1.ns.ArtefactSendEvent;
    ArtefactSendEvent.label = "Artefact Send Event";
    ArtefactSendEvent.type = Class;
    ArtefactSendEvent.subClassOf = [ArtefactChangeEvent];
    ArtefactSendEvent.SHACLValidators = [];
    ArtefactSendEvent.OnotologyValidators = [];
    return ArtefactSendEvent;
}(bases_1.Base.BaseClass));
exports.ArtefactSendEvent = ArtefactSendEvent;
var Organisation = /** @class */ (function (_super) {
    __extends(Organisation, _super);
    function Organisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Organisation.id = enum_1.ns.Organisation;
    Organisation.label = "Organisation";
    Organisation.type = Class;
    Organisation.subClassOf = [Agent];
    Organisation.SHACLValidators = [];
    Organisation.OnotologyValidators = [];
    return Organisation;
}(bases_1.Base.BaseClass));
exports.Organisation = Organisation;
var Classifier = /** @class */ (function (_super) {
    __extends(Classifier, _super);
    function Classifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Classifier.id = enum_1.ns.Classifier;
    Classifier.label = "Classifier";
    Classifier.type = Class;
    Classifier.subClassOf = [];
    Classifier.SHACLValidators = [];
    Classifier.OnotologyValidators = [];
    return Classifier;
}(bases_1.Base.BaseClass));
exports.Classifier = Classifier;
var HoldingSpace = /** @class */ (function (_super) {
    __extends(HoldingSpace, _super);
    function HoldingSpace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HoldingSpace.id = enum_1.ns.HoldingSpace;
    HoldingSpace.label = "Holding Space";
    HoldingSpace.type = Class;
    HoldingSpace.subClassOf = [SpatialLocation];
    HoldingSpace.SHACLValidators = [];
    HoldingSpace.OnotologyValidators = [];
    return HoldingSpace;
}(bases_1.Base.BaseClass));
exports.HoldingSpace = HoldingSpace;
var RecordStorageStandard = /** @class */ (function (_super) {
    __extends(RecordStorageStandard, _super);
    function RecordStorageStandard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RecordStorageStandard.id = enum_1.ns.RecordStorageStandard;
    RecordStorageStandard.label = "Record Storage Standard";
    RecordStorageStandard.type = Class;
    RecordStorageStandard.subClassOf = [Policy];
    RecordStorageStandard.SHACLValidators = [];
    RecordStorageStandard.OnotologyValidators = [];
    return RecordStorageStandard;
}(bases_1.Base.BaseClass));
exports.RecordStorageStandard = RecordStorageStandard;
var RecordControlEvent = /** @class */ (function (_super) {
    __extends(RecordControlEvent, _super);
    function RecordControlEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RecordControlEvent.id = enum_1.ns.RecordControlEvent;
    RecordControlEvent.label = "Record Control Event";
    RecordControlEvent.type = Class;
    RecordControlEvent.subClassOf = [Event];
    RecordControlEvent.SHACLValidators = [];
    RecordControlEvent.OnotologyValidators = [];
    return RecordControlEvent;
}(bases_1.Base.BaseClass));
exports.RecordControlEvent = RecordControlEvent;
var PhysicalArtefact = /** @class */ (function (_super) {
    __extends(PhysicalArtefact, _super);
    function PhysicalArtefact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PhysicalArtefact.id = enum_1.ns.PhysicalArtefact;
    PhysicalArtefact.label = "Physical Artefact";
    PhysicalArtefact.type = Class;
    PhysicalArtefact.subClassOf = [Artefact];
    PhysicalArtefact.SHACLValidators = [];
    PhysicalArtefact.OnotologyValidators = [];
    return PhysicalArtefact;
}(bases_1.Base.BaseClass));
exports.PhysicalArtefact = PhysicalArtefact;
var LogicalCollection = /** @class */ (function (_super) {
    __extends(LogicalCollection, _super);
    function LogicalCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LogicalCollection.id = enum_1.ns.LogicalCollection;
    LogicalCollection.label = "Logical Collection";
    LogicalCollection.type = Class;
    LogicalCollection.subClassOf = [Collection];
    LogicalCollection.SHACLValidators = [];
    LogicalCollection.OnotologyValidators = [];
    return LogicalCollection;
}(bases_1.Base.BaseClass));
exports.LogicalCollection = LogicalCollection;
var TemporalCoverage = /** @class */ (function (_super) {
    __extends(TemporalCoverage, _super);
    function TemporalCoverage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TemporalCoverage.id = enum_1.ns.TemporalCoverage;
    TemporalCoverage.label = "Temporal Coverage";
    TemporalCoverage.type = Class;
    TemporalCoverage.subClassOf = [Coverage];
    TemporalCoverage.SHACLValidators = [];
    TemporalCoverage.OnotologyValidators = [];
    return TemporalCoverage;
}(bases_1.Base.BaseClass));
exports.TemporalCoverage = TemporalCoverage;
var PhysicalHoldingSpace = /** @class */ (function (_super) {
    __extends(PhysicalHoldingSpace, _super);
    function PhysicalHoldingSpace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PhysicalHoldingSpace.id = enum_1.ns.PhysicalHoldingSpace;
    PhysicalHoldingSpace.label = "Physical Holding Space";
    PhysicalHoldingSpace.type = Class;
    PhysicalHoldingSpace.subClassOf = [HoldingSpace];
    PhysicalHoldingSpace.SHACLValidators = [];
    PhysicalHoldingSpace.OnotologyValidators = [];
    return PhysicalHoldingSpace;
}(bases_1.Base.BaseClass));
exports.PhysicalHoldingSpace = PhysicalHoldingSpace;
var Role = /** @class */ (function (_super) {
    __extends(Role, _super);
    function Role() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Role.id = enum_1.ns.Role;
    Role.label = "Role";
    Role.type = Class;
    Role.subClassOf = [];
    Role.SHACLValidators = [];
    Role.OnotologyValidators = [];
    return Role;
}(bases_1.Base.BaseClass));
exports.Role = Role;
var Control = /** @class */ (function (_super) {
    __extends(Control, _super);
    function Control() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Control.id = enum_1.ns.Control;
    Control.label = "Control";
    Control.type = Class;
    Control.subClassOf = [];
    Control.SHACLValidators = [];
    Control.OnotologyValidators = [];
    return Control;
}(bases_1.Base.BaseClass));
exports.Control = Control;
var Trigger = /** @class */ (function (_super) {
    __extends(Trigger, _super);
    function Trigger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Trigger.id = enum_1.ns.Trigger;
    Trigger.label = "Trigger";
    Trigger.type = Class;
    Trigger.subClassOf = [];
    Trigger.SHACLValidators = [];
    Trigger.OnotologyValidators = [];
    return Trigger;
}(bases_1.Base.BaseClass));
exports.Trigger = Trigger;
