import React from "react";
import Logo from "../../img/argentBankLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../../Redux/auth/authSlice";
import { clearProfile } from "../../Redux/profile/profileSlice";

function Nav() {

  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
      dispatch(logout());
      dispatch(clearProfile());
      navigate('/');
      // actions de déconnexion
  };

  const userProfile = useSelector(state => state.profile);

  const handleProfileClick = () => {
    navigate('/user'); // Utilisez navigate pour la redirection
};


  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {token ? (
          <>
            <button onClick={handleProfileClick} className="logout"><i className="fa fa-user-circle"></i>{userProfile.userName || 'User'}</button>
            <button onClick={handleLogout} className="logout">Log Out</button>
          </>
          ) : (
            <Link className="main-nav-item" to="/signin"><i className="fa fa-user-circle"></i>Sign In</Link>
          // <Link className="main-nav-item" to="/signin">
          //   <i className="fa fa-user-circle"></i>
          //   Sign In
          // </Link>
          )}
      </div>
    </nav>
  );
}

export default Nav;