import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Echo from 'laravel-echo';
import io from 'socket.io-client';

import fetch from '../fetch';

import { useAuth } from './auth';
import { useSkins } from './skins';
import swal from 'sweetalert2';
import {
  getCurrentExchange,
  removeCurrentExchange,
} from '../../utils/LocalStorage';
import { useChat } from './chat';

const RoundsContext = createContext({});

function RoundsProvider({ children }) {
  const { token } = useAuth();
  const { setOnline } = useChat();
  const { selectedSkins, getSkins, setExchangeSkin } = useSkins();
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
  const [lastBet, setLastBet] = useState(0);
  const [timestamp, setTimestamp] = useState(10);

  const getRounds = async () => {
    try {
      const payload = await fetch('/rounds');

      setCurrentRate(payload.round.coefficient || 1);
      setLastBets(payload.last_bets);
      setStatistics(payload.statistics);

      if (!Array.isArray(payload.global_statistics)) {
        setGlobalStatistics(payload.global_statistics);
      }

      setIsRoundsLoaded(true);
      setTimestamp(payload.round.start);
      setIsCountDown(Math.abs(payload.round.seconds) !== 0);
      return payload.data;
    } catch (err) {
      console.error('>>> API Error: ', err);
    }
  };

  const handleBet = async bet => {
    if (!betRequest) {
      setBetProcess(true);
      setBetRequest(true);
      setLastBet(bet);
      try {
        if (Object.keys(selectedSkins).length > 0) {
          const formData = new FormData();
          formData.append('bet', bet);
          const currentExchangeSkin = getCurrentExchange();

          if (currentExchangeSkin) {
            formData.append('wanted_item', currentExchangeSkin.id);
          }

          Object.keys(selectedSkins).forEach(skinId => {
            formData.append('skins_history_id[]', skinId);
          });

          await fetch('/rounds/store', {
            method: 'POST',
            data: formData,
          });
          getSkins();
          setBetRequest(false);
        }
      } catch (error) {
        await swal.fire('Failed', error.response.data.message, 'error');
        setBetRequest(false);
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
      const payload = event[0];
      if (payload.status === 1) {
        setIsCountDown(false);
        setCurrentRate(payload.coefficient);
        if (betProcess === true) {
          if (lastBet > payload.coefficient) {
            setExchangeSkin(null);
            removeCurrentExchange();
          }

          getSkins();
          setBetProcess(false);
        }
      } else if (payload.status === 0) {
        setTimestamp(payload.start);
        setIsCountDown(true);
      }
    });

    echo
      .channel('laravel_database_round_statistics')
      .listen('RoundStatistic', event => {
        setLastBets(event.last_bets);
        setStatistics(event.statistics);
        setGlobalStatistics(event.global_statistics);

        if (event.user_online >= 0) {
          setOnline(event.user_online);
        }
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
