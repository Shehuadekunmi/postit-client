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
  const {baseURL} = useGlobalContext()
  const token =  localStorage.getItem('token');
  const getStories = async () =>{
    setLoading(true);
    const {data: {stories}} = await axios(`${baseURL}/story`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    setLoading(false)
    setStories(stories)
    console.log(stories);
  };

  useEffect(() =>{
    getStories()
  }, []);

  const handleDelete = async (id) =>{
    const {data} = await axios.delete(`${baseURL}/story/${id}`, {
      headers :{
        Authorization: `Bearer ${token}`
      },
    });
    if(data.success){
      window.location.reload();
    };
  };
  return (
    <div>
      <Navbar t3={<img src={nav} alt="" />}/>
      <div className='d-flex justify-content-between mx-5 px-5 my-5'>
        <h1>My stories</h1>
        <button className='btn btn-dark col-lg-2'>
          <Link to="/create" className='text-white text-decoration-none fs-lg-3'>Write Story</Link>
        </button>
      </div>

      <div className="all d-flex gap-5 ms-5 ps-5">
        <h1>All</h1>
        <h1 className='opacity-50'>Drafts</h1>
        <h1 className='opacity-50'>Published</h1>
      </div>

      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            {stories.map((s) => {
              const {
                _id, description, title, } = s;
              return (
                <div key={_id} className="border border-danger">
                  <p>{title} </p>

                  <p>{description} </p>
                  <Link to={`/edit/${_id}`}>
                    <button>Edit Story</button>
                  </Link>
                  <button onClick={() => handleDelete(_id)}>Delete</button>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Footer/>
    </div>
  )
}

export default mystories