import React, { useEffect } from 'react';

import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import s from './styles.module.scss';
import { useStatisticDaily } from '../../../lib/api/statisticDaily';
import { useRouter } from 'next/router';
import Round from './Round';

function StatisticDaily() {
  const theme = useTheme();
  const router = useRouter();
  const { date } = router.query;

  const { rounds, getRounds } = useStatisticDaily();

  useEffect(() => {
    getRounds(date);
  }, []);

  const renderRounds = () => {
    if (rounds.length === 0) {
      return (
        <Box
          width={1}
          bgcolor={theme.background.primary}
          borderRadius={10}
          p={1}
          flexGrow={1}
          height="1px"
          display="flex"
          flexWrap="wrap"
          padding="22px 20px"
          color="#fff"
          alignItems="center"
          justifyContent="center"
        >
          Здесь еще нет раундов
        </Box>
      );
    }

    return (
      <Box
        width={1}
        bgcolor={theme.background.primary}
        borderRadius={10}
        p={1}
        flexGrow={1}
        height="1px"
        className={s.root}
        display="flex"
        flexWrap="wrap"
        padding="22px 20px"
      >
        {rounds.map(round => (
          <Round key={round.id} round={round} />
        ))}
      </Box>
    );
  };

  return (
    <Box width={1} height={1} display="flex" flexDirection="column">
      <Box
        component="h1"
        fontWeight={700}
        fontSize={24}
        lineHeight="36px"
        color="#fff"
        px={2}
      >
        {date}
      </Box>
      {renderRounds()}
    </Box>
  );
}

export default StatisticDaily;
