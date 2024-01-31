import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../components/Signup-Login.css';
import validation from './log-in-validation';

function LoginPage() {

    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
         email: '', password: '' 
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
                    <button type="submit">Log In</button>
                    <div>
                        <p>Don't have an account?</p>
                        <Link to="/sign-up">Sign Up</Link> 
                        <a href="/home">Home page</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
