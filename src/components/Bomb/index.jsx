import React, { useState, useEffect } from 'react';
import moment from 'moment';

import cn from 'classnames';

import { useRound } from '../../lib/api/rounds';

import s from './styles.module.scss';
import Box from '@material-ui/core/Box';

function getColor(currentRate) {
  if (currentRate <= 1.49) {
    return `#70EB71`;
  } else if (currentRate >= 1.5 && currentRate <= 1.99) {
    return `#F14646`;
  } else if (currentRate >= 2 && currentRate <= 2.99) {
    return `#F1C647`;
  } else if (currentRate >= 3 && currentRate <= 4.99) {
    return `#458BE4`;
  }
  return `#B86CEE`;
}

function Bomb() {
  const { currentRate, isCountDown, timestamp } = useRound();
  const [timeToStart, setTimeToStart] = useState(10);
  const [bombBg, setBombBg] = useState('rgb(33, 150, 83)');

  useEffect(() => {
    const diff = Math.abs(
      moment(timestamp).add(11, 'seconds').diff(moment()) / 1000,
    );
    diff < 20 && setTimeToStart(diff);
  }, [timestamp]);

  useEffect(() => {
    if (timeToStart > -0.05) {
      setTimeout(() => {
        setTimeToStart(prevVal => prevVal - 0.05);
      }, 50);
    }
  }, [timeToStart]);

  useEffect(() => {
    setBombBg(getColor(currentRate));
  }, [currentRate]);

  return (
    <div className={s.root}>
      <div className={s.countdownWrapper} style={{ backgroundColor: bombBg }}>
        <Box display="flex">
          <Box className={s.countdown}>
            {isCountDown
              ? timeToStart >= 0
                ? timeToStart.toFixed(2)
                : '0.00'
              : currentRate.toFixed(2)}
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            width="20%"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              style={{ color: bombBg }}
              className={cn(s.indicator, {
                [s.active]: !(timeToStart >= 0) && !isCountDown,
              })}
            >
              X
            </Box>
            <Box
              style={{ color: bombBg }}
              className={cn(s.indicator, {
                [s.active]: timeToStart >= 0 && isCountDown,
              })}
            >
              S
            </Box>
          </Box>
        </Box>
      </div>
      <img style={{ height: 350 }} src="bomb.svg" alt="timer" />
      <img className={s.glass} src="glass.svg" alt="glass" />
      <img className={s.bombLeft} src="bomb-left.svg" alt="sides" />
      <img className={s.bombRight} src="bomb-right.svg" alt="sides" />
    </div>
  );
}

export default Bomb;
