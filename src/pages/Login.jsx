import React from "react";
import { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../../context";
import { useNavigate } from "react-router-dom";
import '../style/register.css'
import Loading from "../components/Loading";
import {RxCross2} from 'react-icons/rx'
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { baseURL } = useGlobalContext();
  const redirect = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data } = await axios.post(`${baseURL}/login`, {
      email,
      password,
    });
    if (data.success) {
      // store token inside localstorage
      localStorage.setItem("token", data.token);
      // redirect welcome
      redirect("/welcome");
    } else {
    }
  };
  return (
    <div className="bg container">
      <div className='hei py-5'>
      <form onSubmit={handleLogin} className="text-center   py-5 log form">
      <Link to='/'> <RxCross2 className='cross'/> </Link>
        <div  className='my-4'>
          <label htmlFor="email">Email</label> <br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} required
          />
        </div>
        <div  className='my-4'>
          <label htmlFor="password">Password</label> <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} required
          />
        </div>
        <button type="submit" className="btn btn-primary">{loading ? <Loading/> : "Continue"}</button>
        <p className="pt-3">No account? <Link to={'/register'}>Sign Up</Link> </p>
      </form>
      </div>
    </div>
  );
};

export default Login;
