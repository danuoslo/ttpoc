using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using poc.ViewModels;

namespace poc.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts(int startDateIndex)
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index + startDateIndex).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }

        [HttpGet("[action]")]
        public IEnumerable<CertificationControlFamily> GetCustomerCertificationInformation()
        {
            return new List<CertificationControlFamily>
                {
                    NewMethod(),
                    NewMethod(),
                    NewMethod(),
                    NewMethod()
                };
        }

        private static CertificationControlFamily NewMethod()
        {
            return new CertificationControlFamily
            {
                Id = Guid.NewGuid(),
                CertificationId = Guid.NewGuid(),
                Number = "A.5.1",
                Title = new LocalizedValueList{  new LocalizedValue
                                                 {
                                                     CultureName = "en-US",
                                                     DisplayValue = "A.5.1 Office 365 - Management Direction for information Security",
                                                     SortValue = null
                                                 }
                         },
                Description = new LocalizedValueList{  new LocalizedValue
                                                {
                                                    CultureName = "en-US",
                                                    DisplayValue = "Understand how Office 365 management provides direction and support for information security in accordance with business requirements and relevant laws and regulations.",
                                                    SortValue = null
                                                }
                        },
                CertificationControls = new List<CertificationControl> {
                             new CertificationControl
                             {
                                 Id= Guid.NewGuid(),
                                 CertificationControlFamilyId = Guid.NewGuid(),
                                 Number = "A.5.1.1",
                                 CloudServiceControlNumbers = new []{  "AC-0100",
                                                                "AU-0100",
                                                                "CM-0100",
                                                                "CP-0100",
                                                                "IA-0100",
                                                                "IR-0100",
                                                                "MA-0100",
                                                                "MP-0100",
                                                                "PS-0100",
                                                                "PE-0100"
                                                               },
                                Title = new LocalizedValueList{  new LocalizedValue
                                                {
                                                    CultureName = "en-US",
                                                    DisplayValue = "Policies for information Security",
                                                    SortValue = null
                                                }
                                },
                                Description = new LocalizedValueList{  new LocalizedValue
                                                {
                                                    CultureName = "en-US",
                                                    DisplayValue = "Policies for information Security",
                                                    SortValue = null
                                                }
                                },
                                ImplementationDetails = new LocalizedValueList{  new LocalizedValue
                                                {
                                                    CultureName = "en-US",
                                                    DisplayValue = "Policies for information Security",
                                                    SortValue = null
                                                }
                                },
                                CustomerImplementationActionOverview = new LocalizedValueList{  new LocalizedValue
                                                {
                                                    CultureName = "en-US",
                                                    DisplayValue = "Customers are responsible for developing and maintaining appropriate Access Control policies and procedures that govern access management activities for their organization and users. Review Microsofts Security Policy at the Service Trust Portal.",
                                                    SortValue = null
                                                }
                                },
                                CertificationAssignmentHistory = new []{ new CertificationAssignment
                                                {
                                                    Id = Guid.NewGuid(),
                                                    CertificationControlId = Guid.NewGuid(),
                                                    WhenAssigned = DateTime.Now,
                                                    WhoAssigned = Guid.NewGuid(),
                                                    WhoAssignedTo = Guid.NewGuid(),
                                                    Priority = 0,
                                                    WhenDue = DateTime.Now.AddDays(15),
                                                    GeneralNotes = string.Empty,
                                                    ImplementationNotes = "This are the implementation Notes",
                                                    ImplementationStatus = 0,
                                                    WhenTested = DateTime.Now,
                                                    WhoTested = Guid.NewGuid(),
                                                    TestResultStatus = 0,
                                                    Attachments = new []
                                                    {
                                                        new CertificationControlAttachment {
                                                            Id = Guid.NewGuid(),
                                                            CertificationControlId = Guid.NewGuid(),
                                                            Name = "cerattachment1.png",
                                                            Content = null
                                                        }
                                                    },

                                                    EmailRequested = true,
                                                    WhenEmailSent = DateTime.Now
                                                }
                                },
                                TestResultHistory = new []{ new CertificationControlTestResult {
                                        Id = Guid.NewGuid(),
                                        CertificationControlId = Guid.NewGuid(),
                                        WhenTested = DateTime.Now,
                                        WhoTested = Guid.NewGuid().ToString(),
                                        TestPlanDetails = new LocalizedValueList{  new LocalizedValue
                                                        {
                                                            CultureName = "en-US",
                                                            DisplayValue = "These are the most beautiful test plans ever.",
                                                            SortValue = null
                                                        }
                                        },
                                        Findings = new LocalizedValueList{  new LocalizedValue
                                                        {
                                                            CultureName = "en-US",
                                                            DisplayValue = "So many findings found in this Test.",
                                                            SortValue = null
                                                        }
                                        },
                                        ManagementResponse = new LocalizedValueList{  new LocalizedValue
                                                        {
                                                            CultureName = "en-US",
                                                            DisplayValue = "This is the management response",
                                                            SortValue = null
                                                        }
                                        },
                                        LowRiskFindingsCount = 0,
                                        MediumRiskFindingsCount = 0,
                                        HighRiskFindingsCount = 0
                                    }
                                }
                             }
                         }
            };
        }

        [HttpGet("[action]")]
        public IEnumerable<CertificationControlFamily> GetMsManagedCertificationInformation()
        {
            return new List<CertificationControlFamily>
                {
                    NewMethod1(),
                    NewMethod1(),
                    NewMethod1(),
                    NewMethod1(),
                    NewMethod1()
            };
        }

        private static CertificationControlFamily NewMethod1()
        {
            return new CertificationControlFamily
            {
                Id = Guid.NewGuid(),
                CertificationId = Guid.NewGuid(),
                Number = "A.5.1",
                Title = new LocalizedValueList{  new LocalizedValue
                                                 {
                                                     CultureName = "en-US",
                                                     DisplayValue = "A.5.1 Office 365 - Management Direction for information Security",
                                                     SortValue = null
                                                 }
                         },
                Description = new LocalizedValueList{  new LocalizedValue
                                                {
                                                    CultureName = "en-US",
                                                    DisplayValue = "Understand how Office 365 management provides direction and support for information security in accordance with business requirements and relevant laws and regulations.",
                                                    SortValue = null
                                                }
                        },
                CertificationControls = new List<CertificationControl> {
                             new CertificationControl
                             {
                                 Id= Guid.NewGuid(),
                                 CertificationControlFamilyId = Guid.NewGuid(),
                                 Number = "A.5.1.1",
                                 CloudServiceControlNumbers = new []{  "AC-0100",
                                                                "AU-0100",
                                                                "CM-0100",
                                                                "CP-0100",
                                                                "IA-0100",
                                                                "IR-0100",
                                                                "MA-0100",
                                                                "MP-0100",
                                                                "PS-0100",
                                                                "PE-0100",
                                                                "PM-0100",
                                                                "RA-0100",
                                                                "CA-0100",
                                                                "PL-0100",
                                                                "SC-0100",
                                                                "SI-0100",
                                                                "SA-0100",
                                                                "AT-0100"},
                                Title = new LocalizedValueList{  new LocalizedValue
                                                {
                                                    CultureName = "en-US",
                                                    DisplayValue = "Policies for information Security",
                                                    SortValue = null
                                                }
                                },
                                Description = new LocalizedValueList{  new LocalizedValue
                                                {
                                                    CultureName = "en-US",
                                                    DisplayValue = "Policies for information Security",
                                                    SortValue = null
                                                }
                                },
                                ImplementationDetails = new LocalizedValueList{  new LocalizedValue
                                                {
                                                    CultureName = "en-US",
                                                    DisplayValue = "Policies for information Security",
                                                    SortValue = null
                                                }
                                },
                                CustomerImplementationActionOverview = new LocalizedValueList{  new LocalizedValue
                                                {
                                                    CultureName = "en-US",
                                                    DisplayValue = "Customers are responsible for developing and maintaining appropriate Access Control policies and procedures that govern access management activities for their organization and users. Review Microsofts Security Policy at the Service Trust Portal.",
                                                    SortValue = null
                                                }
                                },
                                CertificationAssignmentHistory = new []{ new CertificationAssignment
                                                {
                                                    Id = Guid.NewGuid(),
                                                    CertificationControlId = Guid.NewGuid(),
                                                    WhenAssigned = DateTime.Now,
                                                    WhoAssigned = Guid.NewGuid(),
                                                    WhoAssignedTo = Guid.NewGuid(),
                                                    Priority = 0,
                                                    WhenDue = DateTime.Now.AddDays(15),
                                                    GeneralNotes = string.Empty,
                                                    ImplementationNotes = "This are the implementation Notes",
                                                    ImplementationStatus = 0,
                                                    WhenTested = DateTime.Now,
                                                    WhoTested = Guid.NewGuid(),
                                                    TestResultStatus = 0,
                                                    Attachments = new []
                                                    {
                                                        new CertificationControlAttachment {
                                                            Id = Guid.NewGuid(),
                                                            CertificationControlId = Guid.NewGuid(),
                                                            Name = "cerattachment1.png",
                                                            Content = null
                                                        }
                                                    },

                                                    EmailRequested = true,
                                                    WhenEmailSent = DateTime.Now
                                                }
                                },
                                TestResultHistory = new []{ new CertificationControlTestResult {
                                        Id = Guid.NewGuid(),
                                        CertificationControlId = Guid.NewGuid(),
                                        WhenTested = DateTime.Now,
                                        WhoTested = Guid.NewGuid().ToString(),
                                        TestPlanDetails = new LocalizedValueList{  new LocalizedValue
                                                        {
                                                            CultureName = "en-US",
                                                            DisplayValue = "These are the most beautiful test plans ever.",
                                                            SortValue = null
                                                        }
                                        },
                                        Findings = new LocalizedValueList{  new LocalizedValue
                                                        {
                                                            CultureName = "en-US",
                                                            DisplayValue = "So many findings found in this Test.",
                                                            SortValue = null
                                                        }
                                        },
                                        ManagementResponse = new LocalizedValueList{  new LocalizedValue
                                                        {
                                                            CultureName = "en-US",
                                                            DisplayValue = "This is the management response",
                                                            SortValue = null
                                                        }
                                        },
                                        LowRiskFindingsCount = 0,
                                        MediumRiskFindingsCount = 0,
                                        HighRiskFindingsCount = 0
                                    }
                             }
                         }
                      }
            };
        }
    }
}
