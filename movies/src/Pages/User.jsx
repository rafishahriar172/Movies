import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

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

    const [photoPreview, setPhotoPreview] = useState(null);

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

   
    console.log(update)
  return (
    <div>
        <form>
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
                <label>
                    Upload a photo:
                    <input type="file" onChange={handlePhotoChange} />
                </label>
                {photoPreview && <img src={photoPreview} alt="Selected photo preview" />}
        </form>
    </div>
  )
}

export default User