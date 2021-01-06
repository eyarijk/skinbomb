import React, { useState } from 'react';
import cn from 'classnames';

import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import Chat from '../../Chat';
import Inventory from '../../Inventory';

import s from './styles.module.scss';
import { useChat } from '../../../lib/api/chat';

function LeftContent() {
  const [activeTab, setActiveTab] = useState('chat');
  const { online } = useChat();
  const theme = useTheme();
  return (
    <Box className={s.root}>
      <Box
        className={s.content}
        width={1}
        height="100%"
        bgcolor={theme.background.secondary}
        pt={1}
        pr={1}
      >
        <Box width={1} height="100%">
          <Box
            className={s.tabsWrapper}
            width={1}
            height={34}
            display="flex"
            justifyContent="space-between"
            bgcolor={theme.background.secondary}
          >
            <Box
              className={cn(s.tabItem, s.chat, {
                [s.active]: activeTab === 'chat',
              })}
              display="flex"
              alignItems="center"
              justifyContent="center"
              width={210}
              height="100%"
              bgcolor={theme.background.secondary}
              onClick={() => setActiveTab('chat')}
            >
              Чат
              <Box
                mt="-10px"
                mr="5px"
                borderRadius={2}
                style={{
                  background:
                    'linear-gradient(139.23deg, #02C880 13.34%, #01AB6E 86.08%)',
                }}
                height={10}
                width={18}
                fontSize={9}
                fontWeight={600}
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="#141415"
              >
                {online}
              </Box>
            </Box>
            <Box
              bgcolor={theme.background.secondary}
              className={cn(s.tabItem, s.inventory, {
                [s.active]: activeTab === 'inventory',
              })}
              display="flex"
              alignItems="center"
              justifyContent="center"
              width={210}
              height="100%"
              onClick={() => setActiveTab('inventory')}
            >
              Инвентарь
            </Box>
          </Box>
          <Box
            className={cn(s.contentWrapper, {
              [s.rounded]: activeTab === 'chat',
            })}
            width={1}
            height="calc(100% -34px)"
            bgcolor={theme.background.primary}
            p={4}
          >
            {activeTab === 'chat' ? <Chat /> : <Inventory />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LeftContent;
