import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/Signup-Login.css';
import validation from './Valid/sign-up-validation.js';

interface FormatData {
    name: string;
    email: string;
    password: string;
}

function Signup() {
    const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string }>({});
    const [formData, setFormData] = useState<FormatData>({
        name: '',
        email: '',
        password: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setErrors(validation(formData));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="container">
            <div className="header-container">
                <h1>Budget Wizer</h1>
            </div>
            <div className="form-container">
                <h2>Sign-Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="name-container">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                         <span>{errors.name && <span className='text-danger'>{errors.name}</span>}</span>
                    </div>
                    <div className="email-container">
                        <label htmlFor="email">Email</label>
                        <input
                            type='email'
                            name="email"
                            placeholder="Enter Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                         <span>{errors.email && <span className='text-danger'>{errors.email}</span>}</span>
                    </div>
                    <div className="password-container">
                        <label htmlFor="password">Password</label>
                        <input
                            type='password'
                            name="password"
                            placeholder="Enter Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                         <span>{errors.password && <span className='text-danger'>{errors.password}</span>}</span>
                    </div>

                    <button type="submit">Sign Up</button>
                    <div className="have-acc">
                        <p>Already have an account?</p>
                        <Link to="/">Log In</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
