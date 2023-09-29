import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar'
import{RiWhatsappFill} from 'react-icons/ri'
import {AiFillFacebook, AiOutlineTwitter} from 'react-icons/ai'
import Footer from "../components/Footer";

const Singlestories = () => {
  const { storyId } = useParams();
  const [loading, setLoading] = useState(true);
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [username, setUsername] = useState('')
  const [ createdBy, setCreatedBy] = useState('')

  const token = localStorage.getItem("token");
  const { baseURL } = useGlobalContext();
  const getStory = async () => {
    const {
      data: { story },
    } = await axios(`${baseURL}/story/${storyId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setLoading(false);
    console.log(story);
    setTag(story.tag);
    setDescription(story.description);
    setImage(story.image);
    setTitle(story.title);
    setUsername(story.username)
    setCreatedBy(story.createdBy)
  };
  useEffect(() => {
    getStory();
  }, [storyId]);
  return (
    <div className='container'>
      <Navbar t4={'Log Out'}/>
    <div className="mx-2 my-3">
      <p  className={  ` ${
        tag == 'lifestyle' ? 'bg-warning' : tag == 'sport' ? 'bg-danger' : tag == 'nature' ? 'bg-success' 
        : tag == 'technology' ? 'bg-primary' : 'bg-dark'
      } Tags` }> {tag}</p>
      <p className="fw-bold fs-4">{title} </p>
      <p className=" fs-4">By {username}</p>
      <hr />
      <img src={image} alt="" className="mt-4" />
      <p className="fs-2">{description} </p>
      {/* <p>by{createdBy}</p> */}
    </div>
   <p className="fs-1 mx-2"> Share post; <RiWhatsappFill className="fs-1 text-success "/> 
    <AiFillFacebook className="fs-1 mx-3"/> 
    <AiOutlineTwitter className="fs-1 text-primary "/>
    </p>

    <Footer/>
    </div>
  );
};

export default Singlestories;
