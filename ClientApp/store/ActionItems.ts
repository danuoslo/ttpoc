import { fetch, addTask } from 'domain-task';
import { Action, Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from './';
import { Certification } from '../model/Certification';
import { CertificationControlFamily } from '../model/CertificationControlFamily'

enum ActionItemsActionTypes {
    REQUEST_MSMANAGED,
    RECEIVE_MSMANAGED,
    REQUEST_CUSTOMERMANAGED,
    RECEIVE_CUSTOMERMANAGED
}

// -----------------
// STATE - This defines the type of data maintained in the Redux store.
export interface ActionItemsState {
    isLoading: boolean;
    certificationId: string;
    msCertificationControled: CertificationControlFamily[];
    customerControled: CertificationControlFamily[];
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestMsManaged {
    type: ActionItemsActionTypes.REQUEST_MSMANAGED
}

interface ReceiveMsManaged {
    type: ActionItemsActionTypes.RECEIVE_MSMANAGED,
    data: CertificationControlFamily[]
}

interface RequestCustomerManaged {
    type: ActionItemsActionTypes.REQUEST_CUSTOMERMANAGED
}

interface ReceiveCustomerManaged {
    type: ActionItemsActionTypes.RECEIVE_CUSTOMERMANAGED,
    data: CertificationControlFamily[]
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestMsManaged | ReceiveMsManaged | RequestCustomerManaged | ReceiveCustomerManaged;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestCustomerManaged: (): AppThunkAction<KnownAction> => (dispatch, getState) => {    
        let fetchTask = fetch('/api/sampledata/GetCustomerCertificationInformation')
            .then(response => response.json() as Promise<CertificationControlFamily[]>)
            .then(data => {
                dispatch({ type: ActionItemsActionTypes.RECEIVE_CUSTOMERMANAGED, data: data });
            });

        addTask(fetchTask); // Ensure server-side prerendering waits for this to complete
        dispatch({ type: ActionItemsActionTypes.REQUEST_CUSTOMERMANAGED });
    },
    requestMsManaged: (): AppThunkAction<KnownAction> => (dispatch, getState) => {    
        let fetchTask = fetch('/api/sampledata/GetMsManagedCertificationInformation')
            .then(response => response.json() as Promise<CertificationControlFamily[]>)
            .then(data => {
                dispatch({ type: ActionItemsActionTypes.RECEIVE_MSMANAGED, data: data });
            });

        addTask(fetchTask); // Ensure server-side prerendering waits for this to complete
        dispatch({ type: ActionItemsActionTypes.REQUEST_MSMANAGED });
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: ActionItemsState = {
    isLoading: false,
    certificationId: null,
    msCertificationControled: [],
    customerControled: []
};

export const reducer: Reducer<ActionItemsState> = (state: ActionItemsState, action: KnownAction) => {
    switch (action.type) {
        case ActionItemsActionTypes.REQUEST_CUSTOMERMANAGED:
            return {
                certificationId: state.certificationId,
                msCertificationControled: state.msCertificationControled,
                customerControled: [],
                isLoading: true
            };
        case ActionItemsActionTypes.RECEIVE_CUSTOMERMANAGED:
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            return {
                certificationId: state.certificationId,
                msCertificationControled: state.msCertificationControled,
                customerControled: action.data,
                isLoading: false
            };
        case ActionItemsActionTypes.REQUEST_MSMANAGED:
            return {
                certificationId: state.certificationId,
                msCertificationControled: [],
                customerControled: state.customerControled,
                isLoading: true
            };
        case ActionItemsActionTypes.RECEIVE_MSMANAGED:
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            return {
                certificationId: state.certificationId,
                msCertificationControled: action.data,
                customerControled: state.customerControled,
                isLoading: false
            };    
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            const exhaustiveCheck: never = action;
    }

    return state || unloadedState;
};
