import React, { Fragment } from 'react';
import logo from '../images/logo.jpg';

const userSignup = () => {
  return (
    <Fragment>
      <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
        <a class='navbar-brand' href='/'>
          <img src={logo} width='30' height='30' alt='' /> Trip It
        </a>

        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav mr-auto'>
            <li class='nav-item active'>
              <a class='nav-link' href='/'>
                Home <span class='sr-only'>(current)</span>
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='/'>
                Link
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div class='container '>
        <div class='row border p-5 mt-5'>
          <div class='col'></div>
          <div class='col-5'>
            <h1>Sign Up</h1>
            <form>
              <div class='form-group'>
                <label for='firstName'>First Name</label>
                <input
                  type='text'
                  class='form-control'
                  id='firstName'
                  placeholder='Enter first name'
                />
              </div>
              <div class='form-group'>
                <label for='lastName'>Last Name</label>
                <input
                  type='text'
                  class='form-control'
                  id='lastName'
                  placeholder='Enter last name'
                />
              </div>
              <div class='form-group'>
                <label for='email'>Email address</label>
                <input
                  type='email'
                  class='form-control'
                  id='email'
                  placeholder='Enter email'
                />
                <small id='emailHelp' class='form-text text-muted'>
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class='form-group'>
                <label for='password'>Password</label>
                <input
                  type='password'
                  class='form-control'
                  id='password'
                  placeholder='Password'
                />
              </div>
              <button type='submit' class='btn btn-dark px-5 '>
                Login
              </button>
            </form>
          </div>
          <div class='col'></div>
        </div>
      </div>
    </Fragment>
  );
};

export default userSignup;
