import PropTypes from 'prop-types';
import s from './styles.module.scss';
import { Box, Button } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import { useAuth } from '../../lib/api/auth';

function NeedAuth({ text }) {
  const auth = useAuth();

  return (
    <Box className={s.root} display="flex" alignItems="center" height="100%">
      <Box
        width={330}
        height={175}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box color="#C4C4C4">{text}</Box>
        <Button className={s.loginButton} onClick={() => auth.steamAuth()}>
          <img src="/login-steam.svg" alt="login" />
        </Button>
        <Box
          fontWeight="400"
          fontSize={14}
          lineHeight="20px"
          letterSpacing="0.44px"
          color="#C4C4C4"
        >
          Заходя на этот сайт, вы подтверждаете, что вам исполнилось 18 лет и вы
          соглашаетесь с{' '}
          <Link href="/privacy-policy">
            <span className={s.privacy}>
              Условиями пользовательского соглашения
            </span>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

NeedAuth.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NeedAuth;
