import {FrameworkMarkupDetails} from '../model/frameworkDetails';
import {Status} from '../model/statusdropdown'

let	FrameWorkMockupData : FrameworkMarkupDetails[] =
	[
		{
        Id:1,
         ISOControl : 'A.05.01.01',
         Description:'The Office 365 Information Security Policy defines Microsofts policies for Office 365. This document addresses the purpose, scope, roles, responsibilities, compliance requirements, and required coordination among the various Microsoft organizations providing some level of support for the security of Office 365. Policies are made available to roles identified in Section 8.3 of the Office 365 System Security Plan via an internal SharePoint site.',
         MSControl: 'AC-0144',   
         NecessaryCustomerAction:'If you are an Azure admin, you probably want to control who can make changes on your site. Ensure that the proper users have administrative privileges to appropriate content. Each site collection has its',
         AdditionalGuidance:'Customers are responsible for developing and maintaining appropriate Access Control policies and procedures that govern access management activities for their organization and users. Review Microsofts ',
         AssignedTo:'Image1',        
         TestPlanFindingNotes: 'G',
         ImplementationDate:new Date().toLocaleDateString(),
         status : [            
              { key: 'A', text: 'Implementation' },
              { key: 'B', text: 'AlternativeImplementation' },
              { key: 'C', text: 'Planned' },
              { key: 'D', text: 'Not in scope' },
              
          ],
           TestResult:'Passed'           
		 },
        
        {
         Id:2,
         ISOControl : 'A.06.01.02',
         Description:'The Office 365 Information Security Policy defines Microsofts policies for Office 365. This document addresses the purpose, scope, roles, responsibilities, compliance requirements, and required coordination among the various Microsoft organizations providing some level of support for the security of Office 365. Policies are made available to roles identified in Section 8.3 of the Office 365 System Security Plan via an internal SharePoint site.',
          MSControl: 'AC-0144',         
          NecessaryCustomerAction:'K',
          AdditionalGuidance:'If you are an Azure admin, you probably want to control who can make changes on your site. Ensure that the proper users have administrative privileges to appropriate content. Each site collection has its own set of permission levels. Azure comes with some default permission levels that you can use, such as Contribute and View Only. But if one of those doesn’t meet your needs, you can create a new permissions level. It’s a best practice that you don’t change the default permission levels',
          AssignedTo:'Image2',          
          TestPlanFindingNotes: 'O',
          ImplementationDate: new Date().toLocaleDateString(),
         status : [            
              { key: 'A', text: 'Implementation' },
              { key: 'B', text: 'AlternativeImplementation' },
              { key: 'C', text: 'Planned' },
              { key: 'D', text: 'Not in scope' },
              
          ]    ,
           TestResult:'Passed'  
		}
        
	];

  export default FrameWorkMockupData;
