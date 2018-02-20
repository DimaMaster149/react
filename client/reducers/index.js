import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';

import auth from './auth';

const rootReducer = combineReducers(
    {
        auth: auth,
        routing: routerReducer
    });

export default rootReducer;