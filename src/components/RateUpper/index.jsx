import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { stepRate } from '../../utils/BombUtils';

function RateUpper({ currentRate }) {
  const isMobileOrTablet = useMediaQuery('(max-width: 959px)');
  const isMobile = useMediaQuery('(max-width: 600px)');
  const [rateToFinish, setRateToFinish] = useState(0);

  useEffect(() => {
    if (rateToFinish < currentRate) {
      setTimeout(() => {
        const step = stepRate(rateToFinish, currentRate);
        setRateToFinish(prevVal => prevVal + step);
      }, 50);
    } else if (rateToFinish !== currentRate) {
      setRateToFinish(currentRate);
    }
  }, [rateToFinish]);

  useEffect(() => {
    setRateToFinish(0);
  }, [currentRate]);

  return (
    <Box
      width={isMobileOrTablet ? '100%' : '-webkit-fill-available'}
      display="flex"
      justifyContent="center"
      alignItems="center"
      fontWeight="700"
      fontSize={isMobile ? 14 : 24}
      color="white"
      px={isMobileOrTablet && 1}
      align="center"
    >
      {`${rateToFinish.toFixed(2)} X`}
    </Box>
  );
}

RateUpper.propTypes = {
  currentRate: PropTypes.number.isRequired,
};

export default RateUpper;
