import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import landingPage from './landingPage/landingPage';
import userHome from './userHome/userHome';
import userLogin from './userLogin/userLogin';
import userSignup from './userSignup/userSignup';
import gettingStarted from './gettingStarted/gettingStarted';
import userProfile from './userProfile/userProfile';
import profileUpdate from './userProfile/profileUpdate';
import recommendation from './recommendations/recommendation';
import itinerary from './itinerary/itinerary';
import sfItinerary from './landingPage/sfDefault';

import setAuthToken from '../helpers/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

class Main extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={landingPage} />
        <Route exact path='/home' component={userHome} />
        <Route exact path='/login' component={userLogin} />
        <Route exact path='/signup' component={userSignup} />
        <Route exact path='/gettingStarted' component={gettingStarted} />
        <Route exact path='/userProfile' component={userProfile} />
        <Route exact path='/profileUpdate' component={profileUpdate} />
        <Route exact path='/recommendations' component={recommendation} />
        <Route exact path='/itinerary' component={itinerary} />
        <Route exact path='/sfItinerary' component={sfItinerary}/>
      </div>
    );
  }
}

export default Main;
