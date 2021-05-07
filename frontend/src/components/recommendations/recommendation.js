import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../Navbar';
import { viewItinerary } from '../../store/actions/userProfileAction';

const Recommendation = ({
  userProfile: {
    user: { places, tripType },
  },
  viewItinerary,
}) => {
  let [selectedPoi, setselectedPoi] = useState('');

  const days = localStorage.getItem('noDays');

  const handleSubmit = (e) => {
    e.preventDefault();
    viewItinerary(selectedPoi, days, tripType);
  };

  var temp = places.substring(1, places.length - 1);
  const cleaned = temp.split(',');

  for (var i = 0; i < cleaned.length; i++) {
    cleaned[i] = cleaned[i].replace(/'/g, '').trim();
  }

  const displayPOI = () => {
    var temp = places.substring(1, places.length - 1);
    const cleaned = temp.split(',');

    for (var i = 0; i < cleaned.length; i++) {
      cleaned[i] = cleaned[i].replace(/'/g, '').trim();
    }
    return cleaned.map((poi) => {
      let substrings = poi.toLowerCase().split(' ');
      let imgName = substrings.join('_');
      console.log(imgName); // los_angeles
      return (
        <div class='card px-2 mx-2' style={{ width: '18rem' }}>
          <img
            class='card-img-top'
            src={`images/${poi.toLowerCase().split(' ').join('_')}.jpg`}
            alt={poi.toLowerCase().split(' ').join('_')}
          />
          <div class='card-body'>
            <h5 class='card-title' name='poi' value={poi}>
              {poi}
            </h5>
            <p class='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <input
              className='d-inline'
              type='checkbox'
              name='selectedPoi'
              value={selectedPoi}
              id='forItem'
              onClick={(e) => setselectedPoi(poi)}
            />
            <p className='d-inline ml-1'>Select {poi}</p>
            <br /> <br />
            <button
              type='button'
              class='btn btn-primary btn-sm'
              onClick={(e) => handleSubmit(e)}
            >
              Generate Itinerary
            </button>
            <br /> <br />
            <Link
              to='/itinerary'
              type='button'
              class='btn btn-secondary btn-sm'
            >
              <i class='fas fa-plane-departure'></i> View Itinerary
            </Link>
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
      {/* <h1>Hello</h1> */}
    </Fragment>
  );
};

Recommendation.propTypes = {
  viewItinerary: PropTypes.func.isRequired,
  userProfile: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  userProfile: state.userProfile,
});

export default connect(mapStateToProps, { viewItinerary })(Recommendation);
