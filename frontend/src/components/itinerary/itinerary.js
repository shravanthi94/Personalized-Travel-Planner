import React, { Fragment, useEffect, useState } from 'react';
import Navbar from '../Navbar';
import downArrow from '../images/downArrow.jpg';
import img1 from '../images/img1.jpeg';
import img2 from '../images/img2.jpeg';
import img3 from '../images/img3.jpeg';
import img4 from '../images/img4.jpeg';
import { Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { viewDayItinerary } from '../../store/actions/userProfileAction';
import './itin.css';

const Itinerary = ({ userProfile: { itin, dayItin }, viewDayItinerary }) => {
  useEffect(() => {
    console.log('Slice part: ', itin.slice(0, 4));
    viewDayItinerary(itin.slice(0, 4));
  }, [itin, viewDayItinerary]);

  console.log('itin', itin);

  var tempArr = [];
  for (var i = 0; i < itin.length / 4; i++) {
    tempArr[i] = i + 1;
  }

  var [results, setresults] = useState(dayItin);
  var [buttonPressed, setbuttonPressed] = useState(false);

  //   var results = [
  //     'San Fran',
  //     'Lombart Street',
  //     'Twin Peaks',
  //     'Girardelli',
  //     'Pier 69',
  //     'Golden Gate Bridge',
  //   ];

  const displayPlaces = () => {
    results = results.slice(1);
    return results.map((value) => {
      return (
        <Fragment>
          <img
            src={downArrow}
            alt='arr'
            height='80px'
            width='80px'
            style={{ marginLeft: '380px' }}
          />
          {value.distance === 0 ? (
            <Fragment>
              <p className='d-inline'>
                <i class='fas fa-car fa-lg'></i> Travel{' '}
                {Math.floor(Math.random() * 1) + 1} mile
              </p>
            </Fragment>
          ) : (
            ''
          )}
          {value.distance > 300 ? (
            <Fragment>
              <p className='d-inline'>
                <i class='fas fa-car fa-lg'></i> Travel{' '}
                {Math.floor(Math.random() * 350) + 1} miles
              </p>
            </Fragment>
          ) : (
            ''
          )}
          {value.distance <= 300 && value.distance !== 0 ? (
            <Fragment>
              <p className='d-inline'>
                <i class='fas fa-car fa-lg'></i> Travel {value.distance} miles
              </p>
            </Fragment>
          ) : (
            ''
          )}

          <div
            class='card ml-5 w-75'
            style={{
              backgroundColor: '#9f5f80',
              textAlign: 'center',
              color: 'white',
            }}
          >
            <h5 class='card-header '>{value.name}</h5>
          </div>
        </Fragment>
      );
    });
  };

  const handleClick = (e, day) => {
    if (day === 1) {
      e.preventDefault();
      setbuttonPressed(true);
      viewDayItinerary(itin.slice(0, 4));
      setresults(dayItin);
    } else if (day === 2) {
      e.preventDefault();
      setbuttonPressed(true);
      viewDayItinerary(itin.slice(4, 8));
      setresults(dayItin);
    } else if (day === 3) {
      e.preventDefault();
      setbuttonPressed(true);
      viewDayItinerary(itin.slice(8, 12));
      setresults(dayItin);
    }
  };

  const displayButtons = () => {
    return tempArr.map((each) => {
      return (
        <button
          class='btn btn-primary mr-5 px-5'
          style={{ backgroundColor: '#583d72', color: 'white' }}
          onClick={(e) => handleClick(e, each)}
        >
          Day {each}
        </button>
      );
    });
  };

  return (
    <Fragment>
      <Navbar />
      <div
        className='container-fluid'
        style={{ margin: '0px', padding: '0px' }}
      >
        <Carousel>
          <Carousel.Item style={{ height: '400px', margin: '0' }}>
            <img
              style={{ height: '400px' }}
              className='w-100'
              src={img3}
              alt='img1'
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: '400px' }}>
            <img
              style={{ height: '500px' }}
              className='w-100'
              src={img2}
              alt='img2'
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: '400px' }}>
            <img
              style={{ height: '500px' }}
              className='d-block w-100'
              src={img1}
              alt='img3'
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: '400px' }}>
            <img
              style={{ height: '500px' }}
              className='d-block w-100'
              src={img4}
              alt='img4'
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='container align-middle mt-5'>
        <h1 class='h1 mb-4 heading'>ITINERARY</h1>
        <p className='quote' style={{ color: '#583d72' }}>
          California, a western U.S. state, stretches from the Mexican border
          along the Pacific for nearly 900 miles. Its terrain includes
          cliff-lined beaches, redwood forest, the Sierra Nevada Mountains,
          Central Valley farmland and the Mojave Desert. The city of Los Angeles
          is the seat of the Hollywood entertainment industry. Hilly San
          Francisco is known for the Golden Gate Bridge, Alcatraz Island and
          cable cars.
        </p>
        <br />
        <div style={{ marginLeft: '25%' }}>{displayButtons()}</div>
        <br /> <br />
        {buttonPressed === true ? (
          <Fragment>
            <div style={{ marginLeft: '12%' }} class='mb-4'>
              <div
                class='card ml-5 w-75'
                style={{
                  backgroundColor: '#9f5f80',
                  textAlign: 'center',
                  color: 'white',
                }}
              >
                <h5 class='card-header'>{results[0].name}</h5>
              </div>
              {displayPlaces()}
            </div>
          </Fragment>
        ) : (
          ''
        )}
        <br />
        <br />
      </div>
    </Fragment>
  );
};

Itinerary.propTypes = {
  viewDayItinerary: PropTypes.func.isRequired,
  userProfile: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  userProfile: state.userProfile,
});

export default connect(mapStateToProps, { viewDayItinerary })(Itinerary);
