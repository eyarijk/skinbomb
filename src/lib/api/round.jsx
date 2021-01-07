import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
const RoundContext = createContext({});

function RoundProvider({ children }) {
  const [round, setRound] = useState(null);
  const [isLoadingRound, setIsLoadingRound] = useState(true);

  const getRound = async id => {
    setIsLoadingRound(true);
    console.log(id);

    setRound({ id, stats: [], date: '2020-01-01' });

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
