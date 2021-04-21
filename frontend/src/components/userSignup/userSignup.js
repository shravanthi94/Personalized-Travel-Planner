import React, { Fragment } from 'react';
import Navbar from '../Navbar';

const userSignup = () => {
  return (
    <Fragment>
      <Navbar />

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
                Signup
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
