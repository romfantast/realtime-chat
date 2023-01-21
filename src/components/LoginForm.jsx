import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export const LoginForm = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    const authObject = {
      'Project-ID': '3a983424-25de-4a9f-a1a0-0be3577f8220',
      'User-Name': userName,
      'User-Secret': password,
    };

    try {
      await axios.get('https://api.chatengine.io/chats', {
        headers: authObject,
      });

      localStorage.setItem('username', userName);
      localStorage.setItem('password', password);

      window.location.reload();
    } catch (error) {
      setError('Incorrect credentials, try again...');
      console.log(error);
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat app</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userName}
            onChange={e => setUserName(e.target.value)}
            className="input"
            placeholder="username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="input"
            placeholder="password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
          <h5 className="error">
            <b>If you don't have an account - </b>
            <br />
            <i>username - 'guest'</i>
            <br />
            <i>password - 'guest'</i>
          </h5>
        </form>
      </div>
    </div>
  );
};
