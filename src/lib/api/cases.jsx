import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import fetch from '../fetch';

import { useAuth } from './auth';

const CasesContext = createContext({});

function CasesProvider({ children }) {
  const { token } = useAuth();
  const [levels, setLevels] = useState([]);
  const [currentUserLevelData, setCurrentUserLevelData] = useState({level: 0, points: 0, points_for_next_level: 0, next_level: 1});
  const [isCasesLoaded, setIsCasesLoaded] = useState(false);

  const getCases = async () => {
    try {
      const payload = await fetch('/cases');

      setLevels(payload.levels);
      setCurrentUserLevelData({
          level: payload.level,
          points: payload.points,
          points_for_next_level: payload.points_for_next_level,
      });
      setIsCasesLoaded(true);
    } catch (err) {
      console.error('>>> API Error: ', err);
      return;
    }
  };

  useEffect(() => {
    // if (token) {
      getCases();
    // }
  }, [token]);

  return (
    <CasesContext.Provider
      value={{
        levels,
        currentUserLevelData,
        getCases,
        isCasesLoaded,
      }}
    >
      {children}
    </CasesContext.Provider>
  );
}

CasesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useCases = () => {
  return useContext(CasesContext);
};

export { CasesProvider, useCases };
