
import React, { useState } from 'react'
import { useGlobalContext } from '../../Context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import postit from '../assets/Postit 1.png'
import '../style/register.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import {RxCross2} from 'react-icons/rx'


const Register = () => {
  const {baseURL} = useGlobalContext();
  const redirect = useNavigate()

const [loading, setLoading] = useState(false);
const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) =>{
    e.preventDefault();
    setLoading(true)
    console.log( username, email, password);
    const {data} = await axios.post(`${baseURL}/register`, {
      username,
      email,
      password
    });
    console.log(data);
    if(data.success) {
      
      toast.success(' Register successful')
      redirect('/login')
    } else{
      console.log(data);
      toast.error('Error occur while registering, Try Again! ');
    }
  }


  return (
    <div className='bg '>
     
     <div className='hei pt-4 pt-md-5'>
      <form className='text-center log  form' onSubmit={handleRegister} >
     <Link to='/'> <RxCross2 className='cross'/> </Link>
      <h1 className='fw-bold pt-'>Join <Link to='/'> <img src={postit} alt="" /></Link> </h1>
      <p className=' px-2'>Enter your email address to create an account on Postit.</p>
        <div className='my-4'>
          <label htmlFor="username">Username</label> <br />
          <input type="text" id='username' 
          value={username}  onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className='my-4'>
          <label htmlFor="email">Your Email Address</label> <br />
          <input type="email" id='email' 
          value={email} onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='my-4'>
          <label htmlFor="password">Password</label> <br />
          <input type="password" id='password' 
          value={password}  onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary mb-3'>{loading ? <Loading/> : "Continue"}</button>
        <p className='pb-2'>Already have an account? <Link to={'/login'}>Sign In</Link></p>
      </form>
     
      </div>
    </div>
  )
}

export default Register