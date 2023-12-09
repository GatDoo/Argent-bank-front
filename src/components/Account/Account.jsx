import React from "react";
import AccountUsername from "../AccountUsername/AcccountUsername";
import { useSelector } from 'react-redux';
import AccountFull from "../AccountFull/AccountFull";

function Account() {
    return (
        <div className="main bg-dark">
            <AccountUsername />
            <AccountFull />
        </div>
    );
}

export default Account;