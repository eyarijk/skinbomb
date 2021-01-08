import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
const StatisticDailyContext = createContext({});
import fetch from '../fetch';

function StatisticDailyProvider({ children }) {
  const [rounds, setRounds] = useState([]);
  const [isLoadingRounds, setIsLoadingRounds] = useState(true);

  const getRounds = async date => {
    setIsLoadingRounds(true);

    const response = await fetch(`/statistics/${date}`);

    setRounds(response.data);

    setIsLoadingRounds(false);
  };

  return (
    <StatisticDailyContext.Provider
      value={{
        rounds,
        getRounds,
        isLoadingRounds,
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
