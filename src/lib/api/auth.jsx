import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import fetch from '../fetch';
import swal from "sweetalert2";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isUserLoaded, setIsUserLoaded] = useState(false);
  const [token, setToken] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
      fetchUser();
    }
  }, []);

  const steamAuth = async () => {
    window.open('http://api.skinbomb.gg/api/auth/steam/handle');
  };

  const saveToken = async steamToken => {
    setToken(steamToken);
    localStorage.setItem('token', steamToken);
    return { status: 'success' };
  };

  const removeToken = async () => {
    setToken('');
    localStorage.removeItem('token');
    setUser(null);
    return { status: 'success' };
  };

  const updateTradeUrl = async (url) => {
    if(url.trim !== ''){
      const fd = new FormData();
      fd.append('tradeUrl', url);
      try{
        const response = await fetch('/settings/tradeUrl/store', {method: "POST", data: fd});
        if(response.data.tradeUrl){
          setUser({...user, tradeUrl: response.tradeUrl});
          swal.fire('Done', 'Trade url successfully updated.', 'success')
        }
      }catch (error){
        swal.fire('Failed', error.response.data.message, 'error');

        return;
      }
    }
  };

  async function fetchUser() {
    try {
      const payload = await fetch('/user');

      setUser(payload.data);
      setIsUserLoaded(true);
      return user;
    } catch (err) {
      console.error('>>> API Error: ', err);
      return;
    }
  }

  return (
    <AuthContext.Provider
      value={{
        steamAuth,
        user,
        fetchUser,
        token,
        isUserLoaded,
        saveToken,
        removeToken,
        updateTradeUrl,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
