import * as React from 'react';
import {FrameworkMarkupDetails} from '../model/frameworkDetails';




export const BindComponent =(props:{member:FrameworkMarkupDetails, onChange: Function}) =>{
  return(
    <div className='ms-Grid-row'>
              <div className='ms-Grid-col ms-u-sm12 ms-u-lg1 cat'>
                {props.member.ISOControl}
              </div>
              <div className='ms-Grid-col ms-u-sm12 ms-u-lg2 cat'>
                {props.member.Description}
              </div>     
              <div className='ms-Grid-col ms-u-sm12 ms-u-lg1 ms-u-lg1'>
                {props.member.MSControl}            
              </div>
              <div className='ms-Grid-col ms-u-sm12 ms-u-lg1 ms-u-lg1'>
               {props.member.NecessaryCustomerAction}           
              </div>
              <div className='ms-Grid-col ms-u-sm12 ms-u-lg2 ms-u-lg2'>
               {props.member.AdditionalGuidance}         
              </div>
               <div className='ms-Grid-col ms-u-sm12 ms-u-lg1 ms-u-lg1'>
               {props.member.AssignedTo}           
              </div>
               <div className='ms-Grid-col ms-u-sm12 ms-u-lg1 ms-u-lg1'>
                           
              </div>
               <div className='ms-Grid-col ms-u-sm12 ms-u-lg2 ms-u-lg1'>
                         
              </div>
               <div className='ms-Grid-col ms-u-sm12 ms-u-lg2 ms-u-lg1'>                 
                {props.member.ImplementationDate}
              </div>
              <div className='ms-Grid-col ms-u-sm12 ms-u-lg2 ms-u-lg1'>
                {props.member.TestResult}
              </div>
             
    </div>

  ); 

}


