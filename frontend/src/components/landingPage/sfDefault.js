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
      {
          name: 'Golden Gate',
          distance: 3.3
      },
      {
        name: 'Crissy Field',
        distance: 3.3
      },
      {
          name: 'The Palace of Fine Arts',
          distance: 1.1
      },
      {
          name: 'Fisherman’s Wharf',
          distance: 2.1
      },
      {
          name: 'Lombard Street',
          distance: 0.7
      }
  ];



  const displayPlaces = () => {
    results.shift();
    return results.map((val) => {
      return (
        <Fragment>
          <img
            src={downArrow}
            alt='arr'
            height='80px'
            width='80px'
            style={{ marginLeft: '350px' }}
          />
          <i class='fas fa-car fa-lg'></i> {val.distance} miles
          <div
            class='card ml-5 w-75'
            style={{ backgroundColor: '#9f5f80',
            textAlign: 'center',
            color: 'white',
        }}
          >
            <h5 class='card-header '>{val.name}</h5>
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
        <div style={{marginLeft: "175px"}}>
        <div
          class='card ml-5 w-75'
          style={{ backgroundColor: '#9f5f80',
          textAlign: 'center',
          color: 'white'}}
        >
          <h5 class='card-header'>{results[0].name}</h5>
          </div>
        </div>
        <div style={{marginLeft: "175px"}}>
            {displayPlaces()}
        </div>
        
        <br />
        <br />
      </div>
    </Fragment>
  );
};

export default sfItinerary;
