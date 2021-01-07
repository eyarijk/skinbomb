import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';
import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import cn from 'classnames';

import Chart from '../../Chart';
import Bomb from '../../Bomb';
import BetHistory from '../../BetHistory';
import Stats from '../../Stats';
import Input from '../../UiKit/Input';
import Button from '../../UiKit/Button';

import { useAuth } from '../../../lib/api/auth';
import { useRound } from '../../../lib/api/rounds';

import s from './styles.module.scss';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useSkins } from '../../../lib/api/skins';

function Index() {
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width: 600px)');
  const isMobileOrTablet = useMediaQuery('(max-width: 959px)');
  const isXsDesktop = useMediaQuery('(max-width: 1129px)');
  const isSmDesktop = useMediaQuery('(max-width: 1329px)');
  const isMdDesktop = useMediaQuery('(max-width: 1459px)');

  const router = useRouter();
  const { fetchUser, saveToken } = useAuth();
  const { selectedSkinsPrice } = useSkins();
  const {
    currentRate,
    isCountDown,
    lastBets,
    handleBet,
    betRequest,
    globalStatistics,
  } = useRound();
  const { token } = router.query;
  const [rate, setRate] = useState(1.25);
  const [animatingSkin, setAnimatingSkin] = useState(null);

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

  useEffect(() => {
    if (animatingSkin && selectedSkinsPrice > 0) {
      handleChangeRate((animatingSkin.price / selectedSkinsPrice).toFixed(2));
    } else {
      handleChangeRate(1.5);
    }
  }, [animatingSkin, selectedSkinsPrice]);

  useEffect(() => {
    const currentExchange = localStorage.getItem('currentExchange');

    if (currentExchange) {
      setAnimatingSkin(JSON.parse(currentExchange));
    }
  }, []);

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
            (isMobile && 'column') || (isMobileOrTablet && 'row') || 'column'
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
            width={(isMobileOrTablet && 300) || (isXsDesktop && 250) || 300}
            bgcolor={theme.background.primary}
            borderRadius={!isMobileOrTablet && 10}
            mb={!isMobileOrTablet && 1}
            pr={2}
            pt={isMobileOrTablet && 3}
          >
            <Box
              width={1}
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
              <Box
                width={isMobileOrTablet ? '100%' : '-webkit-fill-available'}
                display="flex"
                justifyContent="center"
                alignItems="center"
                fontWeight="700"
                fontSize={isMobile ? 14 : 24}
                color="white"
                px={isMobileOrTablet && 1}
                align="center"
              >
                {`${currentRate.toFixed(2)} X`}
              </Box>
              <Chart startAnimation={isCountDown} currentRate={currentRate} />
            </Box>
            <Box mt={2.5} mb={1.5} pl={2}>
              <BetHistory history={lastBets} small />
            </Box>
          </Box>
          <Box
            height={
              // (isMobileOrTablet && 170) || (isXsDesktop && 259) ||
              (isMobileOrTablet && 300) || 328
            }
            width={(isMobileOrTablet && 299) || (isXsDesktop && 250) || 299}
            bgcolor={theme.background.primary}
            borderRadius={!isMobileOrTablet && 10}
            padding="40px 40px 20px 40px"
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            {/* <Box display="flex" justifyContent="space-between">
              <Box
                display="flex"
                fontSize={14}
                fontWeight={400}
                color="#626262"
              >
                <img
                  src="/star.svg"
                  alt="star"
                  style={{
                    width: 14,
                    height: 14,
                    marginRight: 8,
                  }}
                />
                Sport Gloves
              </Box>
              <Box fontSize={18} fontWeight={600} color="#626262">
                3,852 $
              </Box>
            </Box>
            <Box fontSize={19} fontWeight={400} color="#fff">
              Vice
            </Box> */}
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              width={1}
              height={
                // isMobileOrTablet ? 100 :
                240
              }
              className={s.eggWrapper}
            >
              {!!animatingSkin && (
                <img
                  src={`https://api.skinbomb.gg${animatingSkin.icon}`}
                  alt="gloves"
                  className={s.winWeapon}
                />
              )}
              <img
                src={animatingSkin ? '/sphere.gif' : '/sphere.png'}
                alt="sphere"
                className={s.sphere}
              />
            </Box>
            <Link href="/store?type=exchange">
              <Box
                className={cn(s.button, s.shop)}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                Выбрать скин в магазине
              </Box>
            </Link>
            {animatingSkin && (
              <Box>
                <Box display="flex" alignItems="center">
                  {!animatingSkin?.is_star === 1 && (
                    <img className={s.star} src="/star.svg" alt="star" />
                  )}
                  <Box
                    color="#626262"
                    fontSize={9}
                    lineHeight="20px"
                    letterSpacing="0.44px"
                    fontWeight={600}
                    className={s.ellipsis}
                  >
                    {animatingSkin.name_of_weapon}
                  </Box>
                  {!!animatingSkin.wear_level && (
                    <Box
                      bgcolor="#fff"
                      fontSize={7}
                      fontWeight={600}
                      borderRadius={2}
                      width={14}
                      height={10}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      mx={0.5}
                    >
                      {animatingSkin.wear_level}
                    </Box>
                  )}
                  {(!!animatingSkin.is_souvenir ||
                    !!animatingSkin.is_statTrack) && (
                    <Box
                      bgcolor={
                        animatingSkin.is_souvenir ? '#FADB35' : '#8842A8'
                      }
                      fontSize={7}
                      fontWeight={600}
                      borderRadius={2}
                      height={10}
                      width={70}
                      color={'#fff'}
                      px={1}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      mx={0.5}
                    >
                      {!animatingSkin.is_souvenir && 'Souvenir'}
                      {!!animatingSkin.is_statTrack && 'StatTrack'}
                    </Box>
                  )}
                  <Box color="#fff" fontSize={13} fontWeight={500} ml="auto">
                    {animatingSkin.price.toFixed(2)} $
                  </Box>
                </Box>
                <Box
                  color="#f2f2f2"
                  fontSize={11}
                  fontWeight={400}
                  className={s.ellipsis}
                >
                  {animatingSkin.name}
                </Box>
              </Box>
            )}
          </Box>
        </Box>
        <Box
          width="-webkit-fill-available"
          bgcolor={theme.background.primary}
          display="flex"
          flexDirection="column"
          alignItems="center"
          position="relative"
        >
          <Bomb />
          {!isMobileOrTablet && (
            <Box
              fontSize={20}
              fontWeight={400}
              color="#979797"
              px={2.5}
              width={1}
            >
              Сделать ставку
            </Box>
          )}
          {!isMobileOrTablet && (
            <Box display="flex" width={1} px={2.5} mb={1.5} alignItems="center">
              <BetHistory
                justifyContent="center"
                my={1.5}
                width="auto"
                onClick={val => setRate(val)}
                history={[
                  { id: 1, bet: 1.1 },
                  { id: 2, bet: 1.5 },
                  { id: 3, bet: 2 },
                  { id: 4, bet: 3 },
                  { id: 4, bet: 5 },
                ]}
              />
              {!isMobileOrTablet && !isSmDesktop && (
                <Box width="-webkit-fill-available" pl={2.5}>
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
              width="100%"
              display={isMobileOrTablet ? 'none' : 'flex'}
              justifyContent={'space-between'}
            >
              <Box width="100px">
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
              <Box width={1} px={2.5}>
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
                        {selectedSkinsPrice} $
                      </Box>
                    </Box>
                  }
                />
              </Box>
            </Box>
          )}
          {!isMobileOrTablet && !isSmDesktop && (
            <Box width={1} px={2.5}>
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
                      {selectedSkinsPrice} $
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
            width="100vw"
            onClick={val => setRate(val)}
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
          <Box width="130px" mr={3}>
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
          <Box width="calc(100% - 130px)">
            <Button
              w="100%"
              h="40px"
              p="0 26px"
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
                    {selectedSkinsPrice} $
                  </Box>
                </Box>
              }
            />
          </Box>
        </Box>
      )}
      <Box
        xs={12}
        bgcolor={theme.background.primary}
        style={{ borderTopLeftRadius: 10 }}
        px={3}
        flexGrow={1}
        height="1px"
        display="flex"
        flexDirection="column"
      >
        <Box width={1} display="flex" justifyContent="space-between" px={4}>
          <Box
            display="flex"
            alignItems="flex-end"
            fontWeight={400}
            fontSize={20}
            lineHeight="32px"
            letterSpacing="0.44"
            color="#888"
            height={43}
          >
            Статистика
          </Box>
          <Box
            display="flex"
            alignItems="flex-end"
            fontWeight={600}
            fontSize={12}
            lineHeight="32px"
            letterSpacing="0.44"
            color="#686868"
          >
            <Box component="span" display="flex" alignItems="center">
              <img src="atm.svg" alt="atm" style={{ marginRight: 4 }} />
              {`${globalStatistics.amount} $`}
            </Box>
            <Box component="span" display="flex" alignItems="center" mx={2}>
              <img src="people.svg" alt="people" style={{ marginRight: 4 }} />
              {globalStatistics.users_count}
            </Box>
            <Box component="span" display="flex" alignItems="center">
              <img
                src="collections.svg"
                alt="collections"
                style={{ marginRight: 4 }}
              />
              {globalStatistics.rounds_count_current_day}
            </Box>
          </Box>
        </Box>
        <Stats />
      </Box>
    </Box>
  );
}

export default Index;
