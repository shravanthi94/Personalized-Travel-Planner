import React, { Fragment } from 'react';
import Navbar from '../Navbar';

const userLogin = () => {
  return (
    <Fragment>
      <Navbar />

      <div class='container '>
        <div class='row border p-5 mt-5'>
          <div class='col'></div>
          <div class='col-5'>
            <h1>Sign In</h1>
            <form>
              <div class='form-group'>
                <label for='exampleInputEmail1'>Email address</label>
                <input
                  type='email'
                  class='form-control'
                  id='exampleInputEmail1'
                  placeholder='Enter email'
                />
                <small id='emailHelp' class='form-text text-muted'>
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class='form-group'>
                <label for='exampleInputPassword1'>Password</label>
                <input
                  type='password'
                  class='form-control'
                  id='exampleInputPassword1'
                  placeholder='Password'
                />
              </div>
              <button type='submit' class='btn btn-dark px-5 '>
                Signin
              </button>
            </form>
          </div>
          <div class='col'></div>
        </div>
      </div>
    </Fragment>
  );
};

export default userLogin;
