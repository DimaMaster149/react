import React, {Component} from 'react';

import {Grid} from 'react-bootstrap';

import HeaderBar from "../components/global/HeaderBar";
import Middle from "../components/global/Middle"
import MiddleSecond from "../components/global/MiddleSecond"
import Carousel from "../components/global/Carousel"
import SignUp from "../components/StartPage/SignUp";
import LogIn from "../components/StartPage/LogIn";
import StartContent from "../components/StartPage/StartContent";


class StartPage extends Component
{
  state =
  {
    pagesTrigger:
    {
      startPage: false,
      signUpPage: false,
      logInPage: false,
        FollowPage:true,
        FinalPage:false,


    }
  };

  //=====================================================================================

  signUp()
  {
    this.setState({pagesTrigger: {startPage: false, signUpPage: true, logInPage: false}});
  }

  logIn()
  {
    this.setState({pagesTrigger: {startPage: false, signUpPage: false, logInPage: true}});
  }

    Follow()
    {
        this.setState({pagesTrigger: {startPage: false, signUpPage: false, logInPage: false, FollowPage:false, FinalPage:true}});
    }

    Final()
    {
        this.setState({pagesTrigger: {startPage: false, signUpPage: false, logInPage: false, FollowPage:true, FinalPage:false}});
    }

  //=====================================================================================

  renderPageContent()
  {
    if (this.state.pagesTrigger.startPage)
    {
      return(
        <StartContent/>
      )
    }
    else if (this.state.pagesTrigger.signUpPage)
    {
      return(
        <SignUp/>
      )
    }
    else if (this.state.pagesTrigger.logInPage)
    {
      return(
        <LogIn/>
      )
    }

    else if (this.state.pagesTrigger.FollowPage)
    {
        return(
            <Middle onFollow={() => {this.Follow()}}/>
        )
    }

    else if (this.state.pagesTrigger.FinalPage)
    {
        return(
            <MiddleSecond onFinal={() => {this.Final()}}/>
        )
    }



  }

  //=====================================================================================

  render()
  {
    return(
      <Grid fluid={true} id={"StartPageContainer"}>
        <HeaderBar  onLogIn={() => {this.LogIn}}/>
          {this.renderPageContent()}
        <Carousel />
      </Grid>
    );
  }
}

export default StartPage