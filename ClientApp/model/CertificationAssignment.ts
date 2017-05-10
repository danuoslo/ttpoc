import {CustomerImplementationPriority} from './CustomerImplementationPriority';
import {CustomerImplementationStatus} from './CustomerImplementationStatus';
import {CertificationControlAttachment} from './CertificationControlAttachment';
import {CustomerImplementationTestResultStatus} from './CustomerImplementationTestResultStatus';
    // $Classes/Enums/Interfaces(filter)[template][separator]
    // filter (optional): Matches the name or full name of the current item. * = match any, wrap in [] to match attributes or prefix with : to match interfaces or base classes.
    // template: The template to repeat for each matched item
    // separator (optional): A separator template that is placed between all templates e.g. $Properties[public $name: $Type][, ]

    // More info: http://frhagn.github.io/Typewriter/

    
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

	
