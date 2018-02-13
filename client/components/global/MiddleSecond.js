import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Navbar, NavItem, Nav, Clearfix, FormControl, Button, input} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class MiddleSecond extends Component
{
    //==============================================================================================

    static propTypes =
        {
            //logged: PropTypes.bool.isRequired,
            //user: PropTypes.object.isRequired,
            onFinal: PropTypes.func.isRequired,
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
            onFinal: () => {},
        };

    //==============================================================================================

    render()
    {
        return(
            <Clearfix id="MiddleSecond">

                <div className = "container-fluid">

                    <div className="row pad" >
                        <div className = "col-lg-3 col-md-1 col-xs-0" >
                        </div>

                        <div className = "col-lg-3 col-md-5 col-xs-12">
                            <p> Email </p>
                            <FormControl   placeholder="first">
                            </FormControl>
                        </div>

                        <div className = "col-lg-3 col-md-5 col-xs-12">
                            <p> Email </p>
                            <FormControl  placeholder="second">
                            </FormControl>
                        </div>

                        <div className = "col-lg-3 col-md-1 col-xs-0">
                        </div>
                    </div>

                    <div className="row pad">
                        <div className = "col-lg-3 col-md-1 col-xs-0">
                        </div>

                        <div className = "col-lg-3 col-md-5 col-xs-12">
                            <p> Email </p>
                            <FormControl placeholder="third">
                            </FormControl>
                        </div>

                        <div className="col-lg-3 col-md-5 col-xs-12">
                            <p> Email </p>
                            <div className="row">
                                <div className = "col-lg-4 col-md-4 col-xs-12 single-pad">
                                    <FormControl componentClass="select" placeholder="select_1">
                                    </FormControl>
                                </div>
                                <div className = "col-lg-4 col-md-4 col-xs-12 single-pad">

                                    <FormControl componentClass="select" placeholder="select_2">
                                    </FormControl>
                                </div>
                                <div className = "col-lg-4 col-md-4 col xs-12">

                                    <FormControl componentClass="select" placeholder="select_3">
                                    </FormControl>
                                 </div>
                            </div>
                        </div>

                        <div className = "col-lg-3 col-md-1 col-xs-0">
                        </div>
                    </div>

                    <div className="row pad">
                        <div className = "col-lg-3 col-md-1 col-xs-0">
                        </div>

                        <div className = "col-lg-3 col-md-5 col-xs-12">
                            <p> Email </p>
                            <FormControl componentClass="select" placeholder="select">
                            </FormControl>
                        </div>

                        <div className = "col-lg-3 col-md-5 col-xs-12">
                            <p> Email </p>
                            <FormControl componentClass="select" placeholder="select">
                            </FormControl>
                        </div>

                        <div className = "col-lg-3 col-md-1 col-xs-0">
                        </div>
                    </div>

                    <div className="row pad ">
                        <div className = "col-lg-3  col-md-1 col-xs-0">
                        </div>

                        <div className = "col-lg-3 col-md-5 col-xs-12">
                            <p> Email </p>
                            <FormControl componentClass="select" placeholder="select">
                            </FormControl>
                        </div>

                        <div className = "col-lg-3 col-md-5 col-xs-12">
                            <p> Email </p>
                            <FormControl componentClass="select" placeholder="select">
                            </FormControl>
                        </div>

                        <div className = "col-lg-3 col-md-1 col-xs-0">
                        </div>
                    </div>

                    <div className="row pad">
                        <div className = "col-lg-3 col-md-1 col-xs-0">
                        </div>

                        <div className = "col-lg-3 col-md-5 col-xs-12">
                            <p><input type="checkbox" name="a" value="Acepto"/> Acepto </p>
                        </div>

                        <div className = "col-lg-3 col-md-5 col-xs-12">
                            <Button bsStyle="warning btn-width" onClick={() => {this.props.onFinal()}}>Finalizar</Button>
                        </div>

                        <div className = "col-lg-3 col-md-1 col-xs-0">
                        </div>
                    </div>

                </div>

            </Clearfix>
        )
    }
}

export default MiddleSecond