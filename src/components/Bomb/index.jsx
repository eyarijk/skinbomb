import React, { useState, useEffect } from 'react';
import moment from 'moment';

import cn from 'classnames';

import { useRound } from '../../lib/api/rounds';

import s from './styles.module.scss';
import Box from '@material-ui/core/Box';
import BetColor from '../../utils/BetColor';
import useMediaQuery from "@material-ui/core/useMediaQuery";

function Bomb() {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const isMobileOrTablet = useMediaQuery('(max-width: 959px)');
  const isXsDesktop = useMediaQuery('(max-width: 1129px)');
  const isSmDesktop = useMediaQuery('(max-width: 1329px)');
  const isMdDesktop = useMediaQuery('(max-width: 1459px)');

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
    setBombBg(BetColor(currentRate));
  }, [currentRate]);

  return (
    <div className={s.root}>
      <div className={s.countdownWrapper} style={{ backgroundColor: bombBg }}>
        <Box display={isMobileOrTablet ? 'block' : 'flex'}>
          <Box className={s.countdown}>
            {isCountDown
              ? timeToStart >= 0
                ? timeToStart.toFixed(2)
                : '0.00'
              : currentRate.toFixed(2)}
          </Box>
          <Box
            className={s.indicators}
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
      <img style={{ height: 350, width: isMobileOrTablet ? '100%' : 'auto'} } src="/bomb.svg" alt="timer" />
      <img className={s.glass} src="/glass.svg" alt="glass" />
      <img className={s.bombLeft} src="/bomb-left.svg" alt="sides" />
      <img className={s.bombRight} src="/bomb-right.svg" alt="sides" />
    </div>
  );
}

export default Bomb;
