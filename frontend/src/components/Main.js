import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import landingPage from './landingPage';

class Main extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={landingPage} />
            </div>
        )
    }
}

export default Main;