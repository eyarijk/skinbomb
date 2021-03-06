import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Echo from 'laravel-echo';
import io from 'socket.io-client';

import fetch from '../fetch';

import { useAuth } from './auth';
import { useSkins } from './skins';
import swal from 'sweetalert2';

const RoundsContext = createContext({});

function RoundsProvider({ children }) {
  const { token, fetchUser } = useAuth();
  const { selectedSkins, getSkins } = useSkins();
  const [lastBets, setLastBets] = useState([]);
  const [statistics, setStatistics] = useState([]);
  const [globalStatistics, setGlobalStatistics] = useState({
    amount: 0,
    rounds_count_current_day: 0,
    users_count: 0,
  });
  const [isRoundsLoaded, setIsRoundsLoaded] = useState(false);
  const [currentRate, setCurrentRate] = useState(1);
  const [isCountDown, setIsCountDown] = useState(false);
  const [betRequest, setBetRequest] = useState(false);
  const [betProcess, setBetProcess] = useState(false);
  const [timestamp, setTimestamp] = useState(10);

  const getRounds = async () => {
    try {
      const payload = await fetch('/rounds');

      setCurrentRate(payload.round.coefficient || 1);
      setLastBets(payload.last_bets);
      setStatistics(payload.statistics);
      setGlobalStatistics(payload.global_statistics);
      setIsRoundsLoaded(true);
      setTimestamp(payload.round.start);
      setIsCountDown(Math.abs(payload.round.seconds) !== 0);
      return payload.data;
    } catch (err) {
      console.error('>>> API Error: ', err);
      return;
    }
  };

  const handleBet = async bet => {
    console.log('betbetbetbet, bet', bet);
    console.log('betRequest', betRequest);
    if (!betRequest) {
      setBetProcess(true);
      setBetRequest(true);
      console.log('selectedSkinsselectedSkins', selectedSkins);
      try {
        if (Object.keys(selectedSkins).length > 0) {
          const formData = new FormData();
          formData.append('bet', bet);
          Object.keys(selectedSkins).forEach(skinId => {
            formData.append('skins[]', skinId);
          });
          const response = await fetch('/rounds/store', {
            method: 'POST',
            data: formData,
          });
          getSkins();
          setBetRequest(false);
        }
      } catch (error) {
        await swal.fire('Failed', error.response.data.message, 'error');
        getSkins();
        setBetRequest(false);
        return;
      }
    }
  };

  useEffect(() => {
    if (token && lastBets.length === 0) {
      getRounds();
    }
  }, [token]);

  useEffect(() => {
    window.io = io;
    const echo = new Echo({
      broadcaster: 'socket.io',
      host: 'https://api.skinbomb.gg:6001',
      key: '786f1ec17bf42575b2e4db7465b45473',
    });

    echo.channel('laravel_database_round').listen('Round', event => {
      if (event[0].status === 1) {
        setIsCountDown(false);
        setCurrentRate(event[0].coefficient);
        if (betProcess) {
          fetchUser();
          getSkins();
          setBetProcess(false);
        }
      } else if (event[0].status === 0) {
        setTimestamp(event[0].start);
        setIsCountDown(true);
      }
    });

    echo
      .channel('laravel_database_round_statistics')
      .listen('RoundStatistic', event => {
        setLastBets(event.last_bets);
        setStatistics(event.statistics);
        setGlobalStatistics(event.global_statistics);
      });
  }, []);

  return (
    <RoundsContext.Provider
      value={{
        lastBets,
        statistics,
        globalStatistics,
        getRounds,
        handleBet,
        isRoundsLoaded,
        betProcess,
        betRequest,
        currentRate,
        isCountDown,
        timestamp,
      }}
    >
      {children}
    </RoundsContext.Provider>
  );
}

RoundsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useRound = () => {
  return useContext(RoundsContext);
};

export { RoundsProvider, useRound };
