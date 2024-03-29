import React, { Component } from 'react';
import '../../App.css';
import sfo from '../images/sfo.jpg';
import sd from '../images/sd.jpeg';
import la from '../images/la.jpeg';
//import { Card, CardDeck, Button} from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './userHome.css';
import NavBar from '../Navbar';

class userHome extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div>
          <div class='container-fluid d-flex justify-content-center'>
            <div class='row'>
              <div class='col-md-4'>
                <div class='card text-center shadow'>
                  <div class='overflow'>
                    <img
                      src={sfo}
                      alt=''
                      class='card-img-top'
                      style={{ height: '250px' }}
                    />
                  </div>
                  <div
                    class='card-body text-dark'
                    style={{ padding: '3rem 0' }}
                  >
                    <h4 class='card-title'>San Fransicso</h4>
                    <p class='card-text text-secondary'>
                      {' '}
                      San Francisco, officially the City and County of San
                      Francisco, is a cultural, commercial, and financial center
                      in Northern California. San Francisco is the 16th most
                      populous city in the United States, and the fourth most
                      populous in California
                    </p>
                    <a
                      href='/sfItinerary'
                      class='btn '
                      style={{ backgroundColor: '#583d72', color: 'white' }}
                    >
                      {' '}
                      View Itinerary{' '}
                    </a>
                  </div>
                </div>
              </div>

              <div class='col-md-4'>
                <div class='card text-center shadow'>
                  <div class='overflow'>
                    <img
                      src={la}
                      alt=''
                      class='card-img-top'
                      style={{ height: '250px' }}
                    />
                  </div>
                  <div class='card-body text-dark'>
                    <h4 class='card-title'>Los Angeles</h4>
                    <p class='card-text text-secondary'>
                      {' '}
                      Los Angeles is a sprawling Southern California city and
                      the center of the nation’s film and television industry.
                      Near its iconic Hollywood sign, studios such as Paramount
                      Pictures, Universal and Warner Brothers offer
                      behind-the-scenes tours.
                    </p>
                    <a
                      href='/signup'
                      class='btn '
                      style={{ backgroundColor: '#583d72', color: 'white' }}
                    >
                      {' '}
                      View Itinerary{' '}
                    </a>
                  </div>
                </div>
              </div>

              <div class='col-md-4'>
                <div class='card text-center shadow'>
                  <div class='overflow'>
                    <img
                      src={sd}
                      alt=''
                      class='card-img-top'
                      style={{ height: '250px' }}
                    />
                  </div>
                  <div class='card-body text-dark'>
                    <h4 class='card-title'>San Diego</h4>
                    <p class='card-text text-secondary'>
                      {' '}
                      San Diego is a city on the Pacific coast of California
                      known for its beaches, parks and warm climate. Immense
                      Balboa Park is the site of the renowned San Diego Zoo, as
                      well as numerous art galleries, artist studios, museums
                      and gardens.
                    </p>
                    <a
                      href='/signup'
                      class='btn '
                      style={{ backgroundColor: '#583d72', color: 'white' }}
                    >
                      {' '}
                      View Itinerary{' '}
                    </a>
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

export default userHome;
