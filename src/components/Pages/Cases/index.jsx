import React, { useEffect, useRef, useState } from 'react';

import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import WeaponCard from '../../WeaponCard';

import s from './styles.module.scss';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Draggable from 'react-draggable';
import { useAuth } from '../../../lib/api/auth';
import { useCases } from '../../../lib/api/cases';

function Cases() {
  const theme = useTheme();
  const isMdDesktop = useMediaQuery('(max-width: 1540px)');
  const isDesk = useMediaQuery('(max-width: 1459px)');
  const isSmDesktop = useMediaQuery('(max-width: 1340px)');
  const isMobileOrTablet = useMediaQuery('(max-width: 959px)');
  const { token, user } = useAuth();
  const { levels, currentUserLevelData } = useCases();
  const [factoryCurrentLevel, setFactoryCurrentLevel] = useState({
    level: 0,
    skins: [],
  });
  const scrollerRef = useRef(null);
  const boxRef = useRef(null);

  const loggedUser = !!token && !!user;

  const onDrag = (e, data) => {
    const scrollerWidth = scrollerRef.current
      ? scrollerRef.current.offsetWidth
      : 465;
    const boxWidth = boxRef.current ? boxRef.current.offsetWidth : 35;
    const scrollAreaWidth = scrollerWidth - boxWidth;

    if (data.x >= 0 && data.x <= scrollAreaWidth) {
      const point = scrollAreaWidth / levels.length;
      const levelIndex = Math.round(data.x / point) - 1;
      const level = levels[levelIndex > 0 ? levelIndex : 0];
      setFactoryCurrentLevel(level);
    }
  };

  useEffect(() => {
    if (factoryCurrentLevel.level === 0 && levels.length > 0) {
      setFactoryCurrentLevel(levels[0]);
    }
  }, [levels]);

  return (
    <Box
      width={(isMobileOrTablet && '100vw') || (isDesk && '100%') || '100%'}
      height={1}
      display="flex"
      flexDirection="column"
      pt={2}
      pr={4}
    >
      <Box
        fontSize={24}
        fontWeight={700}
        color="#fff"
        fontFamily="Open Sans, sans-serif"
        lineHeight="36px"
        letterSpacing="0.44px"
        pl={3.5}
      >
        Кейсы
      </Box>
      <Box
        width={1}
        p={1}
        display="flex"
        flexDirection={isMobileOrTablet && 'column'}
        justifyContent="space-between"
        my={1}
      >
        <Box
          width={
            (isMobileOrTablet && '98vw') ||
            (isSmDesktop && 300) ||
            (isMdDesktop && 432) ||
            432
          }
          mr={!isMobileOrTablet && 1.5}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height={1}
        >
          <Box
            bgcolor={theme.background.primary}
            borderRadius={10}
            p={3}
            mb={!loggedUser ? 0 : 1.5}
            height={!loggedUser ? 1 : 'auto'}
          >
            <Box
              fontSize={16}
              fontWeight={700}
              color="#fff"
              mb={2}
              lineHeight="20px"
              letterSpacing="0.44px"
            >
              Награда за уровни
            </Box>
            <Box
              fontSize={14}
              fontWeight={400}
              color="#fff"
              fontFamily="Open Sans, sans-serif"
              lineHeight="20px"
              letterSpacing="0.44px"
            >
              {/*Каждое пополнение на{' '}*/}
              {/*<Box component="span" color="#02C880" fontWeight={700}>*/}
              {/*  0,01$*/}
              {/*</Box>{' '}*/}
              {/*это{' '}*/}
              {/*<Box component="span" color="#02C880" fontWeight={700}>*/}
              {/*  1 опыт*/}
              {/*</Box>*/}
              Зарабатывайте опыт пополняя счет и делая ставки, чтобы поднять
              новый уровень. Вы будете вознаграждены специальным кейсом за
              каждый уровень.
            </Box>
          </Box>
          {!!loggedUser && (
            <Box
              flexGrow={1}
              bgcolor={theme.background.primary}
              borderRadius={10}
              display="flex"
              flexDirection="column"
              width={1}
              p={3}
              justifyContent="center"
            >
              <Box width={1}>
                <Box
                  color="#fff"
                  display="flex"
                  alignItems="center"
                  fontSize={20}
                  fontWeight={700}
                  mr={12}
                >
                  <img
                    src="/star.svg"
                    alt="star"
                    style={{ marginRight: 8, width: 33 }}
                  />
                  Ваш уровень {currentUserLevelData.level}
                </Box>
                <Box
                  my={2}
                  fontFamily="Open Sans, sans-serif"
                  fontSize={14}
                  fontWeight={400}
                  color="#F5F5F5"
                >
                  Вы получаете опыт за каждое пополение своего счета
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Box
                    width={1}
                    borderRadius={10}
                    height={16}
                    bgcolor="#282828"
                    position="relative"
                  >
                    <Box
                      position="absolute"
                      left={0}
                      top={0}
                      bottom={0}
                      borderRadius={10}
                      width={`${
                        (currentUserLevelData.points /
                          currentUserLevelData.points_for_next_level) *
                        100
                      }%`}
                      bgcolor="#FB9414"
                    />
                  </Box>
                  <Box fontSize={14} fontWeight={400} color="#ABABAB" mt={2}>
                    <Box component="span" fontWeight={700} color="#fff">
                      {(
                        currentUserLevelData.points_for_next_level -
                        currentUserLevelData.points
                      ).toFixed(2)}
                      ․ опыта
                    </Box>{' '}
                    до следующего уровня
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
        <Box
          flexGrow={1}
          display="flex"
          flexDirection="column"
          bgcolor={theme.background.primary}
          borderRadius={10}
          p={2}
          mt={isMobileOrTablet && 2}
          width={isMobileOrTablet ? '100vw' : 527}
        >
          <Box
            fontSize={16}
            fontWeight={700}
            fontFamily="Open Sans, sans-serif"
            color="#fff"
            mb={!isMobileOrTablet && 6.5}
          >
            Доступные кейсы
          </Box>
          <Box
            width={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box position="relative">
              <img
                src="/factory.svg"
                alt="level"
                style={{ pointerEvents: 'none', width: '100%' }}
              />
              <Box
                position="absolute"
                top={'48%'}
                left={'18%'}
                width={'77%'}
                ref={scrollerRef}
              >
                <Draggable
                  axis="x"
                  defaultPosition={{ x: 0, y: 0 }}
                  onDrag={onDrag}
                  bounds="parent"
                >
                  <Box
                    width="10%"
                    ref={boxRef}
                    display="inline-block"
                    style={{ cursor: 'grab' }}
                    position="relative"
                    zIndex={5}
                  >
                    <img
                      src="/case2.svg"
                      alt="level"
                      style={{ pointerEvents: 'none', width: '100%' }}
                    />
                  </Box>
                </Draggable>
                <Box
                  color="#fff"
                  fontWeight={600}
                  fontSize="23px"
                  position="absolute"
                  right={0}
                  top={0}
                  zIndex={1}
                >
                  Уровень {factoryCurrentLevel.level}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {!isMobileOrTablet && (
        <Box
          flexGrow={1}
          height={2}
          bgcolor={theme.background.primary}
          borderRadius={10}
          p={2.5}
        >
          <Box
            className={s.overflow}
            display="flex"
            justifyContent="space-between"
            width={1}
            height={1}
          >
            <Box display="flex" flexDirection="column" width={185} mr={6}>
              <img src="/case.png" alt="box" className={s.caseImg} />
              <Box
                fontSize={16}
                fontWeight={700}
                color="#fff"
                fontFamily="Open Sans, sans-serif"
                lineHeight="36px"
                letterSpacing="0.44px"
                my={1.5}
              >
                Награда {factoryCurrentLevel.level} уровня
              </Box>
              <Box
                fontSize={14}
                fontWeight={400}
                color="#fff"
                fontFamily="Open Sans, sans-serif"
                lineHeight="20px"
                letterSpacing="0.44px"
              >
                Этот кейс будет добавлен в инвентарь после достижения уровня{' '}
                {factoryCurrentLevel.level}.
              </Box>
            </Box>
            <Box width={1}>
              <Box display="flex" flexWrap="wrap" justifyContent="space-around">
                {factoryCurrentLevel.skins.map(card => (
                  <WeaponCard
                    key={card.id}
                    card={card.skin}
                    percent={card.percent}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      {isMobileOrTablet && (
        <Box
          width="100vw"
          flexGrow={1}
          bgcolor={theme.background.primary}
          px={3}
        >
          <Box
            display="flex"
            justifyContent="space-around"
            mt={isMobileOrTablet && 2}
          >
            <img src="/Box.svg" alt="box" />
            <Box
              display="flex"
              flexDirection="column"
              ml={isMobileOrTablet && 2}
            >
              <Box
                fontSize={16}
                fontWeight={700}
                color="#fff"
                fontFamily="Open Sans, sans-serif"
                lineHeight="36px"
                letterSpacing="0.44px"
                my={1.5}
              >
                Награда {factoryCurrentLevel.level} уровня
              </Box>
              <Box
                fontSize={14}
                fontWeight={400}
                color="#fff"
                fontFamily="Open Sans, sans-serif"
                lineHeight="20px"
                letterSpacing="0.44px"
              >
                Этот кейс будет добавлен в инвентарь после достижения уровня{' '}
                {factoryCurrentLevel.level}.
              </Box>
            </Box>
          </Box>
          <Box width={1}>
            <Box display="flex" flexWrap="wrap" justifyContent="center">
              {factoryCurrentLevel.skins.map(card => (
                <WeaponCard
                  key={card.id}
                  card={card.skin}
                  percent={card.percent}
                />
              ))}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Cases;
