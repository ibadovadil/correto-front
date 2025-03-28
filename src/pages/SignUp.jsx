import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../manager/actions/user/authAction';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles/auth.scss'
const SignUp = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');  // Error state added for error messages
    const [success, setSuccess] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSignUp = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!fullname || !email || !phone || !password) {
            setError('Please fill in all the fields.');
            return;
        }

        try {
            const userData = { fullname, email, phone, password };
            console.log('Sending Data:', userData);  // Gönderilen veriyi yazdırıyoruz

            const result = await dispatch(signUp(fullname, email, phone, password));

            if (result && result.success) {
                navigate('/')
                window.location.reload();

                setSuccess(result.message);
            } else {
                setError(result.message);
            }
        } catch (err) {
            console.error('Sign Up Error:', err);
            setError('An error occurred. Please try again later.');
        }
    };


    return (
        <div className="registerPage mt-5">
            <div className='container'>
                <h2>Sign Up</h2>
                <form className='form' onSubmit={handleSignUp}>
                    <div>
                        <input
                            type="text"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            required
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            placeholder="Enter your phone number"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit" className='mt-3'>Sign Up</button>
                </form>

                <span>
                    You have an account?
                    <Link to={'/login'} > Login</Link> <br />
                    <Link to={'/'} htmlFor="check"> Back to home</Link>

                </span>

                {error && <div className="error-message">{error}</div>} {/* Error message display */}
                {success && <div className="success-message">{success}</div>} {/* Success message display */}
            </div>
        </div>
    );
};

export default SignUp;
