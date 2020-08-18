export interface Artefact extends Base.BaseClassInterface {
    value: any;
    properties: Base.BaseClass[];
}

export interface AGIFTFunction extends Base.BaseClassInterface, Function {
    value: any;
    properties: Base.BaseClass[];
}

export interface AccessActivity extends Base.BaseClassInterface, Activity {
    value: any;
    properties: Base.BaseClass[];
}

export interface AccessControl extends Base.BaseClassInterface, Control {
    value: any;
    properties: Base.BaseClass[];
}

export interface Activity extends Base.BaseClassInterface {
    value: any;
    properties: Base.BaseClass[];
}

export interface Function extends Base.BaseClassInterface {
    value: any;
    properties: Base.BaseClass[];
}

export interface Agent extends Base.BaseClassInterface {
    value: any;
    properties: Base.BaseClass[];
}

export interface AccessTrigger extends Base.BaseClassInterface, Trigger {
    value: any;
    properties: Base.BaseClass[];
}

export interface Association extends Base.BaseClassInterface {
    value: any;
    properties: Base.BaseClass[];
}

export interface Policy extends Base.BaseClassInterface {
    value: any;
    properties: Base.BaseClass[];
}

export interface SpatialLocation extends Base.BaseClassInterface {
    value: any;
    properties: Base.BaseClass[];
}

export interface Status extends Base.BaseClassInterface {
    value: any;
    properties: Base.BaseClass[];
}

export interface SecurityClassification extends Base.BaseClassInterface, AccessControl {
    value: any;
    properties: Base.BaseClass[];
}

export interface Record extends Base.BaseClassInterface {
    value: any;
    properties: Base.BaseClass[];
}

export interface Administrator extends Base.BaseClassInterface, Role {
    value: any;
    properties: Base.BaseClass[];
}

export interface Permission extends Base.BaseClassInterface {
    value: any;
    properties: Base.BaseClass[];
}

export interface PreservationQuality extends Base.BaseClassInterface, Quality {
    value: any;
    properties: Base.BaseClass[];
}

export interface Event extends Base.BaseClassInterface {
    value: any;
    properties: Base.BaseClass[];
}

export interface InformationSystem extends Base.BaseClassInterface {
    value: any;
    properties: Base.BaseClass[];
}

export interface IntellectualControlSystem extends Base.BaseClassInterface, InformationSystem {
    value: any;
    properties: Base.BaseClass[];
}

export interface ArtefactChangeEvent extends Base.BaseClassInterface, Event {
    value: any;
    properties: Base.BaseClass[];
}

export interface ArtefactControlEvent extends Base.BaseClassInterface, Event {
    value: any;
    properties: Base.BaseClass[];
}

export interface ArtefactPublishEvent extends Base.BaseClassInterface, ArtefactControlEvent {
    value: any;
    properties: Base.BaseClass[];
}

export interface ArtefactShareEvent extends Base.BaseClassInterface, ArtefactControlEvent {
    value: any;
    properties: Base.BaseClass[];
}

export interface BusinessOwner extends Base.BaseClassInterface, Role {
    value: any;
    properties: Base.BaseClass[];
}

export interface Collection extends Base.BaseClassInterface {
    value: any;
    properties: Base.BaseClass[];
}

export interface ControlledVocabulary extends Base.BaseClassInterface, IntellectualControlSystem {
    value: any;
    properties: Base.BaseClass[];
}

export interface Coverage extends Base.BaseClassInterface {
    value: any;
    properties: Base.BaseClass[];
}

export interface Creator extends Base.BaseClassInterface, Role {
    value: any;
    properties: Base.BaseClass[];
}

export interface DigitalArtefact extends Base.BaseClassInterface, Artefact {
    value: any;
    properties: Base.BaseClass[];
}

export interface DigitalHoldingSpace extends Base.BaseClassInterface, HoldingSpace {
    value: any;
    properties: Base.BaseClass[];
}

export interface DigitalPreservationPolicy extends Base.BaseClassInterface, Policy {
    value: any;
    properties: Base.BaseClass[];
}

export interface RecordsAuthorityPolicy extends Base.BaseClassInterface, Policy {
    value: any;
    properties: Base.BaseClass[];
}

export interface FormFactor extends Base.BaseClassInterface {
    value: any;
    properties: Base.BaseClass[];
}

export interface InformationManagementPolicy extends Base.BaseClassInterface, Policy {
    value: any;
    properties: Base.BaseClass[];
}

export interface JurisdictionalCoverage extends Base.BaseClassInterface, Coverage {
    value: any;
    properties: Base.BaseClass[];
}

export interface MaintainActivity extends Base.BaseClassInterface, Activity {
    value: any;
    properties: Base.BaseClass[];
}

export interface Manifest extends Base.BaseClassInterface {
    value: any;
    properties: Base.BaseClass[];
}

export interface MinimumMetadataSetPolicy extends Base.BaseClassInterface, Policy {
    value: any;
    properties: Base.BaseClass[];
}

export interface OrganisationalUnit extends Base.BaseClassInterface, Organisation {
    value: any;
    properties: Base.BaseClass[];
}

export interface Person extends Base.BaseClassInterface, Agent {
    value: any;
    properties: Base.BaseClass[];
}

export interface PhysicalCollection extends Base.BaseClassInterface, Collection {
    value: any;
    properties: Base.BaseClass[];
}

export interface Series extends Base.BaseClassInterface, IntellectualControlSystem {
    value: any;
    properties: Base.BaseClass[];
}

export interface RecordAuditEvent extends Base.BaseClassInterface, RecordControlEvent {
    value: any;
    properties: Base.BaseClass[];
}

export interface RecordDecisionEvent extends Base.BaseClassInterface, RecordControlEvent {
    value: any;
    properties: Base.BaseClass[];
}

export interface RecordDestructionEvent extends Base.BaseClassInterface, RecordDisposalEvent {
    value: any;
    properties: Base.BaseClass[];
}

export interface RecordFreezeEvent extends Base.BaseClassInterface, RecordDisposalEvent {
    value: any;
    properties: Base.BaseClass[];
}

export interface VersionHistory extends Base.BaseClassInterface {
    value: any;
    properties: Base.BaseClass[];
}

export interface RecordSentencingEvent extends Base.BaseClassInterface, RecordControlEvent {
    value: any;
    properties: Base.BaseClass[];
}

export interface RecordTransferEvent extends Base.BaseClassInterface, RecordDisposalEvent {
    value: any;
    properties: Base.BaseClass[];
}

export interface RecordsAuthorityFunction extends Base.BaseClassInterface, Function {
    value: any;
    properties: Base.BaseClass[];
}

export interface SecurityControl extends Base.BaseClassInterface, Control {
    value: any;
    properties: Base.BaseClass[];
}

export interface ShareActivity extends Base.BaseClassInterface, Activity {
    value: any;
    properties: Base.BaseClass[];
}

export interface SpatialCoverage extends Base.BaseClassInterface, Coverage {
    value: any;
    properties: Base.BaseClass[];
}

export interface User extends Base.BaseClassInterface, Role {
    value: any;
    properties: Base.BaseClass[];
}

export interface RecordReplacementEvent extends Base.BaseClassInterface, RecordControlEvent {
    value: any;
    properties: Base.BaseClass[];
}

export interface Quality extends Base.BaseClassInterface {
    value: any;
    properties: Base.BaseClass[];
}

export interface DisposalClass extends Base.BaseClassInterface, RecordsAuthorityPolicy {
    value: any;
    properties: Base.BaseClass[];
}

export interface RecordDisposalEvent extends Base.BaseClassInterface, RecordControlEvent {
    value: any;
    properties: Base.BaseClass[];
}

export interface CreationEvent extends Base.BaseClassInterface, Event {
    value: any;
    properties: Base.BaseClass[];
}

export interface DecisionStatus extends Base.BaseClassInterface, Status {
    value: any;
    properties: Base.BaseClass[];
}

export interface ArtefactSendEvent extends Base.BaseClassInterface, ArtefactChangeEvent {
    value: any;
    properties: Base.BaseClass[];
}

export interface Organisation extends Base.BaseClassInterface, Agent {
    value: any;
    properties: Base.BaseClass[];
}

export interface Classifier extends Base.BaseClassInterface {
    value: any;
    properties: Base.BaseClass[];
}

export interface HoldingSpace extends Base.BaseClassInterface, SpatialLocation {
    value: any;
    properties: Base.BaseClass[];
}

export interface RecordStorageStandard extends Base.BaseClassInterface, Policy {
    value: any;
    properties: Base.BaseClass[];
}

export interface RecordControlEvent extends Base.BaseClassInterface, Event {
    value: any;
    properties: Base.BaseClass[];
}

export interface PhysicalArtefact extends Base.BaseClassInterface, Artefact {
    value: any;
    properties: Base.BaseClass[];
}

export interface LogicalCollection extends Base.BaseClassInterface, Collection {
    value: any;
    properties: Base.BaseClass[];
}

export interface TemporalCoverage extends Base.BaseClassInterface, Coverage {
    value: any;
    properties: Base.BaseClass[];
}

export interface PhysicalHoldingSpace extends Base.BaseClassInterface, HoldingSpace {
    value: any;
    properties: Base.BaseClass[];
}

export interface Role extends Base.BaseClassInterface {
    value: any;
    properties: Base.BaseClass[];
}

export interface Control extends Base.BaseClassInterface {
    value: any;
    properties: Base.BaseClass[];
}

export interface Trigger extends Base.BaseClassInterface {
    value: any;
    properties: Base.BaseClass[];
}
