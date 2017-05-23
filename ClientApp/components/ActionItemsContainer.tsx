import * as React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as ActionItemsState from '../store/ActionItems'
import { ActionItemsComponent } from '../components/ActionItemsComponent'

// At runtime, Redux will merge together...
type ActionItemsContainerProps =
    ActionItemsState.ActionItemsState     // ... state we've requested from the Redux store
    & typeof ActionItemsState.actionCreators   // ... plus action creators we've requested
    & { params: { startDateIndex: string } };       // ... plus incoming routing parameters

class ActionItemsContainer extends React.Component<ActionItemsContainerProps, void> {
    componentWillMount() {
        // This method runs when the component is first added to the page
        //let startDateIndex = parseInt(this.props.params.startDateIndex) || 0;
        this.props.requestCustomerManaged();
        this.props.requestMsManaged();
    }

    componentWillReceiveProps(nextProps: ActionItemsContainerProps) {
        // This method runs when incoming props (e.g., route params) change
        //let startDateIndex = parseInt(nextProps.params.startDateIndex) || 0;
        //this.props.requestCustomerManaged();
        //this.props.requestMsManaged();
    }

    render() {
        return <div>
            <h1>This will be the header of the page</h1>
            <p>For now this is empty.</p>
            <ActionItemsComponent actionItems={null} customerManaged={this.props.customerControled} microsoftManaged={this.props.msCertificationControled} />
        </div>;
    }
}

export default connect(
    (state: ApplicationState) => state.actionItems, // Selects which state properties are merged into the component's props
    ActionItemsState.actionCreators                 // Selects which action creators are merged into the component's props
)(ActionItemsContainer);
