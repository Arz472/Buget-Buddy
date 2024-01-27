import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/Signup-Login.css';
import validation from './sign-up-validation';
import passwordStrong from './password-strong';

function Signup() {
    const [passwordStrength, setPasswordStrength] = useState('');
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleInput = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });

        if (event.target.name === 'password') {
            const strength = passwordStrong({ password: event.target.value });
            let strengthLabel;
            if (strength === 1 || strength === 2) {
                strengthLabel = 'Weak';
            } else if (strength === 3 || strength === 4) {
                strengthLabel = 'Medium';
            } else if (strength === 5) {
                strengthLabel = 'Strong';
            }
            setPasswordStrength(strengthLabel);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
    };

    return (
        <div className="container">
            <div className="form-container">
                <h2>Sign-Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="name-container">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            onChange={handleInput}
                        />
                        <span>{errors.name && <span className="text-danger">{errors.name}</span>}</span>
                    </div>
                    <div className="email-container">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            onChange={handleInput}
                        />
                        <span>{errors.email && <span className="text-danger">{errors.email}</span>}</span>
                    </div>
                    <div className="password-container">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            onChange={handleInput}
                        />
                        <span>{errors.password && <span className="text-danger">{errors.password}</span>}</span>
                        <div>Password Strength: {passwordStrength}</div>
                    </div>

                    <button type="submit">Sign Up</button>
                    <div>
                        <p>Already have an account?</p>
                        <Link to="/">Log In</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
