import * as React from 'react';
import Collapsible from 'react-collapsible';
import { Grid, GridColumn, GridControlType } from '../components/GridComponent';
import { Certification } from '../model/Certification'
import { CertificationControlFamily } from '../model/CertificationControlFamily'
import { Link } from 'react-router';
import { AssignTaskComponent } from "../components/AssignTaskComponent";
import { DatepickerComponent } from '../components/DatepickerComponent';

interface FrameworkDetailComponentProps {
    actionItems: Certification,
    customerManaged: CertificationControlFamily[],
    microsoftManaged: CertificationControlFamily[]
}

export const examplePersona = {
    imageUrl: './images/persona-female.png',
    imageInitials: 'AL',
    primaryText: 'Annie Lindqvist',
    secondaryText: 'Software Engineer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm'
};

export class FrameworkDetailComponent extends React.Component<FrameworkDetailComponentProps, void>
{
    getMicrosoftManagedColumns() {
        return Array<GridColumn>(
            new GridColumn({
                header: 'ISO CONTROL',
                controlType: GridControlType.Text,
                delegate: function () { return this.number; },
                order: 1,
                size: 1
            }),
            new GridColumn({
                header: 'DESCRIPTION',
                controlType: GridControlType.Text,
                delegate: function () { return this.description[0].displayValue },
                order: 2,
                size: 2
            }),
            new GridColumn({
                header: 'MS CONTROL',
                controlType: GridControlType.Text,
                delegate: function () { return this.title[0].displayValue; },
                order: 3,
                size: 1
            }),
            new GridColumn({
                header: 'MICROSOFT IMPLEMENTATION DETAILS',
                controlType: GridControlType.Text,
                delegate: function () { return this.description[0].displayValue },
                order: 4,
                size: 2
            }),
            new GridColumn({
                header: 'TEST PLAN DETAILS',
                controlType: GridControlType.Text,
                delegate: function () { return this.title[0].displayValue; },
                order: 5,
                size: 1
            }),
            new GridColumn({
                header: 'FINDINGS',
                controlType: GridControlType.Text,
                delegate: function () { return <span>this.testResultHistory[0].findings</span> },
                order: 6,
                size: 2
            }),
            new GridColumn({
                header: 'STATUS',
                controlType: GridControlType.Text,
                delegate: function () { return this.description[0].displayValue },
                order: 6,
                size: 1
            }),
            new GridColumn({
                header: 'TEST DATE',
                controlType: GridControlType.Text,
                delegate: function () { return <DatepickerComponent value={new Date(this.testResultHistory[0].whenTested)} allowTextInput={true} isMonthPickerVisible={false} placeholder='Select a date...' /> },
                order: 6,
                size: 1
            }),
            new GridColumn({
                header: 'TEST RESULT',
                controlType: GridControlType.Text,
                delegate: function () { return <span>Test Result</span> },
                order: 6,
                size: 1
            })
        );
    }

    getCustomerManagedColumns() {
        return Array<GridColumn>(
            new GridColumn({
                header: 'ISO CONTROL',
                controlType: GridControlType.Text,
                delegate: function () { return this.number; },
                order: 1,
                size: 1
            }),
            new GridColumn({
                header: 'DESCRIPTION',
                controlType: GridControlType.Text,
                delegate: function () { return this.description[0].displayValue },
                order: 2,
                size: 2
            }),
            new GridColumn({
                header: 'MS CONTROL',
                controlType: GridControlType.Text,
                delegate: function () { return this.cloudServiceControlNumbers.map((o, i) => <div key={i}>{o}</div>) },
                order: 3,
                size: 1
            }),
            new GridColumn({
                header: 'NECESSARY CUSTOMER ACTIONS',
                controlType: GridControlType.Text,
                delegate: function () { return this.customerImplementationActionOverview[0].displayValue },
                order: 4,
                size: 2
            }),
            new GridColumn({
                header: 'ASSIGNED TO',
                controlType: GridControlType.Text,
                delegate: function () { return <span></span>/* <AssignTaskComponent certificationAssignmentHistory={this.certificationAssignmentHistory} />*/ },
                order: 5,
                size: 1
            }),
            new GridColumn({
                header: 'TEST PLAN AND FINDING NOTES',
                controlType: GridControlType.Text,
                delegate: function () { return this.description[0].displayValue },
                order: 6,
                size: 2
            }),
            new GridColumn({
                header: 'STATUS',
                controlType: GridControlType.Text,
                delegate: function () { return this.status },
                order: 7,
                size: 1
            }),
            new GridColumn({
                header: 'TEST DATE',
                controlType: GridControlType.Text,
                delegate: function () { return <span></span> /* <DatepickerComponent value={this.testResultHistory[0].whenTested} />*/ },
                order: 8,
                size: 1
            }),
            new GridColumn({
                header: 'TEST RESULT',
                controlType: GridControlType.Text,
                delegate: function () { return this.testResultHistory[0].displayValue },
                order: 9,
                size: 1
            })
        );
    }

    render() {
        return <div>
            <nav style={{ float: "left" }}>
                <Link to={'/'} >BACK TO DASHBOARD</Link>
            </nav>
            <div style={{ float: "right", paddingRight: "20px" }}>
                Export to Excel
            </div>
            <div style={{ clear: "both" }}></div>
            <Collapsible trigger="Azure In-Scope Cloud Services for ISO-IEC 27001">
                <p>This information is missing</p>
            </Collapsible>
            <Collapsible transitionTime={10} trigger="Microsoft Managed Controls">
                {this.props.microsoftManaged
                    .map((o, i) => <Collapsible key={o.id} trigger={o.title[0].displayValue}>
                        <Grid columns={this.getMicrosoftManagedColumns()} rows={o.certificationControls}>
                        </Grid>
                    </Collapsible>)
                }
            </Collapsible>
            <Collapsible transitionTime={10} trigger="Customer Managed Controls">
                {this.props.customerManaged
                    .map((o, i) => <Collapsible key={i} trigger={o.title[0].displayValue}>
                        <Grid columns={this.getCustomerManagedColumns()} rows={o.certificationControls}></Grid>
                    </Collapsible>)
                }
            </Collapsible>
        </div>
    }
}
