import React from 'react'
import Navbar from '../components/Navbar'
import life from '../assets/life.png'
import natu from '../assets/natu.png'
import tech from '../assets/tech.png'
import postit from '../assets/Postit 1.png'
import '../style/homepage.css'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'


const Homepage = () => {
  return (
    <div className=' container'>
      <Navbar t1={"Sign In"} t2={"Get started"} />

      <div className="stay-text ps-2 ps-md-5 pt-3">
        <h1 className='fw-bold'>Stay Curious.</h1>
        <p>Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur
          egestas massa velit aliquam. Molestim bibendum
          hnt ipsum orci, platea aliquam id ut. </p>
          <Link to="/register">
                    <button className=" button">Get started</button>
                  </Link>
      </div>

      <section className="one d-flex flex-wrap justify-content-center gap- my-3 my-lg-5  ">
        <div className="life d-flex justify-content-between gap-2 mt-5 mx-2 gap-md-3">
          <div className="img"><img src={life} alt="" /></div>
          <div className="text">
            <button className='lifestyle btn btn-warning'>Lifestyle</button>
            <p>The 20 Biggest Fashion  Companies In Nigeria 2022</p>
          </div>
        </div>

        <div className="life d-flex justify-content-between gap-2 mt-5 mx-2 gap-md-3">
          <div className="img"><img src={natu} alt="" /></div>
          <div className="text">
            <button className='btn btn-success'>Nature</button>
            <p>The 20 Biggest Agro Companies In Nigeria 2022</p>
          </div>
        </div>

        <div className="life d-flex justify-content-between gap-2 mt-5 mx-2 gap-md-3 mb-2 me-lg-">
          <div className="img"><img src={tech} alt="" /></div>
          <div className="text">
            <button className='btn btn-primary'>Technology</button>
            <p>The 20 Biggest Fintech  Companies In Nigeria 2022</p>
          </div>
        </div>
      </section>

      <section className="two text-center  py-4 ">
        <h2 className='fw-bold '>Try <img src={postit} alt="" /></h2>
        <p className='px-2'>Do you want to write or discover stories from writers on any topic?</p>
        <div className='ms-1'>
          <input type="email" placeholder='Enter Email address' />
          <button className='bg-primary  text-white'>
             <Link to='/register' className='bg-primary  text-white text-decoration-none'>Get Started</Link></button>
          
        </div>
      </section>

      <Footer/>
    </div>
  )
}

export default Homepage