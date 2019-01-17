import React from 'react';
import { startCreateLoginEmail, startLoginWithEmail } from '../actions/auth';

export default class AuthEmailForm extends React.Component {
  state = {
      email: '',
      password: '',
      error: ''
    };

  onEmailChange = e => {
    let email = e.target.value;
    this.setState(() => ({ email }));
  };

  onPasswordChange = e => {
    let password = e.target.value;
    this.setState(() => ({ password }));
  };

  onSubmit = e => {
    e.preventDefault();

    let email = this.state.email;
    let password = this.state.password;

    if (!email || !password) {
      this.setState(() => ({
        error: 'Please provide an email and password.'
      }));
      return 'Please provide an email address and password.';
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit(email, password);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            autoFocus
            value={this.state.email}
            onChange={this.onEmailChange}
          />
          <input
            type="password"
            placeholder="Password"
            autoComplete="none"
            value={this.state.password}
            onChange={this.onPasswordChange}
          />
          <div>
            <button className="button">Login</button>
          </div>
        </form>
      </div>
    );
  }
}
