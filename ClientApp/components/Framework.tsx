import * as React from 'react';
import {FrameworkMarkupDetails} from '../model/FrameworkMarkupDetails';
import {frameworkAPI} from '../api/frameworkapi';
import {BindComponent} from './BindFramework';

interface Props {
}

interface State {
  members : Array<FrameworkMarkupDetails>
}

export class MarkMSGrid extends React.Component<Props, State> {

   constructor(props : Props){
        super(props);
        // set initial state
        this.state = {members: []};
  }

   public componentWillMount() {
     this.setState({members: frameworkAPI.getAllMarkFramework()})
   }

   public onChange(value)
   {

   }

  public render() {
    return (     
      <div>
        <div >        
             <section data-grid="container"> 
             {  
               this.state.members.map((member : FrameworkMarkupDetails) =>
                  <BindComponent key={member.Id} member= {member} onChange={this.onChange}/> )
             }
             </section>
         
        </div>
      </div>
    );
  }
}