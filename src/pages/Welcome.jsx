import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useGlobalContext } from '../../Context';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import peop from '../assets/peop.png'

const Welcome = () => {
  const { baseURL } = useGlobalContext();
  const [user, setUser] = useState()
  const token = localStorage.getItem('token');
  const gettUser = async () => {
    const { data } = await axios(`${baseURL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    setUser(data.username);
  }

  useEffect(() => {
    gettUser()
  }, [])
  return (
    <div className='container'>
      <Navbar t3={"Logout"} />
      <section  className=" wel d-md-flex  pt-5  pt-md-5 ps-3 justify-content-evenly ps-md-5">
      <div className='ps-md-5'>
        <h1 className='fw-bold'>Welcome {user},</h1>
        <p>Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur
egestas massa velit aliquam. Molestim bibendum 
hnt ipsum orci, platea aliquam id ut. </p>

        <div className='d-flex gap-3 '>
          <Link to="/mystories">
            <button className='btn btn-primary'>MY STORIES</button>
          </Link>
          <Link to="/allstories">
            <button className='btn btn-white text-primary fw-bold border-primary'>GO TO FEED</button>
          </Link>
        </div>
      </div>
      <div className='img'><img src={peop} alt="" /></div>
      </section>
      <Footer />
    </div>
  )
}

export default Welcome