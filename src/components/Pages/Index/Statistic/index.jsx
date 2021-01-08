import { Box } from '@material-ui/core';
import Stats from '../../../Stats';
import React from 'react';
import { useRound } from '../../../../lib/api/rounds';
import { useTheme } from '@material-ui/core/styles';

function Statistic() {
  const theme = useTheme();
  const { globalStatistics } = useRound();

  return (
    <Box
      xs={12}
      bgcolor={theme.background.primary}
      style={{ borderTopLeftRadius: 10 }}
      px={3}
      flexGrow={1}
      height="1px"
      display="flex"
      flexDirection="column"
    >
      <Box
        width={1}
        display="flex"
        justifyContent="space-between"
        px={4}
        pt={1}
        pl={5.25}
        style={{ marginBottom: 10 }}
      >
        <Box
          display="flex"
          alignItems="flex-end"
          fontWeight={400}
          fontSize={20}
          lineHeight="32px"
          letterSpacing="0.44"
          color="#888"
          height={43}
        >
          Статистика раунда
        </Box>
        <Box
          display="flex"
          alignItems="center"
          fontWeight={600}
          fontSize={12}
          lineHeight="32px"
          letterSpacing="0.44"
          color="#686868"
        >
          <Box component="span" display="flex" alignItems="center">
            <img src="/atm.svg" alt="atm" style={{ marginRight: 4 }} />
            {`${globalStatistics.amount} $`}
          </Box>
          <Box component="span" display="flex" alignItems="center" mx={2}>
            <img src="/people.svg" alt="people" style={{ marginRight: 4 }} />
            {globalStatistics.users_count}
          </Box>
          <Box component="span" display="flex" alignItems="center">
            <img
              src="collections.svg"
              alt="collections"
              style={{ marginRight: 4 }}
            />
            {globalStatistics.rounds_count_current_day}
          </Box>
        </Box>
      </Box>
      <Stats />
    </Box>
  );
}

export default Statistic;
