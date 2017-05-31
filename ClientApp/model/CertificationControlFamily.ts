import { LocalizedValue } from './LocalizedValue';
import { CertificationControl } from './CertificationControl';

export class CertificationControlFamily {

    // ID
    public id: string;
    // CERTIFICATIONID
    public certificationId: string;
    // NUMBER
    public number: string;
    // TITLE
    public title: LocalizedValue[];
    // DESCRIPTION
    public description: LocalizedValue[];
    // CERTIFICATIONCONTROLS
    public certificationControls: CertificationControl[];
}


