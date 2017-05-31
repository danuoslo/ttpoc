import { LocalizedValue } from './LocalizedValue';
import { CloudServiceWorkloadComplianceStatus } from './CloudServiceWorkloadComplianceStatus';

export class CloudServiceWorkload {

    // ID
    public id: string;
    // CLOUDSERVICEID
    public cloudServiceId: string;
    // PRIMARYCATEGORY
    public primaryCategory: LocalizedValue[];
    // SECONDARYCATEGORY
    public secondaryCategory: LocalizedValue[];
    // NAME
    public name: LocalizedValue[];
    // REGIONAVAILABILITY
    public regionAvailability: string[];
    // REGIONALCOMPLIANCESTATUS
    public regionalComplianceStatus: CloudServiceWorkloadComplianceStatus[];
}


