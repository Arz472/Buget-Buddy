import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../components/log-in.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
    }

    return (
        <div className="container">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="email-container">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="password-container">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <button type="submit">Log In</button>
                    <div>
                        <p>Don't have an account?</p>
                    </div>
                    <Link to="/sign-up"> {}
                        <button type="button">Sign up</button> {}
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
