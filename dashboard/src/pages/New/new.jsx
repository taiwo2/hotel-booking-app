import "./new.scss";
import Sidebar from "../../components/SideBar/sidebar"
import Navbar from "../../components/NavBar/navBar"
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios"

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [info,setInfo] = useState({})

  const handleChange = (e) => {
    setInfo((prev) => ({...prev,[e.target.id]: e.target.value}))
  }

  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file)
    data.append("upload_preset","upload");

    try {
      const uploadres = await axios.post("https://api.cloudinary.com/v1_1/tonaz/image/upload",data);
        const {url}= uploadres.data

        const newInfo = {...info, img: url}

        await axios.post("/users/register", newInfo)
    } catch (error) {
      console.log(error)
    }
    
  }
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input 
                  type={input.type} 
                  id={input.id}
                  onChange={handleChange}
                  placeholder={input.placeholder} />
                </div>
              ))}
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;