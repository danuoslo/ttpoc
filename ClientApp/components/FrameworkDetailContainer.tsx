import * as React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as ActionItemsState from '../store/ActionItems'
import { FrameworkDetailComponent } from '../components/FrameworkDetailComponent'

// At runtime, Redux will merge together...
type FrameworkDetailContainerProps =
    ActionItemsState.ActionItemsState     // ... state we've requested from the Redux store
    & typeof ActionItemsState.actionCreators   // ... plus action creators we've requested
    & { params: { filter: string } };       // ... plus incoming routing parameters

class FrameworkDetailContainer extends React.Component<FrameworkDetailContainerProps, void> {
    componentWillMount() {
        // This method runs when the component is first added to the page
        this.props.requestCustomerManaged();
        this.props.requestMsManaged();
    }

    componentWillReceiveProps(nextProps: FrameworkDetailContainerProps) {
        // This method runs when incoming props (e.g., route params) change
        //this.props.requestCustomerManaged();
        //this.props.requestMsManaged();
    }

    render() {
        return <div>
            <h1>This will be the header of the page</h1>
            <p>For now this is empty.</p>
            <FrameworkDetailComponent actionItems={null} customerManaged={this.props.customerControled} microsoftManaged={this.props.msCertificationControled} />
        </div>;
    }
}

export default connect(
    (state: ApplicationState) => state.actionItems, // Selects which state properties are merged into the component's props
    ActionItemsState.actionCreators                 // Selects which action creators are merged into the component's props
)(FrameworkDetailContainer);
