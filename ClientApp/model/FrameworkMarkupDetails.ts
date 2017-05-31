import { Status } from '../model/statusdropdown';

export class FrameworkMarkupDetails {
  Id: number;
  ISOControl: string;
  Description: string;
  MSControl: string;
  NecessaryCustomerAction: string;
  AdditionalGuidance: string;
  AssignedTo: string;
  TestPlanFindingNotes: string;
  status: Array<Status>
  ImplementationDate: string;
  TestResult: string;

  constructor() {
    this.Id = 0;
    this.ISOControl = "";
    this.Description = "";
    this.MSControl = "";
    this.NecessaryCustomerAction = "";
    this.AdditionalGuidance = "";
    this.AssignedTo = "";
    this.TestPlanFindingNotes = "";
    this.ImplementationDate = "";
    this.status = [];
    this.TestResult = "";
  }
}
