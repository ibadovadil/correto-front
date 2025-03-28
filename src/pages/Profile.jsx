import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../manager/actions/user/userAction';
import '../assets/styles/profile.scss'
import {Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Profile = () => {
    const dispatch = useDispatch();

    const { user = {}, error, loading } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(getUserProfile());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="profile">
            <Row className="profile-card">
                    <div className="right">
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                        <ul>
                            <li className='mt-5'>Fullname: {user.fullname}</li>
                            <li className='mt-5'>Email: {user.email}</li>
                            <li className='mt-5'>Password: **********</li>
                        </ul>
                        <Link to={'/editProfile'} className='btn mt-2'>Edit your profile</Link>
                    </div>
            </Row>
        </div>
    );
};

export default Profile;
