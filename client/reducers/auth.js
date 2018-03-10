import { createReducer } from 'redux-act';
import { Map, fromJS } from 'immutable';

import authActions from '../actions/auth';
import {LOCATION_CHANGE} from 'react-router-redux';


const nullUser =
    {
        id: null,
        name: null,
        email: null,
        photo: null,
        access: null,
        key: null,
        born_year: null,
        born_month: null,
        born_day: null,
        education: null,
        children: null,
        region: null,
        territory: null

    };

const initialState = fromJS(
    {
        loading: false,
        message: null,
        logged: false,

        user: nullUser
    });

export default createReducer(
    {

        // LOGIN SECTION

        [authActions.login.request]: (state, payload) =>
        {
            return state.set('loading', true).set('message', null);
        },

        [authActions.login.ok]: (state, payload) =>
        {
            return state.set('logged', true).set('loading', false)
                .set('user', fromJS(payload.response));
        },

        [authActions.login.error]: (state, payload) =>
        {
            return state.set('message', payload.error).set('loading', false);
        },

        // SIGN UP SECTION

        [authActions.signUp.request]: (state, payload) =>
        {
            return state.set('loading', true).set('message', null);
        },

        [authActions.signUp.ok]: (state, payload) =>
        {
            return state.set('logged', true).set('loading', false)
                .set('user', fromJS(payload.response));
        },

        [authActions.signUp.error]: (state, payload) =>
        {
            return state.set('message', payload.error).set('loading', false);
        },

        // CHECK AUTH

        [authActions.checkAuth.request]: (state, payload) =>
        {
            return state.set('loading', true).set('message', null);
        },

        [authActions.checkAuth.ok]: (state, payload) =>
        {
            if(payload.response === null)
            {
                return state.set('logged', false).set('loading', false)
                    .set('user', fromJS(nullUser));
            }

            return state.set('logged', true).set('loading', false)
                .set('user', fromJS(payload.response));
        },

        [authActions.checkAuth.error]: (state, payload) =>
        {
            return state.set('message', payload.error).set('loading', false)
                .set('user', fromJS(nullUser));
        },

        // LOGOUT SECTION

        [authActions.logout.request]: (state, payload) =>
        {
            return state.set('loading', true).set('message', null);
        },

        [authActions.logout.ok]: (state, payload) =>
        {
            return state.set('logged', false).set('loading', false)
                .set('user', fromJS(nullUser));
        },

        [authActions.logout.error]: (state, payload) =>
        {
            return state.set('message', payload.error).set('loading', false);
        },

        // =================================================================

        [authActions.clearMessage.type]: (state, payload) =>
        {
            return state.set('message', null);
        },

        [authActions.testAction.type]: (state, payload) =>
        {
            return state.set('message', payload);
        },

        [LOCATION_CHANGE]: (state) =>
        {
            return state.set('message', null)
        }

    },

    initialState
);