import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import React, { useState } from 'react';
import Link from 'next/link';
import BetColor from '../../../../utils/BetColor';
import s from './styles.module.scss';

function Round({ round }) {
  const color = BetColor(round.coefficient);
  const [entered, setEntered] = useState(false);

  return (
    <Link href={`/round?id=${round.id}`}>
      <Box
        borderRadius={10}
        border={`2px solid ${color}`}
        color="#fff"
        fontWeight={400}
        fontSize={16}
        lineHeight="16px"
        letterSpacing="0.44px"
        mx={0.5}
        fontFamily="Open Sans, unset"
        className={s.round}
        onMouseOver={() => setEntered(true)}
        onMouseLeave={() => setEntered(false)}
        bgcolor={entered ? color : 'transparent'}
      >
        <span className={s.bet}>{`${round.coefficient.toFixed(2)}x`}</span>
        <span className={s.id}>#{round.id}</span>
      </Box>
    </Link>
  );
}

Round.propTypes = {
  round: PropTypes.object.isRequired,
};

export default Round;
