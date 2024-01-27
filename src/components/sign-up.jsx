import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../components/log-in.css';
import validation from'./sign-up-validation'

function Signup() {
    const navigate =  useNavigate();

    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleInput = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
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
                        <span> {errors.name && <span className='text-danger'> {errors.name}</span>} </span>
                    </div>
                    <div className="email-container">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            onChange={handleInput}
                        />
                        <span> {errors.email && <span className='text-danger'> {errors.email}</span>} </span>
                    </div>
                    <div className="password-container">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            onChange={handleInput}
                        />
                        <span> {errors.password && <span className='text-danger'> {errors.password}</span>} </span>
                    </div>
                    <button type="submit" onClick={() => navigate('/')}>Sign Up</button>
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
