import React from 'react';

import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import s from './styles.module.scss';

export default function Home() {
  const theme = useTheme();
  return (
    <Box
      className={s.root}
      component="div"
      minWidth="100%"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor={theme.background.secondary}
    />
  );
}
