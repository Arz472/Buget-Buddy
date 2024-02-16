import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SignUp from "../components/sign-up.tsx";
import signUpValidation from '../components/Valid/sign-up-validation.js';
import { BrowserRouter as Router } from 'react-router-dom';

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

    fillInForm('John Doe', 'john@example.com', 'password123');
    fireEvent.click(screen.getByText(/Sign Up/i));

    expect(validationMock).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
    });
  });

  it('displays validation error if name is missing', () => {
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
  });
});