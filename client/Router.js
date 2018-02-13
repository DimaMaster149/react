import React, {Component} from 'react';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';

import StartPage from './containers/StartPage';

class Router extends Component
{
  render()
  {
    return (
      <BrowserRouter>
        <div>

          <Switch>
            <Route exact path={"/"} component={StartPage}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default Router