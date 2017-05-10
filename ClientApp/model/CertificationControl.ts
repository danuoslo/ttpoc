import {LocalizedValue} from './LocalizedValue';
import {ControlImplementationResponsibility} from './ControlImplementationResponsibility';
import {CertificationControlStatus} from './CertificationControlStatus';
import {CertificationControlTestResult} from './CertificationControlTestResult';
import {CertificationAssignment} from './CertificationAssignment';

    // $Classes/Enums/Interfaces(filter)[template][separator]
    // filter (optional): Matches the name or full name of the current item. * = match any, wrap in [] to match attributes or prefix with : to match interfaces or base classes.
    // template: The template to repeat for each matched item
    // separator (optional): A separator template that is placed between all templates e.g. $Properties[public $name: $Type][, ]

    // More info: http://frhagn.github.io/Typewriter/

    
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

	
