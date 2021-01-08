import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import fetch from '../fetch';
const RoundContext = createContext({});

function RoundProvider({ children }) {
  const [round, setRound] = useState(null);
  const [isLoadingRound, setIsLoadingRound] = useState(true);

  const getRound = async id => {
    setIsLoadingRound(true);

    const response = await fetch(`/statistics/round/${id}`);

    setRound(response.data);

    setIsLoadingRound(false);
  };

  return (
    <RoundContext.Provider
      value={{
        round,
        getRound,
        isLoadingRound,
      }}
    >
      {children}
    </RoundContext.Provider>
  );
}

RoundProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useRound = () => {
  return useContext(RoundContext);
};

export { RoundProvider, useRound };
