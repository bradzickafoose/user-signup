import React, { useState } from 'react';

import './UserSignup.css';

const UserSignup = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [newsletterInterest, setNewsletterInterest] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    clear();
  };

  const clear = () => {
    setUserName('');
    setEmail('');
    setPassword('');
    setPasswordConfirmation('');
    setNewsletterInterest(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        type="text"
        value={username}
        required
        onChange={event => {
          setUserName(event.target.value);
        }}
        />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={email}
        required
        onChange={event => {
          setEmail(event.target.value);
        }}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        value={password}
        required
        onChange={event => {
          setPassword(event.target.value);
        }}
      />
      <label htmlFor="passwordConfirmation">Confirm Password</label>
      <input
        id="passwordConfirmation"
        name="passwordConfirmation"
        type="password"
        value={passwordConfirmation}
        required
        onChange={event => {
          setPasswordConfirmation(event.target.value);
        }}
      />
      <label htmlFor="investmentInterest" className="UserSignup__checkbox">
        <input
          id="newsletterInterest"
          name="newsletterInterest"
          type="checkbox"
          checked={newsletterInterest}
          onChange={event => setNewsletterInterest(event.target.checked)}
        />
        Do you want to subscribe to our newsletter?
      </label>
      <input type="Submit" />
    </form>
  )
}

export default UserSignup;