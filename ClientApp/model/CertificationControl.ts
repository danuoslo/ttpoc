import { LocalizedValue } from './LocalizedValue';
import { ControlImplementationResponsibility } from './ControlImplementationResponsibility';
import { CertificationControlStatus } from './CertificationControlStatus';
import { CertificationControlTestResult } from './CertificationControlTestResult';
import { CertificationAssignment } from './CertificationAssignment';

export class CertificationControl {

    // ID
    public id: string;
    // CERTIFICATIONCONTROLFAMILYID
    public certificationControlFamilyId: string;
    // NUMBER
    public number: string;
    // CLOUDSERVICECONTROLNUMBERS
    public cloudServiceControlNumbers: string[];
    // TITLE
    public title: LocalizedValue[];
    // DESCRIPTION
    public description: LocalizedValue[];
    // IMPLEMENTATIONDETAILS
    public implementationDetails: LocalizedValue[];
    // CONTROLIMPLEMENTATIONRESPONSIBILITY
    public controlImplementationResponsibility: ControlImplementationResponsibility;
    // CUSTOMERIMPLEMENTATIONACTIONOVERVIEW
    public customerImplementationActionOverview: LocalizedValue[];
    // CUSTOMERIMPLEMENTATIONACTIONURL
    public customerImplementationActionUrl: string;
    // CUSTOMERIMPLEMENTATIONACTIONDESCRIPTION
    public customerImplementationActionDescription: LocalizedValue[];
    // STATUS
    public status: CertificationControlStatus;
    // TESTRESULTHISTORY
    public testResultHistory: CertificationControlTestResult[];
    // CERTIFICATIONASSIGNMENTHISTORY
    public certificationAssignmentHistory: CertificationAssignment[];
}
