import React, { useState } from 'react';
import axios from 'axios';

export const LockScreen = ({ setLock, lock }) => {
  const initialState = {
    user_password: '',
  };

  const [passwordInput, setPasswordInput] = useState(initialState);
  const [message, setMessage] = useState('');

  const { user_password } = passwordInput;

  const checkPassword = async (e) => {
      e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/api/user', {
        user_password: user_password,
      });

      const userAuthed = response.data;

      if (userAuthed === true) {
        setLock(false);
        setMessage('');
      } else {
        setLock(true);
        setMessage('Incorrect Password');
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const onChange = (e) => {
    setPasswordInput({ [e.target.name]: e.target.value });
    console.log(e.target.value, 'e target');
    console.log(passwordInput, 'pw input');
  };

  return (
    <div className="mt-5 d-flex flex-column align-items-center">
      <form
        action="submit"
        className="d-flex align-items-center justify-content-center"
      >
        <input
          className="input-group-text"
          type="password"
          name="user_password"
          value={user_password}
          onChange={onChange}
        />
        <button
          className="ml-3 btn btn-success"
          onClick={(e) => checkPassword(e)}
        >
          Unlock
        </button>
      </form>
      {message && <p className="text-danger lead mt-3">{message}</p>}
    </div>
  );
};
