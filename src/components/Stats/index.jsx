import React from 'react';

import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import StatItem from './StatItem';

import s from './styles.module.scss';
import { useRound } from '../../lib/api/rounds';

function Stats() {
  const theme = useTheme();
  const { statistics } = useRound();
  return (
    <Box
      width={1}
      bgcolor={theme.background.secondary}
      borderRadius={10}
      p={1}
      flexGrow={1}
      height="1px"
      className={s.root}
    >
      {statistics.map(item => {
        return <StatItem key={item.id} item={item} />;
      })}
    </Box>
  );
}

export default Stats;
