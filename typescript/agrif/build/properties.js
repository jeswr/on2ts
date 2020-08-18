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
exports.replaces = exports.priorEvent = exports.wasAssociatedWith = exports.usedRecord = exports.recordOf = exports.positionIn = exports.partOf = exports.isPartOf = exports.isBasedOn = exports.hasVersionHistory = exports.transferredFrom = exports.hasSeries = exports.hasQuality = exports.transferredTo = exports.storedIn = exports.sharedWith = exports.requiresSecurityClassification = exports.replacedBy = exports.qualifiedAssociation = exports.notifies = exports.isMentionedIn = exports.isDuplicateOf = exports.isChangedBy = exports.isAttachedTo = exports.hasTargetAgent = exports.hasPreviousVersion = exports.hasFormFactor = exports.hasActivity = exports.triggers = exports.triggeredBy = exports.hasControl = exports.hasClassifier = exports.hasCoverage = exports.accessedBy = exports.affects = exports.hasManifest = exports.hasLocation = exports.hasAgent = exports.relatedTo = exports.hasPrerequisiteDecisionEvent = exports.hasNextVersion = exports.actsAs = exports.isAffectedBy = exports.hasStatus = exports.hasSourceAgent = exports.hasPart = exports.associatedRole = exports.guidingPolicy = exports.hasPermission = exports.associatedFunction = exports.hasDecisionStatus = exports.hasDisposalClass = void 0;
var hasDisposalClass = /** @class */ (function (_super) {
    __extends(hasDisposalClass, _super);
    function hasDisposalClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    hasDisposalClass.domain = undefined;
    hasDisposalClass.range = undefined;
    hasDisposalClass.subPropertyOf = [];
    hasDisposalClass.classValidators = [];
    hasDisposalClass.OntologyValidators = [];
    return hasDisposalClass;
}(Base.BaseProperty));
exports.hasDisposalClass = hasDisposalClass;
var hasDecisionStatus = /** @class */ (function (_super) {
    __extends(hasDecisionStatus, _super);
    function hasDecisionStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    hasDecisionStatus.domain = undefined;
    hasDecisionStatus.range = undefined;
    hasDecisionStatus.subPropertyOf = [];
    hasDecisionStatus.classValidators = [];
    hasDecisionStatus.OntologyValidators = [];
    return hasDecisionStatus;
}(Base.BaseProperty));
exports.hasDecisionStatus = hasDecisionStatus;
var associatedFunction = /** @class */ (function (_super) {
    __extends(associatedFunction, _super);
    function associatedFunction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    associatedFunction.domain = undefined;
    associatedFunction.range = undefined;
    associatedFunction.subPropertyOf = [];
    associatedFunction.classValidators = [];
    associatedFunction.OntologyValidators = [];
    return associatedFunction;
}(Base.BaseProperty));
exports.associatedFunction = associatedFunction;
var hasPermission = /** @class */ (function (_super) {
    __extends(hasPermission, _super);
    function hasPermission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    hasPermission.domain = undefined;
    hasPermission.range = undefined;
    hasPermission.subPropertyOf = [];
    hasPermission.classValidators = [];
    hasPermission.OntologyValidators = [];
    return hasPermission;
}(Base.BaseProperty));
exports.hasPermission = hasPermission;
var guidingPolicy = /** @class */ (function (_super) {
    __extends(guidingPolicy, _super);
    function guidingPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    guidingPolicy.domain = undefined;
    guidingPolicy.range = undefined;
    guidingPolicy.subPropertyOf = [];
    guidingPolicy.classValidators = [];
    guidingPolicy.OntologyValidators = [];
    return guidingPolicy;
}(Base.BaseProperty));
exports.guidingPolicy = guidingPolicy;
var associatedRole = /** @class */ (function (_super) {
    __extends(associatedRole, _super);
    function associatedRole() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    associatedRole.domain = undefined;
    associatedRole.range = undefined;
    associatedRole.subPropertyOf = [];
    associatedRole.classValidators = [];
    associatedRole.OntologyValidators = [];
    return associatedRole;
}(Base.BaseProperty));
exports.associatedRole = associatedRole;
var hasPart = /** @class */ (function (_super) {
    __extends(hasPart, _super);
    function hasPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    hasPart.domain = undefined;
    hasPart.range = undefined;
    hasPart.subPropertyOf = [];
    hasPart.classValidators = [];
    hasPart.OntologyValidators = [];
    return hasPart;
}(Base.BaseProperty));
exports.hasPart = hasPart;
var hasSourceAgent = /** @class */ (function (_super) {
    __extends(hasSourceAgent, _super);
    function hasSourceAgent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    hasSourceAgent.domain = undefined;
    hasSourceAgent.range = undefined;
    hasSourceAgent.subPropertyOf = [wasAssociatedWith];
    hasSourceAgent.classValidators = [];
    hasSourceAgent.OntologyValidators = [];
    return hasSourceAgent;
}(Base.BaseProperty));
exports.hasSourceAgent = hasSourceAgent;
var hasStatus = /** @class */ (function (_super) {
    __extends(hasStatus, _super);
    function hasStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    hasStatus.domain = undefined;
    hasStatus.range = undefined;
    hasStatus.subPropertyOf = [];
    hasStatus.classValidators = [];
    hasStatus.OntologyValidators = [];
    return hasStatus;
}(Base.BaseProperty));
exports.hasStatus = hasStatus;
var isAffectedBy = /** @class */ (function (_super) {
    __extends(isAffectedBy, _super);
    function isAffectedBy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    isAffectedBy.domain = undefined;
    isAffectedBy.range = undefined;
    isAffectedBy.subPropertyOf = [topObjectProperty];
    isAffectedBy.classValidators = [];
    isAffectedBy.OntologyValidators = [];
    return isAffectedBy;
}(Base.BaseProperty));
exports.isAffectedBy = isAffectedBy;
var actsAs = /** @class */ (function (_super) {
    __extends(actsAs, _super);
    function actsAs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    actsAs.domain = undefined;
    actsAs.range = undefined;
    actsAs.subPropertyOf = [];
    actsAs.classValidators = [];
    actsAs.OntologyValidators = [];
    return actsAs;
}(Base.BaseProperty));
exports.actsAs = actsAs;
var hasNextVersion = /** @class */ (function (_super) {
    __extends(hasNextVersion, _super);
    function hasNextVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    hasNextVersion.domain = undefined;
    hasNextVersion.range = undefined;
    hasNextVersion.subPropertyOf = [relatedTo];
    hasNextVersion.classValidators = [];
    hasNextVersion.OntologyValidators = [];
    return hasNextVersion;
}(Base.BaseProperty));
exports.hasNextVersion = hasNextVersion;
var hasPrerequisiteDecisionEvent = /** @class */ (function (_super) {
    __extends(hasPrerequisiteDecisionEvent, _super);
    function hasPrerequisiteDecisionEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    hasPrerequisiteDecisionEvent.domain = undefined;
    hasPrerequisiteDecisionEvent.range = undefined;
    hasPrerequisiteDecisionEvent.subPropertyOf = [priorEvent];
    hasPrerequisiteDecisionEvent.classValidators = [];
    hasPrerequisiteDecisionEvent.OntologyValidators = [];
    return hasPrerequisiteDecisionEvent;
}(Base.BaseProperty));
exports.hasPrerequisiteDecisionEvent = hasPrerequisiteDecisionEvent;
var relatedTo = /** @class */ (function (_super) {
    __extends(relatedTo, _super);
    function relatedTo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    relatedTo.domain = undefined;
    relatedTo.range = undefined;
    relatedTo.subPropertyOf = [];
    relatedTo.classValidators = [];
    relatedTo.OntologyValidators = [];
    return relatedTo;
}(Base.BaseProperty));
exports.relatedTo = relatedTo;
var hasAgent = /** @class */ (function (_super) {
    __extends(hasAgent, _super);
    function hasAgent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    hasAgent.domain = undefined;
    hasAgent.range = undefined;
    hasAgent.subPropertyOf = [];
    hasAgent.classValidators = [];
    hasAgent.OntologyValidators = [];
    return hasAgent;
}(Base.BaseProperty));
exports.hasAgent = hasAgent;
var hasLocation = /** @class */ (function (_super) {
    __extends(hasLocation, _super);
    function hasLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    hasLocation.domain = undefined;
    hasLocation.range = undefined;
    hasLocation.subPropertyOf = [];
    hasLocation.classValidators = [];
    hasLocation.OntologyValidators = [];
    return hasLocation;
}(Base.BaseProperty));
exports.hasLocation = hasLocation;
var hasManifest = /** @class */ (function (_super) {
    __extends(hasManifest, _super);
    function hasManifest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    hasManifest.domain = undefined;
    hasManifest.range = undefined;
    hasManifest.subPropertyOf = [];
    hasManifest.classValidators = [];
    hasManifest.OntologyValidators = [];
    return hasManifest;
}(Base.BaseProperty));
exports.hasManifest = hasManifest;
var affects = /** @class */ (function (_super) {
    __extends(affects, _super);
    function affects() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    affects.domain = undefined;
    affects.range = undefined;
    affects.subPropertyOf = [];
    affects.classValidators = [];
    affects.OntologyValidators = [];
    return affects;
}(Base.BaseProperty));
exports.affects = affects;
var accessedBy = /** @class */ (function (_super) {
    __extends(accessedBy, _super);
    function accessedBy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    accessedBy.domain = undefined;
    accessedBy.range = undefined;
    accessedBy.subPropertyOf = [wasAssociatedWith];
    accessedBy.classValidators = [];
    accessedBy.OntologyValidators = [];
    return accessedBy;
}(Base.BaseProperty));
exports.accessedBy = accessedBy;
var hasCoverage = /** @class */ (function (_super) {
    __extends(hasCoverage, _super);
    function hasCoverage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    hasCoverage.domain = undefined;
    hasCoverage.range = undefined;
    hasCoverage.subPropertyOf = [];
    hasCoverage.classValidators = [];
    hasCoverage.OntologyValidators = [];
    return hasCoverage;
}(Base.BaseProperty));
exports.hasCoverage = hasCoverage;
var hasClassifier = /** @class */ (function (_super) {
    __extends(hasClassifier, _super);
    function hasClassifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    hasClassifier.domain = undefined;
    hasClassifier.range = undefined;
    hasClassifier.subPropertyOf = [topObjectProperty];
    hasClassifier.classValidators = [];
    hasClassifier.OntologyValidators = [];
    return hasClassifier;
}(Base.BaseProperty));
exports.hasClassifier = hasClassifier;
var hasControl = /** @class */ (function (_super) {
    __extends(hasControl, _super);
    function hasControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    hasControl.domain = undefined;
    hasControl.range = undefined;
    hasControl.subPropertyOf = [];
    hasControl.classValidators = [];
    hasControl.OntologyValidators = [];
    return hasControl;
}(Base.BaseProperty));
exports.hasControl = hasControl;
var triggeredBy = /** @class */ (function (_super) {
    __extends(triggeredBy, _super);
    function triggeredBy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    triggeredBy.domain = undefined;
    triggeredBy.range = undefined;
    triggeredBy.subPropertyOf = [];
    triggeredBy.classValidators = [];
    triggeredBy.OntologyValidators = [];
    return triggeredBy;
}(Base.BaseProperty));
exports.triggeredBy = triggeredBy;
var triggers = /** @class */ (function (_super) {
    __extends(triggers, _super);
    function triggers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    triggers.domain = undefined;
    triggers.range = undefined;
    triggers.subPropertyOf = [];
    triggers.classValidators = [];
    triggers.OntologyValidators = [];
    return triggers;
}(Base.BaseProperty));
exports.triggers = triggers;
var hasActivity = /** @class */ (function (_super) {
    __extends(hasActivity, _super);
    function hasActivity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    hasActivity.domain = undefined;
    hasActivity.range = undefined;
    hasActivity.subPropertyOf = [];
    hasActivity.classValidators = [];
    hasActivity.OntologyValidators = [];
    return hasActivity;
}(Base.BaseProperty));
exports.hasActivity = hasActivity;
var hasFormFactor = /** @class */ (function (_super) {
    __extends(hasFormFactor, _super);
    function hasFormFactor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    hasFormFactor.domain = undefined;
    hasFormFactor.range = undefined;
    hasFormFactor.subPropertyOf = [];
    hasFormFactor.classValidators = [];
    hasFormFactor.OntologyValidators = [];
    return hasFormFactor;
}(Base.BaseProperty));
exports.hasFormFactor = hasFormFactor;
var hasPreviousVersion = /** @class */ (function (_super) {
    __extends(hasPreviousVersion, _super);
    function hasPreviousVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    hasPreviousVersion.domain = undefined;
    hasPreviousVersion.range = undefined;
    hasPreviousVersion.subPropertyOf = [relatedTo];
    hasPreviousVersion.classValidators = [];
    hasPreviousVersion.OntologyValidators = [];
    return hasPreviousVersion;
}(Base.BaseProperty));
exports.hasPreviousVersion = hasPreviousVersion;
var hasTargetAgent = /** @class */ (function (_super) {
    __extends(hasTargetAgent, _super);
    function hasTargetAgent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    hasTargetAgent.domain = undefined;
    hasTargetAgent.range = undefined;
    hasTargetAgent.subPropertyOf = [wasAssociatedWith];
    hasTargetAgent.classValidators = [];
    hasTargetAgent.OntologyValidators = [];
    return hasTargetAgent;
}(Base.BaseProperty));
exports.hasTargetAgent = hasTargetAgent;
var isAttachedTo = /** @class */ (function (_super) {
    __extends(isAttachedTo, _super);
    function isAttachedTo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    isAttachedTo.domain = undefined;
    isAttachedTo.range = undefined;
    isAttachedTo.subPropertyOf = [relatedTo];
    isAttachedTo.classValidators = [];
    isAttachedTo.OntologyValidators = [];
    return isAttachedTo;
}(Base.BaseProperty));
exports.isAttachedTo = isAttachedTo;
var isChangedBy = /** @class */ (function (_super) {
    __extends(isChangedBy, _super);
    function isChangedBy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    isChangedBy.domain = undefined;
    isChangedBy.range = undefined;
    isChangedBy.subPropertyOf = [];
    isChangedBy.classValidators = [];
    isChangedBy.OntologyValidators = [];
    return isChangedBy;
}(Base.BaseProperty));
exports.isChangedBy = isChangedBy;
var isDuplicateOf = /** @class */ (function (_super) {
    __extends(isDuplicateOf, _super);
    function isDuplicateOf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    isDuplicateOf.domain = undefined;
    isDuplicateOf.range = undefined;
    isDuplicateOf.subPropertyOf = [relatedTo];
    isDuplicateOf.classValidators = [];
    isDuplicateOf.OntologyValidators = [];
    return isDuplicateOf;
}(Base.BaseProperty));
exports.isDuplicateOf = isDuplicateOf;
var isMentionedIn = /** @class */ (function (_super) {
    __extends(isMentionedIn, _super);
    function isMentionedIn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    isMentionedIn.domain = undefined;
    isMentionedIn.range = undefined;
    isMentionedIn.subPropertyOf = [relatedTo];
    isMentionedIn.classValidators = [];
    isMentionedIn.OntologyValidators = [];
    return isMentionedIn;
}(Base.BaseProperty));
exports.isMentionedIn = isMentionedIn;
var notifies = /** @class */ (function (_super) {
    __extends(notifies, _super);
    function notifies() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    notifies.domain = undefined;
    notifies.range = undefined;
    notifies.subPropertyOf = [];
    notifies.classValidators = [];
    notifies.OntologyValidators = [];
    return notifies;
}(Base.BaseProperty));
exports.notifies = notifies;
var qualifiedAssociation = /** @class */ (function (_super) {
    __extends(qualifiedAssociation, _super);
    function qualifiedAssociation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    qualifiedAssociation.domain = undefined;
    qualifiedAssociation.range = undefined;
    qualifiedAssociation.subPropertyOf = [];
    qualifiedAssociation.classValidators = [];
    qualifiedAssociation.OntologyValidators = [];
    return qualifiedAssociation;
}(Base.BaseProperty));
exports.qualifiedAssociation = qualifiedAssociation;
var replacedBy = /** @class */ (function (_super) {
    __extends(replacedBy, _super);
    function replacedBy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    replacedBy.domain = undefined;
    replacedBy.range = undefined;
    replacedBy.subPropertyOf = [];
    replacedBy.classValidators = [];
    replacedBy.OntologyValidators = [];
    return replacedBy;
}(Base.BaseProperty));
exports.replacedBy = replacedBy;
var requiresSecurityClassification = /** @class */ (function (_super) {
    __extends(requiresSecurityClassification, _super);
    function requiresSecurityClassification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    requiresSecurityClassification.domain = undefined;
    requiresSecurityClassification.range = undefined;
    requiresSecurityClassification.subPropertyOf = [hasControl];
    requiresSecurityClassification.classValidators = [];
    requiresSecurityClassification.OntologyValidators = [];
    return requiresSecurityClassification;
}(Base.BaseProperty));
exports.requiresSecurityClassification = requiresSecurityClassification;
var sharedWith = /** @class */ (function (_super) {
    __extends(sharedWith, _super);
    function sharedWith() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    sharedWith.domain = undefined;
    sharedWith.range = undefined;
    sharedWith.subPropertyOf = [wasAssociatedWith];
    sharedWith.classValidators = [];
    sharedWith.OntologyValidators = [];
    return sharedWith;
}(Base.BaseProperty));
exports.sharedWith = sharedWith;
var storedIn = /** @class */ (function (_super) {
    __extends(storedIn, _super);
    function storedIn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    storedIn.domain = undefined;
    storedIn.range = undefined;
    storedIn.subPropertyOf = [topObjectProperty];
    storedIn.classValidators = [];
    storedIn.OntologyValidators = [];
    return storedIn;
}(Base.BaseProperty));
exports.storedIn = storedIn;
var transferredTo = /** @class */ (function (_super) {
    __extends(transferredTo, _super);
    function transferredTo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    transferredTo.domain = undefined;
    transferredTo.range = undefined;
    transferredTo.subPropertyOf = [];
    transferredTo.classValidators = [];
    transferredTo.OntologyValidators = [];
    return transferredTo;
}(Base.BaseProperty));
exports.transferredTo = transferredTo;
var hasQuality = /** @class */ (function (_super) {
    __extends(hasQuality, _super);
    function hasQuality() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    hasQuality.domain = undefined;
    hasQuality.range = undefined;
    hasQuality.subPropertyOf = [];
    hasQuality.classValidators = [];
    hasQuality.OntologyValidators = [];
    return hasQuality;
}(Base.BaseProperty));
exports.hasQuality = hasQuality;
var hasSeries = /** @class */ (function (_super) {
    __extends(hasSeries, _super);
    function hasSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    hasSeries.domain = undefined;
    hasSeries.range = undefined;
    hasSeries.subPropertyOf = [topObjectProperty];
    hasSeries.classValidators = [];
    hasSeries.OntologyValidators = [];
    return hasSeries;
}(Base.BaseProperty));
exports.hasSeries = hasSeries;
var transferredFrom = /** @class */ (function (_super) {
    __extends(transferredFrom, _super);
    function transferredFrom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    transferredFrom.domain = undefined;
    transferredFrom.range = undefined;
    transferredFrom.subPropertyOf = [];
    transferredFrom.classValidators = [];
    transferredFrom.OntologyValidators = [];
    return transferredFrom;
}(Base.BaseProperty));
exports.transferredFrom = transferredFrom;
var hasVersionHistory = /** @class */ (function (_super) {
    __extends(hasVersionHistory, _super);
    function hasVersionHistory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    hasVersionHistory.domain = undefined;
    hasVersionHistory.range = undefined;
    hasVersionHistory.subPropertyOf = [];
    hasVersionHistory.classValidators = [];
    hasVersionHistory.OntologyValidators = [];
    return hasVersionHistory;
}(Base.BaseProperty));
exports.hasVersionHistory = hasVersionHistory;
var isBasedOn = /** @class */ (function (_super) {
    __extends(isBasedOn, _super);
    function isBasedOn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    isBasedOn.domain = undefined;
    isBasedOn.range = undefined;
    isBasedOn.subPropertyOf = [relatedTo];
    isBasedOn.classValidators = [];
    isBasedOn.OntologyValidators = [];
    return isBasedOn;
}(Base.BaseProperty));
exports.isBasedOn = isBasedOn;
var isPartOf = /** @class */ (function (_super) {
    __extends(isPartOf, _super);
    function isPartOf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    isPartOf.domain = undefined;
    isPartOf.range = undefined;
    isPartOf.subPropertyOf = [];
    isPartOf.classValidators = [];
    isPartOf.OntologyValidators = [];
    return isPartOf;
}(Base.BaseProperty));
exports.isPartOf = isPartOf;
var partOf = /** @class */ (function (_super) {
    __extends(partOf, _super);
    function partOf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    partOf.domain = undefined;
    partOf.range = undefined;
    partOf.subPropertyOf = [];
    partOf.classValidators = [];
    partOf.OntologyValidators = [];
    return partOf;
}(Base.BaseProperty));
exports.partOf = partOf;
var positionIn = /** @class */ (function (_super) {
    __extends(positionIn, _super);
    function positionIn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    positionIn.domain = undefined;
    positionIn.range = undefined;
    positionIn.subPropertyOf = [];
    positionIn.classValidators = [];
    positionIn.OntologyValidators = [];
    return positionIn;
}(Base.BaseProperty));
exports.positionIn = positionIn;
var recordOf = /** @class */ (function (_super) {
    __extends(recordOf, _super);
    function recordOf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    recordOf.domain = undefined;
    recordOf.range = undefined;
    recordOf.subPropertyOf = [];
    recordOf.classValidators = [];
    recordOf.OntologyValidators = [];
    return recordOf;
}(Base.BaseProperty));
exports.recordOf = recordOf;
var usedRecord = /** @class */ (function (_super) {
    __extends(usedRecord, _super);
    function usedRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    usedRecord.domain = undefined;
    usedRecord.range = undefined;
    usedRecord.subPropertyOf = [];
    usedRecord.classValidators = [];
    usedRecord.OntologyValidators = [];
    return usedRecord;
}(Base.BaseProperty));
exports.usedRecord = usedRecord;
var wasAssociatedWith = /** @class */ (function (_super) {
    __extends(wasAssociatedWith, _super);
    function wasAssociatedWith() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    wasAssociatedWith.domain = undefined;
    wasAssociatedWith.range = undefined;
    wasAssociatedWith.subPropertyOf = [];
    wasAssociatedWith.classValidators = [];
    wasAssociatedWith.OntologyValidators = [];
    return wasAssociatedWith;
}(Base.BaseProperty));
exports.wasAssociatedWith = wasAssociatedWith;
var priorEvent = /** @class */ (function (_super) {
    __extends(priorEvent, _super);
    function priorEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    priorEvent.domain = undefined;
    priorEvent.range = undefined;
    priorEvent.subPropertyOf = [];
    priorEvent.classValidators = [];
    priorEvent.OntologyValidators = [];
    return priorEvent;
}(Base.BaseProperty));
exports.priorEvent = priorEvent;
var replaces = /** @class */ (function (_super) {
    __extends(replaces, _super);
    function replaces() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    replaces.domain = undefined;
    replaces.range = undefined;
    replaces.subPropertyOf = [];
    replaces.classValidators = [];
    replaces.OntologyValidators = [];
    return replaces;
}(Base.BaseProperty));
exports.replaces = replaces;
