import React, { useEffect } from 'react';

import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import { useRound } from '../../../lib/api/round';
import s from './styles.module.scss';
import Loading from '../../Loading';
import StatItem from '../../Stats/StatItem';
import Link from 'next/link';

function RoundPage() {
  const theme = useTheme();
  const router = useRouter();
  const { id } = router.query;

  const { round, getRound, isLoadingRound } = useRound();

  useEffect(() => {
    if (!id) {
      return;
    }

    getRound(id);
  }, [id]);

  if (isLoadingRound) {
    return <Loading />;
  }

  const renderStats = () => {
    if (round.statistics.length === 0) {
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
          Здесь еще нет ставок
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
        {round.statistics.map(item => {
          return <StatItem key={item.id} item={item} />;
        })}
      </Box>
    );
  };

  return (
    <Box width={1} height={1} display="flex" flexDirection="column">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        fontFamily="Open Sans, sans-serif"
      >
        <Box
          component="h1"
          fontWeight={700}
          fontSize={24}
          lineHeight="36px"
          color="#fff"
          px={2}
        >
          Разрушен @ {round.coefficient.toFixed(2)}x
        </Box>
        <Box
          component="span"
          fontWeight={700}
          fontSize={12}
          lineHeight="36px"
          color="#fff"
          px={2}
        >
          <span className={s.id}>#{round.id} — </span>
          <Link href={`/statistic-daily?date=${round.date}`} component="a">
            <a className={s.date}>{round.date}</a>
          </Link>
        </Box>
      </Box>
      {renderStats()}
    </Box>
  );
}

export default RoundPage;
