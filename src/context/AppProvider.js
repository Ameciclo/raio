import React, { useState, useEffect } from 'react';
import AppContext from './AppContext'

export function AppProvider({ children }) {
  const [navBarListOn, setNavBarListOn] = useState(false)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => {
        setError(false);
      }, 4000);

      return () => clearTimeout(timeout);
    }
  }, [error, setError]);

  const state = {
    navBarListOn,
    setNavBarListOn,
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    error,
    setError,
  };
  
  return (
    <AppContext.Provider value={state}>{children}</AppContext.Provider>
  );
}

export default AppProvider;