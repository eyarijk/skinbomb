import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '@material-ui/core';
import BetHistoryItem from './BetHistoryItem';
import useMediaQuery from "@material-ui/core/useMediaQuery";

function BetHistory({ history, small, onClick, ...props }) {
  const isMobileOrTablet = useMediaQuery('(max-width: 959px)');
  return (
    <Box display="flex" width="100%" position={isMobileOrTablet ? 'relative' : "inherit"} {...props}>
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
