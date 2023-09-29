import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading';
import axios from 'axios';
import { useGlobalContext } from '../../Context';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import post from '../assets/Postit 1.png'
import peop from '../assets/peop.png'
import '../style/allStories.css'
import {AiOutlineArrowRight} from 'react-icons/ai'

const AllStories = () => {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);
  const [readmore, setReadmore] = useState(true)
  const redirect = useNavigate()
  const token = localStorage.getItem("token");
  const { baseURL } = useGlobalContext();
  const getAllStories = async () => {
    setLoading(true);
    const {data:{stories}} = await axios(`${baseURL}/story`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setLoading(false)
    setStories(stories)
    console.log(stories);
  };

  useEffect(() => {
    getAllStories()
  }, [])

  const toggleRead = () =>{
      setReadmore(!readmore)
      redirect(`/single/${_id}`)
      
  }

  return (
    <div className='container'>
      <Navbar t4={'Log Out'}/>

      <section className="  wel d-md-flex pt-4 pt-md-5 ps-2 justify-content-evenly ps-md-5">
        <div className='ps-md-5'>
          <div ><h1 className='fw-bold pb-2'>You've got a story,</h1></div>
          <img src={post} alt="" className='pb-3' />
          <p>Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur
            egestas massa velit aliquam. Molestim bibendum
            hnt ipsum orci, platea aliquam id ut. </p>

        </div>
        <div className='img'><img src={peop} alt="" /></div>
      </section>
      <div className="d-flex flex-wrap text-center">
        { loading ? <Loading /> :
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
                <div key={_id}  className=' mt-3 px-3 mb-4 all'>
                  <img src={image} alt="{image}" width={'250px'} height={'250px'} className='border border-danger' />
                  <p className='fw-bold mt-2'>{title}</p>
                  <p  className={ `${
        tag == 'lifestyle' ? 'bg-warning' : tag == 'sport' ? 'bg-danger' : tag == 'nature' ? 'bg-success' 
        : tag == 'technology' ? 'bg-primary' : 'bg-dark'
      } Tags` }> {tag}</p>
                  <p>By {username}</p>
                  <p className=' pd mx-auto'> {readmore? `${description.substring(0, 5)}...` : readmore}</p>
                  
                  <p>{new Date(createdAt).toDateString()}</p>
                  <Link to={`/single/${_id}`} className='fs-5'> <AiOutlineArrowRight/>Read More</Link>
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