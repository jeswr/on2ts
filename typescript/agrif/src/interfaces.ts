import { ns } from "./enum";

/**
 * "The Australian Government Records Interoperability Framework (AGRIF, ‘the Framework’) is a system of related semantic ontologies that describe the structure, functions, and activities of the Australian Government, providing sufficient context for the effective use – including but not limited to management – of Australian Government information assets. It complies with the World Wide Web Consortium’s Web Ontology Language (OWL2) Recommendation and makes reference to other Recommendations and existing domain ontologies for archival and preservation processes."@en
 * @contributor-en Kerry Taylor
 * @contributor-en Pouya Ghiasnezhad Omran
 * @contributor-en Sergio José Rodríguez Méndez
 * @contributor agrif-
 * 	Nicholas J. Caragrif-
 * 	<http://orcid.org/0000-0002-8742-7730>agrif-
 * 	<mailto:nicholas.car@surroundaustralia.com>agrif-
 * 	<https://surroundaustralia.com>
 * @created 2016-12-06
 * @creator agrif-
 * 	Katherine Stuartagrif-
 * 	<http://linked.data.gov.au/org/finance>
 * @creator agrif-
 * 	Armin Halleragrif-
 * 	<http://orcid.org/0000-0003-3425-0780>agrif-
 * 	<mailto:armin.haller@anu.edu.au>agrif-
 * 	<https://www.anu.edu.au>
 * @creator agrif-
 * 	John Machinagrif-
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
export namespace interfaces {
    /** */
    export interface agrif {
        value: any;
    }

    /** */
    export interface AGIFTFunction extends Function {
        value: any;
    }

    /** */
    export interface AccessActivity extends Activity {
        value: any;
    }

    /** */
    export interface AccessControl extends Control {
        value: any;
    }

    /** */
    export interface AccessTrigger extends Trigger {
        value: any;
    }

    /** */
    export interface Active {
        value: any;
    }

    /** */
    export interface Activity {
        value: any;
    }

    /** */
    export interface Administrator extends Role {
        value: any;
    }

    /** */
    export interface Agent {
        value: any;
    }

    /** */
    export interface Approved {
        value: any;
    }

    /** */
    export interface Artefact {
        value: any;
    }

    /** */
    export interface ArtefactChangeEvent extends Event {
        value: any;
    }

    /** */
    export interface ArtefactControlEvent extends Event {
        value: any;
    }

    /** */
    export interface ArtefactPublishEvent extends ArtefactControlEvent {
        value: any;
    }

    /** */
    export interface ArtefactSendEvent extends ArtefactChangeEvent {
        value: any;
    }

    /** */
    export interface ArtefactShareEvent extends ArtefactControlEvent {
        value: any;
    }

    /** */
    export interface Association {
        value: any;
    }

    /** */
    export interface AwaitingDisposal {
        value: any;
    }

    /** */
    export interface BusinessOwner extends Role {
        value: any;
    }

    /** */
    export interface Classifier {
        value: any;
    }

    /** */
    export interface Collection {
        value: any;
    }

    /** */
    export interface Completed {
        value: any;
    }

    /** */
    export interface Confidential {
        value: any;
    }

    /** */
    export interface Control {
        value: any;
    }

    /** */
    export interface ControlledVocabulary extends IntellectualControlSystem {
        value: any;
    }

    /** */
    export interface Coverage {
        value: any;
    }

    /** */
    export interface CreationEvent extends Event {
        value: any;
    }

    /** */
    export interface Creator extends Role {
        value: any;
    }

    /** */
    export interface DecisionStatus extends Status {
        value: any;
    }

    /** */
    export interface DigitalArtefact extends Artefact {
        value: any;
    }

    /** */
    export interface DigitalHoldingSpace extends HoldingSpace {
        value: any;
    }

    /** */
    export interface DigitalPreservationPolicy extends Policy {
        value: any;
    }

    /** */
    export interface Disapproved {
        value: any;
    }

    /** */
    export interface DisposalClass extends RecordsAuthorityPolicy {
        value: any;
    }

    /** */
    export interface Disposed {
        value: any;
    }

    /** */
    export interface Event {
        value: any;
    }

    /** */
    export interface FormFactor {
        value: any;
    }

    /** */
    export interface Function {
        value: any;
    }

    /** */
    export interface HighlyProtected {
        value: any;
    }

    /** */
    export interface HoldingSpace extends SpatialLocation {
        value: any;
    }

    /** */
    export interface InformationManagementPolicy extends Policy {
        value: any;
    }

    /** */
    export interface InformationSystem {
        value: any;
    }

    /** */
    export interface IntellectualControlSystem extends InformationSystem {
        value: any;
    }

    /** */
    export interface JurisdictionalCoverage extends Coverage {
        value: any;
    }

    /** */
    export interface LogicalCollection extends Collection {
        value: any;
    }

    /** */
    export interface MaintainActivity extends Activity {
        value: any;
    }

    /** */
    export interface Manifest {
        value: any;
    }

    /** */
    export interface MinimumMetadataSetPolicy extends Policy {
        value: any;
    }

    /** */
    export interface Organisation extends Agent {
        value: any;
    }

    /** */
    export interface OrganisationalUnit extends Organisation {
        value: any;
    }

    /** */
    export interface Permission {
        value: any;
    }

    /** */
    export interface Person extends Agent {
        value: any;
    }

    /** */
    export interface PhysicalArtefact extends Artefact {
        value: any;
    }

    /** */
    export interface PhysicalCollection extends Collection {
        value: any;
    }

    /** */
    export interface PhysicalHoldingSpace extends HoldingSpace {
        value: any;
    }

    /** */
    export interface Policy {
        value: any;
    }

    /** */
    export interface PreservationQuality extends Quality {
        value: any;
    }

    /** */
    export interface Protected {
        value: any;
    }

    /** */
    export interface Quality {
        value: any;
    }

    /** */
    export interface Record {
        value: any;
    }

    /** */
    export interface RecordAuditEvent extends RecordControlEvent {
        value: any;
    }

    /** */
    export interface RecordControlEvent extends Event {
        value: any;
    }

    /** */
    export interface RecordDecisionEvent extends RecordControlEvent {
        value: any;
    }

    /** */
    export interface RecordDestructionEvent extends RecordDisposalEvent {
        value: any;
    }

    /** */
    export interface RecordDisposalEvent extends RecordControlEvent {
        value: any;
    }

    /** */
    export interface RecordFreezeEvent extends RecordDisposalEvent {
        value: any;
    }

    /** */
    export interface RecordReplacementEvent extends RecordControlEvent {
        value: any;
    }

    /** */
    export interface RecordSentencingEvent extends RecordControlEvent {
        value: any;
    }

    /** */
    export interface RecordStorageStandard extends Policy {
        value: any;
    }

    /** */
    export interface RecordTransferEvent extends RecordDisposalEvent {
        value: any;
    }

    /** */
    export interface RecordsAuthorityFunction extends Function {
        value: any;
    }

    /** */
    export interface RecordsAuthorityPolicy extends Policy {
        value: any;
    }

    /** */
    export interface Redundant {
        value: any;
    }

    /** */
    export interface RetainAsNationalArchives {
        value: any;
    }

    /** */
    export interface Role {
        value: any;
    }

    /** */
    export interface Secret {
        value: any;
    }

    /** */
    export interface SecurityClassification extends AccessControl {
        value: any;
    }

    /** */
    export interface SecurityControl extends Control {
        value: any;
    }

    /** */
    export interface Series extends IntellectualControlSystem {
        value: any;
    }

    /** */
    export interface ShareActivity extends Activity {
        value: any;
    }

    /** */
    export interface SpatialCoverage extends Coverage {
        value: any;
    }

    /** */
    export interface SpatialLocation {
        value: any;
    }

    /** */
    export interface Status {
        value: any;
    }

    /** */
    export interface TemporalCoverage extends Coverage {
        value: any;
    }

    /** */
    export interface TopSecretNV {
        value: any;
    }

    /** */
    export interface TopSecretPV {
        value: any;
    }

    /** */
    export interface Trigger {
        value: any;
    }

    /** */
    export interface Unclassified {
        value: any;
    }

    /** */
    export interface User extends Role {
        value: any;
    }

    /** */
    export interface VersionHistory {
        value: any;
    }

    /** */
    export interface accessedBy extends wasAssociatedWith {
        value: any;
    }

    /** */
    export interface actsAs {
        value: any;
    }

    /** */
    export interface affects {
        value: any;
    }

    /** */
    export interface associatedFunction {
        value: any;
    }

    /** */
    export interface associatedRole {
        value: any;
    }

    /** */
    export interface checksum {
        value: any;
    }

    /** */
    export interface disposalClassNumber {
        value: any;
    }

    /** */
    export interface endedAtTime {
        value: any;
    }

    /** */
    export interface filename {
        value: any;
    }

    /** */
    export interface filesize {
        value: any;
    }

    /** */
    export interface format {
        value: any;
    }

    /** */
    export interface guidingPolicy {
        value: any;
    }

    /** */
    export interface hasActivity {
        value: any;
    }

    /** */
    export interface hasAgent {
        value: any;
    }

    /** */
    export interface hasClassifier extends jectProperty {
        value: any;
    }

    /** */
    export interface hasControl {
        value: any;
    }

    /** */
    export interface hasCoverage {
        value: any;
    }

    /** */
    export interface hasDecisionStatus {
        value: any;
    }

    /** */
    export interface hasDisposalClass {
        value: any;
    }

    /** */
    export interface hasFormFactor {
        value: any;
    }

    /** */
    export interface hasLocation {
        value: any;
    }

    /** */
    export interface hasManifest {
        value: any;
    }

    /** */
    export interface hasNextVersion extends relatedTo {
        value: any;
    }

    /** */
    export interface hasPart {
        value: any;
    }

    /** */
    export interface hasPermission {
        value: any;
    }

    /** */
    export interface hasPrerequisiteDecisionEvent extends priorEvent {
        value: any;
    }

    /** */
    export interface hasPreviousVersion extends relatedTo {
        value: any;
    }

    /** */
    export interface hasQuality {
        value: any;
    }

    /** */
    export interface hasSeries extends jectProperty {
        value: any;
    }

    /** */
    export interface hasSourceAgent extends wasAssociatedWith {
        value: any;
    }

    /** */
    export interface hasStatus {
        value: any;
    }

    /** */
    export interface hasTargetAgent extends wasAssociatedWith {
        value: any;
    }

    /** */
    export interface hasVersionHistory {
        value: any;
    }

    /** */
    export interface isAffectedBy extends jectProperty {
        value: any;
    }

    /** */
    export interface isAttachedTo extends relatedTo {
        value: any;
    }

    /** */
    export interface isBasedOn extends relatedTo {
        value: any;
    }

    /** */
    export interface isChangedBy {
        value: any;
    }

    /** */
    export interface isDuplicateOf extends relatedTo {
        value: any;
    }

    /** */
    export interface isMentionedIn extends relatedTo {
        value: any;
    }

    /** */
    export interface isPartOf {
        value: any;
    }

    /** */
    export interface notifies {
        value: any;
    }

    /** */
    export interface partOf {
        value: any;
    }

    /** */
    export interface positionIn {
        value: any;
    }

    /** */
    export interface priorEvent {
        value: any;
    }

    /** */
    export interface qualifiedAssociation {
        value: any;
    }

    /** */
    export interface recordOf {
        value: any;
    }

    /** */
    export interface relatedTo {
        value: any;
    }

    /** */
    export interface replacedBy {
        value: any;
    }

    /** */
    export interface replaces {
        value: any;
    }

    /** */
    export interface requiresSecurityClassification extends hasControl {
        value: any;
    }

    /** */
    export interface seriesNumber {
        value: any;
    }

    /** */
    export interface sharedWith extends wasAssociatedWith {
        value: any;
    }

    /** */
    export interface softwareAssignedID {
        value: any;
    }

    /** */
    export interface startedAtTime {
        value: any;
    }

    /** */
    export interface storedIn extends jectProperty {
        value: any;
    }

    /** */
    export interface transferredFrom {
        value: any;
    }

    /** */
    export interface transferredTo {
        value: any;
    }

    /** */
    export interface triggeredBy {
        value: any;
    }

    /** */
    export interface triggers {
        value: any;
    }

    /** */
    export interface usedRecord {
        value: any;
    }

    /** */
    export interface wasAssociatedWith {
        value: any;
    }
}
