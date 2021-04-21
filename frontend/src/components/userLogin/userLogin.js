import React, { Component } from 'react';
import Navbar from '../Navbar';
import axios from 'axios';

class userLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signupFlag: false,
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return axios
      .post('http://localhost:3001/users/login', data, config)
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          const { data } = response;
          console.log(data);
          localStorage.setItem('token', data.token);
          localStorage.setItem('userID', data.id);
          localStorage.setItem('email', data.email);
          window.location = '/';
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
          <p style={{ color: 'red' }}>Invalid Credentials</p>
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
              <h1>Sign In</h1>
              <form onSubmit={this.onSubmit}>
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
                <button type='submit' class='btn btn-dark px-5 '>
                  Signin
                </button>
                <br />
                <p>
                  {' '}
                  Don't have an account? <a href='/signup'>Signup</a>
                </p>
                <br />
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

export default userLogin;
