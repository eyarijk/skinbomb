import React, {useEffect, useState} from 'react';

import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import Button from '../../UiKit/Button';
import Input from '../../UiKit/Input';
import {useAuth} from "../../../lib/api/auth";

function Settings() {
  const theme = useTheme();
  const {user, updateTradeUrl} = useAuth();
  const [changeLink, setChangeLink] = useState('');
  useEffect(() => {
    setChangeLink(user?.tradeUrl)
  }, [user]);

  return (
    <Box px={1.5}>
      <Box
        component="h1"
        fontWeight={700}
        fontSize={24}
        lineHeight="36px"
        color="#fff"
        px={2}
      >
        Настройки
      </Box>
      <Box>
        {/*<Box display="flex">*/}
          {/*<Box*/}
          {/*  width={375}*/}
          {/*  height={190}*/}
          {/*  borderRadius={10}*/}
          {/*  bgcolor={theme.background.primary}*/}
          {/*  p={2.5}*/}
          {/*  display="flex"*/}
          {/*  flexDirection="column"*/}
          {/*  justifyContent="space-between"*/}
          {/*  mr={1.5}*/}
          {/*>*/}
          {/*  <div>*/}
          {/*    <Box fontSize={16} fontWeight={700} color="#fff" mb={1}>*/}
          {/*      Ссылка на обмен:*/}
          {/*    </Box>*/}
          {/*    <Box fontSize={14} fontWeight={400} color="#fff">*/}
          {/*      Вы можете найти свою ссылку на обмен{' '}*/}
          {/*      <Box component="span" color="#F89D00">*/}
          {/*        здесь*/}
          {/*      </Box>*/}
          {/*    </Box>*/}
          {/*  </div>*/}
          {/*  <Box display="flex" justifyContent="space-between">*/}
          {/*    <Box width={275}>*/}
          {/*      <Input*/}
          {/*        value={changeLink}*/}
          {/*        onChange={val => setChangeLink(val)}*/}
          {/*        h="42px"*/}
          {/*        borderColor="#4A4A4A"*/}
          {/*      />*/}
          {/*    </Box>*/}
          {/*    <Button*/}
          {/*      borderSize="0px"*/}
          {/*      value={*/}
          {/*        <img src="/check.svg" alt="check" style={{ width: 20 }} />*/}
          {/*      }*/}
          {/*      bgcolor="#FB9414"*/}
          {/*      color="#141415"*/}
          {/*      w="42px"*/}
          {/*      h="42px"*/}
          {/*      m="0 0 0 20px"*/}
          {/*      onClick={() => {*/}
          {/*        console.log('Активировать');*/}
          {/*      }}*/}
          {/*    />*/}
          {/*  </Box>*/}
          {/*</Box>*/}
        {/*  <Box*/}
        {/*    width={375}*/}
        {/*    height={190}*/}
        {/*    borderRadius={10}*/}
        {/*    bgcolor={theme.background.primary}*/}
        {/*    p={2.5}*/}
        {/*    display="flex"*/}
        {/*    flexDirection="column"*/}
        {/*    justifyContent="space-between"*/}
        {/*    mr={1.5}*/}
        {/*  >*/}
        {/*    <div>*/}
        {/*      <Box fontSize={16} fontWeight={700} color="#fff" mb={1}>*/}
        {/*        Секрет клиента:*/}
        {/*      </Box>*/}
        {/*      <Box fontSize={14} fontWeight={400} color="#fff">*/}
        {/*        Секрет клиента должен содержать максимум 30 символов, пробел не*/}
        {/*        допускается*/}
        {/*      </Box>*/}
        {/*    </div>*/}
        {/*    <Box display="flex" justifyContent="space-between">*/}
        {/*      <Box width={275}>*/}
        {/*        <Input*/}
        {/*          value={clientSecret}*/}
        {/*          onChange={val => setClientSeret(val)}*/}
        {/*          h="42px"*/}
        {/*          borderColor="#4A4A4A"*/}
        {/*        />*/}
        {/*      </Box>*/}
        {/*      <Button*/}
        {/*        borderSize="0px"*/}
        {/*        value={*/}
        {/*          <img src="/check.svg" alt="check" style={{ width: 20 }} />*/}
        {/*        }*/}
        {/*        bgcolor="#FB9414"*/}
        {/*        color="#141415"*/}
        {/*        w="42px"*/}
        {/*        h="42px"*/}
        {/*        m="0 0 0 20px"*/}
        {/*        onClick={() => {*/}
        {/*          console.log('Активировать');*/}
        {/*        }}*/}
        {/*      />*/}
        {/*    </Box>*/}
        {/*  </Box>*/}
        {/*</Box>*/}
        <Box
          width={762}
          borderRadius={10}
          bgcolor={theme.background.primary}
          p={2.5}
          mt={1.5}
        >
          <Box mb={2}>
            <Box fontSize={16} fontWeight={700} color="#fff" mb={1}>
              Ссылка на обмен:
            </Box>
            <Box fontSize={14} fontWeight={400} color="#fff">
              Вы можете найти свою ссылку на обмен{' '}
              <a href=" https://steamcommunity.com/id/320W/tradeoffers/privacy" target="_blank" style={{color: "#F89D00"}}>
                здесь
              </a>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Box width={660}>
              <Input
                value={changeLink}
                onChange={val => setChangeLink(val)}
                h="42px"
                borderColor="#4A4A4A"
              />
            </Box>
            <Button
              borderSize="0px"
              value={
                <img
                  src="/change-black.svg"
                  alt="change"
                  style={{ width: 20 }}
                />
              }
              bgcolor="#FB9414"
              color="#141415"
              w="42px"
              h="42px"
              m="0 0 0 20px"
              onClick={async () => {
                await updateTradeUrl(changeLink);
                console.log('Активировать');
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Settings;
