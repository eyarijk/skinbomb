import React from 'react';

import {Box, Button as MuiButton} from '@material-ui/core';

import s from './styles.module.scss';
import Link from "next/link";
import {useAuth} from "../../lib/api/auth";

function UnauthorizedContainer({children}) {
  const {user, steamAuth} = useAuth();

  if(user === null){
    return (
        <Box
            className={s.unAuthed}
            display="flex"
            alignItems="center"
            height="100%"
            width={1}
            justifyContent="center"
        >
          <Box
              width={330}
              height={175}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
          >
            <Box color="#C4C4C4">Войдите, чтобы увидеть эту страницу</Box>
            <MuiButton className={s.loginButton} onClick={steamAuth}>
              <img src="login-steam.svg" alt="login" />
            </MuiButton>
            <Box
                fontWeight="400"
                fontSize={14}
                lineHeight="20px"
                letterSpacing="0.44px"
                color="#C4C4C4"
            >
              Заходя на этот сайт, вы подтверждаете, что вам исполнилось
              18 лет и вы соглашаетесь с{' '}
              <Link href="/privacy-policy">
                      <span className={s.privacy}>
                        Условиями пользовательского соглашения
                      </span>
              </Link>
            </Box>
          </Box>
        </Box>
    )
  }
  return children;
}
export default UnauthorizedContainer;
