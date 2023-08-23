import { useState, useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "../../context";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar'
import toast from "react-hot-toast";
const Edit = () => {
  const { storyId } = useParams();
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  const token = localStorage.getItem("token");
  const { baseURL } = useGlobalContext();
  const redirect = useNavigate();
  const getStory = async () => {
    const {
      data: { story },
    } = await axios(`${baseURL}/all/${storyId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setLoading(false);
    setTag(story.tag);
    setDescription(story.description);
    setTitle(story.title);
  };
  useEffect(() => {
    getStory();
  }, [storyId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { data } = await axios.patch(
      `${baseURL}/story/${storyId}`,
      { tag, title, description },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (data.success) {
      redirect("/mystories");
      toast.success('Edit successful')
    } else{
      toast.error('Error occur while editing story, please try again!')
    }
  };
  return (
    <div>
      <Navbar t4={'Log Out'}/>
      <form onSubmit={handleUpdate} className="py-3 text-center edit">
        <div>
          <label htmlFor="title">Title</label> <br />
          <input className="mb-2 ps-2"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} required
          />
        </div>
        <div>
          <label htmlFor="tag">Tag</label> <br />
          <select className="mb-2 ps-2"
            name=""
            id="tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)} required
          >
            <option value="">Select Tags</option>
            <option value="nature">Nature</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="sport">Sport</option>
            <option value="technology">Technology</option>
            <option value="others">Other Tag</option>
          </select>
        </div>
        <div>
          <label htmlFor="description"></label>
          <textarea className="ps-2 py-2"
            name=""
            id="description"
            cols="30"
            rows="10"
            value={description}
            onChange={(e) => setDescription(e.target.value)} required
          ></textarea>
        </div>
        <button className="btn btn-primary">Update Story</button>
      </form>
    </div>
  );
};

export default Edit;
