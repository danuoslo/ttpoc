import {LocalizedValue} from './LocalizedValue';
import {CloudServiceWorkloadComplianceStatus} from './CloudServiceWorkloadComplianceStatus';

    // $Classes/Enums/Interfaces(filter)[template][separator]
    // filter (optional): Matches the name or full name of the current item. * = match any, wrap in [] to match attributes or prefix with : to match interfaces or base classes.
    // template: The template to repeat for each matched item
    // separator (optional): A separator template that is placed between all templates e.g. $Properties[public $name: $Type][, ]

    // More info: http://frhagn.github.io/Typewriter/

    
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

	