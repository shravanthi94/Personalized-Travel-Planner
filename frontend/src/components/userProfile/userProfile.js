import React, { Component } from 'react';
import pp from '../images/pp.jpeg';
import sfo from '../images/sfo.jpg';
import la from '../images/la.jpeg';
import sd from '../images/sd.jpeg';
import bg from '../images/background.jpeg';
import ppbg from '../images/ppBG.jpeg'
import './userProfile.css';


var backgroundImagePic = {
    backgroundImage: `url(${bg})`
}

var profileBackground = {
    backgroundImage: `url(${ppbg})`
}

class userProfile extends Component{
    render() {
        return (
            <div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card mb-3">
                                <div class="card-body text-center">
                                    <img src = {pp} class="card-img-top img-fluid rounded-circle" alt="Profile picture" style={{height: "400px"}}/>
                                    <h4 class="card-title mt-3"> Rakshitha Sathyakumar</h4>
                                    <p>
                                        Travelling and good food keeps me going!!!!!
                                    </p>
                                    <p> rakshu595@gmail.com</p>
                                    <p> (669) 212-1208</p>
                                    <button class="btn btn-primary">Update profile</button>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="jumbotron text-center mb-5" style={backgroundImagePic}>
                                <h3 class="display-4">View your saved Itineraries!!!</h3>
                                

                                <hr class="my-4"/>
                                <h5>Looking for some new places top explore??? </h5>
                                <button class="btn btn-primary btn-lg">Get new itinerary</button>
                            </div>

                            <div class="card-columns">
                                <div class="card">
                                    <img src={sfo} class="card-img-top" style={{height: "150px", objectFit:"cover"}}/>

                                    <div class="card-body p-2 position-relative">
                                        <div class="text-center">
                                            <strong class="d-block card-title mb-1"> San Francisco</strong>
                                            <button class="btn btn-primary">View itinerary</button>
                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <img src={la} class="card-img-top" style={{height: "150px", objectFit:"cover"}}/>

                                    <div class="card-body p-2 position-relative">
                                        <div class="text-center">
                                            <strong class="d-block card-title mb-1"> Los Angeles</strong>
                                            <button class="btn btn-primary">View itinerary</button>
                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <img src={sd} class="card-img-top" style={{height: "150px", objectFit:"cover"}}/>

                                    <div class="card-body p-2 position-relative">
                                        <div class="text-center">
                                            <strong class="d-block card-title mb-1"> San Diego</strong>
                                            <button class="btn btn-primary">View itinerary</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>  
            </div>
        )
    }
}


export default userProfile;