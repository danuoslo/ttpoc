import * as React from 'react';
import {FrameworkMarkupDetails} from '../model/frameworkDetails';

export interface BindComponentState {  
}

export interface BindingProperties {
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


                  {
                    this.props.member.AssignedTo
                  }
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


