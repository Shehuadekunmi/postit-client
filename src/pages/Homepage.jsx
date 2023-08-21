import React from 'react'
import Navbar from '../components/Navbar'
import life from '../assets/life.png'
import natu from '../assets/natu.png'
import tech from '../assets/tech.png'
import postit from '../assets/Postit 1.png'
import '../style/homepage.css'
import Footer from '../components/Footer'


const Homepage = () => {
  return (
    <div className=' container'>
      <Navbar t1={"Sign In"} t2={"Get started"} />

      <div className="stay-text ps-2 ps-md-5 pt-3">
        <h1 className='fw-bold'>Stay Curious.</h1>
        <p>Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur
          egestas massa velit aliquam. Molestim bibendum
          hnt ipsum orci, platea aliquam id ut. </p>
        <button className="btn btn-primary">Get Started</button>
      </div>

      <section className="one d-flex flex-wrap justify-content-center justify-content-lg-evenly gap-5 my-3 my-lg-5 ">
        <div className="life d-flex justify-content-between gap-2 mt-3 mx-2 gap-md-3">
          <div className="img"><img src={life} alt="" /></div>
          <div className="text">
            <button className='lifestyle btn btn-warning'>Lifestyle</button>
            <p>The 20 Biggest Fashion  Companies In Nigeria 2022</p>
          </div>
        </div>

        <div className="life d-flex justify-content-between gap-2 mt-3 mx-2 gap-md-3">
          <div className="img"><img src={natu} alt="" /></div>
          <div className="text">
            <button className='btn btn-success'>Nature</button>
            <p>The 20 Biggest Agro Companies In Nigeria 2022</p>
          </div>
        </div>

        <div className="life d-flex justify-content-between gap-2 mt-3 mx-2 gap-md-3 mb-3 me-lg-5">
          <div className="img"><img src={tech} alt="" /></div>
          <div className="text">
            <button className='btn btn-primary'>Technology</button>
            <p>The 20 Biggest Fintech  Companies In Nigeria 2022</p>
          </div>
        </div>
      </section>

      <section className="two text-center  py-4 ">
        <h2 className='fw-bold '>Try <img src={postit} alt="" /></h2>
        <p>Do you want to write or discover stories from writers on any topic?</p>
        <div className='ms-1'>
          <input type="email" placeholder='Enter Email address' />
          <button className='bg-primary  text-white'>Get Started</button>
        </div>
      </section>

      <Footer/>
    </div>
  )
}

export default Homepage