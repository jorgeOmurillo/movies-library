import React from 'react';
import { connect } from 'react-redux';
import { startCreateLoginEmail } from '../actions/auth';
import SignUpForm from './SignUpForm';

export const SignUpPage = ({ startCreateLoginEmail }) => (
  <div className="box-layout">
      <SignUpForm onSubmit={startCreateLoginEmail} />
  </div>
);

const mapDispatchToProps = dispatch => ({
  startCreateLoginEmail: (email, password) => dispatch(startCreateLoginEmail(email, password))
});

export default connect(
  undefined,
  mapDispatchToProps
)(SignUpPage);
