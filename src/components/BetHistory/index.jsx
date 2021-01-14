import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '@material-ui/core';
import BetHistoryItem from './BetHistoryItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function BetHistory({ history, small, toFixed2, onClick, ...props }) {
  const isMobileOrTablet = useMediaQuery('(max-width: 959px)');
  return (
    <Box
      display="flex"
      justifyContent="center"
      width="100%"
      position={isMobileOrTablet ? 'relative' : 'inherit'}
      {...props}
    >
      {history.map(bet => {
        return (
          <BetHistoryItem
            key={Math.round(Math.random() * 100000)}
            bet={bet.bet}
            small={small}
            toFixed2={toFixed2}
            onClick={() => onClick(bet)}
          />
        );
      })}
    </Box>
  );
}

BetHistory.defaultProps = {
  history: [],
  small: false,
  toFixed2: false,
  onClick: () => {},
};

BetHistory.propTypes = {
  history: PropTypes.array,
  small: PropTypes.bool,
  toFixed2: PropTypes.bool,
  onClick: PropTypes.func,
};

export default BetHistory;
