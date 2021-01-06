import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Box } from '@material-ui/core';
import { LineChart, Line } from 'recharts';

import s from './styles.module.scss';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const data = [
  {
    value: 0,
  },
  {
    value: 2,
  },
  {
    value: 12,
  },
  {
    value: 30,
  },
  {
    value: 48,
  },
  {
    value: 58,
  },
  {
    value: 60,
  },
];

function Chart({ startAnimation, currentRate }) {
  const isMobileOrTablet = useMediaQuery('(max-width: 959px)');

  const [yAxis, setYAxis] = useState([0, 1, 2, 3]);

  useEffect(() => {
    setYAxis([
      0,
      (currentRate * 0.33).toFixed(2),
      (currentRate * 0.66).toFixed(2),
      currentRate.toFixed(2),
    ]);
  }, [currentRate]);

  return (
    <Box className={s.wrapper}>
      <div className={s.yAxis}>
        {yAxis.map(item => {
          return (
            <span key={item} className={s.yAxisItem}>
              {`${item} x`}
            </span>
          );
        })}
      </div>
      {!startAnimation && (
        <LineChart width={isMobileOrTablet ? 130 : 160} height={80} data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4DFFDF" />
              <stop offset="0%" stopColor="#4DFFDF" />
              <stop offset="100%" stopColor="#4DA1FF" />
              <stop offset="100%" stopColor="#4DA1FF" />
            </linearGradient>
          </defs>
          <Line
            type="monotone"
            dataKey="value"
            stroke="url(#colorUv)"
            strokeWidth={3}
            dot={false}
            animationDuration={2000}
          />
        </LineChart>
      )}
    </Box>
  );
}

Chart.propTypes = {
  startAnimation: PropTypes.bool.isRequired,
  currentRate: PropTypes.number.isRequired,
};

export default Chart;
