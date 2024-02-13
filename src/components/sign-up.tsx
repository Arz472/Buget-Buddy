import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/Signup-Login.css';
interface FormData {
    name: string;
    email: string;
    password: string;
}

function Signup() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Handle form submission
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="container">
            <div className="form-container">
                <h2>Sign-Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="name-container">
                        <label htmlFor="name">Name</label>
                        <input
                            name="name"
                            placeholder="Enter Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="email-container">
                        <label htmlFor="email">Email</label>
                        <input
                            name="email"
                            placeholder="Enter Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="password-container">
                        <label htmlFor="password">Password</label>
                        <input
                            name="password"
                            placeholder="Enter Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
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
