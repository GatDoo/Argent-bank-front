import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setProfile } from "../../Redux/profile/profileSlice";
import AccountFull from "../AccountFull/AccountFull";

function UsernameChange() {
    const userProfile = useSelector(state => state.profile);
    const [userName, setUserName] = useState(userProfile.userName);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector(state => state.auth.token);

    const handleCancel = () => {
        navigate('/user');
    };

    const handleSave = async () => {
        try {
            // Mettre à jour le profil dans le backend
            await axios.put('http://localhost:3001/api/v1/user/profile', 
                { userName }, 
                { headers: { 'Authorization': `Bearer ${token}` } }
            );

            // Mettre à jour le profil dans Redux
            dispatch(setProfile({ ...userProfile, userName }));

            navigate('/user');
        } catch (error) {
            console.error('Erreur lors de la mise à jour du profil', error);
        }
    };

    return (
        <div className="main bg-dark">
            <div className="header">
                <h1>Edit user info</h1>
                <form className="edit-form">
                    <div className="input-wrapper">
                        <label htmlFor="userName">User Name</label>
                        <input type="text" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" value={userProfile.firstName} readOnly />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" value={userProfile.lastName} readOnly />
                    </div>
                    <button type="button" onClick={handleCancel} className="cancel-button">Cancel</button>
                    <button type="button" onClick={handleSave} className="save-button">Save</button>
                </form>
            </div>
        <AccountFull />
    </div>
    );
}

export default UsernameChange;