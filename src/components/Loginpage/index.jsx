import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import './index.css';
// import loginImage from '../../assets/images/LoginImage.jgp';

const LoginPage = () => {
    const [formData, setFormData] = useState({ email: '', password: '', keepSignedIn: false });
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
            console.log('Keep me signed in:', formData.keepSignedIn);
            navigate('/home');
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    return (
        <div className="login-background"  style={{ 
            // backgroundImage: `url(${loginImage})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1 
        }}> 
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="login-container">
                    <h2 className="text-center">Sign In</h2>
                    <p className="text-center">
                        New user? <a href="/signup">Create an account</a>
                    </p>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formUsername">
                            <Form.Control
                                type="text"
                                placeholder="Username or Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formKeepSignedIn">
                            <Form.Check
                                type="checkbox"
                                label="Keep me signed in"
                                name="keepSignedIn"
                                checked={formData.keepSignedIn}
                                onChange={handleChange}
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
                            <Button variant="outline-primary" className="btn-black mx-2" style={{borderRadius:'1.5rem'}}>
                                <i className="fa-brands fa-google"></i>
                            </Button>
                            <Button variant="outline-primary" className="btn-black mx-2" style={{borderRadius:'1.5rem'}}>
                                <i className="fa-brands fa-facebook"></i> 
                            </Button>
                            <Button variant="outline-primary" className="btn-black mx-2" style={{borderRadius:'1.5rem'}}>
                                <i className="fa-brands fa-linkedin"></i> 
                            </Button>
                            <Button variant="outline-primary" className="btn-black mx-2" style={{borderRadius:'1.5rem'}}>
                                <i className="fa-brands fa-twitter"></i> 
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
