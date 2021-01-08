import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '@material-ui/core';
import BetHistoryItem from './BetHistoryItem';

function BetHistory({ history, small, onClick, ...props }) {
  return (
    <Box display="flex" width="100%" {...props}>
      {history.map(bet => {
        return (
          <BetHistoryItem
            key={Math.round(Math.random() * 100000)}
            bet={bet.bet}
            small={small}
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
  onClick: () => {},
};

BetHistory.propTypes = {
  history: PropTypes.array,
  small: PropTypes.bool,
  onClick: PropTypes.func,
};

export default BetHistory;
