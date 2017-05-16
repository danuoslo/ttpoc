import * as React from 'react';
import {FrameworkMarkupDetails} from '../model/FrameworkMarkupDetails';
import {Datepicker} from './datepicker';

interface BindComponentState {  
}

interface BindingProperties {
    member: FrameworkMarkupDetails;
    onChange:Function;
}

export class BindComponent extends React.Component<BindingProperties, BindComponentState>{

  render(){
    return(        
       <div data-grid="col-12" className="data-gridboarder">
            <div data-grid="col-6">
                <div data-grid="col-6">
                  <div data-grid="col-3">{this.props.member.ISOControl}</div>
                  <div data-grid="col-9">{this.props.member.Description}</div>   
                </div>
                <div data-grid="col-6">   
                  <div data-grid="col-3">{this.props.member.MSControl}</div> 
                  <div data-grid="col-9">{this.props.member.NecessaryCustomerAction}</div>       
                </div>
            </div>
            <div data-grid="col-6">
                <div data-grid="col-6">
                    <div data-grid="col-4"><button className="c-button" aria-describedby="topFlyoutExample">{ this.props.member.AssignedTo } </button>
                        <div className="c-flyout" id="topFlyoutExample" role="tooltip" data-js-flyout-placement="top" data-js-flyout-dismissible="true" aria-hidden="true">
                              <button>Reassing Task</button>
                              <button>Unassign Task</button>
                         </div>
                    </div>
                    <div data-grid="col-8"> 
                     <textarea id="default-textarea-5" className="f-no-resize f-scroll" name="textarea-default" defaultValue={this.props.member.TestPlanFindingNotes}>
                     </textarea>
                     </div>
                 </div>     
                <div data-grid="col-6">
                     <div data-grid="col-5">
                        <select id="border" className="dropdownGrid">
                             <option>Implementation</option>    
                             <option>AlternativeImplementation</option> 
                             <option>Planned</option>
                              <option>Not in scope</option>            
                          </select>
                      </div>
                    <div data-grid="col-3"><Datepicker /></div>
                    <div data-grid="col-4">{this.props.member.TestResult}</div>  
                  </div>          
              </div>
        </div>

      ); 
    }
  }
