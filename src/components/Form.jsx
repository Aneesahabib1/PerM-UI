import React, { useState, useEffect } from 'react';
import bgImg from '../assets/pm2.jpg';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Form() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [IsSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://647e18d4af984710854aee8c.mockapi.io/Permlogin');
        const { username, password } = response.data;
        setUsername(username);
        setPassword(password);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://647e18d4af984710854aee8c.mockapi.io/Permlogin', data);
      console.log(response.data);
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <div className='App'>
        <div className="register">
          <div className="col-2">
            <img src={bgImg} alt="" />
          </div>
          <div className="col-1">
            <h2>{IsSignup ? 'Signup' : 'Login'}</h2>
            <span></span>

            <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
              {IsSignup && (<input type="text" placeholder='FirstName' {...register("firstName")} />)}
              {IsSignup && (<input type="text" placeholder='LastName' {...register("lastName")} />)}
              <input type="text" placeholder='Email' {...register("username")} value={username} />
              <input type="password" label="Password" {...register("password")} placeholder='password' value={password} />
              <Button type="submit" className='btn'>
                {IsSignup ? 'Signup' : 'Login'}
              </Button>
              {IsSignup ? 'Already have an account?' : "Don't have an account?"}
              <button
                className='btn'
                backgroundColor="#fdfdff"
                color="#0a1f2e"
                fontSize="14px"
                fontWeight="bold"
                padding="10px 90px"
                borderRadius='15px'
                boxShadow='1px 2px 9px #aed7f4'
                onClick={() => setIsSignup(!IsSignup)}
              >
                {IsSignup ? 'Login now!' : 'Signup now!'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
