import React from 'react';
import { Navigate } from 'react-router-dom';

// Simulación de una función de autenticación
const isAuthenticated = () => {
  // Verifica si hay un token válido en el localStorage
  return !!localStorage.getItem('token');
};

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" />;
};

export default PrivateRoute;
