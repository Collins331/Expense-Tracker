import React, { createContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const register = async (userData) => {
        const res = await axios.post('http://localhost:5000/api/users/register', userData);
        localStorage.setItem('token', res.data.token);
        setUser(res.data.user);
    };

    const login = async (userData) => {
        const res = await axios.post('http://localhost:5000/api/users/login', userData);
        localStorage.setItem('token', res.data.token);
        setUser(res.data.user);
    };

    return (
        <AuthContext.Provider value={{ user, register, login }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
