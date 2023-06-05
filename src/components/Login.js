/*import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <h2>Login</h2>
      <button onClick={loginWithRedirect}>Log In</button>
    </div>
  );
};

export default Login;
/*
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import bgImg from '../assets/pm2.jpg';

const Login = () => {
    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');

    const usenavigate=useNavigate();

    useEffect(()=>{
sessionStorage.clear();
    },[]);

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            ///implentation
            // console.log('proceed');
            fetch("http://localhost:8000/user/" + username).then((res) => {
                return res.json();
            }).then((resp) => {
                //console.log(resp)
                if (Object.keys(resp).length === 0) {
                    toast.error('Please Enter valid username');
                } else {
                    if (resp.password === password) {
                        toast.success('Success');
                        sessionStorage.setItem('username',username);
                        sessionStorage.setItem('userrole',resp.role);
                        usenavigate('/')
                    }else{
                        toast.error('Please Enter valid credentials');
                    }
                }
            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
    }

    const ProceedLoginusingAPI = (e) => {
        e.preventDefault();
        if (validate()) {
            ///implentation
            // console.log('proceed');
            let inputobj={"username": username,
            "password": password};
            fetch("https://localhost:44308/User/Authenticate",{
                method:'POST',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(inputobj)
            }).then((res) => {
                return res.json();
            }).then((resp) => {
                console.log(resp)
                if (Object.keys(resp).length === 0) {
                    toast.error('Login failed, invalid credentials');
                }else{
                     toast.success('Success');
                     sessionStorage.setItem('username',username);
                     sessionStorage.setItem('jwttoken',resp.jwtToken);
                   usenavigate('/')
                }
                // if (Object.keys(resp).length === 0) {
                //     toast.error('Please Enter valid username');
                // } else {
                //     if (resp.password === password) {
                //         toast.success('Success');
                //         sessionStorage.setItem('username',username);
                //         usenavigate('/')
                //     }else{
                //         toast.error('Please Enter valid credentials');
                //     }
                // }
            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
    }
    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Please Enter Username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }
    return (
        <section className="login-container">
        <div className="register">
         <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
            <div className="col-1 flex-center">              
                <form id='form' className='flex flex-col' onSubmit={ProceedLogin}>           
                <input value={username} onChange={e => usernameupdate(e.target.value)} placeholder="User Name"></input>
    {/*  <input value={id} onChange={e => idchange(e.target.value)} ></input>*//*}
    <input type="password" value={password} onChange={e => passwordupdate(e.target.value)} ></input>
              <button type="submit" className="btn btn-primary">Login</button> |
     <Link className="btn btn-success" to={'/register'}>New User</Link>
                </form></div>
        </div></section> );
}export default Login;*/
import React,{useState} from 'react';
import bgImg from '../assets/pm2.jpg';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
        const [IsSignup, setIsSignup]= useState(false);
        const navigate = useNavigate();

        const onSubmit = (data) => {
            if (IsSignup) {
              // Perform signup logic here
            } else {
              // Perform login logic here
              if (!data.email || !data.password) {
                console.log("Please fill in all the fields"); // Display an error message or handle the incomplete form case
              } else {
                console.log(data);
                navigate('/dashboard');}}
    // console.log(watch('username')); 
  return (
    <section>
    <div className='App'>
        <div className="register">
            <div className="col-2">
                <img src={bgImg} alt="" /> </div>
            <div className="col-1">
                <h2> Login</h2>
                <span></span>
                <form id='form'  className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder='Email' required {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address"
                }
              })} />{errors.email && <span>{errors.email.message}</span>}
<input type="password" label="Password" {...register("password", { required: "Password is required" })} placeholder='password' />
              {errors.password && <span>{errors.password.message}</span>}                    <button className='btn' type="submit">{IsSignup ? "Signup" : "Login"}</button>
                Don't have an account?
<button className='btn' >Signup now!</button>
                </form> </div>
        </div></div>
    </section>
  )
            }}