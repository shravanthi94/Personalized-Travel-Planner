import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import store from './store/configureStore';

//App Component
class App extends Component {
  render() {
    return (
      //Use Browser Router to route to different pages
      <Provider store={store}>
        <div>
        <BrowserRouter>
          <div>
            <Main/>
          </div>
        </BrowserRouter>
        </div>
      </Provider>
        
    );
  }
}
//Export the App component so that it can be used in index.js
export default App;
