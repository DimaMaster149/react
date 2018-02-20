import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Form, FormGroup, Navbar, NavItem, Nav, Clearfix, FormControl, Button, input} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

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

            // touch:
            // {
            //   email: false,
            //   password: false
            // }
        };



    static propTypes =
        {
            //logged: PropTypes.bool.isRequired,
            //user: PropTypes.object.isRequired,
            error: PropTypes.string.isRequired,
            onFinal: PropTypes.func.isRequired
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
            onFinal: () => {},
        };

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

    onSubmitFinal(e)
    {
        e.preventDefault();

        this.props.onSubmitFinal(this.state.input);
    }

    //==============================================================================================

    render()
    {
        return(
            <Clearfix id="MiddleSecond">

                <div className = "container-fluid">
                    <Form method={"POST"} onSubmit={(e) => this.onSubmitFinal(e)}>
                        <div className="row pad" >
                            <div className = "col-lg-3 col-md-1 col-xs-0" >
                            </div>

                            <div className = "col-lg-3 col-md-5 col-xs-12">
                                <p> Name </p>
                                <FormControl name={"name"} type={"text"} value={this.state.input.name}
                                                 onChange={(e) => {this.handleFieldChange(e)}} placeholder={"Name"}>
                                </FormControl>
                            </div>

                            <div className = "col-lg-3 col-md-5 col-xs-12">
                                <p> Email </p>
                                <FormControl  name={"email"} type={"email"} value={this.state.input.email}
                                              onChange={(e) => {this.handleFieldChange(e)}} placeholder={"Email"}>
                                </FormControl>
                            </div>

                            <div className = "col-lg-3 col-md-1 col-xs-0">
                            </div>
                        </div>

                        <div className="row pad">
                            <div className = "col-lg-3 col-md-1 col-xs-0">
                            </div>

                            <div className = "col-lg-3 col-md-5 col-xs-12">
                                <p> Key </p>
                                <FormControl name={"key"} type={"text"} value={this.state.input.key}
                                                 onChange={(e) => {this.handleFieldChange(e)}} placeholder={"Key"}>
                                </FormControl>
                            </div>

                            <div className="col-lg-3 col-md-5 col-xs-12">
                                <p> Born </p>
                                <div className="row">
                                    <div className = "col-lg-4 col-md-4 col-xs-12 single-pad">
                                        <FormControl componentClass="select" name={"born-year"} type={"text"} value={this.state.input.born_year}
                                                     onChange={(e) => {this.handleFieldChange(e)}} placeholder={"Year"}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </FormControl>
                                    </div>
                                    <div className = "col-lg-4 col-md-4 col-xs-12 single-pad">

                                        <FormControl componentClass="select" name={"born-month"} type={"text"} value={this.state.input.born_month}
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

                                        <FormControl componentClass="select" name={"born-day"} type={"text"} value={this.state.input.born_day}
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
                                <Button bsStyle="warning btn-width" type={"submit"} onClick={() => {this.props.onFinal()}}>Finalizar</Button>
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