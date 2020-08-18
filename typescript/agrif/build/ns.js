"use strict";
exports.__esModule = true;
exports.ns = void 0;
/**
 * "The Australian Government Records Interoperability Framework (AGRIF, ‘the Framework’) is a system of related semantic ontologies that describe the structure, functions, and activities of the Australian Government, providing sufficient context for the effective use – including but not limited to management – of Australian Government information assets. It complies with the World Wide Web Consortium’s Web Ontology Language (OWL2) Recommendation and makes reference to other Recommendations and existing domain ontologies for archival and preservation processes."@en
 * @contributor-en Kerry Taylor
 * @contributor-en Pouya Ghiasnezhad Omran
 * @contributor-en Sergio José Rodríguez Méndez
 * @contributor -
 * 	Nicholas J. Car-
 * 	<http://orcid.org/0000-0002-8742-7730>-
 * 	<mailto:nicholas.car@surroundaustralia.com>-
 * 	<https://surroundaustralia.com>
 * @created 2016-12-06
 * @creator -
 * 	Katherine Stuart-
 * 	<http://linked.data.gov.au/org/finance>
 * @creator -
 * 	Armin Haller-
 * 	<http://orcid.org/0000-0003-3425-0780>-
 * 	<mailto:armin.haller@anu.edu.au>-
 * 	<https://www.anu.edu.au>
 * @creator -
 * 	John Machin-
 * 	<http://linked.data.gov.au/org/finance>
 * @license <https://creativecommons.org/licenses/by/4.0/>
 * @modified-en 2019-10-21
 * @publisher <http://linked.data.gov.au/org/finance>
 * @rights-en (c) Commonwealth of Australia (Department of Finance) 2019
 * @preferredNamespacePrefix-en agrif
 * @preferredNamespaceUri http://linked.data.gov.au/def/agrif#
 * @type <http://www.w3.org/2002/07/owl#Ontology>
 * @label-en The Australian Government Records Interoperability Framework (AGRIF) ontology
 * @seeAlso <https://github.com/agldwg/agrif-ont>
 * @priorVersion-en 0.8
 * @versionIRI <http://linked.data.gov.au/def/agrif/0.9>
 * @versionInfo-en 0.9
 */
var ns;
(function (ns) {
    /** */
    ns[""] = "http://linked.data.gov.au/def/agrif";
    /** */
    ns["#AGIFTFunction"] = "http://linked.data.gov.au/def/agrif#AGIFTFunction";
    /** */
    ns["#AccessActivity"] = "http://linked.data.gov.au/def/agrif#AccessActivity";
    /** */
    ns["#AccessControl"] = "http://linked.data.gov.au/def/agrif#AccessControl";
    /** */
    ns["#AccessTrigger"] = "http://linked.data.gov.au/def/agrif#AccessTrigger";
    /** */
    ns["#Active"] = "http://linked.data.gov.au/def/agrif#Active";
    /** */
    ns["#Activity"] = "http://linked.data.gov.au/def/agrif#Activity";
    /** */
    ns["#Administrator"] = "http://linked.data.gov.au/def/agrif#Administrator";
    /** */
    ns["#Agent"] = "http://linked.data.gov.au/def/agrif#Agent";
    /** */
    ns["#Approved"] = "http://linked.data.gov.au/def/agrif#Approved";
    /** */
    ns["#Artefact"] = "http://linked.data.gov.au/def/agrif#Artefact";
    /** */
    ns["#ArtefactChangeEvent"] = "http://linked.data.gov.au/def/agrif#ArtefactChangeEvent";
    /** */
    ns["#ArtefactControlEvent"] = "http://linked.data.gov.au/def/agrif#ArtefactControlEvent";
    /** */
    ns["#ArtefactPublishEvent"] = "http://linked.data.gov.au/def/agrif#ArtefactPublishEvent";
    /** */
    ns["#ArtefactSendEvent"] = "http://linked.data.gov.au/def/agrif#ArtefactSendEvent";
    /** */
    ns["#ArtefactShareEvent"] = "http://linked.data.gov.au/def/agrif#ArtefactShareEvent";
    /** */
    ns["#Association"] = "http://linked.data.gov.au/def/agrif#Association";
    /** */
    ns["#AwaitingDisposal"] = "http://linked.data.gov.au/def/agrif#AwaitingDisposal";
    /** */
    ns["#BusinessOwner"] = "http://linked.data.gov.au/def/agrif#BusinessOwner";
    /** */
    ns["#Classifier"] = "http://linked.data.gov.au/def/agrif#Classifier";
    /** */
    ns["#Collection"] = "http://linked.data.gov.au/def/agrif#Collection";
    /** */
    ns["#Completed"] = "http://linked.data.gov.au/def/agrif#Completed";
    /** */
    ns["#Confidential"] = "http://linked.data.gov.au/def/agrif#Confidential";
    /** */
    ns["#Control"] = "http://linked.data.gov.au/def/agrif#Control";
    /** */
    ns["#ControlledVocabulary"] = "http://linked.data.gov.au/def/agrif#ControlledVocabulary";
    /** */
    ns["#Coverage"] = "http://linked.data.gov.au/def/agrif#Coverage";
    /** */
    ns["#CreationEvent"] = "http://linked.data.gov.au/def/agrif#CreationEvent";
    /** */
    ns["#Creator"] = "http://linked.data.gov.au/def/agrif#Creator";
    /** */
    ns["#DecisionStatus"] = "http://linked.data.gov.au/def/agrif#DecisionStatus";
    /** */
    ns["#DigitalArtefact"] = "http://linked.data.gov.au/def/agrif#DigitalArtefact";
    /** */
    ns["#DigitalHoldingSpace"] = "http://linked.data.gov.au/def/agrif#DigitalHoldingSpace";
    /** */
    ns["#DigitalPreservationPolicy"] = "http://linked.data.gov.au/def/agrif#DigitalPreservationPolicy";
    /** */
    ns["#Disapproved"] = "http://linked.data.gov.au/def/agrif#Disapproved";
    /** */
    ns["#DisposalClass"] = "http://linked.data.gov.au/def/agrif#DisposalClass";
    /** */
    ns["#Disposed"] = "http://linked.data.gov.au/def/agrif#Disposed";
    /** */
    ns["#Event"] = "http://linked.data.gov.au/def/agrif#Event";
    /** */
    ns["#FormFactor"] = "http://linked.data.gov.au/def/agrif#FormFactor";
    /** */
    ns["#Function"] = "http://linked.data.gov.au/def/agrif#Function";
    /** */
    ns["#HighlyProtected"] = "http://linked.data.gov.au/def/agrif#HighlyProtected";
    /** */
    ns["#HoldingSpace"] = "http://linked.data.gov.au/def/agrif#HoldingSpace";
    /** */
    ns["#InformationManagementPolicy"] = "http://linked.data.gov.au/def/agrif#InformationManagementPolicy";
    /** */
    ns["#InformationSystem"] = "http://linked.data.gov.au/def/agrif#InformationSystem";
    /** */
    ns["#IntellectualControlSystem"] = "http://linked.data.gov.au/def/agrif#IntellectualControlSystem";
    /** */
    ns["#JurisdictionalCoverage"] = "http://linked.data.gov.au/def/agrif#JurisdictionalCoverage";
    /** */
    ns["#LogicalCollection"] = "http://linked.data.gov.au/def/agrif#LogicalCollection";
    /** */
    ns["#MaintainActivity"] = "http://linked.data.gov.au/def/agrif#MaintainActivity";
    /** */
    ns["#Manifest"] = "http://linked.data.gov.au/def/agrif#Manifest";
    /** */
    ns["#MinimumMetadataSetPolicy"] = "http://linked.data.gov.au/def/agrif#MinimumMetadataSetPolicy";
    /** */
    ns["#Organisation"] = "http://linked.data.gov.au/def/agrif#Organisation";
    /** */
    ns["#OrganisationalUnit"] = "http://linked.data.gov.au/def/agrif#OrganisationalUnit";
    /** */
    ns["#Permission"] = "http://linked.data.gov.au/def/agrif#Permission";
    /** */
    ns["#Person"] = "http://linked.data.gov.au/def/agrif#Person";
    /** */
    ns["#PhysicalArtefact"] = "http://linked.data.gov.au/def/agrif#PhysicalArtefact";
    /** */
    ns["#PhysicalCollection"] = "http://linked.data.gov.au/def/agrif#PhysicalCollection";
    /** */
    ns["#PhysicalHoldingSpace"] = "http://linked.data.gov.au/def/agrif#PhysicalHoldingSpace";
    /** */
    ns["#Policy"] = "http://linked.data.gov.au/def/agrif#Policy";
    /** */
    ns["#PreservationQuality"] = "http://linked.data.gov.au/def/agrif#PreservationQuality";
    /** */
    ns["#Protected"] = "http://linked.data.gov.au/def/agrif#Protected";
    /** */
    ns["#Quality"] = "http://linked.data.gov.au/def/agrif#Quality";
    /** */
    ns["#Record"] = "http://linked.data.gov.au/def/agrif#Record";
    /** */
    ns["#RecordAuditEvent"] = "http://linked.data.gov.au/def/agrif#RecordAuditEvent";
    /** */
    ns["#RecordControlEvent"] = "http://linked.data.gov.au/def/agrif#RecordControlEvent";
    /** */
    ns["#RecordDecisionEvent"] = "http://linked.data.gov.au/def/agrif#RecordDecisionEvent";
    /** */
    ns["#RecordDestructionEvent"] = "http://linked.data.gov.au/def/agrif#RecordDestructionEvent";
    /** */
    ns["#RecordDisposalEvent"] = "http://linked.data.gov.au/def/agrif#RecordDisposalEvent";
    /** */
    ns["#RecordFreezeEvent"] = "http://linked.data.gov.au/def/agrif#RecordFreezeEvent";
    /** */
    ns["#RecordReplacementEvent"] = "http://linked.data.gov.au/def/agrif#RecordReplacementEvent";
    /** */
    ns["#RecordSentencingEvent"] = "http://linked.data.gov.au/def/agrif#RecordSentencingEvent";
    /** */
    ns["#RecordStorageStandard"] = "http://linked.data.gov.au/def/agrif#RecordStorageStandard";
    /** */
    ns["#RecordTransferEvent"] = "http://linked.data.gov.au/def/agrif#RecordTransferEvent";
    /** */
    ns["#RecordsAuthorityFunction"] = "http://linked.data.gov.au/def/agrif#RecordsAuthorityFunction";
    /** */
    ns["#RecordsAuthorityPolicy"] = "http://linked.data.gov.au/def/agrif#RecordsAuthorityPolicy";
    /** */
    ns["#Redundant"] = "http://linked.data.gov.au/def/agrif#Redundant";
    /** */
    ns["#RetainAsNationalArchives"] = "http://linked.data.gov.au/def/agrif#RetainAsNationalArchives";
    /** */
    ns["#Role"] = "http://linked.data.gov.au/def/agrif#Role";
    /** */
    ns["#Secret"] = "http://linked.data.gov.au/def/agrif#Secret";
    /** */
    ns["#SecurityClassification"] = "http://linked.data.gov.au/def/agrif#SecurityClassification";
    /** */
    ns["#SecurityControl"] = "http://linked.data.gov.au/def/agrif#SecurityControl";
    /** */
    ns["#Series"] = "http://linked.data.gov.au/def/agrif#Series";
    /** */
    ns["#ShareActivity"] = "http://linked.data.gov.au/def/agrif#ShareActivity";
    /** */
    ns["#SpatialCoverage"] = "http://linked.data.gov.au/def/agrif#SpatialCoverage";
    /** */
    ns["#SpatialLocation"] = "http://linked.data.gov.au/def/agrif#SpatialLocation";
    /** */
    ns["#Status"] = "http://linked.data.gov.au/def/agrif#Status";
    /** */
    ns["#TemporalCoverage"] = "http://linked.data.gov.au/def/agrif#TemporalCoverage";
    /** */
    ns["#TopSecretNV"] = "http://linked.data.gov.au/def/agrif#TopSecretNV";
    /** */
    ns["#TopSecretPV"] = "http://linked.data.gov.au/def/agrif#TopSecretPV";
    /** */
    ns["#Trigger"] = "http://linked.data.gov.au/def/agrif#Trigger";
    /** */
    ns["#Unclassified"] = "http://linked.data.gov.au/def/agrif#Unclassified";
    /** */
    ns["#User"] = "http://linked.data.gov.au/def/agrif#User";
    /** */
    ns["#VersionHistory"] = "http://linked.data.gov.au/def/agrif#VersionHistory";
    /** */
    ns["#accessedBy"] = "http://linked.data.gov.au/def/agrif#accessedBy";
    /** */
    ns["#actsAs"] = "http://linked.data.gov.au/def/agrif#actsAs";
    /** */
    ns["#affects"] = "http://linked.data.gov.au/def/agrif#affects";
    /** */
    ns["#associatedFunction"] = "http://linked.data.gov.au/def/agrif#associatedFunction";
    /** */
    ns["#associatedRole"] = "http://linked.data.gov.au/def/agrif#associatedRole";
    /** */
    ns["#checksum"] = "http://linked.data.gov.au/def/agrif#checksum";
    /** */
    ns["#disposalClassNumber"] = "http://linked.data.gov.au/def/agrif#disposalClassNumber";
    /** */
    ns["#endedAtTime"] = "http://linked.data.gov.au/def/agrif#endedAtTime";
    /** */
    ns["#filename"] = "http://linked.data.gov.au/def/agrif#filename";
    /** */
    ns["#filesize"] = "http://linked.data.gov.au/def/agrif#filesize";
    /** */
    ns["#format"] = "http://linked.data.gov.au/def/agrif#format";
    /** */
    ns["#guidingPolicy"] = "http://linked.data.gov.au/def/agrif#guidingPolicy";
    /** */
    ns["#hasActivity"] = "http://linked.data.gov.au/def/agrif#hasActivity";
    /** */
    ns["#hasAgent"] = "http://linked.data.gov.au/def/agrif#hasAgent";
    /** */
    ns["#hasClassifier"] = "http://linked.data.gov.au/def/agrif#hasClassifier";
    /** */
    ns["#hasControl"] = "http://linked.data.gov.au/def/agrif#hasControl";
    /** */
    ns["#hasCoverage"] = "http://linked.data.gov.au/def/agrif#hasCoverage";
    /** */
    ns["#hasDecisionStatus"] = "http://linked.data.gov.au/def/agrif#hasDecisionStatus";
    /** */
    ns["#hasDisposalClass"] = "http://linked.data.gov.au/def/agrif#hasDisposalClass";
    /** */
    ns["#hasFormFactor"] = "http://linked.data.gov.au/def/agrif#hasFormFactor";
    /** */
    ns["#hasLocation"] = "http://linked.data.gov.au/def/agrif#hasLocation";
    /** */
    ns["#hasManifest"] = "http://linked.data.gov.au/def/agrif#hasManifest";
    /** */
    ns["#hasNextVersion"] = "http://linked.data.gov.au/def/agrif#hasNextVersion";
    /** */
    ns["#hasPart"] = "http://linked.data.gov.au/def/agrif#hasPart";
    /** */
    ns["#hasPermission"] = "http://linked.data.gov.au/def/agrif#hasPermission";
    /** */
    ns["#hasPrerequisiteDecisionEvent"] = "http://linked.data.gov.au/def/agrif#hasPrerequisiteDecisionEvent";
    /** */
    ns["#hasPreviousVersion"] = "http://linked.data.gov.au/def/agrif#hasPreviousVersion";
    /** */
    ns["#hasQuality"] = "http://linked.data.gov.au/def/agrif#hasQuality";
    /** */
    ns["#hasSeries"] = "http://linked.data.gov.au/def/agrif#hasSeries";
    /** */
    ns["#hasSourceAgent"] = "http://linked.data.gov.au/def/agrif#hasSourceAgent";
    /** */
    ns["#hasStatus"] = "http://linked.data.gov.au/def/agrif#hasStatus";
    /** */
    ns["#hasTargetAgent"] = "http://linked.data.gov.au/def/agrif#hasTargetAgent";
    /** */
    ns["#hasVersionHistory"] = "http://linked.data.gov.au/def/agrif#hasVersionHistory";
    /** */
    ns["#isAffectedBy"] = "http://linked.data.gov.au/def/agrif#isAffectedBy";
    /** */
    ns["#isAttachedTo"] = "http://linked.data.gov.au/def/agrif#isAttachedTo";
    /** */
    ns["#isBasedOn"] = "http://linked.data.gov.au/def/agrif#isBasedOn";
    /** */
    ns["#isChangedBy"] = "http://linked.data.gov.au/def/agrif#isChangedBy";
    /** */
    ns["#isDuplicateOf"] = "http://linked.data.gov.au/def/agrif#isDuplicateOf";
    /** */
    ns["#isMentionedIn"] = "http://linked.data.gov.au/def/agrif#isMentionedIn";
    /** */
    ns["#isPartOf"] = "http://linked.data.gov.au/def/agrif#isPartOf";
    /** */
    ns["#notifies"] = "http://linked.data.gov.au/def/agrif#notifies";
    /** */
    ns["#partOf"] = "http://linked.data.gov.au/def/agrif#partOf";
    /** */
    ns["#positionIn"] = "http://linked.data.gov.au/def/agrif#positionIn";
    /** */
    ns["#priorEvent"] = "http://linked.data.gov.au/def/agrif#priorEvent";
    /** */
    ns["#qualifiedAssociation"] = "http://linked.data.gov.au/def/agrif#qualifiedAssociation";
    /** */
    ns["#recordOf"] = "http://linked.data.gov.au/def/agrif#recordOf";
    /** */
    ns["#relatedTo"] = "http://linked.data.gov.au/def/agrif#relatedTo";
    /** */
    ns["#replacedBy"] = "http://linked.data.gov.au/def/agrif#replacedBy";
    /** */
    ns["#replaces"] = "http://linked.data.gov.au/def/agrif#replaces";
    /** */
    ns["#requiresSecurityClassification"] = "http://linked.data.gov.au/def/agrif#requiresSecurityClassification";
    /** */
    ns["#seriesNumber"] = "http://linked.data.gov.au/def/agrif#seriesNumber";
    /** */
    ns["#sharedWith"] = "http://linked.data.gov.au/def/agrif#sharedWith";
    /** */
    ns["#softwareAssignedID"] = "http://linked.data.gov.au/def/agrif#softwareAssignedID";
    /** */
    ns["#startedAtTime"] = "http://linked.data.gov.au/def/agrif#startedAtTime";
    /** */
    ns["#storedIn"] = "http://linked.data.gov.au/def/agrif#storedIn";
    /** */
    ns["#transferredFrom"] = "http://linked.data.gov.au/def/agrif#transferredFrom";
    /** */
    ns["#transferredTo"] = "http://linked.data.gov.au/def/agrif#transferredTo";
    /** */
    ns["#triggeredBy"] = "http://linked.data.gov.au/def/agrif#triggeredBy";
    /** */
    ns["#triggers"] = "http://linked.data.gov.au/def/agrif#triggers";
    /** */
    ns["#usedRecord"] = "http://linked.data.gov.au/def/agrif#usedRecord";
    /** */
    ns["#wasAssociatedWith"] = "http://linked.data.gov.au/def/agrif#wasAssociatedWith";
})(ns = exports.ns || (exports.ns = {}));
