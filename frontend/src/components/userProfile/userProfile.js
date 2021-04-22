import React, { Component } from 'react';
import pp from '../images/pp.jpeg';
import sfo from '../images/sfo.jpg';
import la from '../images/la.jpeg';
import sd from '../images/sd.jpeg';
import bg from '../images/background.jpeg';
import './userProfile.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUserDetails } from '../../store/actions/userProfileAction';
import Navbar from '../Navbar';


var backgroundImagePic = {
    backgroundImage: `url(${bg})`
}

class userProfile extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentWillMount() {
        this.props.getUserDetails();
    }

    
    render() {
        return (
            <React.Fragment>
                <Navbar/>  
                    <div>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="card mb-3">
                                        <div class="card-body text-center"><img src = {pp} class="card-img-top rounded-circle" style={{height: "400px"}}/>
                                            
                                            <h4 class="card-title mt-3"> {this.props.user.firstName} {this.props.user.lastName}</h4>
                                            <p>
                                                {this.props.user.headline}
                                            </p>
                                            <p> {this.props.user.email}</p>
                                            <p> {this.props.user.phone}</p>
                                            <a href="/profileUpdate" class="btn btn-primary btn-md" role="button" aria-pressed="true">Update Profile</a>
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
                                                    <strong class="d-block card-title mb-1"> San Francisco</strong><br />
                                                    <button class="btn btn-primary">View itinerary</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card">
                                            <img src={la} class="card-img-top" style={{height: "150px", objectFit:"cover"}}/>

                                            <div class="card-body p-2 position-relative">
                                                <div class="text-center">
                                                    <strong class="d-block card-title mb-1"> Los Angeles</strong><br />
                                                    <button class="btn btn-primary">View itinerary</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card">
                                            <img src={sd} class="card-img-top" style={{height: "150px", objectFit:"cover"}}/>

                                            <div class="card-body p-2 position-relative">
                                                <div class="text-center">
                                                    <strong class="d-block card-title mb-1"> San Diego</strong><br />
                                                    <button class="btn btn-primary">View itinerary</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>  
                    </div>
            </React.Fragment>
        )
    }
}


userProfile.propTypes = {
    getUserDetails: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    user: state.userProfile.user
  });
  
  export default connect(mapStateToProps, { getUserDetails })(userProfile);