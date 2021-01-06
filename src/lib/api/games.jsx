import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import fetch from '../fetch';

import { useAuth } from './auth';

const GamesContext = createContext({});

function GamesProvider({ children }) {
  const { token } = useAuth();
  const [games, setGames] = useState([]);
  const [isGamesLoaded, setIsGamesLoaded] = useState(false);

  const getGames = async () => {
    try {
      const payload = await fetch('/user/games');

      setGames(payload.data);
      setIsGamesLoaded(true);
    } catch (err) {
      console.error('>>> API Error: ', err);
      return;
    }
  };

  useEffect(() => {
    if (token) {
      getGames();
    }
  }, [token]);

  return (
    <GamesContext.Provider
      value={{
        games,
        getGames,
        isGamesLoaded,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
}

GamesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useGames = () => {
  return useContext(GamesContext);
};

export { GamesProvider, useGames };
