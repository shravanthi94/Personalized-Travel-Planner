/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
// import pp from '../images/pp.jpeg';
import sfo from '../images/sfo.jpg';
import la from '../images/la.jpeg';
import sd from '../images/sd.jpeg';
// import bg from '../images/background.jpeg';
import './userProfile.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUserDetails } from '../../store/actions/userProfileAction';
import Navbar from '../Navbar';
import axios from 'axios';
import { BACKEND_URL } from '../../helpers/constants';

// var backgroundImagePic = {
//   backgroundImage: `url(${bg})`,
// };

class userProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      fileText: 'Choose image...',
    };
  }

  componentWillMount() {
    this.props.getUserDetails();
  }

  onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files[0].name);
      this.setState({
        file: e.target.files[0],
        fileText: e.target.files[0].name,
      });
    }
  };

  handleImageUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', this.state.file);
    const uploadConfig = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios
      .post(`${BACKEND_URL}/users/image`, formData, uploadConfig)
      .then((response) => {
        alert('Image uploaded successfully!');
        window.location = '/userProfile';
      })
      .catch((err) => {
        console.log('Error');
      });
  };

  render() {
    let imgSrc;
    imgSrc = `${BACKEND_URL}/users/image/${this.props.user.image}`;
    return (
      <React.Fragment>
        <Navbar />
        <div>
          <div class='container-fluid'>
            <div class='row'>
              <div class='col-3 pl-4 ml-4'>
                <div class='card mb-3' style={{ backgroundColor: '#FFEDDD' }}>
                  <div class='card-body text-center'>
                    <img
                      src={imgSrc}
                      class='card-img rounded-circle p-4'
                      style={{ height: '400px' }}
                      alt='profile-pic'
                    />
                    <label for='profileImage'>
                      <a
                        class='btn btn-secondary btn-sm btn-rounded'
                        style={{ backgroundColor: '#583d72', color: 'white' }}
                      >
                        <i class='fas fa-camera'></i> Upload image...
                      </a>
                    </label>
                    <input
                      type='file'
                      name='profileImage'
                      id='profileImage'
                      style={{ display: 'none' }}
                      value=''
                      onChange={this.onImageChange}
                    ></input>
                    <br />
                    <a
                      class='btn'
                      onClick={this.handleImageUpload}
                      style={{ backgroundColor: '#583d72', color: 'white' }}
                      href='/'
                    >
                      {' '}
                      Save
                    </a>{' '}
                    <h4 class='card-title mt-3'>
                      {' '}
                      {this.props.user.firstName} {this.props.user.lastName}
                    </h4>
                    <p>{this.props.user.headline}</p>
                    <p> {this.props.user.email}</p>
                    <p> {this.props.user.phone}</p>
                    <a
                      href='/profileUpdate'
                      class='btn btn-md'
                      role='button'
                      style={{ backgroundColor: '#583d72', color: 'white' }}
                      aria-pressed='true'
                    >
                      Update Profile
                    </a>
                  </div>
                </div>
              </div>
              <div class='col-8 pl-5 ml-5'>
                <div
                  class='jumbotron text-center mb-5 '
                  style={{ backgroundColor: '#FFEDDD' }}
                >
                  <h3 class='display-4'>View your saved Itineraries!!!</h3>

                  <hr class='my-4' />
                  <h5>Looking for some new places top explore??? </h5>
                  <a
                    href='/gettingStarted'
                    class='btn btn-md'
                    role='button'
                    style={{ backgroundColor: '#583d72', color: 'white' }}
                  >
                    Get new itinerary
                  </a>
                </div>

                <div class='card-columns'>
                  <div class='card'>
                    <img
                      src={sfo}
                      class='card-img'
                      style={{ height: '150px', objectFit: 'cover' }}
                      alt='img'
                    />

                    <div class='card-body p-2 position-relative'>
                      <div class='text-center h4'>
                        <strong class='d-block card-title mb-1 mt-1'>
                          {' '}
                          San Francisco
                        </strong>
                        <br />
                        <button
                          class='btn mb-3'
                          style={{ backgroundColor: '#583d72', color: 'white' }}
                        >
                          View itinerary
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class='card'>
                    <img
                      src={la}
                      class='card-img'
                      style={{ height: '150px', objectFit: 'cover' }}
                      alt='img'
                    />

                    <div class='card-body p-2 position-relative'>
                      <div class='text-center h4'>
                        <strong class='d-block card-title mb-1 mt-1'>
                          {' '}
                          Los Angeles
                        </strong>
                        <br />
                        <button
                          class='btn mb-3'
                          style={{ backgroundColor: '#583d72', color: 'white' }}
                        >
                          View itinerary
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class='card'>
                    <img
                      src={sd}
                      class='card-img'
                      style={{ height: '150px', objectFit: 'cover' }}
                      alt='img'
                    />

                    <div class='card-body p-2 position-relative'>
                      <div class='text-center h4'>
                        <strong class='d-block card-title mb-1 mt-1'>
                          {' '}
                          San Diego
                        </strong>
                        <br />
                        <button
                          class='btn mb-3'
                          style={{ backgroundColor: '#583d72', color: 'white' }}
                        >
                          View itinerary
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

userProfile.propTypes = {
  getUserDetails: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  status: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.userProfile.user,
  status: state.userProfile.status,
});

export default connect(mapStateToProps, { getUserDetails })(userProfile);
