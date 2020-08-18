import { Base } from "../bases";
import { ClassInterface } from "./class-interface";
import { ns } from "./enum";

export class Artefact extends Base.BaseClass implements ClassInterface.Artefact {
    static id: ns = ns.Artefact;
    static label: string = "Artefact";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class AGIFTFunction extends Base.BaseClass implements ClassInterface.AGIFTFunction {
    static id: ns = ns.AGIFTFunction;
    static label: string = "AGIFT Function";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [Function];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class AccessActivity extends Base.BaseClass implements ClassInterface.AccessActivity {
    static id: ns = ns.AccessActivity;
    static label: string = "Access Activity";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [Activity];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class AccessControl extends Base.BaseClass implements ClassInterface.AccessControl {
    static id: ns = ns.AccessControl;
    static label: string = "Access Control";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [Control];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class Activity extends Base.BaseClass implements ClassInterface.Activity {
    static id: ns = ns.Activity;
    static label: string = "Activity";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class Function extends Base.BaseClass implements ClassInterface.Function {
    static id: ns = ns.Function;
    static label: string = "Function";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class Agent extends Base.BaseClass implements ClassInterface.Agent {
    static id: ns = ns.Agent;
    static label: string = "Agent";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class AccessTrigger extends Base.BaseClass implements ClassInterface.AccessTrigger {
    static id: ns = ns.AccessTrigger;
    static label: string = "Access Trigger";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [Trigger];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class Association extends Base.BaseClass implements ClassInterface.Association {
    static id: ns = ns.Association;
    static label: string = "Association";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class Policy extends Base.BaseClass implements ClassInterface.Policy {
    static id: ns = ns.Policy;
    static label: string = "Policy";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class SpatialLocation extends Base.BaseClass implements ClassInterface.SpatialLocation {
    static id: ns = ns.SpatialLocation;
    static label: string = "Spatial Location";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class Status extends Base.BaseClass implements ClassInterface.Status {
    static id: ns = ns.Status;
    static label: string = "Status";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class SecurityClassification extends Base.BaseClass implements ClassInterface.SecurityClassification {
    static id: ns = ns.SecurityClassification;
    static label: string = "Security Classification";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [AccessControl];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class Record extends Base.BaseClass implements ClassInterface.Record {
    static id: ns = ns.Record;
    static label: string = "Record";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class Administrator extends Base.BaseClass implements ClassInterface.Administrator {
    static id: ns = ns.Administrator;
    static label: string = "Administrator";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [Role];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class Permission extends Base.BaseClass implements ClassInterface.Permission {
    static id: ns = ns.Permission;
    static label: string = "Permission";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class PreservationQuality extends Base.BaseClass implements ClassInterface.PreservationQuality {
    static id: ns = ns.PreservationQuality;
    static label: string = "Preservation Quality";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [Quality];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class Event extends Base.BaseClass implements ClassInterface.Event {
    static id: ns = ns.Event;
    static label: string = "Event";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class InformationSystem extends Base.BaseClass implements ClassInterface.InformationSystem {
    static id: ns = ns.InformationSystem;
    static label: string = "Information System";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class IntellectualControlSystem extends Base.BaseClass implements ClassInterface.IntellectualControlSystem {
    static id: ns = ns.IntellectualControlSystem;
    static label: string = "Intellectual Control System";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [InformationSystem];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class ArtefactChangeEvent extends Base.BaseClass implements ClassInterface.ArtefactChangeEvent {
    static id: ns = ns.ArtefactChangeEvent;
    static label: string = "Artefact Change Event";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [Event];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class ArtefactControlEvent extends Base.BaseClass implements ClassInterface.ArtefactControlEvent {
    static id: ns = ns.ArtefactControlEvent;
    static label: string = "Artefact Control Event";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [Event];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class ArtefactPublishEvent extends Base.BaseClass implements ClassInterface.ArtefactPublishEvent {
    static id: ns = ns.ArtefactPublishEvent;
    static label: string = "Artefact Publish Event";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [ArtefactControlEvent];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class ArtefactShareEvent extends Base.BaseClass implements ClassInterface.ArtefactShareEvent {
    static id: ns = ns.ArtefactShareEvent;
    static label: string = "Artefact Share Event";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [ArtefactControlEvent];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class BusinessOwner extends Base.BaseClass implements ClassInterface.BusinessOwner {
    static id: ns = ns.BusinessOwner;
    static label: string = "Business Owner";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [Role];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class Collection extends Base.BaseClass implements ClassInterface.Collection {
    static id: ns = ns.Collection;
    static label: string = "Collection";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class ControlledVocabulary extends Base.BaseClass implements ClassInterface.ControlledVocabulary {
    static id: ns = ns.ControlledVocabulary;
    static label: string = "Controlled Vocabulary";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [IntellectualControlSystem];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class Coverage extends Base.BaseClass implements ClassInterface.Coverage {
    static id: ns = ns.Coverage;
    static label: string = "Coverage";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class Creator extends Base.BaseClass implements ClassInterface.Creator {
    static id: ns = ns.Creator;
    static label: string = "Creator";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [Role];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class DigitalArtefact extends Base.BaseClass implements ClassInterface.DigitalArtefact {
    static id: ns = ns.DigitalArtefact;
    static label: string = "Digital Artefact";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [Artefact];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class DigitalHoldingSpace extends Base.BaseClass implements ClassInterface.DigitalHoldingSpace {
    static id: ns = ns.DigitalHoldingSpace;
    static label: string = "Digital Holding Space";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [HoldingSpace];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class DigitalPreservationPolicy extends Base.BaseClass implements ClassInterface.DigitalPreservationPolicy {
    static id: ns = ns.DigitalPreservationPolicy;
    static label: string = "Digital Preservation Policy";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [Policy];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class RecordsAuthorityPolicy extends Base.BaseClass implements ClassInterface.RecordsAuthorityPolicy {
    static id: ns = ns.RecordsAuthorityPolicy;
    static label: string = "Records Authority Disposal Class Policy";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [Policy];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class FormFactor extends Base.BaseClass implements ClassInterface.FormFactor {
    static id: ns = ns.FormFactor;
    static label: string = "Form Factor";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class InformationManagementPolicy extends Base.BaseClass implements ClassInterface.InformationManagementPolicy {
    static id: ns = ns.InformationManagementPolicy;
    static label: string = "Information Management Policy";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [Policy];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class JurisdictionalCoverage extends Base.BaseClass implements ClassInterface.JurisdictionalCoverage {
    static id: ns = ns.JurisdictionalCoverage;
    static label: string = "Jurisdictional Coverage";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [Coverage];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class MaintainActivity extends Base.BaseClass implements ClassInterface.MaintainActivity {
    static id: ns = ns.MaintainActivity;
    static label: string = "Maintain Activity";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [Activity];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class Manifest extends Base.BaseClass implements ClassInterface.Manifest {
    static id: ns = ns.Manifest;
    static label: string = "Manifest";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class MinimumMetadataSetPolicy extends Base.BaseClass implements ClassInterface.MinimumMetadataSetPolicy {
    static id: ns = ns.MinimumMetadataSetPolicy;
    static label: string = "Minimum Metadata Set Policy";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [Policy];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class OrganisationalUnit extends Base.BaseClass implements ClassInterface.OrganisationalUnit {
    static id: ns = ns.OrganisationalUnit;
    static label: string = "Organisational Unit";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [Organisation];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class Person extends Base.BaseClass implements ClassInterface.Person {
    static id: ns = ns.Person;
    static label: string = "Person";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [Agent];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class PhysicalCollection extends Base.BaseClass implements ClassInterface.PhysicalCollection {
    static id: ns = ns.PhysicalCollection;
    static label: string = "Physical Collection";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [Collection];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class Series extends Base.BaseClass implements ClassInterface.Series {
    static id: ns = ns.Series;
    static label: string = "Series";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [IntellectualControlSystem];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class RecordAuditEvent extends Base.BaseClass implements ClassInterface.RecordAuditEvent {
    static id: ns = ns.RecordAuditEvent;
    static label: string = "Record Audit Event";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [RecordControlEvent];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class RecordDecisionEvent extends Base.BaseClass implements ClassInterface.RecordDecisionEvent {
    static id: ns = ns.RecordDecisionEvent;
    static label: string = "Record Decision Event";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [RecordControlEvent];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class RecordDestructionEvent extends Base.BaseClass implements ClassInterface.RecordDestructionEvent {
    static id: ns = ns.RecordDestructionEvent;
    static label: string = "Record Destruction Event";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [RecordDisposalEvent];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class RecordFreezeEvent extends Base.BaseClass implements ClassInterface.RecordFreezeEvent {
    static id: ns = ns.RecordFreezeEvent;
    static label: string = "Record Freeze Event";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [RecordDisposalEvent];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class VersionHistory extends Base.BaseClass implements ClassInterface.VersionHistory {
    static id: ns = ns.VersionHistory;
    static label: string = "Version History";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class RecordSentencingEvent extends Base.BaseClass implements ClassInterface.RecordSentencingEvent {
    static id: ns = ns.RecordSentencingEvent;
    static label: string = "Record Sentencing Event";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [RecordControlEvent];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class RecordTransferEvent extends Base.BaseClass implements ClassInterface.RecordTransferEvent {
    static id: ns = ns.RecordTransferEvent;
    static label: string = "Record Transfer Event";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [RecordDisposalEvent];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class RecordsAuthorityFunction extends Base.BaseClass implements ClassInterface.RecordsAuthorityFunction {
    static id: ns = ns.RecordsAuthorityFunction;
    static label: string = "Records Authority Function";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [Function];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class SecurityControl extends Base.BaseClass implements ClassInterface.SecurityControl {
    static id: ns = ns.SecurityControl;
    static label: string = "Security Control";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [Control];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class ShareActivity extends Base.BaseClass implements ClassInterface.ShareActivity {
    static id: ns = ns.ShareActivity;
    static label: string = "Share Activity";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [Activity];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class SpatialCoverage extends Base.BaseClass implements ClassInterface.SpatialCoverage {
    static id: ns = ns.SpatialCoverage;
    static label: string = "Spatial Coverage";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [Coverage];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class User extends Base.BaseClass implements ClassInterface.User {
    static id: ns = ns.User;
    static label: string = "User";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [Role];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class RecordReplacementEvent extends Base.BaseClass implements ClassInterface.RecordReplacementEvent {
    static id: ns = ns.RecordReplacementEvent;
    static label: string = "Record Replacement Event";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [RecordControlEvent];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class Quality extends Base.BaseClass implements ClassInterface.Quality {
    static id: ns = ns.Quality;
    static label: string = "Quality";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class DisposalClass extends Base.BaseClass implements ClassInterface.DisposalClass {
    static id: ns = ns.DisposalClass;
    static label: string = "Disposal Class";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [RecordsAuthorityPolicy];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class RecordDisposalEvent extends Base.BaseClass implements ClassInterface.RecordDisposalEvent {
    static id: ns = ns.RecordDisposalEvent;
    static label: string = "Record Disposal Event";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [RecordControlEvent];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class CreationEvent extends Base.BaseClass implements ClassInterface.CreationEvent {
    static id: ns = ns.CreationEvent;
    static label: string = "Record Creation Event";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [Event];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class DecisionStatus extends Base.BaseClass implements ClassInterface.DecisionStatus {
    static id: ns = ns.DecisionStatus;
    static label: string = "Decision Status";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [Status];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class ArtefactSendEvent extends Base.BaseClass implements ClassInterface.ArtefactSendEvent {
    static id: ns = ns.ArtefactSendEvent;
    static label: string = "Artefact Send Event";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [ArtefactChangeEvent];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class Organisation extends Base.BaseClass implements ClassInterface.Organisation {
    static id: ns = ns.Organisation;
    static label: string = "Organisation";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [Agent];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class Classifier extends Base.BaseClass implements ClassInterface.Classifier {
    static id: ns = ns.Classifier;
    static label: string = "Classifier";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class HoldingSpace extends Base.BaseClass implements ClassInterface.HoldingSpace {
    static id: ns = ns.HoldingSpace;
    static label: string = "Holding Space";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [SpatialLocation];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class RecordStorageStandard extends Base.BaseClass implements ClassInterface.RecordStorageStandard {
    static id: ns = ns.RecordStorageStandard;
    static label: string = "Record Storage Standard";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [Policy];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class RecordControlEvent extends Base.BaseClass implements ClassInterface.RecordControlEvent {
    static id: ns = ns.RecordControlEvent;
    static label: string = "Record Control Event";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [Event];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class PhysicalArtefact extends Base.BaseClass implements ClassInterface.PhysicalArtefact {
    static id: ns = ns.PhysicalArtefact;
    static label: string = "Physical Artefact";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [Artefact];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class LogicalCollection extends Base.BaseClass implements ClassInterface.LogicalCollection {
    static id: ns = ns.LogicalCollection;
    static label: string = "Logical Collection";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [Collection];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class TemporalCoverage extends Base.BaseClass implements ClassInterface.TemporalCoverage {
    static id: ns = ns.TemporalCoverage;
    static label: string = "Temporal Coverage";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [Coverage];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class PhysicalHoldingSpace extends Base.BaseClass implements ClassInterface.PhysicalHoldingSpace {
    static id: ns = ns.PhysicalHoldingSpace;
    static label: string = "Physical Holding Space";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [HoldingSpace];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class Role extends Base.BaseClass implements ClassInterface.Role {
    static id: ns = ns.Role;
    static label: string = "Role";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class Control extends Base.BaseClass implements ClassInterface.Control {
    static id: ns = ns.Control;
    static label: string = "Control";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}

export class Trigger extends Base.BaseClass implements ClassInterface.Trigger {
    static id: ns = ns.Trigger;
    static label: string = "Trigger";
    static type: typeof Base.BaseClass = Class;
    static subClassOf: (typeof Base.BaseClass)[] = [];
    static SHACLValidators: Base.Validators[] = [];
    static OnotologyValidators: Base.Validators[] = [];
}
