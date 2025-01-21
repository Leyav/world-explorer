import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import './index.css';

const LoginPage = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validatePassword = (password) => {
        const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validatePassword(formData.password)) {
            setError('Password must be 8 characters long with 1 capital letter, 1 number, and 1 symbol.');
        } else {
            navigate('/home');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="login-container">
                <h2 className="text-center">Sign In</h2>
                <p className="text-center">
                    New user? <a href="/signup">Create an account</a>
                </p>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter username"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                        />
                    </Form.Group>
                    {error && <div className="text-danger">{error}</div>}
                    <Button variant="dark" type="submit" className="w-100 mt-3">
                        Sign In
                    </Button>
                </Form>
                <div className="text-center mt-4">
                    <p>Or sign in with</p>
                    <div>
                        <Button variant="outline-primary" className="btn-black mx-2">
                        <i className="fa-brands fa-google"></i>
                        </Button>
                        <Button variant="outline-primary" className="btn-black mx-2">
                        <i className="fa-brands fa-facebook"></i> 
                        </Button>
                        <Button variant="outline-primary" className="btn-black mx-2">
                            <i className="fa-brands fa-linkedin"></i> 
                        </Button>
                        <Button variant="outline-primary" className="btn-black mx-2">
                            <i className="fa-brands fa-twitter"></i> 
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
