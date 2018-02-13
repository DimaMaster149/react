import React, {Component} from 'react';
import {render} from 'react-dom';
import Router from './Router';

import { ConnectedRouter } from 'react-router-redux';
import configureStore, { history } from './utils/configureStore';

import { Provider } from 'react-redux';

const store = configureStore();
//import AuthActions from './actions/auth';

import './styles/global.scss';

class App extends Component
{
  // componentWillMount()
  // {
  //   store.dispatch(AuthActions.checkAuth());
  // }

  render()
  {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Router/>
        </ConnectedRouter>
      </Provider>
    )
  }
}

render(<App/>, document.getElementById('root'));