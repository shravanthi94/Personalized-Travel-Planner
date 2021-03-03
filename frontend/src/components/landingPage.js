import React, { Component } from 'react';
import '../App.css';
import backGroundImage from "./images/backGroundImage.jpg"
import { Form, Button, Image } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


var backgroundImagePic = {
    backgroundImage: `url(${backGroundImage})`,
    width: "100%",
    height: "900px"

}


class landingPage extends Component {
    render() {
        return(
            <div style={backgroundImagePic}>
                 <div>
                        <Button style={{height: '35px'}}> Login </Button>
                        <Button style={{height: '35px'}}> Signup </Button>
                </div>
                <div class='container'>
                       <center>
                                <h1> Personalised Travel planner</h1>
                        </center>
                 </div>
             </div>
        )
    }
}

export default landingPage;