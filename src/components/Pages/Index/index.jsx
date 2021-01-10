import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import Chart from '../../Chart';
import Bomb from '../../Bomb';
import BetHistory from '../../BetHistory';
import Input from '../../UiKit/Input';
import Button from '../../UiKit/Button';

import { useAuth } from '../../../lib/api/auth';
import { useRound } from '../../../lib/api/rounds';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useSkins } from '../../../lib/api/skins';
import ExchangeSkin from './ExchangeSkin';
import Statistic from './Statistic';
import RateUpper from '../../RateUpper';

function Index() {
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width: 600px)');
  const isMobileOrTablet = useMediaQuery('(max-width: 959px)');
  const isXsDesktop = useMediaQuery('(max-width: 1129px)');
  const isSmDesktop = useMediaQuery('(max-width: 1329px)');
  const isMdDesktop = useMediaQuery('(max-width: 1439px)');

  const router = useRouter();
  const { fetchUser, saveToken } = useAuth();
  const { selectedSkinsPrice } = useSkins();
  const {
    currentRate,
    isCountDown,
    lastBets,
    handleBet,
    betRequest,
  } = useRound();
  const { token } = router.query;
  const [rate, setRate] = useState(1.25);

  useEffect(() => {
    if (token) {
      saveToken(token).then(res => {
        if (res.status === 'success') {
          router.push('/');
        }
      });
      fetchUser();
    }
  }, [token]);

  const handleChangeRate = rate => {
    if (rate > 1.01) setRate(rate);
    else setRate(1.01);
  };

  return (
    <Box
      width={
        (isMobileOrTablet && '100vw') ||
        (isMdDesktop && 'calc(100vw - 300px)') ||
        1
      }
      height={1}
      display="flex"
      flexDirection="column"
    >
      <Box
        display="flex"
        flexDirection={isMobileOrTablet ? 'column-reverse' : 'row'}
      >
        <Box
          display="flex"
          flexDirection={
            (isMobile && 'row') || (isMobileOrTablet && 'row') || 'column'
          }
          width={isMobileOrTablet ? '100%' : 'min-content'}
          mr={1}
          my={!isMobileOrTablet && 1}
          bgcolor={isMobileOrTablet && theme.background.primary}
          justifyContent={isMobileOrTablet && 'space-around'}
          alignItems={isMobileOrTablet && 'center'}
        >
          <Box
            display="flex"
            flexDirection="column"
            width={(isMobileOrTablet && 0.5) || (isXsDesktop && 250) || 300}
            bgcolor={theme.background.primary}
            borderRadius={!isMobileOrTablet && 10}
            mb={!isMobileOrTablet && 1}
            pt={isMobileOrTablet && 3}
          >
            <Box
              width={(isMobileOrTablet && 0.5) || (isXsDesktop && 1) || 1}
              pr={2}
              height={
                (isMobileOrTablet && 'unset') || (isXsDesktop && 150) || 'unset'
              }
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexDirection={
                (isMobileOrTablet && 'row') ||
                (isXsDesktop && 'column') ||
                'row'
              }
            >
              <RateUpper currentRate={currentRate} />
              <Chart startAnimation={isCountDown} currentRate={currentRate} />
            </Box>
            <Box mt={2.5} mb={1.5} pl={2}>
              <BetHistory
                history={lastBets}
                onClick={bet => router.push(`/round?id=${bet.round_id}`)}
                small
              />
            </Box>
          </Box>
          <ExchangeSkin handleChangeRate={handleChangeRate} />
        </Box>
        <Box
          width="-webkit-fill-available"
          bgcolor={theme.background.primary}
          display="flex"
          justifyContent="space-between"
          flexDirection="column"
          position="relative"
          pb={isMobileOrTablet ? 0 : 2}
        >
          <Bomb />
          {!isMobileOrTablet && (
            <Box
              fontSize={20}
              fontWeight={400}
              color="#979797"
              width={1}
              pl={4.1}
            >
              Сделать ставку
            </Box>
          )}
          {!isMobileOrTablet && (
            <Box
              display="flex"
              width={1}
              pl={4.1}
              pr={4.1}
              mb={1.5}
              alignItems="center"
              justifyContent="space-between"
            >
              <BetHistory
                my={1.5}
                justifyContent="space-between"
                width="430px"
                onClick={bet => setRate(bet.bet)}
                history={[
                  { id: 1, bet: 1.1 },
                  { id: 2, bet: 1.5 },
                  { id: 3, bet: 2 },
                  { id: 4, bet: 3 },
                  { id: 4, bet: 5 },
                ]}
              />
              {!isMobileOrTablet && !isSmDesktop && (
                <Box width="178px">
                  <Input
                    value={rate}
                    onChange={handleChangeRate}
                    name="rate"
                    type="number"
                    h="40px"
                    borderColor="#F89D00"
                    fontSize="20px"
                    fontWeight="400"
                  />
                </Box>
              )}
            </Box>
          )}
          {isSmDesktop && (
            <Box
              px={2.5}
              width={1}
              display={isMobileOrTablet ? 'none' : 'flex'}
              justifyContent={'space-between'}
            >
              <Box width="100px">
                <Input
                  value={rate}
                  align="center"
                  onChange={handleChangeRate}
                  name="rate"
                  type="number"
                  h="40px"
                  borderColor="#F89D00"
                  fontSize="20px"
                  fontWeight="400"
                />
              </Box>
              <Box width={630}>
                <Button
                  w="100%"
                  h="40px"
                  p={(isXsDesktop && '0 10px') || '0 26px'}
                  bgcolor={betRequest ? '#212121' : '#F89D00'}
                  borderSize={0}
                  disabled={betRequest}
                  onClick={() => handleBet(rate)}
                  value={
                    <Box
                      width={1}
                      display="flex"
                      justifyContent="space-between"
                    >
                      <Box
                        fontWeight={600}
                        fontSize={(isXsDesktop && 16) || 18}
                        color="#fff"
                      >
                        Начать апгрейд
                      </Box>
                      <Box
                        fontWeight={600}
                        fontSize={(isXsDesktop && 16) || 18}
                        color="#fff"
                      >
                        {selectedSkinsPrice.toFixed(2)} $
                      </Box>
                    </Box>
                  }
                />
              </Box>
            </Box>
          )}
          {!isMobileOrTablet && !isSmDesktop && (
            <Box width={1} px={4.1}>
              <Button
                w="100%"
                h="40px"
                p="0 26px"
                bgcolor="#F89D00"
                borderSize={0}
                onClick={() => handleBet(rate)}
                value={
                  <Box width={1} display="flex" justifyContent="space-between">
                    <Box fontWeight={600} fontSize={18} color="#fff">
                      Начать апгрейд
                    </Box>
                    <Box fontWeight={600} fontSize={18} color="#fff">
                      {selectedSkinsPrice.toFixed(2)} $
                    </Box>
                  </Box>
                }
              />
            </Box>
          )}
        </Box>
      </Box>
      {isMobileOrTablet && (
        <Box
          fontSize={12}
          fontWeight={400}
          color="#979797"
          px={2.5}
          width={1}
          bgcolor={theme.background.primary}
        >
          Сделать ставку
        </Box>
      )}
      {isMobileOrTablet && (
        <Box
          bgcolor={theme.background.primary}
          display="flex"
          width={1}
          px={2.5}
          mb={!isMobileOrTablet && 1.5}
          alignItems="center"
        >
          <BetHistory
            justifyContent="space-between"
            my={1.5}
            width="100%"
            onClick={bet => setRate(bet.bet)}
            history={[
              { id: 1, bet: 1.1 },
              { id: 2, bet: 1.5 },
              { id: 3, bet: 2 },
              { id: 4, bet: 3 },
              { id: 4, bet: 5 },
            ]}
          />
        </Box>
      )}
      {isMobileOrTablet && (
        <Box display="flex" bgcolor={theme.background.primary} px={2.5}>
          <Box width={isMobileOrTablet ? 70 : 130} mr={3}>
            <Input
              value={rate}
              onChange={handleChangeRate}
              name="rate"
              type="number"
              h="40px"
              borderColor="#F89D00"
              fontSize={isMobileOrTablet ? 18 : '20px'}
              fontWeight="400"
            />
          </Box>
          <Box width={isMobileOrTablet ? 1 : 'calc(100% - 130px)'}>
            <Button
              w="100%"
              h="40px"
              p={isMobileOrTablet ? '0 5px' : '0 26px'}
              bgcolor="#F89D00"
              onClick={() => handleBet(rate)}
              borderSize={0}
              value={
                <Box width={1} display="flex" justifyContent="space-between">
                  <Box
                    fontWeight={600}
                    fontSize={isMobileOrTablet ? 14 : 18}
                    color="#070707"
                    mr={3}
                  >
                    Начать апгрейд
                  </Box>
                  <Box
                    fontWeight={600}
                    fontSize={isMobileOrTablet ? 14 : 18}
                    color="#070707"
                  >
                    {selectedSkinsPrice.toFixed(2)} $
                  </Box>
                </Box>
              }
            />
          </Box>
        </Box>
      )}
      <Statistic />
    </Box>
  );
}

export default Index;
