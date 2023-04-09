import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/authContext'
import { useLocation, useNavigate } from 'react-router-dom'

import "./User.scss"

const User = () => {
    const {currentUser} = useContext(AuthContext)

    useEffect(() =>{        
        if(currentUser === null){
            navigate('/')
            return;
        }        
    })

    const [update, setUpdate] = useState({
        "username":currentUser.username,
        "email":currentUser.email,        
    })

    const navigate = useNavigate();
    
    const [photo, setPhoto] = useState(null);

    const [photoPreview, setPhotoPreview] = useState("https://cdn.imgbin.com/7/15/1/imgbin-computer-icons-user-profile-avatar-french-people-xM6vuY3iWZ6yhbNYaVeX2nvVL.jpg");

    const handlePhotoChange = (event) => {
        const selectedPhoto = event.target.files[0];
        setPhoto(selectedPhoto);
    
        // Create a temporary URL for the selected photo and set it as the preview
        setPhotoPreview(URL.createObjectURL(selectedPhoto));
    };
  
    const handlePhotoUpload = (event) => {
      event.preventDefault();
  
      const formData = new FormData();
      formData.append('photo', photo);
    }

    const handleChange = (event) =>{
        setUpdate(prev => ({...prev,[event.target.name] : event.target.value}))
    }
  return (
    <div className='user'>
        <form>
            <div className='userImg'>
                {photoPreview && <img src={photoPreview} alt="Selected photo preview" />}
                <label className='upphoto' htmlFor='file'>
                    Upload a photo
                    <input style={{display:"none"}} type="file" id='file' onChange={handlePhotoChange} />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Username"  
                    name='username'
                    value={update.username}
                    onChange={handleChange}

                />                
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Email"  
                    name='email'
                    onChange={handleChange}
                    value={update.email}
                />
                </div>
        </form>
    </div>
  )
}

export default User