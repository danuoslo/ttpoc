import {LocalizedValue} from './LocalizedValue';


    // $Classes/Enums/Interfaces(filter)[template][separator]
    // filter (optional): Matches the name or full name of the current item. * = match any, wrap in [] to match attributes or prefix with : to match interfaces or base classes.
    // template: The template to repeat for each matched item
    // separator (optional): A separator template that is placed between all templates e.g. $Properties[public $name: $Type][, ]

    // More info: http://frhagn.github.io/Typewriter/

    
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
    }

	
