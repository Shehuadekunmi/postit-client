import React from "react";
import { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../../context";
import { useNavigate } from "react-router-dom";
import '../style/register.css'
import Loading from "../components/Loading";

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
    <div>
      <form onSubmit={handleLogin} className="text-center my-5">
        <div  className='my-4'>
          <label htmlFor="email">Email</label> <br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div  className='my-4'>
          <label htmlFor="password">Password</label> <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">{loading ? <Loading/> : "Continue"}</button>
      </form>
    </div>
  );
};

export default Login;
