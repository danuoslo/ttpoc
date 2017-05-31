import { LocalizedValue } from './LocalizedValue';
import { CertificationControlFamily } from './CertificationControlFamily';

export class Certification {

    // ID
    public id: string;
    // CLOUDSERVICEID
    public cloudServiceId: string;
    // NAME
    public name: LocalizedValue[];
    // CERTIFICATIONCONTROLFAMILIES
    public certificationControlFamilies: CertificationControlFamily[];
}


