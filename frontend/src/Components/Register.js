import React, { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Register = () => {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const { register } = useContext(AuthContext);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await register(form);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
            <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" required />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
