import React, { Component } from 'react';
import './SignIn.css';

class SignIn extends Component {
  render() {
    return (
      <div>
        <div className='signin-background'></div>
        <div className='form-div'>
          <form className='signin-form' action='action_page.php' method='post'>
            <div class='container'>
              <label className='username'>
                <p>Username</p>
              </label>
              <br />
              <div className='user-div'>
                <input
                  type='text'
                  placeholder='Enter Username'
                  className='username-input'
                  required
                />
              </div>
              <br />
              <label className='password'>
                <p>Password</p>
              </label>
              <br />
              <div className='pass-div'>
                <input
                  type='password'
                  placeholder='Enter Password'
                  className='password-input'
                  required
                />
              </div>
              <div className='login-div'>
                {' '}
                <button type='submit' className='login'>
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
