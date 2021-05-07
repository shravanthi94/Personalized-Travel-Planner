import React, { Component } from 'react';
import Navbar from '../Navbar';
import axios from 'axios';

class userSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onSubmit = (e) => {
    console.log(this.state.lastName);
    e.preventDefault();
    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    };

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return axios
      .post('http://localhost:3001/users/signup', data, config)
      .then((response) => {
        if (response.status === 200) {
          window.location = '/login';
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          signupFlag: true,
        });
      });
  };

  render() {
    let errors = null;
    if (this.state.signupFlag === true) {
      errors = (
        <div>
          <p style={{ color: 'red' }}>
            Email already exists! Please <a href='/login'>Sign in</a> instead!
          </p>
        </div>
      );
    }
    return (
      <React.Fragment>
        <Navbar />

        <div class='container '>
          <div class='row border p-5 mt-5'>
            <div class='col'></div>
            <div class='col-5'>
              <h1>Sign Up</h1>
              <form onSubmit={this.onSubmit}>
                <div class='form-group'>
                  <label for='firstName'>First Name</label>
                  <input
                    type='text'
                    class='form-control'
                    id='firstName'
                    onChange={this.onChange}
                    placeholder='Enter first name'
                  />
                </div>
                <div class='form-group'>
                  <label for='lastName'>Last Name</label>
                  <input
                    type='text'
                    class='form-control'
                    id='lastName'
                    onChange={this.onChange}
                    placeholder='Enter last name'
                  />
                </div>
                <div class='form-group'>
                  <label for='email'>Email address</label>
                  <input
                    type='email'
                    class='form-control'
                    id='email'
                    onChange={this.onChange}
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
                    onChange={this.onChange}
                    placeholder='Password'
                  />
                </div>
                <button
                  type='submit'
                  class='btn px-5 '
                  style={{ backgroundColor: '#583d72', color: 'white' }}
                >
                  Signup
                </button>
                <br />
                <p>
                  {' '}
                  Already have an account? <a href='/login'>Signin</a>
                </p>
                <div>{errors}</div>
              </form>
            </div>
            <div class='col'></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default userSignup;
