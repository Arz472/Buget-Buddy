import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    

    return (
        <div className="container">
            <div className="form-container">
                <form>
                    <div className="email-container">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                        />
                    </div>
                    <div className="password-container">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                        />
                    </div>
                    <button type="submit">Sign Up</button>
                    <div>
                        <p>Already have an account?</p>
                    </div>
                    <Link to="/log-in">
                        <button type="button">Log In</button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Signup;
