import React, { useState, useEffect } from 'react';
import '../assets/styles/auth.scss';
import { useDispatch } from 'react-redux';
import { login } from '../manager/actions/user/authAction';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setError(''); // Səhifə açıldığında error-u sıfırla
    }, []);
    useEffect(() => {
        if (location.state && location.state.message) {
            setMessage(location.state.message);
        }
    }, [location]);
    const handleLogin = async (e) => {
        e.preventDefault();
        setError(''); // Yeni sorğu göndərildikdə error sıfırlansın

        if (!email || !password) {
            setError('Please fill in both fields.');
            return;
        }

        try {
            const result = await dispatch(login(email, password));

            if (result.success) {
                navigate('/');
                window.location.reload();

            } else {
                setError(result.message || 'Login failed, please try again.');
            }
        } catch (err) {
            setError(err.message || 'An error occurred. Please try again.');
        }
    };

    return (
        <div className="loginPage">
                        {message && <div className="alert alert-info mt-2">{message}</div>} 
            <div className="container">
                <div className="login form">
                    <header>Login</header>
                    <form onSubmit={handleLogin}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value.toLowerCase())}
                            className="mt-2"
                            placeholder="Enter your email"
                            required
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="my-4"
                            placeholder="Enter your password"
                            required
                        />
                        <input type="submit" className="button" value="Login" />
                    </form>
                    
                    {error && <div className="error-message">{error}</div>}

                    <div className="signup">
                        <span>
                            Don't have an account?
                            <Link to={'/register'} htmlFor="check"> Signup</Link> <br />
                            <Link to={'/'} htmlFor="check"> Back to home</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
