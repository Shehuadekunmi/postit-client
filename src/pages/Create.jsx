import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import { useGlobalContext } from "../../context";
import Loading from '../components/Loading'
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer'
import { toast } from 'react-hot-toast';


const Create = () => {
  const redirect = useNavigate()
  const { baseURL } = useGlobalContext();
  const [loading, setLoading] = useState('');
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const token = localStorage.getItem('token')
  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("tag", tag);
    formdata.append("description", description);
    formdata.append("image", image);
    

    const { data } = await axios.post(`${baseURL}/story`, formdata, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);

    if (data.success) {
      toast.success(' Create successful')
      redirect('/mystories')
    } else {
      toast.error('Error occur while creating story')
    }
    if(title === '' || tag === '' || description === '' || image === ''){
        toast.error('the fileds can not be empty ')
    }
  }
  return (
    <div>
      <Navbar t4={'Log Out'} />

      <form encType='multipart/form-data' className='text-md-center create' onSubmit={handleCreate} >
        <h1 className='fw-bold py-2'>Create Story</h1>
        <div>
          <label htmlFor="title"> Title</label> <br />
          <input  type="text" id='title' value={title}
            onChange={(e) => setTitle(e.target.value)} className='mb-2 text-center'  />
        </div>

        <div className='my-2 mb-md-'>
          <label htmlFor="tag" className='mb-md-2'>Tag</label> <br />
          <select className=' text-center' name="" id="tag" value={tag}
            onChange={(e) => setTag(e.target.value)} >
            <option value="">Select Tags</option>
            <option value="nature">Nature</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="sport">Sport</option>
            <option value="technology">Technology</option>
            <option value="others">Others</option>
          </select>
        </div>

        <div className='my-2 my-md-3'>
          <label htmlFor="image">Upload Image</label> <br />
          <input className=' text-center ps-2 mx-auto' type="file" accept='image/*'
            placeholder='select image' id='image'
            onChange={(e) => setImage(e.target.files[0])} />
        </div>

        <div className='mb-2'>
          <label htmlFor="description" className='mb-md-2'>Description</label> <br />
          <textarea className=' ps-2' name="" id="description" cols="30"
            value={description} rows="5" onChange={(e) => setDescription(e.target.value)} >
          </textarea>
        </div>
        <div className='mb-4'>
          <button className="btn btn-primary">{loading ? <Loading /> : 'Write Story'}</button>
        </div>
      </form>

      <Footer />


    </div>
  )
}

export default Create