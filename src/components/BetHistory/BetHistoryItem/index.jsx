import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import BetColor from '../../../utils/BetColor';

const useStyles = makeStyles({
  root: {
    '&:hover': {
      background: bet => BetColor(bet),
      cursor: 'pointer',
    },
  },
});

function BetHistoryItem({ bet, small, onClick }) {
  const classes = useStyles(bet);
  const isMobile = useMediaQuery('(max-width: 500px)');
  const isMobileOrTablet = useMediaQuery('(max-width: 959px)');
  const [entered, setEntered] = useState(false);

  return (
    <Box
      borderRadius={10}
      border={`2px solid ${BetColor(bet)}`}
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
        small ? BetColor(bet, true) : entered ? BetColor(bet) : 'transparent'
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
