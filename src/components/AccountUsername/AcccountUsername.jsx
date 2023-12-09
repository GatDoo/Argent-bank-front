import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';


function AccountUsername() {
    const navigate = useNavigate();
    const userProfile = useSelector(state => state.profile);

    const usernameChange = () => {
        navigate('/username');
    };

    return (
        <div className="header">
            <h1>Welcome back<br />{userProfile.userName || 'User'}!</h1>
            <button className="edit-button" onClick={usernameChange}>Edit Name</button>
        </div>
    );
}

export default AccountUsername;