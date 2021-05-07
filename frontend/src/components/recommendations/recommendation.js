import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../Navbar';
import { viewItinerary } from '../../store/actions/userProfileAction';
import './rec.css';
import los_angeles from '../images/la.jpg';
import santa_barbara from '../images/santa_barbara.jpg';
import napa from '../images/napa.jpg';

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
        <div class='card w-75  mx-2' style={{ width: '18rem' }}>
          {poi === 'Napa' ? (
            <img class='card-img-top' src={napa} alt='img' />
          ) : (
            ''
          )}
          {poi === 'Los Angeles' ? (
            <img class='card-img-top' src={los_angeles} alt='img' />
          ) : (
            ''
          )}
          {poi === 'Santa Barbara' ? (
            <img class='card-img-top' src={santa_barbara} alt='img' />
          ) : (
            ''
          )}
          <div class='card-body px-2'>
            <h5 class='card-title h3' name='poi' value={poi}>
              {poi}
            </h5>
            <p
              class='card-text quote para'
              style={{ color: '#583d72', fontSize: '14px' }}
            >
              As a destination, California has it all: culture, mountains,
              beaches, wine, cities brimming with energy, national parks, and of
              course, the Pacific Ocean.
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
              style={{ backgroundColor: '#583d72' }}
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
      <div className='container p-3 my-5'>
        <h1 className='heading'>Recommendations</h1>
        <p className='quote' style={{ color: '#583d72' }}>
          From its famous coastline to its broad heartland and granite Sierra
          peaks, the state of California offers something for everyone. So if
          you’re looking to explore this beautiful city then you’re in the right
          place.
        </p>
        <div className='container mt-4'>
          <div class='col-12'>
            <div class='card-deck px-4'>{displayPOI()}</div>
          </div>
        </div>
      </div>
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
