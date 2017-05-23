using System; 
using System.Collections.Generic; 
  
namespace poc.ViewModels 
{ 
  
    public class CloudService 
    { 
        public Guid Id; 
        public LocalizedValueList Name; // eg: Azure, Office 365, etc. 
    } 
  
    public class Certification // Likely this will be the document-level storage entity and the children will all be inside it as List<Xyz> collections. 
    { 
        public Guid Id; 
        public Guid CloudServiceId; 
        public LocalizedValueList Name; 
        public IList<CertificationControlFamily> CertificationControlFamilies; 
    } 
  
    public class CertificationControlFamily 
    { 
        public Guid Id; 
        public Guid CertificationId; 
        public string Number; 
        public LocalizedValueList Title; 
        public LocalizedValueList Description; 
        public IList<CertificationControl> CertificationControls; 
    } 
  
    public enum CertificationControlStatus 
    { 
        NotImplemented, 
        Planned, 
        Implemented, 
    } 
  
    public enum ControlImplementationResponsibility 
    { 
        Microsoft, 
        Customer, 
        Shared, 
    } 
  
    public enum CustomerImplementationStatus 
    { 
        NotImplemented, 
        Planned, 
       AlternativeImplementation, 
        Implemented, 
        NotInScope, 
    } 
  
    public enum CustomerImplementationTestResultStatus 
    { 
        NotTested, 
        Passed, 
        Failed, 
    } 
  
    public enum CustomerImplementationPriority 
    { 
        High, 
        Medium, 
        Low, 
    } 
  
    // split up this control and some of the ones below into MicrosoftCertificationControl and TenantCertificationControl with different properties 
    public class CertificationControl // Shared across all tenants 
    { 
        public Guid Id; 
        public Guid CertificationControlFamilyId; 
        public string Number; 
        public IList<string> CloudServiceControlNumbers; 
        public LocalizedValueList Title; 
        public LocalizedValueList Description; 
        public LocalizedValueList ImplementationDetails; 
        public ControlImplementationResponsibility ControlImplementationResponsibility; 
        public LocalizedValueList CustomerImplementationActionOverview; // resp == Microsoft, must be null, resp == customer|shared, must not be null 
        public Uri CustomerImplementationActionUrl; // optional 
        public LocalizedValueList CustomerImplementationActionDescription; // optional 
        public CertificationControlStatus Status; 
        public IList<CertificationControlTestResult> TestResultHistory; 
        public IList<CertificationAssignment> CertificationAssignmentHistory; 
    } 
  
    public class CertificationControlTestResult 
    { 
        public Guid Id; 
        public Guid CertificationControlId; 
        public DateTime WhenTested; 
        public string WhoTested; 
        public LocalizedValueList TestPlanDetails; 
        public LocalizedValueList Findings; 
        public LocalizedValueList ManagementResponse; 
        public int LowRiskFindingsCount; 
        public int MediumRiskFindingsCount; 
        public int HighRiskFindingsCount; 
    } 
  
    // Likely this will be the document-level storage entity and the children will all be inside it as List<Xyz> collections. 
    public class CertificationAssignment // Stored per tenant 
    { 
        public Guid Id; 
        public Guid CertificationControlId; 
        public DateTime WhenAssigned; 
        public Guid WhoAssigned; 
        public Guid WhoAssignedTo; 
        public CustomerImplementationPriority Priority; // Defaults to Medium 
        public DateTime WhenDue; // Defaults to DateTime.Min meaning that there is no due date for this item 
        public string GeneralNotes; 
        public string ImplementationNotes; 
        public CustomerImplementationStatus ImplementationStatus; 
        public DateTime WhenTested; 
        public Guid WhoTested; 
        public CustomerImplementationTestResultStatus TestResultStatus; 
        public IList<CertificationControlAttachment> Attachments; 
        public bool EmailRequested; 
        public DateTime WhenEmailSent; 
    } 
  
    // Likely this will be the document-level storage entity and the children will all be inside it as List<Xyz> collections. 
    public class CertificationControlAttachment 
    { 
        public Guid Id; 
        public Guid CertificationControlId; 
        public string Name; // Includes the file extension 
        public byte[] Content; 
    } 
  
    public class FileUpload 
    { 
        public Guid Id; 
        public string Name; // Includes the file extension 
        public long Length; 
    } 
  
    public class FileChunk 
    { 
        public Guid Id; 
        public Guid FileUploadId; 
        public int Offset; 
        public byte[] ContentFragment; 
    } 
  
  
  
  
    //////////////////////////////////////////// 
    /// Service compliance report 
  
    public enum WorkloadComplianceStatus 
    { 
        NotPlanned, 
        Planned, 
        Compliant, 
    } 
  
    // Likely this will be the document-level storage entity and the children will all be inside it as List<Xyz> collections. 
    public class CloudServiceRegion 
    { 
        public Guid Id; 
        public Guid CloudServiceId; 
        public LocalizedValueList PrimaryCategory; // ex: NAM, APAC 
        public LocalizedValueList SecondaryCategory; // optional, ex: Azure Government, Canada 
        public LocalizedValueList Name; // required: ex: East US, US GOV East 
    } 
  
    public class CloudServiceWorkload 
    { 
        public Guid Id; 
        public Guid CloudServiceId; 
        public LocalizedValueList PrimaryCategory; // ex: Compute, Storage 
        public LocalizedValueList SecondaryCategory; // ex: VM, App Service 
        public LocalizedValueList Name; // Web apps, API apps 
  
        // These need some restructuring. 
        public IList<Guid> RegionAvailability; 
        public IList<CloudServiceWorkloadComplianceStatus> RegionalComplianceStatus; 
    } 
  
    public class CloudServiceWorkloadComplianceStatus 
    { 
        public Guid Id; 
        public Guid CloudServiceWorkloadId; 
        public Guid RegionId; 
        public Guid CertificationId; 
        public WorkloadComplianceStatus ComplianceStatus; 
        public DateTime WhenComplianceStatusEffective; // DateTime.Min when ComplianceStatus == NotPlanned, in the past when == Compliant, in the future when == Planned 
    } 
  
    public class CustomerCloudServiceWorkloadDeploymentRegion // Stored per-tenant 
    { 
        public Guid Id; 
        public Guid CloudServiceWorkloadId; 
        public Guid RegionId; 
    } 
  
    // Localized value  
  
    public class LocalizedValue 
    { 
        public string CultureName { get; set; } 
      
        public string DisplayValue { get; set; } 
  
        public string SortValue { get; set; } 
    } 
  
    public class LocalizedValueList : List<LocalizedValue> 
    { 
  
    } 
  
} 
 