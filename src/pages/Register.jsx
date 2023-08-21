import React, { useState } from 'react';
import { useGlobalContext } from '../../Context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import postit from '../assets/Postit 1.png';
import '../style/register.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../components/Loading';

const Register = () => {
  const { baseURL } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const redirect = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    console.log(data);

    
  };

  return (
    <div>
      <form className='text-center my-5' onSubmit={handleSubmit}>
        <h1 className='fw-bold py-3 pt-'>Join <img src={postit} alt="" /></h1>
        <p className='py-2 px-2'>Enter your email address to create an account on Postit.</p>
        <div className='my-4'>
          <label htmlFor="username">Username</label> <br />
          <input
            type="text"
            id='username'
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className='my-4'>
          <label htmlFor="email">Your Email Address</label> <br />
          <input
            type="email"
            id='email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='my-4'>
          <label htmlFor="password">Password</label> <br />
          <input
            type="password"
            id='password'
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          {loading ? <Loading /> : "Continue"}
        </button>
      </form>
    </div>
  );
};

export default Register;



































// import React, { useState } from 'react'
//  import { useGlobalContext } from '../../Context';
//  import axios from 'axios';
//  import { useNavigate } from 'react-router-dom';
//  import postit from '../assets/Postit 1.png'
//  import '../style/register.css'
//  import { ToastContainer, toast } from 'react-toastify';
//  import 'react-toastify/dist/ReactToastify.css';
//  import Loading from '../components/Loading';

// const Register = () => {
//   const {baseURL} = useGlobalContext();

//   const [loading, setLoading] = useState(false);

//   const redirect = useNavigate()


//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });


// const handleChange = (e) => {
//   const {name, value } = e.target;
//   setFormData((prevData) => ({
//     ...prevData,
//     [name]: value,
//   }))
// };

// const handleSubmit =  async (e) => {
//   e.preventDefault();

//   try {
//     const res = await axios.post(`${baseURL}/register`, {
//              username,
//             email,
//             password
//           });
//           console.log(res.data);
//           if(res.data.success) {
//                    toast.success(' Register successful')
//                   redirect('/login')
//               //    } else{
//               //     console.log(res.data);
//               //     toast.error('Error occur while registering, Try Again! ');
//               //  }
//               }

//   } catch (error) {
//     console.log(error);
//     toast.error('Error occur while registering, Try Again! ')
    
//   }

// }




//   return (
//     <div>

// <form className='text-center my-5' onSubmit={handleSubmit} >
//        <h1 className='fw-bold py-3 pt-'>Join <img src={postit} alt="" /></h1>
//        <p className='py-2 px-2'>Enter your email address to create an account on Postit.</p>
//          <div className='my-4'>
//           <label htmlFor="username">Username</label> <br />
//            <input type="text" id='username' 
//            value={formData.username}  onChange={handleChange}
//            />
//          </div>
//          <div className='my-4'>
//            <label htmlFor="email">Your Email Address</label> <br />
//           <input type="email" id='email' 
//            value={formData.email}  onChange={handleChange}
//            />
//         </div>
//          <div className='my-4'>
//            <label htmlFor="password">Password</label> <br />
//            <input type="password" id='password' 
//            value={formData.password}  onChange={handleChange}
//            />
//          </div>
//          <button type='submit' className='btn btn-primary'>{loading ? <Loading/> : "Continue"}</button>
//        </form>
//     </div>
//   )
// }

// export default Register



























// import React, { useState } from 'react'
// import { useGlobalContext } from '../../Context';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import postit from '../assets/Postit 1.png'
// import '../style/register.css'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Loading from '../components/Loading';


// const Register = () => {
//   const {baseURL} = useGlobalContext();
//   const redirect = useNavigate()

// const [loading, setLoading] = useState(false);
// const [username, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleRegister = async (e) =>{
//     e.preventDefault();
//     setLoading(true)
//     console.log(email, username, password);
//     const {data} = axios.post(`${baseURL}/register`, {
//       username,
//       email,
//       password
//     });
//     // console.log(data);
//     if(data.success) {
//       toast.success(' Register successful')
//       redirect('/login')
//     } else{
//       console.log(data);
//       toast.error('Error occur while registering, Try Again! ');
//     }
//   }


//   return (
//     <div>
     
//       <form className='text-center my-5' onSubmit={handleRegister} >
//       <h1 className='fw-bold py-3 pt-'>Join <img src={postit} alt="" /></h1>
//       <p className='py-2 px-2'>Enter your email address to create an account on Postit.</p>
//         <div className='my-4'>
//           <label htmlFor="username">Username</label> <br />
//           <input type="text" id='username' 
//           value={username}  onChange={(e) => setUserName(e.target.value)}
//           />
//         </div>
//         <div className='my-4'>
//           <label htmlFor="email">Your Email Address</label> <br />
//           <input type="email" id='email' 
//           value={email} onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className='my-4'>
//           <label htmlFor="password">Password</label> <br />
//           <input type="password" id='password' 
//           value={password}  onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type='submit' className='btn btn-primary'>{loading ? <Loading/> : "Continue"}</button>
//       </form>
//     </div>
//   )
// }

// export default Register