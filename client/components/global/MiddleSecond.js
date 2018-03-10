import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Form, FormGroup, Navbar, NavItem, Nav, Clearfix, FormControl, Button, input, Row, Alert} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Validator from "../../utils/validator";

class MiddleSecond extends Component
{
    //==============================================================================================

    state =
        {
            input:
                {
                    name: '',
                    email: '',
                    key: '',
                    born_year: '',
                    born_month: '',
                    born_day: '',
                    education: '',
                    children: '',
                    region: '',
                    territory:''
                },

             touch:
             {
                name: false,
                email: false,
                key: false,

             },

            alert:
                {
                    show: false,
                    message: ''
                }
        };



    static propTypes =
        {
            //logged: PropTypes.bool.isRequired,
            //user: PropTypes.object.isRequired,
            error: PropTypes.string.isRequired,

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
            error: null,

        };

    nameValidation()
    {
        return this.state.touch.name ? Validator.validateUsername(this.state.input.name) : null;
    }

    emailValidation()
    {
        if (this.props.error)
        {
            //this.setState({alert: {show: true, message: "This email has already been used"}});
            return "error";
        }
        return this.state.touch.email ? Validator.validateEmail(this.state.input.email) : null;

    }

    passwordValidation()
    {
        return  this.state.touch.key? Validator.validatePassword(this.state.input.key) : null;
    }


    checkValidation()
    {
        return this.props.error ? "error" : null;
    }

    handleFieldChange(e)
    {
        let inputData = Object.assign({}, this.state.input);
        inputData[e.target.name] = e.target.value;

        this.setState({input: inputData});
    }

    handleFieldTouch(e)
    {
        let touchedField = Object.assign({}, this.state.touch);
        touchedField[e.target.name] = false;

        this.setState({touch: touchedField});
    }

    handleFieldBlur(e)
    {
        let touchedField = Object.assign({}, this.state.touch);
        touchedField[e.target.name] = true;

        this.setState({touch: touchedField});
    }


    onSubmitFinal(e)
    {
        e.preventDefault();

        if
        (
            (this.nameValidation() && this.nameValidation() !== "error") &&
            (this.emailValidation() && this.emailValidation() !== "error")
            //&&
            //(this.passwordValidation() && this.passwordValidation() !== "error")

        )
        {
            this.props.onSubmitFinal(this.state.input);
        }

        else
        {
            this.setState(
                {
                    touch:
                        {
                            name: true,
                            email: true,
                            key: true,
                        }
                });

            this.setState({alert: {show: true, message: "Please fill in the fields correctly"}});
        }

    }


    handleAlertHide()
    {
        this.setState({alert: {show: false}});
    }

    //===================================renderAlertWindow===========================================================

    renderError()
    {
        return (
            <Alert bsStyle="danger" id={"error-alert"}>
                <h4>Attention!</h4>
                <p>
                    {this.state.alert.message}
                </p>
                <p>
                    <Button bsStyle={"danger"} onClick={() => this.handleAlertHide()}>
                        OK
                    </Button>
                </p>
            </Alert>
        )
    }
    //===================================renderWindow================================================================

    render()
    {
        return(
            <Clearfix id="MiddleSecond">

                <div className = "container-fluid">
                    <Form method={"POST"} onSubmit={(e) => this.onSubmitFinal(e)}>

                        <div className="row pad" >
                            {this.state.alert.show ? this.renderError() : null}
                            <div className = "col-lg-3 col-md-1 col-xs-0" >
                            </div>

                            <div className = "col-lg-3 col-md-5 col-xs-12">
                                <p> Name </p>
                                <FormGroup validationState={(this.nameValidation())}>
                                    <FormControl name={"name"} type={"text"} value={this.state.input.name}
                                                 onChange={(e) => {this.handleFieldChange(e)}} placeholder={"Name"}
                                                 onSelect={(e) => {this.handleFieldTouch(e)}}
                                                 onBlur={(e) => {this.handleFieldBlur(e)}}>
                                    </FormControl>
                                </FormGroup>
                            </div>

                            <div className = "col-lg-3 col-md-5 col-xs-12">
                                <p> Email </p>
                                <FormGroup validationState={this.emailValidation()}>
                                    <FormControl  name={"email"} type={"email"} value={this.state.input.email}
                                                  onChange={(e) => {this.handleFieldChange(e)}} placeholder={"Email"}
                                                  onSelect={(e) => {this.handleFieldTouch(e)}}
                                                  onBlur={(e) => {this.handleFieldBlur(e)}} >
                                    </FormControl>
                            </FormGroup>
                            </div>

                            <div className = "col-lg-3 col-md-1 col-xs-0">
                            </div>
                        </div>

                        <div className="row pad">
                            <div className = "col-lg-3 col-md-1 col-xs-0">
                            </div>

                            <div className = "col-lg-3 col-md-5 col-xs-12">
                                <p> Key </p>
                                    <FormControl name={"key"} type={"password"} value={this.state.input.key}
                                                 onChange={(e) => {this.handleFieldChange(e)}} placeholder={"Key"}>
                                    </FormControl>
                            </div>

                            <div className="col-lg-3 col-md-5 col-xs-12">
                                <p> Born </p>
                                <div className="row">
                                    <div className = "col-lg-4 col-md-4 col-xs-12 single-pad">
                                        <FormControl componentClass="select" name={"born_year"} type={"text"} value={this.state.input.born_year}
                                                     onChange={(e) => {this.handleFieldChange(e)}} placeholder={"Year"}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </FormControl>
                                    </div>
                                    <div className = "col-lg-4 col-md-4 col-xs-12 single-pad">

                                        <FormControl componentClass="select" name={"born_month"} type={"text"} value={this.state.input.born_month}
                                                     onChange={(e) => {this.handleFieldChange(e)}} placeholder={"Month"}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                            <option>11</option>
                                            <option>12</option>
                                        </FormControl>
                                    </div>
                                    <div className = "col-lg-4 col-md-4 col xs-12">

                                        <FormControl componentClass="select" name={"born_day"} type={"text"} value={this.state.input.born_day}
                                                     onChange={(e) => {this.handleFieldChange(e)}} placeholder={"Day"}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
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
                                <p> Education </p>
                                <FormControl componentClass="select" name={"education"} type={"text"} value={this.state.input.education}
                                             onChange={(e) => {this.handleFieldChange(e)}} placeholder={"Education"}>
                                    <option>ПТУ</option>
                                    <option>НеПТУ</option>
                                </FormControl>
                            </div>

                            <div className = "col-lg-3 col-md-5 col-xs-12">
                                <p> Children </p>
                                <FormControl componentClass="select" name={"children"} type={"text"} value={this.state.input.children}
                                             onChange={(e) => {this.handleFieldChange(e)}} placeholder={"Children"}>
                                    <option>1</option>
                                    <option>2</option>
                                </FormControl>
                            </div>

                            <div className = "col-lg-3 col-md-1 col-xs-0">
                            </div>
                        </div>

                        <div className="row pad ">
                            <div className = "col-lg-3  col-md-1 col-xs-0">
                            </div>

                            <div className = "col-lg-3 col-md-5 col-xs-12">
                                <p> Region </p>
                                <FormControl componentClass="select" name={"region"} type={"text"} value={this.state.input.region}
                                             onChange={(e) => {this.handleFieldChange(e)}} placeholder={"Region"}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </FormControl>
                            </div>

                            <div className = "col-lg-3 col-md-5 col-xs-12">
                                <p> Territory </p>
                                <FormControl componentClass="select" name={"territory"} type={"text"} value={this.state.input.territory}
                                             onChange={(e) => {this.handleFieldChange(e)}} placeholder={"Territory"}>
                                    <option>First territory</option>
                                    <option>Second territory</option>
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
                                <Button bsStyle="warning" className="btn-width" type="submit" >Finalizar</Button>
                            </div>

                            <div className = "col-lg-3 col-md-1 col-xs-0">
                            </div>
                        </div>
                    </Form>
                </div>

            </Clearfix>
        )
    }
}

export default MiddleSecond