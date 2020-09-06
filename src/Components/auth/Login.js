import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formState;
  const handleFormState = (event) =>
    setFormState({ ...formState, [event.target.name]: event.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetch('http://localhost:3001/api/auth', {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (data.ok) {
        const jsonResponse = data.json();
        console.log(jsonResponse);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1 className='large text-primary'>Sign in</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Log in
      </p>
      <form className='form' action='create-profile.html' onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            onChange={handleFormState}
            value={email}
          />
          <small className='form-text'>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            minLength='6'
            onChange={handleFormState}
            value={password}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Login' />
      </form>
      <p className='my-1'>
        Dont have an account? <Link to='register'>Register</Link>
      </p>
    </>
  );
};

export default Login;
