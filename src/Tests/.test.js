import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SignUp from "../components/sign-up.tsx";
import signUpValidation from '../components/Valid/sign-up-validation.js';
import LoginPage from "../components/log-in.tsx";
import loginValidation from "../components/Valid/log-in-validation.js";


//Signup Component

jest.mock('../components/Valid/sign-up-validation', () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({}),
}));

describe('Signup Component', () => {
  const fillInForm = (name = '', email = '', password = '') => {
    fireEvent.change(screen.getByPlaceholderText(/Enter Name/i), {
      target: { value: name },
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter Email/i), {
      target: { value: email },
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter Password/i), {
      target: { value: password },
    });
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('submits correct data when form fields are filled and submit button is clicked', () => {
    render(
      <Router>
        <SignUp />
      </Router>
    );
    const validationMock = signUpValidation;

    validationMock.mockReturnValue({});

    fillInForm('John', 'john@example.com', 'password123');
    fireEvent.click(screen.getByText(/Sign Up/i));

    expect(validationMock).toHaveBeenCalledWith({
      name: 'John',
      email: 'john@example.com',
      password: 'password123',
    });
  });

  it('displays validation error if name and or email and or password is missing', () => {
    render(
      <Router>
        <SignUp />
      </Router>
    );
    const validationMock = signUpValidation;

    validationMock.mockReturnValue({ name: 'Name is required' });

    fillInForm('', 'john@example.com', 'password123');
    fireEvent.click(screen.getByText(/Sign Up/i));

    expect(screen.getByText(/Name is required/i)).toBeInTheDocument();

    validationMock.mockReturnValue({email: 'Email is required'});
    
    fillInForm('John', '', 'password123');
    fireEvent.click(screen.getByText(/Sign Up/i));

    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();

    validationMock.mockReturnValue({password: 'Password is required'});

    fillInForm('John', 'john@eample.com', '');
    fireEvent.click(screen.getByText(/Sign Up/i));

    expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
  });
});

//Login Component

jest.mock('../components/Valid/log-in-validation', () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({}),
}));

const fillInLog = (email = '', password = '') => {
  fireEvent.change(screen.getByPlaceholderText(/Enter Email/i), {
    target: { value: email },
  });
  fireEvent.change(screen.getByPlaceholderText(/Enter Password/i), {
    target: { value: password },
  });
}



it('submits correct data when form fields are filled and submit button is clicked', () => {
  render(
    <Router>
      <LoginPage />
    </Router>
  );
  const validationMock = loginValidation;

  validationMock.mockReturnValue({});

  fillInLog ('john@example.com', 'password123');
  fireEvent.click(screen.getByText(/Log In/i));

  expect(validationMock).toHaveBeenCalledWith({
    email:'john@example.com',
    password: 'password123',
  });
});

it('displays validation error if email and or password is missing', () => {
  render(
    <Router>
      <LoginPage />
    </Router>
  );
  const validationMock = loginValidation;

  validationMock.mockReturnValue({email: 'Email is required'});

  fillInLog('', 'password123');
  fireEvent.click(screen.getByText(/Log In/i));

  expect(screen.getByText(/Email is required/i)).toBeInTheDocument();

  validationMock.mockReturnValue({password: 'Password is required'});

  fillInLog('john@example.com', '');
  fireEvent.click(screen.getByText(/Log In/i));

  expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
});

  