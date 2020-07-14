import React from 'react';
import { authenticationUrl } from '../unsplash/unsplash.js';

class Auth extends React.Component {
  goAuth() {
    location.assign(authenticationUrl);
  }

  render() {   
    return (
      <div className="main-container">
        <button className="btn btn-load" type="button" onClick={this.goAuth}>Авторизоваться на Unsplash.com</button>
      </div>
    )          
  }
}

export default Auth;