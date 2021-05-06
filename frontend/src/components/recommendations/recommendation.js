import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../Navbar';

const Recommendation = ({ userProfile: { user } }) => {
  const displayPOI = () => {
    return user.map((poi) => {
      let substrings = poi.toLowerCase().split(' ');
      let imgName = substrings.join('_');
      console.log(imgName); // los_angeles
      return (
        <div class='card px-3' style={{ width: '18rem' }}>
          <img
            class='card-img-top'
            src={`images/${imgName}.jpg`}
            alt={imgName}
          />
          <div class='card-body'>
            <h5 class='card-title'>{poi}</h5>
            <p class='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href='/' class='btn btn-primary'>
              View Itinerary
            </a>
          </div>
        </div>
      );
    });
  };

  return (
    <Fragment>
      <Navbar />
      <div className='container border p-3 my-5'>
        <h1>Recommendations</h1>
        <div className='container mt-4'>
          <div class='row'>
            <div class='col'></div>
            <div class='col-8'>
              <div class='card-deck'>{displayPOI()}</div>
            </div>
            <div class='col'></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Recommendation.propTypes = {
  userProfile: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  userProfile: state.userProfile,
});

export default connect(mapStateToProps, {})(Recommendation);
