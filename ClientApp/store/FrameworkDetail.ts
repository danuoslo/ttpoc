import { fetch, addTask } from 'domain-task';
import { Action, Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from './';
import { Certification } from '../model/Certification';
import { CertificationControlFamily } from '../model/CertificationControlFamily'

enum FrameworkDetailActionTypes {
    REQUEST_CUSTOMERMANAGED,
    RECEIVE_CUSTOMERMANAGED
}

// -----------------
// STATE - This defines the type of data maintained in the Redux store.
export interface FrameworkDetailState {
    isLoading: boolean;
    framework: string;
    certificationId: string;
    customerControled: CertificationControlFamily[];
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestCustomerManaged {
    type: FrameworkDetailActionTypes.REQUEST_CUSTOMERMANAGED
}

interface ReceiveCustomerManaged {
    type: FrameworkDetailActionTypes.RECEIVE_CUSTOMERMANAGED,
    data: CertificationControlFamily[]
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestCustomerManaged | ReceiveCustomerManaged;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestCustomerManaged: (): AppThunkAction<KnownAction> => (dispatch, getState) => {    
        let fetchTask = fetch('/api/sampledata/GetCustomerCertificationInformation')
            .then(response => response.json() as Promise<CertificationControlFamily[]>)
            .then(data => {
                dispatch({ type: FrameworkDetailActionTypes.RECEIVE_CUSTOMERMANAGED, data: data });
            });

        addTask(fetchTask); // Ensure server-side prerendering waits for this to complete
        dispatch({ type: FrameworkDetailActionTypes.REQUEST_CUSTOMERMANAGED });
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: FrameworkDetailState = {
    isLoading: false,
    framework: null,
    certificationId: null,
    customerControled: []
};

export const reducer: Reducer<FrameworkDetailState> = (state: FrameworkDetailState, action: KnownAction) => {
    switch (action.type) {
        case FrameworkDetailActionTypes.REQUEST_CUSTOMERMANAGED:
            return {
                certificationId: state.certificationId,
                framework: state.framework,
                customerControled: [],
                isLoading: true
            };
        case FrameworkDetailActionTypes.RECEIVE_CUSTOMERMANAGED:
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            return {
                certificationId: state.certificationId,
                framework: state.framework,
                customerControled: action.data,
                isLoading: false
            };
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            const exhaustiveCheck: never = action;
    }

    return state || unloadedState;
};
