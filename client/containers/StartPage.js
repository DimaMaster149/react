import React, {Component, Fragment} from 'react';

import {Grid} from 'react-bootstrap';

import HeaderBar from "../components/global/HeaderBar";
import Middle from "../components/global/Middle"
import MiddleSecond from "../components/global/MiddleSecond"
import Carousel from "../components/global/Carousel"
import StartContent from "../components/StartPage/StartContent";

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import authActions from "../actions/auth";


class StartPage extends Component
{
  state =
  {
    pagesTrigger:
    {
      startPage: false,
      signUpPage: false,
      loginPage: false,
        FollowPage:true,
        FinalPage:false,

    }
  };

  //=====================================================================================
    Follow()
    {
        this.setState({pagesTrigger: {startPage: false, signUpPage: false, loginPage: false, FollowPage:false, FinalPage:true}});
    }

    SubmitFinal(data)
    {
        this.props.authActions.signUp(data);
    }

    login(data)
    {
        console.log(data);
        this.props.authActions.login(data);
    }

    signUp() {
        this.setState({pagesTrigger: {startPage: false, signUpPage: false, signInPage: false}});
       // this.props.authActions.clearMessage();
    }


  //=====================================================================================

  renderPageContent()
  {
    if (this.state.pagesTrigger.FollowPage)
    {
        return(
            <Middle onFollow={() => {this.Follow()}}/>
        )
    }

    else if (this.state.pagesTrigger.FinalPage)
    {
        return(
            <MiddleSecond onSubmitFinal={(data) => {this.SubmitFinal(data)}}/>
        )
    }

  }

  //=====================================================================================

  render()
  {
    return(
      <Grid fluid={true} id={"StartPageContainer"}>
        <HeaderBar onlogin={(data) => {this.login(data)}}/>
          {this.renderPageContent()}
        <Carousel />
      </Grid>
    );
  }
}


function mapStateToProps (state)
{
    return {
        auth: state.get('auth').toJS(),
    }
}

function mapDispatchToProps(dispatch)
{
    return {
        authActions: bindActionCreators(authActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartPage)