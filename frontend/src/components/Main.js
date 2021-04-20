import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import landingPage from './landingPage/landingPage';
import userHome from './userHome/userHome';
import gettingStarted from './gettingStarted/gettingStarted';

class Main extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={landingPage} />
                <Route exact path='/home' component={userHome} />
                <Route exact path='/gettingStarted' component={gettingStarted}/>

            </div>
        )
    }
}

export default Main;