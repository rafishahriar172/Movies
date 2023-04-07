import axios from 'axios';
import {createContext, useEffect, useState} from 'react';
import { loginApi, logoutApi } from '../Pages/api';

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

    const login = async (inputs) => {
        const res = await axios.post(loginApi,inputs)
        setCurrentUser(res.data)
    }
    const logout = async (inputs) => {
        await axios.post(logoutApi)
        setCurrentUser(null);
    }

    useEffect(() => {
        localStorage.setItem("user",JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{currentUser,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}