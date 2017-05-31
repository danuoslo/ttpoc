import * as React from 'react';
import Collapsible from 'react-collapsible';
import { Grid, GridColumn, GridControlType } from '../components/GridComponent';
import { Certification } from '../model/Certification'
import { CertificationControlFamily } from '../model/CertificationControlFamily';
import { Link } from "react-router";
import { Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';
import { AssignTaskComponent } from "../components/AssignTaskComponent";

declare var document:any;

interface ActionItemsComponentProps {
    actionItems: Certification,

    customerManaged: CertificationControlFamily[]
}

export const examplePersona = {
  imageUrl: './images/persona-female.png',
  imageInitials: 'AL',
  primaryText: 'Annie Lindqvist',
  secondaryText: 'Software Engineer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm'
};


export class ActionItemsComponent extends React.Component<ActionItemsComponentProps, void>
{
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
                header: 'MS CONTROL',
                controlType: GridControlType.Text,
                delegate: function () { return this.cloudServiceControlNumbers.map((o,i) => <div key={i}>{o}</div>) },
                order: 2,
                size: 1
            }),
            new GridColumn({
                header: 'NECESSARY CUSTOMER ACTIONS',
                controlType: GridControlType.Text,
                delegate: function () { return this.customerImplementationActionOverview[0].displayValue},
                order: 3,
                size: 2
            }),
            new GridColumn({
                header: 'ADDITIONAL GUIDANCE',
                controlType: GridControlType.Text,
                delegate: function () { return this.description[0].displayValue },
                order: 2,
                size: 2
            }),
            new GridColumn({
                header: 'ASSIGNED TO',
                controlType: GridControlType.Text,
                delegate: function () { return <AssignTaskComponent certificationAssignmentHistory={[]} />},
                order: 5,
                size: 1
            }),
            new GridColumn({
                header: 'PRIORITY',
                controlType: GridControlType.Text,
                delegate: function () { return this.description[0].displayValue },
                order: 6,
                size: 2
            }),
            new GridColumn({
                header: 'IMPLEMENTATION NOTES',
                controlType: GridControlType.Text,
                delegate: function () { return this.status },
                order: 7,
                size: 1
            }),
            new GridColumn({
                header: 'IMPLEMENTATION DATE',
                controlType: GridControlType.Text,
                delegate: function () { return this.testResultHistory[0].whenTested },
                order: 8,
                size: 1
            }),
            new GridColumn({
                header: 'IMPLEMENTATION STATUS',
                controlType: GridControlType.Text,
                delegate: function () { return this.testResultHistory[0].displayValue },
                order: 9,
                size: 1
            })
        );
    }

    render() {
        return <div>
            <div style={{width:"40%"}}>
                <p style={{ marginLeft:"5%"}}>
                    <span style={{color:"#999999"}}>
                        Action items are the customer managed controls which need to be implemented in order to reach compliance.
                         When the status of an action item is changed to implemented, the implementation notes, date and status are updated in the </span>
                        <span style={{color:"#0099FF"}}>Review Frameworks</span>
                        <span style={{color:"#999999"}}> dashboard where the auditor can proceed with testing. </span>
                </p>
            </div>
            Navigator 1
            <nav className="c-link-navigation">
                <ul>
                    <li>
                        <Link to={ '/actionItems/' } className="c-hyperlink">Azure</Link>
                    </li>
                    <li>
                        <Link to={ '/actionItems/' } className="c-hyperlink">Dynamics 365</Link>
                    </li>
                    <li>
                        <Link to={ '/actionItems/' } className="c-hyperlink">Office 365</Link>
                    </li>
                    <li>
                        <Link to={ '/actionItems/' } className="c-hyperlink">All Action Items</Link>
                    </li>
                </ul>
            </nav>
            Example 1
            <div>
                <Link to={ '/actionItems/5' } className="FrameworkTypeMenu" tabIndex={0}>Azure</Link>
                <Link to={ '/actionItems/6' } className="FrameworkTypeMenu" >Dynamics 365</Link>
                <Link to={ '/actionItems/7' } className="FrameworkTypeMenu" >office 365</Link>
                <Link to={ '/actionItems/8' } className="FrameworkTypeMenu" >All Action Itemss</Link>
            </div>
            <br/>
            Example 2
            <div className="c-pivot">
                <button className="c-flipper f-previous" role="tab" aria-hidden="true" tabIndex={-1}></button>
                <div  role="tablist">
                    <a className="f-active" aria-controls="menuControl" tabIndex={0}>Azure</a>
                    <a role="tab" aria-controls="menuControl">Dynamics 365</a>
                    <a role="tab" aria-controls="menuControl">office 365</a>
                    <a role="tab" aria-controls="menuControl">All Action Items</a>
                </div>
                <button className="c-flipper f-next" aria-hidden="true" tabIndex={-1}></button>
                <section id="menuControl"></section>
            </div>
            <Collapsible trigger="Azure In-Scope Cloud Services for ISO-IEC 27001">
                <p>This information is missing</p>
            </Collapsible>
            {this.props.customerManaged
                .map((o, i) => <Collapsible key={i} trigger={o.title[0].displayValue}>
                    <Grid columns={this.getCustomerManagedColumns()} rows={o.certificationControls}></Grid>
                </Collapsible>)
            }
        </div>
    }
}