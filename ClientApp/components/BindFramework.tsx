import * as React from 'react';
import {FrameworkMarkupDetails} from '../model/frameworkDetails';

interface BindComponentState {  
}

interface BindingProperties {
    member: FrameworkMarkupDetails;
    onChange:Function;
}

export class BindComponent extends React.Component<BindingProperties, BindComponentState>{

  render(){
    return(
        <div className='ms-Grid-row'>
                  <div className='ms-Grid-col ms-u-sm12 ms-u-lg1 cat'>
                    {this.props.member.ISOControl}
                  </div>
                  <div className='ms-Grid-col ms-u-sm12 ms-u-lg2 cat'>
                    {this.props.member.Description}
                  </div>
                  <div className='ms-Grid-col ms-u-sm12 ms-u-lg1 ms-u-lg1'>
                    {this.props.member.MSControl}            
                  </div>
                  <div className='ms-Grid-col ms-u-sm12 ms-u-lg1 ms-u-lg1'>
                  {this.props.member.NecessaryCustomerAction}
                  </div>
                  <div className='ms-Grid-col ms-u-sm12 ms-u-lg2 ms-u-lg2'>
                  {this.props.member.AdditionalGuidance}
                  </div>
                  <div className='ms-Grid-col ms-u-sm12 ms-u-lg1 ms-u-lg1'>

                  <button className="c-button" aria-describedby="topFlyoutExample">{ this.props.member.AssignedTo } </button>
                  <div className="c-flyout" id="topFlyoutExample" role="tooltip" data-js-flyout-placement="top" data-js-flyout-dismissible="true" aria-hidden="true">
                      <button>Reassing Task</button>
                      <button>Unassign Task</button>
                  </div>
                  </div>
                  <div className='ms-Grid-col ms-u-sm12 ms-u-lg1 ms-u-lg1'>
                  </div>
                  <div className='ms-Grid-col ms-u-sm12 ms-u-lg2 ms-u-lg1'>
                  </div>
                  <div className='ms-Grid-col ms-u-sm12 ms-u-lg2 ms-u-lg1'>
                    {this.props.member.ImplementationDate}
                  </div>
                  <div className='ms-Grid-col ms-u-sm12 ms-u-lg2 ms-u-lg1'>
                    {this.props.member.TestResult}
                  </div>
        </div>
      ); 
    }
  }
