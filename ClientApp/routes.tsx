import * as React from 'react';
import { Router, Route, HistoryBase } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/Home';
import FetchData from './components/FetchData';
import Counter from './components/Counter';
import FrameworkDetailContainer from './components/FrameworkDetailContainer';
import ActionItemsContainer from './components/ActionItemsContainer';
import { AssignTaskComponent } from "./components/AssignTaskComponent";


export default <Route component={ Layout }>
    <Route path='/' components={{ body: Home }} />
    <Route path='/counter' components={{ body: Counter }} />
    <Route path='/fetchdata' components={{ body: FetchData }}>     
        <Route path='(:startDateIndex)' /> { /* Optional route segment that does not affect NavMenu highlighting */ }
    </Route>
    <Route path='/actionItems' components={{ body: ActionItemsContainer }}>
        <Route path='(:filter)' />
    </Route>
    <Route path='/frameworkDetails' components={{ body: FrameworkDetailContainer }} >
        <Route path='(:framework)' />
    </Route>
    <Route path='/test' components={{ body: AssignTaskComponent }} ></Route>
</Route>;

// Enable Hot Module Replacement (HMR)
if (module.hot) {
    module.hot.accept();
}
