import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import fetch from '../fetch';

import { useAuth } from './auth';

const LeadersContext = createContext({});

function LeadersProvider({ children }) {
  const { token } = useAuth();
  const [leaders, setLeaders] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [date, setDate] = useState(null);
  const [isLeadersLoaded, setIsLeadersLoaded] = useState(false);

  const getLeaders = async () => {
    try {
      const payload = await fetch('/leaders');

      setLeaders(payload.data);
      setDate(payload.date);
      setCurrentUser(payload.current);
      setIsLeadersLoaded(true);
    } catch (err) {
      console.error('>>> API Error: ', err);
    }
  };

  useEffect(() => {
    getLeaders();
  }, [token]);

  return (
    <LeadersContext.Provider
      value={{
        leaders,
        currentUser,
        date,
        getLeaders,
        isLeadersLoaded,
      }}
    >
      {children}
    </LeadersContext.Provider>
  );
}

LeadersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useLeaders = () => {
  return useContext(LeadersContext);
};

export { LeadersProvider, useLeaders };
