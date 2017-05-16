import * as React from 'react';
import { Router, Route, HistoryBase } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/Home';
import FetchData from './components/FetchData';
import Counter from './components/Counter';
import {MarkMSGrid} from './components/Framework';
import {ActionItems} from './components/ActionItems';

export default <Route component={ Layout }>
    <Route path='/' components={{ body: ActionItems }} />
    <Route path='/framworkdata' components={{ body: MarkMSGrid }} />    
    <Route path='/counter' components={{ body: Counter }} />
    <Route path='/fetchdata' components={{ body: FetchData }}>     
        <Route path='(:startDateIndex)' /> { /* Optional route segment that does not affect NavMenu highlighting */ }
    </Route>

    <Route path='/ActionItems' components={{ body: ActionItems }} />
    <Route path='/ServiceCompliance' components={{ body: ActionItems }} />
</Route>;

// Enable Hot Module Replacement (HMR)
if (module.hot) {
    module.hot.accept();
}
