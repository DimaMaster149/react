import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Navbar, NavItem, Nav, Clearfix, FormControl, Button, Form, Input} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class HeaderBar extends Component
{
  //==============================================================================================

    state =
        {
            input:
                {
                    email: '',
                    key: '',
                }
        };

  static propTypes =
    {
      //logged: PropTypes.bool.isRequired,
      //user: PropTypes.object.isRequired,
      onSignUp: PropTypes.func.isRequired,
      onLogOut: PropTypes.func.isRequired,

    };

  static defaultProps =
    {
      //logged: false,
      // user:
      //   {
      //     id: null,
      //     username: null,
      //     email: null,
      //     access: null,
      //     photo: null
      //   },
      onSignUp:() => {},
      onLogOut: () => {},
    };


    //==============================================================================================

    onlogin(e)
    {
        e.preventDefault();

        this.props.onlogin(this.state.input);
    }

    handleFieldChange(e)
    {
        let inputData = Object.assign({}, this.state.input);
        inputData[e.target.name] = e.target.value;

        this.setState({input: inputData});
    }
  //==============================================================================================
  render()
  {
    return(
      <Clearfix>

        <Navbar inverse={true} collapseOnSelect={true} id={"HeaderBar"}>
          <Navbar.Header>
              <Navbar.Brand>
                  <LinkContainer to={"/home"}>
                      <div id={"Brand"}>
                          <div>
                              <img src={"images/landingA/logo.png"} id={"BrandIcon"}/>
                          </div>

                          <div id={"BrandText"}>
                              Find Your Ideal!
                          </div>
                      </div>
                  </LinkContainer>
              </Navbar.Brand>
              <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight={true}>
                <div className = "flex-container">
                    <Form method={"POST"} onSubmit={(e) => this.onlogin(e)}>
                       <ul className = "horizontal ">
                        <li><FormControl  name={"email"} type={"email"} size = "16"  value={this.state.input.email}
                                          onChange={(e) => {this.handleFieldChange(e)}} placeholder={"Email"}/> </li>

                           <li> <FormControl  name={"key"} type={"password"} size = "16" value={this.state.input.key}
                                              onChange={(e) => {this.handleFieldChange(e)}} placeholder={"Password"}/> </li>

                           <li> <Button className = "border" type="submit">
                                Log In
                                </Button>
                           </li>
                       </ul>
                    </Form>
                </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      </Clearfix>
    )
  }
}
export default HeaderBar
//
//сделать кнопку такой же как в мидлсеконд, проверить авторизацию, там вывод включен данных.