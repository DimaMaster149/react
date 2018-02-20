import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Navbar, NavItem, Nav, Clearfix, FormControl, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class Middle extends Component
{
    //==============================================================================================

    static propTypes =
        {
            //logged: PropTypes.bool.isRequired,
            //user: PropTypes.object.isRequired,
            onFollow: PropTypes.func.isRequired,
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
            onFollow: () => {},
        };

    //==============================================================================================

    render()
    {
        return(
            <Clearfix id={"Middle"}>
                <div>
                    <h1 className="centered"> Create your free profile </h1>
                    <div className="flex-container">
                        <div className = "flex-element el-margin">
                            <p> I am </p>
                            <FormControl componentClass="select" placeholder="select">
                            </FormControl>
                        </div>

                        <div className = "flex-element el-margin">
                            <p> I am looking for </p>
                            <FormControl componentClass="select" placeholder="select">
                            </FormControl>
                        </div>

                        <div className = "flex-element el-margin">
                            <p> between </p>
                            <FormControl componentClass="select" placeholder="select">
                            </FormControl>
                        </div>

                        <div className = "flex-element el-margin">
                            <p> living in </p>
                            <FormControl componentClass="select" placeholder="select">
                            </FormControl>
                        </div>

                        <div className = "bt-margin flex-element el-margin">
                            <p> </p>
                            <Button bsStyle="warning" className="btn-width" onClick={() => {this.props.onFollow()}}>Following</Button>
                        </div>

                    </div>
                    <h3 className="centered"> Join us to meet people </h3>
                </div>

            </Clearfix>
        )
    }
}

export default Middle