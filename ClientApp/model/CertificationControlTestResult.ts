import { LocalizedValue } from './LocalizedValue';
import { CertificationControlTestResultStatus } from "./CertificationControlTestResultStatus";

export class CertificationControlTestResult {

    // ID
    public id: string;
    // CERTIFICATIONCONTROLID
    public certificationControlId: string;
    // WHENTESTED
    public whenTested: Date;
    // WHOTESTED
    public whoTested: string;
    // TESTPLANDETAILS
    public testPlanDetails: Array<LocalizedValue>;
    // FINDINGS
    public findings: Array<LocalizedValue>;
    // MANAGEMENTRESPONSE
    public managementResponse: Array<LocalizedValue> = [];
    // LOWRISKFINDINGSCOUNT
    public lowRiskFindingsCount: number;
    // MEDIUMRISKFINDINGSCOUNT
    public mediumRiskFindingsCount: number;
    // HIGHRISKFINDINGSCOUNT
    public highRiskFindingsCount: number;

    public status: CertificationControlTestResultStatus
}


