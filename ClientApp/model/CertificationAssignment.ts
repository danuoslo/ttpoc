import { CustomerImplementationPriority } from './CustomerImplementationPriority';
import { CustomerImplementationStatus } from './CustomerImplementationStatus';
import { CertificationControlAttachment } from './CertificationControlAttachment';
import { CustomerImplementationTestResultStatus } from './CustomerImplementationTestResultStatus';

export class CertificationAssignment {

    // ID
    public id: string;
    // CERTIFICATIONCONTROLID
    public certificationControlId: string;
    // WHENASSIGNED
    public whenAssigned: Date;
    // WHOASSIGNED
    public whoAssigned: string;
    // WHOASSIGNEDTO
    public whoAssignedTo: string;
    // PRIORITY
    public priority: CustomerImplementationPriority;
    // WHENDUE
    public whenDue: Date;
    // GENERALNOTES
    public generalNotes: string;
    // IMPLEMENTATIONNOTES
    public implementationNotes: string;
    // IMPLEMENTATIONSTATUS
    public implementationStatus: CustomerImplementationStatus;
    // WHENTESTED
    public whenTested: Date;
    // WHOTESTED
    public whoTested: string;
    // TESTRESULTSTATUS
    public testResultStatus: CustomerImplementationTestResultStatus;
    // ATTACHMENTS
    public attachments: CertificationControlAttachment[];
    // EMAILREQUESTED
    public emailRequested: boolean;
    // WHENEMAILSENT
    public whenEmailSent: Date;
}
