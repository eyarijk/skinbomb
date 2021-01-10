import React, { useState, useEffect } from 'react';
import moment from 'moment';
import cn from 'classnames';
import { useRound } from '../../lib/api/rounds';
import s from './styles.module.scss';
import Box from '@material-ui/core/Box';
import BetColor from '../../utils/BetColor';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { calcStep, calcWingsFire, calcWingsStep } from '../../utils/BombUtils';

function Bomb() {
  const isMobileOrTablet = useMediaQuery('(max-width: 959px)');
  const { currentRate, isCountDown, timestamp } = useRound();
  const [timeToStart, setTimeToStart] = useState(10);
  const [rateToFinish, setRateToFinish] = useState(0);
  const [bombBg, setBombBg] = useState('rgb(33, 150, 83)');
  const [bombStep, setBombStep] = useState(0);
  const [wingsStep, setWingsStep] = useState(0);
  const [wingsFire, setWingsFire] = useState(false);

  const clearBomb = () => {
    setBombBg('#e5a942');
    setBombStep(0);
    setWingsStep(0);
    setWingsFire(false);
  };

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
        clearBomb();
      }, 50);
    }
  }, [timeToStart]);

  useEffect(() => {
    if (rateToFinish < currentRate) {
      setTimeout(() => {
        const step = currentRate / 100;
        setRateToFinish(prevVal => prevVal + step);
      }, 50);
    } else if (rateToFinish !== currentRate) {
      setRateToFinish(currentRate);
    }

    if (!(!(timeToStart >= 0) && !isCountDown)) {
      return;
    }

    setBombBg(BetColor(rateToFinish));
    setBombStep(calcStep(rateToFinish));
    setWingsStep(calcWingsStep(rateToFinish));
    setWingsFire(calcWingsFire(rateToFinish));
  }, [rateToFinish]);

  useEffect(() => {
    setRateToFinish(0);
  }, [currentRate]);

  const isCoefficient = !(timeToStart >= 0) && !isCountDown;

  const renderWingsFire = () => {
    if (!wingsFire) {
      return '';
    }

    return 'fire';
  };

  return (
    <div
      className={cn(s.root, {
        [s.bombWings0]: wingsStep === 0,
        [s.bombWings1]: wingsStep === 1,
        [s.bombWings2]: wingsStep === 2,
      })}
    >
      <div className={s.countdownWrapper} style={{ backgroundColor: bombBg }}>
        <Box display="block" mt={-1} ml={3.1}>
          <Box className={s.countdown}>
            {isCountDown
              ? timeToStart >= 0
                ? timeToStart.toFixed(2)
                : '0.00'
              : rateToFinish.toFixed(2)}
          </Box>
          <Box className={s.indicators}>
            <Box
              style={{ color: bombBg }}
              className={cn(s.indicator, {
                [s.active]: isCoefficient,
              })}
            >
              X
            </Box>
            <Box
              style={{ color: bombBg }}
              className={cn(s.indicator, {
                [s.active]: !isCoefficient,
              })}
            >
              S
            </Box>
          </Box>
        </Box>
      </div>
      <img
        style={{ height: 350, width: isMobileOrTablet ? '330px' : 'auto' }}
        src={`/bomb_${bombStep}.png`}
        alt="timer"
        className={s.bombRoot}
      />
      <img className={s.glass} src="/glass.svg" alt="glass" />
      <img className={s.bombLeft} src="/bomb-left.svg" alt="sides" />
      <img className={s.bombRight} src="/bomb-right.svg" alt="sides" />
      {renderWingsFire()}
    </div>
  );
}

export default Bomb;
