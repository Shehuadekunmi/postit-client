import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useGlobalContext } from '../../Context';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import nav from '../assets/nav.png'
import Footer from '../components/Footer'

const mystories = () => {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState([])
  const { baseURL } = useGlobalContext()
  const token = localStorage.getItem('token');
  const getStories = async () => {
    setLoading(true);
    const { data } = await axios(`${baseURL}/story`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    setLoading(false)
    setStories(data.stories)
    console.log(data);
  };

  useEffect(() => {
    getStories()
  }, []);

  const handleDelete = async (id) => {
    const { data } = await axios.delete(`${baseURL}/story/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
    });
    if (data.success) {
      window.location.reload();
    };
  };
  return (
    <div>
      <Navbar t3={<img src={nav} alt="" />} />
      <div className='d-flex justify-content-between text-center px-2 px-md-5 my-5'>
        <h1>My stories</h1>
        <button className='btn btn-dark col-lg-2'>
          <Link to="/create" className='text-white text-decoration-none fs-lg-3'>Write Story</Link>
        </button>
      </div>

      <div className="all d-flex gap-2 ps-md-5  ps-2">
        <h1>All</h1>
        <h1 className='opacity-50'>Drafts</h1>
        <h1 className='opacity-50'>Published</h1>
      </div>

      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className='mx-1  px-2'>
            {stories.map((s) => {
              const {
                _id, description, title } = s;
              return (
                <div key={_id} className="border border-success d-md-flex justify-content-between my-2 px-3">
                 <div>
                 <p className='fw-bold pt-2'>{title} </p>
                  <p>{description} </p>
                  </div>  
                  <div className=" mb-2 my-md-5"> <Link to={`/edit/${_id}`}>
                    <button className='btn btn-primary'>Edit Story</button>
                  </Link>
                    <button className='btn btn-white border-primary ms-2' onClick={() => handleDelete(_id)}>Delete</button> </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default mystories