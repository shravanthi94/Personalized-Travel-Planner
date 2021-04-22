import React, { Component } from 'react';
import logo from './images/logo.jpg';
import 'bootstrap/dist/js/bootstrap.bundle';

class Navbar extends Component {
  handleLogout = () => {
    window.localStorage.clear();
    window.location = '/';
  };

  render() {
    return (
      <div>
        <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
          <a class='navbar-brand' href='/home'>
            {/* <img src={logo} width='30' height='30' alt='' /> Trip It */}
            <i class='fas fa-route'></i> Trip It
          </a>

          <div class='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul class='navbar-nav mr-auto'>
              <li class='nav-item active'>
                <a class='nav-link' href='/home'>
                  Home <span class='sr-only'>(current)</span>
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='/gettingStarted'>
                  Get Started
                </a>
              </li>
            </ul>
          </div>

          {localStorage.token && (
            <div class='nav-item dropdown mr-3'>
              <button
                class='btn btn-secondary dropdown-toggle'
                type='button'
                id='dropdownMenuButton'
                data-toggle='dropdown'
              >
                <i class='far fa-user'></i>
              </button>
              <div class='dropdown-menu dropdown-menu-right'>
                <a class='dropdown-item' href='/userProfile'>
                  Profile
                </a>
                <a class='dropdown-item' href='#' onClick={this.handleLogout}>
                  Logout
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    );
  }
}

export default Navbar;
