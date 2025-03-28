import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, updateUserProfile } from '../manager/actions/user/userAction';

const UserEdit = () => {
    const dispatch = useDispatch();
    const { user = {} } = useSelector((state) => state.user);

    // İlk state değerleri
    const [fullname, setFullname] = useState(user?.fullname || "");
    const [password, setPassword] = useState(user?.password || "");
    const [email, setEmail] = useState(user?.email || "");
    const [phone, setPhone] = useState(user?.phone || "");
    const [id, setId] = useState(user?.id || "");
    

    useEffect(() => {
        dispatch(getUserProfile());
    }, [dispatch]);

    // Kullanıcı bilgileri değiştiğinde state'i güncelle
    useEffect(() => {
        if (user && user._id) {
            setFullname(user.fullname || "");
            setPassword(user.password || "");
            setEmail(user.email || "");
            setPhone(user.phone || "");
            setId(user._id); // ID'yi burada güncelliyoruz!
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            fullname,
            _id:id,
            email,
            password,
            phone
        };
        console.log("Gönderilen userData:", { id, fullname, email, password ,phone});
        dispatch(updateUserProfile(userData))
        // Burada güncellenmiş ID'yi gönderiyoruz
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="fullname"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        className="form-control"
                        placeholder="Full Name"
                    />
                </div>
                <div className="form-group">
                    <label>phone</label>
                    <input
                        type="text"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="form-control"
                        placeholder="phone"
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        placeholder="Password"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default UserEdit;
