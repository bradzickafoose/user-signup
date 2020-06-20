import React from 'react';
import useSetState from './useSetState';

import './UserSignup.css';

const initialState = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  newsletterInterest: false
};

const UserSignup = () => {
  const [state, setState] = useSetState(initialState)

  const handleSubmit = event => {
    event.preventDefault();
    clear();
  };

  const handleChange = event => {
    setState({
      [event.target.name]: event.target.value
    });
  };

  const clear = () => {
    setState(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        type="text"
        value={state.username}
        required
        onChange={handleChange}
        />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={state.email}
        required
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        value={state.password}
        required
        onChange={handleChange}
      />
      <label htmlFor="passwordConfirmation">Confirm Password</label>
      <input
        id="passwordConfirmation"
        name="passwordConfirmation"
        type="password"
        value={state.passwordConfirmation}
        required
        onChange={handleChange}
      />
      <label htmlFor="newsletterInterest" className="UserSignup__checkbox">
        <input
          id="newsletterInterest"
          name="newsletterInterest"
          type="checkbox"
          checked={state.newsletterInterest}
          onChange={event =>
            setState({ newsletterInterest: event.target.checked })
          }
        />
        Do you want to subscribe to our newsletter?
      </label>
      <input type="Submit" />
    </form>
  )
}

export default UserSignup;