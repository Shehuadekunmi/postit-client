import React from 'react'
import postit from '../assets/Postit 1.png'
import {MdArrowForward} from 'react-icons/md'
import '../style/footer.css'
import {BsTwitter} from 'react-icons/bs'
import {BiLogoFacebook, BiLogoLinkedin} from 'react-icons/bi'

const Footer = () => {
  return (
    <div className='footer pt-4 text-white px-2'>
        <section className="d-flex flex-wrap justify-content-center gap-lg-">
            <div className="pp">
                {/* <p>About <img src={postit} alt="" className='text-white' /></p> */}
                <p > About  <span className='fw-bold px-2 fs-1' >Post</span> <span className='fw-bold text-primary fs-1'>it</span></p>
                <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt id sem vel quis in turpis sit eget pellentesque. Nunc etiicies in rhoncus, rhoncus in arcu. Tincidunt neque fusce vitaenisi aliquet. que maeae tortoere necsem commodo ac.</p>
            </div >
            <div className="menu">
                <p className='ms-2'>Quick Menu</p>
                <ul>
                    <li>Home</li>
                    <li>Stories</li>
                    <li>Trending Stories</li>
                    <li>Popular Stories</li>
                </ul>
            </div>

            <div className="sign mt-5 mx-md-4">
            <ul>
                    <li>Sign Up</li>
                    <li>Log In</li>
                    <li>Contact Us</li>
            </ul>
            </div>

            <div className="sub ps-3">
                <h3 className='mb-4'>Subscribe to our newsletter</h3>
                <input type="email" placeholder='Email address' /> <button>Subscribe <MdArrowForward/></button>
            </div>
        </section>
        <hr />
        <div className="socia d-flex gap-3 me-2 justify-content-end">
            <p>Terms and Policy</p>
            <BsTwitter/>
            <BiLogoLinkedin/>
            <BiLogoFacebook/>
        </div>
    </div>
  )
}

export default Footer