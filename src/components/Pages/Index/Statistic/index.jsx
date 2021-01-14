import { Box } from '@material-ui/core';
import Stats from '../../../Stats';
import React from 'react';
import { useRound } from '../../../../lib/api/rounds';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";

function Statistic() {
  const theme = useTheme();
  const { globalStatistics } = useRound();
  const mobileOrTablet = useMediaQuery('(max-width: 959px)');
  return (
    <Box
      xs={12}
      bgcolor={theme.background.primary}
      style={{ borderTopLeftRadius: 10 }}
      pl={3}
      pr={4.1}
      flexGrow={1}
      height="1px"
      display="flex"
      flexDirection="column"
    >
      <Box
        width={1}
        display="flex"
        justifyContent="space-between"
        pt={mobileOrTablet ? 0 : 1}
        pl={mobileOrTablet ? 0 : 5.25}
        style={{ marginBottom: mobileOrTablet ? 0 : 10 }}
      >
        <Box
          display="flex"
          alignItems="flex-end"
          fontWeight={400}
          fontSize={mobileOrTablet ? 13 : 20}
          lineHeight={mobileOrTablet ? "40px" : "32px"}
          letterSpacing="0.44"
          color="#888"
          height={mobileOrTablet ? "none" : 43}
        >
          Статистика раунда
        </Box>
        <Box
          display="flex"
          alignItems="center"
          fontWeight={600}
          fontSize={mobileOrTablet ? 8 : 12}
          lineHeight="32px"
          letterSpacing="0.44"
          color="#686868"
        >
          <Box component="span" display="flex" alignItems="center">
            <img src="/atm.svg" alt="atm" style={{ marginRight: 4 }} />
            {`${globalStatistics.amount.toFixed(2)} $`}
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
