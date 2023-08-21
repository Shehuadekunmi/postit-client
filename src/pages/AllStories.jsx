import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading';
import axios from 'axios';
import { useGlobalContext } from '../../Context';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import post from '../assets/Postit 1.png'
import peop from '../assets/peop.png'

const AllStories = () => {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);
  const token = localStorage.getItem("token");
  const { baseURL } = useGlobalContext();
  const getStories = async () => {
    setLoading(true);
    const {
      data: { stories },
    } = await axios(`${baseURL}/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setLoading(false)
    setStories(stories)
  };

  useEffect(() => {
    getStories()
  }, [])

  return (
    <div>
      <Navbar />

      <section className=" wel d-md-flex  pt-md-5 ps-2 justify-content-evenly ps-md-5">
        <div className='ps-md-5'>
          <div><h1 className='fw-bold pb-2'>You've got a story,</h1></div>
          <img src={post} alt="" className='pb-3' />
          <p>Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur
            egestas massa velit aliquam. Molestim bibendum
            hnt ipsum orci, platea aliquam id ut. </p>

        </div>
        <div className='img'><img src={peop} alt="" /></div>
      </section>
      <div className="d-flex-flex-wrap">
        {
          loading ? <Loading /> :
            stories.map((s) => {
              const {
                _id,
                image,
                description,
                title,
                createdAt,
                tag,
                createdBy: { username },
              } = s;
              return (
                <div key={_id} className='border border-danger'>
                  <img src={image} alt="{image}" width={'250px'} height={'250px'} />
                  <p>{title}</p>
                  <p>{tag}</p>
                  <p>{description}</p>
                  <p>By {username}</p>
                  <p>{new Date(createdAt).toDateString()}</p>
                  <Link to={`/single/${_id}`}>Read More</Link>
                </div>
              )
            })
        }
      </div>
      <Footer />
    </div>
  )
}

export default AllStories