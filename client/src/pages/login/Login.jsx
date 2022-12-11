import axios from 'axios'
import React, { useContext } from 'react'
import { useState } from 'react'
import "./login.css"
import {useNavigate} from "react-router-dom"
import { AuthContext } from '../../components/context/AuthContext'
const Login = () => {
  const [credential, setCredential] = useState({
    username: null,
    password: null
  })

    const navigate = useNavigate()
  const {dispatch, user,loading,error} = useContext(AuthContext);

  const handleChange = (e) => {
    setCredential((prev) => ({...prev,[e.target.name]: e.target.value}))
  }
// console.log((error))
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type: "LOGIN_START"})

    try {
      const res = await axios.post("/users/login", credential);
      dispatch({type: "LOGIN_SUCCESS", payload: res.data})
      navigate("/")
    } catch (err) {
      console.log(dispatch({type: "LOGIN_FAILURE", payload: err.response.data}))
    }
  }
  return (
    <div className='login'>
      <div className="lContainer">
        <input 
        type="text" 
        placeholder='username'
        name='username'
        onChange={handleChange}
        className="lInput"
        />
        <input 
        type="password" 
        placeholder='username'
        name='password'
        onChange={handleChange}
        className="lInput"
         />

         <button disabled={loading} onClick={handleSubmit} className="lButton">submit</button>
      </div>
      
      {error && <span>User not Found</span>
      }
    </div>
  )
}

export default Login