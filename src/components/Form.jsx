import React,{useState} from 'react';
import bgImg from '../assets/pm2.jpg';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Form() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
        const [IsSignup, setIsSignup]= useState(false);
        console.log(IsSignup);
    // console.log(watch('username'));
    const buttonLink = IsSignup ? "/dashboard" : "/dashboard";
  return (
    <section>
    <div className='App'>
        <div className="register">
       
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
            <div className="col-1">
                <h2>
            {IsSignup ?"Signup":"Login"}</h2>
                <span></span>

                <form id='form'  className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                {IsSignup &&(  <input type="text"  placeholder='FirstName' />)}
                {IsSignup &&(   <input type="text" placeholder='LastName' />)}
                    <input type="text" placeholder='Email' />
                    <input type="password" label="Password" {...register("password")} placeholder='password' />
                    <Link to={buttonLink} className='btn'>{IsSignup ? "Signup" : "Login"}</Link>
              {IsSignup ? "Already have an account?" : "Don't have an account?"}
              <button className='btn' backgroundColor="#fdfdff"
              color= "#0a1f2e"
              fontSize= "14px"
              fontWeight= "bold"
              padding= "10px 90px" borderRadius='15px' boxShadow='1px 2px 9px #aed7f4'
              onClick={() => setIsSignup(!IsSignup)}>
                {IsSignup ? "Login now!" : "Signup now!"}
              </button>
                </form>

            </div>
        </div></div>
    </section>
  )
}
