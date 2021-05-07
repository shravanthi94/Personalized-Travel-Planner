import React, { Fragment } from 'react';
import Navbar from '../Navbar';
import downArrow from '../images/downArrow.jpg';
import img1 from '../images/img1.jpeg';
import img2 from '../images/img2.jpeg';
import img3 from '../images/img3.jpeg';
import img4 from '../images/img4.jpeg';
import { Carousel } from 'react-bootstrap';

const sfItinerary = () => {
  var results = [
    'Lombart Street',
    'Twin Peaks',
    'Girardelli',
    'Pier 69',
    'Golden Gate Bridge',
  ];

  const displayPlaces = () => {
    results.shift();
    return results.map((city) => {
      return (
        <Fragment>
          <img
            src={downArrow}
            alt='arr'
            height='80px'
            width='80px'
            style={{ marginLeft: '410px' }}
          />
          <i class='fas fa-car fa-lg'></i> Travel 150 miles
          <div
            class='card ml-5 w-75'
            style={{ backgroundColor: 'mediumaquamarine', textAlign: 'center' }}
          >
            <h5 class='card-header '>{city}</h5>
          </div>
        </Fragment>
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
        <h1 class='h1 mb-4'>ITINERARY</h1>
        <div
          class='card ml-5 w-75'
          style={{ backgroundColor: 'mediumaquamarine', textAlign: 'center' }}
        >
          <h5 class='card-header'>{results[0]}</h5>
        </div>
        {displayPlaces()}
        <br />
        <br />
      </div>
    </Fragment>
  );
};

export default sfItinerary;
