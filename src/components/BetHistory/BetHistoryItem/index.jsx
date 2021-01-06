import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import useMediaQuery from '@material-ui/core/useMediaQuery';

function getColor(rate, opacity) {
  if (rate <= 1.49) {
    return `rgba(33, 150, 83, ${opacity ? '0.2' : '1'})`;
  } else if (rate >= 1.5 && rate <= 1.99) {
    return `rgba(242, 74, 74, ${opacity ? '0.2' : '1'})`;
  } else if (rate >= 2 && rate <= 2.99) {
    return `rgba(242, 201, 76, ${opacity ? '0.2' : '1'})`;
  } else if (rate >= 3 && rate <= 4.99) {
    return `rgba(47, 128, 237, ${opacity ? '0.2' : '1'})`;
  }
  return `rgba(189, 76, 242, ${opacity ? '0.2' : '1'})`;
}

const useStyles = makeStyles({
  root: {
    '&:hover': {
      background: bet => getColor(bet),
      cursor: 'pointer',
    },
  },
});

function BetHistoryItem({ bet, small, onClick }) {
  const classes = useStyles(bet);
  const isMobile = useMediaQuery('(max-width: 500px)');
  const isMobileOrTablet = useMediaQuery('(max-width: 959px)');
  const [entered, setEntered] = useState(false);

  function getColor(rate, opacity) {
    if (rate <= 1.49) {
      return `rgba(33, 150, 83, ${opacity ? '0.2' : '1'})`;
    } else if (rate >= 1.5 && rate <= 1.99) {
      return `rgba(242, 74, 74, ${opacity ? '0.2' : '1'})`;
    } else if (rate >= 2 && rate <= 2.99) {
      return `rgba(242, 201, 76, ${opacity ? '0.2' : '1'})`;
    } else if (rate >= 3 && rate <= 4.99) {
      return `rgba(47, 128, 237, ${opacity ? '0.2' : '1'})`;
    }
    return `rgba(189, 76, 242, ${opacity ? '0.2' : '1'})`;
  }

  return (
    <Box
      borderRadius={10}
      border={`2px solid ${getColor(bet)}`}
      height={
        (isMobileOrTablet && 30) ||
        (isMobile && small && 25) ||
        (small ? 30 : 40)
      }
      width={
        (isMobileOrTablet && 60) ||
        (isMobile && small && 39) ||
        (small ? 50 : 70)
      }
      onMouseOver={() => setEntered(true)}
      onMouseLeave={() => setEntered(false)}
      bgcolor={
        small ? getColor(bet, true) : entered ? getColor(bet) : 'transparent'
      }
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="#fff"
      fontWeight={400}
      fontSize={(isMobile && small && 10) || (small ? 12 : 16)}
      lineHeight="24px"
      letterSpacing="0.44px"
      mx={0.5}
      onClick={() => onClick(bet)}
      fontFamily="Open Sans, unset"
      className={`${classes.root}`}
    >
      {`${bet.toFixed(2)}x`}
    </Box>
  );
}

BetHistoryItem.propTypes = {
  bet: PropTypes.number.isRequired,
  small: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BetHistoryItem;
