import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { ListPeoplePicker } from 'office-ui-fabric-react/lib/Pickers';
import { autobind } from "office-ui-fabric-react/lib/Utilities";
import { IPersonaProps } from "office-ui-fabric-react/lib/Persona";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';

interface AssignTaskProps{
    IsoControl:string;
    NecessaryActions:string;
}

interface AssignTaskState{

}

export class AssignTaskDialogComponent extends React.Component<AssignTaskProps, AssignTaskState>
{
    private _peopleList;
    render()
    {
        return (
            <div>
                <section data-grid="container stack-4">
                    <h2 style={{textAlign:"center" }} >Assign Task</h2>
                    <div data-grid="col-12">
                        <div data-grid="col-6" >
                            <div data-grid="col-12">
                                Assign to:
                                <ListPeoplePicker className="peoplePicker" onResolveSuggestions={ this._onFilterChanged }></ListPeoplePicker>
                            </div>
                            <div data-grid="col-12">
                                <div>Iso Control</div>
                                <div>{this.props.IsoControl}</div>
                            </div>       
                            <div data-grid="col-12">
                                <div>Necessary Actions</div>
                                <div>{this.props.NecessaryActions}</div>
                            </div>
                        </div>
                        <div data-grid="col-6">
                            <div data-grid="col-12">
                                <div>Assign Task Notes:</div>
                                <TextField style={{height:"155px", width:"247px"}} multiline resizable={ false } />
                            </div>                            
                            <div data-grid="col-12">
                                <DefaultButton
                                    description='Add Attachment'
                                    text='Add Attachment'
                                    style={{width:'100%'}} />
                            </div>
                             <div data-grid="col-12">
                                <Checkbox label='Send email notification' />
                            </div>  
                        </div>
                    </div>
                    <div data-grid="col-12 pad-12x">
                        <div data-grid="col-4"/>
                        <div data-grid="col-2">
                            <DefaultButton
                                    description='Cancel'
                                    text='Cancel'/>
                        </div>
                        <div data-grid="col-2">
                            <DefaultButton
                                    description='Assign'
                                    text='Assign' />
                        </div>
                        <div data-grid="col-4"/>
                    </div>
                </section>
            </div>
        );
    }

    @autobind
    private _onFilterChanged(filterText: string, currentPersonas: IPersonaProps[], limitResults?: number) {
        if (filterText) {
            let filteredPersonas: IPersonaProps[] = this._filterPersonasByText(filterText);

            filteredPersonas = this._removeDuplicates(filteredPersonas, currentPersonas);
            filteredPersonas = limitResults ? filteredPersonas.splice(0, limitResults) : filteredPersonas;
            return filteredPersonas;
        } else {
            return [];
        }
    }

    private _removeDuplicates(personas: IPersonaProps[], possibleDupes: IPersonaProps[]) {
        return personas.filter(persona => !this._listContainsPersona(persona, possibleDupes));
    }

    private _convertResultsToPromise(results: IPersonaProps[]): Promise<IPersonaProps[]> {
        return new Promise<IPersonaProps[]>((resolve, reject) => setTimeout(() => resolve(results), 2000));
    }

    private _listContainsPersona(persona: IPersonaProps, personas: IPersonaProps[]) {
        if (!personas || !personas.length || personas.length === 0) {
            return false;
        }
        return personas.filter(item => item.primaryText === persona.primaryText).length > 0;
    }

    private _filterPersonasByText(filterText: string): IPersonaProps[] {
        return this._peopleList.filter(item => this._doesTextStartWith(item.primaryText, filterText));
    }

     private _doesTextStartWith(text: string, filterText: string): boolean {
        return text.toLowerCase().indexOf(filterText.toLowerCase()) === 0;
    }
}