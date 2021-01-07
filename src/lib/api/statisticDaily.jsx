import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
const StatisticDailyContext = createContext({});

function StatisticDailyProvider({ children }) {
  const [rounds, setRounds] = useState([]);
  const [isLoadedRounds, setIsLoadedRounds] = useState(false);

  const getRounds = async date => {
    setIsLoadedRounds(true);

    const rounds = [];

    for (let i = 1; i < 200; i++) {
      rounds.push({
        id: i,
        bet: Math.random() * 10,
      });
    }

    setRounds(rounds);

    console.log(date);

    setIsLoadedRounds(false);
  };

  return (
    <StatisticDailyContext.Provider
      value={{
        rounds,
        getRounds,
        isLoadedRounds,
      }}
    >
      {children}
    </StatisticDailyContext.Provider>
  );
}

StatisticDailyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStatisticDaily = () => {
  return useContext(StatisticDailyContext);
};

export { StatisticDailyProvider, useStatisticDaily };
