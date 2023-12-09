import React from 'react'
import './main.scss'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'

import Accueil from './pages/Accueil';
import SignIn from './components/SignIn/SignIn';
import User from './pages/User';
import ProtectedRoute from './Utils/ProtectedRoute';
import Username from './pages/Username';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/signin" element={<SignIn />} />
        {/* <Route path="/user" element={<User />} /> */}
        {/* ProtectedRoute fait office de sécu pour la page /user */}
        <Route path="/user" element={
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        } />
        <Route path="/username" element={
          <ProtectedRoute>
            <Username />
          </ProtectedRoute>
        } />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App