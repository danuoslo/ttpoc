import { WorkloadComplianceStatus } from './WorkloadComplianceStatus';

export class CloudServiceWorkloadComplianceStatus {

    // ID
    public id: string;
    // CLOUDSERVICEWORKLOADID
    public cloudServiceWorkloadId: string;
    // REGIONID
    public regionId: string;
    // CERTIFICATIONID
    public certificationId: string;
    // COMPLIANCESTATUS
    public complianceStatus: WorkloadComplianceStatus;
    // WHENCOMPLIANCESTATUSEFFECTIVE
    public whenComplianceStatusEffective: Date;
}


