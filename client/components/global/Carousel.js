import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";

import {Navbar, NavItem, Nav, Clearfix, FormControl, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Slider from 'react-slick';



class Carousel extends Component
{

    render()
    {
        let settings ={
            dots: true,
            infinite: true,
            speed: 5,
            slidesToShow: 1,
            slidesToScroll: 1
        }

        return(
            <Clearfix id = {"Carousel"}>

                    <div className = "container">
                        <Slider {...settings}>
                            <div>
                                <img src="http://placekitten.com/g/400/200" />
                            </div>
                            <div>
                                <img src="http://placekitten.com/g/400/200" />
                            </div>
                        </Slider>
                    </div>

            </Clearfix>
        )
    }
}

export default Carousel