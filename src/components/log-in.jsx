import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/log-in.css';
import validation from '../components/validation';

function LoginPage() {
    const [values, setValues] = useState({ email: '', password: '' });

    const handleInput = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        
    };

    return (
        <div className="container">
            <div className="form-container">
                <h2>Log-In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="email-container">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            onChange={handleInput}
                        />
                    </div>
                    <div className="password-container">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            onChange={handleInput}
                        />
                    </div>
                    <button type="submit">Log In</button>
                    <div>
                        <p>Don't have an account?</p>
                    </div>
                    <Link to="/sign-up">
                        <button type="button">Sign up</button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
