import * as React from 'react';
import {CertificationAssignment} from '../model/CertificationAssignment'
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { AssignTaskDialogComponent } from "../components/AssignTaskDialogComponent";

interface AssignTaskComponentProps
{
    certificationAssignmentHistory: CertificationAssignment[]
}

interface AssignTaskComponentState
{
    showAssignTask:boolean
}


export class AssignTaskComponent extends React.Component<AssignTaskComponentProps, AssignTaskComponentState>
{
    constructor (props)
    {
        super(props);
        this.state = {showAssignTask:false};
    }
    render()
    {
        return  <span>
                    <div>
                        {this.props.certificationAssignmentHistory.length > 0 ? 
                            <Persona  />
                                : <DefaultButton description='Assign' text='Assign' onClick={()=>this.setState({showAssignTask:true})}/>}
                    </div>
                    <Dialog containerClassName="reassignTaskDialog" isOpen={this.state.showAssignTask} onDismiss={() => this.setState({showAssignTask:false})} >
                        <AssignTaskDialogComponent IsoControl="ISO CONTROL" NecessaryActions="Actions" />
                    </Dialog>
                </span>
    }
}
