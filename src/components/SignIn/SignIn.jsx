import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { login } from "../../Redux/auth/authSlice";
import { setProfile } from '../../Redux/profile/profileSlice';


function SignIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate(); // Pour la redirection après la connexion

  const handleSubmit = async (event) => {
    event.preventDefault();
    setHasError(false);
    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/login', {
        "email": email,
        "password": password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      const token = response.data.body.token;
      dispatch(login(token)); // Dispatcher l'action de connexion
  
      await fetchUserProfile(token); // Récupérer et dispatcher le profil utilisateur
  
      navigate('/user'); // Rediriger vers la page de l'utilisateur
    } catch (error) {
      console.error('Erreur de connexion', error);
      setHasError(true);
    }
  };
  

  const fetchUserProfile = async (token) => {
    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/profile', {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      dispatch(setProfile(response.data.body)); // Dispatcher les informations du profil
    } catch (error) {
      console.error('Erreur lors de la récupération du profil utilisateur', error);
      throw error;
    }
  };  
  

  return (
    <>
      <Header />
      <div className="main bg-dark">
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
              <p className={hasError ? 'error' : 'error-n'}>Incorrect Email or Password</p>
              <div className="input-wrapper">
                  <label htmlFor="email">Email</label>
                  <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="input-wrapper">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="input-remember">
                  <input type="checkbox" id="remember-me" />
                  <label htmlFor="remember-me">Remember me</label>
              </div>
              <button type="submit" className="sign-in-button">Sign In</button>
            </form>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default SignIn;
