import React, { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Login = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const { login } = useContext(AuthContext);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(form);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
            <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
