import React, { Fragment } from 'react';
import logo from './images/logo.jpg';
import 'bootstrap/dist/js/bootstrap.bundle';

const Navbar = () => {
  return (
    <Fragment>
      <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
        <a class='navbar-brand' href='/'>
          {/* <img src={logo} width='30' height='30' alt='' /> Trip It */}
          <i class='fas fa-route'></i> Trip It
        </a>

        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav mr-auto'>
            <li class='nav-item'>
              <a class='nav-link' href='/'>
                Home
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='/form'>
                Get started
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
              <a class='dropdown-item' href='/profile'>
                Profile
              </a>
              <a class='dropdown-item' href='/'>
                Logout
              </a>
            </div>
          </div>
        )}
      </nav>
    </Fragment>
  );
};

export default Navbar;
