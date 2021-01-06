import React from 'react';

import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import {useGames} from "../../../lib/api/games";

import s from './styles.module.scss';
import GameItem from "./GameItem";

function Games() {
  const theme = useTheme();
  const {games} = useGames();

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
        Игры
      </Box>
      <Box
          width={1}
          bgcolor={theme.background.primary}
          borderRadius={10}
          p={1}
          flexGrow={1}
          height="1px"
          className={s.root}
      >
        {games.map(item => <GameItem key={item.id} item={item} />)}
      </Box>
    </Box>
  );
}

export default Games;
