import React, {useEffect, useState} from 'react';

import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import LeaderBoard from '../../LeaderBoard';

import s from './styles.module.scss';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {useLeaders} from "../../../lib/api/leaders";
import moment from "moment";


function Leaders() {
  const theme = useTheme();
  const isDesk = useMediaQuery('(max-width: 1459px)');
  const isMobileOrTablet = useMediaQuery('(max-width: 959px)');
  const {date} = useLeaders();
  
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [interval, setSecondInterval] = useState(null);

  const calculateDate = () => {
    if(date){
      const now = moment();
      const duration = moment.duration(moment(date).diff(now));
      const days = Math.floor(duration.asDays());

      const asHours = Math.floor(duration.asHours());
      const hours = asHours - (days * 24);

      const asMinutes = Math.floor(duration.asMinutes());
      const minutes = asMinutes - (asHours * 60);

      const asSeconds = Math.floor(duration.asSeconds());
      const seconds = asSeconds - (asMinutes * 60);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }
  }

  useEffect(() => {
    if(interval) clearInterval(interval);

    const newInterval = setInterval(calculateDate, 1000);
    setSecondInterval(newInterval);
  }, [date])

  return (
    <Box
      pt={2}
      display="flex"
      flexDirection="column"
      width={(isMobileOrTablet && "100vw") || (isDesk && "calc(100vw - 300px)") || "calc(100vw - 430px)"}
      height={1}
      pl={!isMobileOrTablet && 5.5}
      pr={16}
    >
      <Box
        pt={2}
        pb={4}
        width={1}
        display="flex"
        alignItems="center"
        fontSize={24}
        lineHeight="36px"
        color="#fff"
        fontWeight="bold"
        fontFamily="Open Sans, sans-serif"
        pl={2}
      >
        Лидеры
      </Box>
      <Box display="flex" flexDirection={isMobileOrTablet && "column"}
           justifyContent="space-between"
           width={(isMobileOrTablet && "100vw") || (isDesk && "calc(100vw - 300px)") || "calc(100vw - 430px)"} mb={10}
           pr={!isMobileOrTablet && 11}
           >
        <Box
          width={(isMobileOrTablet && "100vw") || 430}
          bgcolor={theme.background.primary}
          p={2.5}
          borderRadius={10}
          mr={!isMobileOrTablet && 5}
        >
          <Box
            fontSize={24}
            fontWeight={700}
            lineHeight="36px"
            color="#fff"
            mb={5}
          >
            Список лидеров
          </Box>
          <Box color="#fff" fontSize={16} fontWeight={400} lineHeight="20px">
            Покоряйте список лидеров играя на сайте, и получайте приз за
            достигнутое место когда актуальное соревнование закончится.
          </Box>
        </Box>
        <Box
          width={(isMobileOrTablet && "94vw") || 430}
          py={5}
          display="flex"
          flexDirection="column"
          alignItems="center"
          borderRadius={10}
          border="2px solid #FB9414"
          bgcolor={theme.background.secondary}
          mt={isMobileOrTablet && 5}
          mx={(isMobileOrTablet && 3) }
        >
          <Box
            color="#FB9414"
            fontSize={20}
            fontWeight={400}
            lineHeight="36px"
            mb={4.5}
          >
            Заканчиваеться через
          </Box>
          <Box
              width={1}
              display="flex"
          >
            <Box
              width="25%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Box
                  color="#FB9414"
                  fontSize="25px"
                  fontWeight={500}
              >
                {days}
              </Box>
              <Box
                  color="#F5F5F5"
                  fontSize="16px"
              >
                Дня
              </Box>
            </Box>
            <Box
              width="25%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Box
                  color="#FB9414"
                  fontSize="25px"
                  fontWeight={500}
              >
                {hours}
              </Box>
              <Box
                  color="#F5F5F5"
                  fontSize="16px"
              >
                Час
              </Box>
            </Box>
            <Box
              width="25%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Box
                  color="#FB9414"
                  fontSize="25px"
                  fontWeight={500}
              >
                {minutes}
              </Box>
              <Box
                  color="#F5F5F5"
                  fontSize="16px"
              >
                Минут
              </Box>
            </Box>
            <Box
              width="25%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Box
                  color="#FB9414"
                  fontSize="25px"
                  fontWeight={500}
              >
                {seconds}
              </Box>
              <Box
                  color="#F5F5F5"
                  fontSize="16px"
              >
                Секунд
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
          className={!isMobileOrTablet && s.overflow}
          width={(isMobileOrTablet && "98vw") || (isDesk && "calc(100vw - 300px)") || "calc(100vw - 430px)"}
          mb={isMobileOrTablet && 5}
          mx={isMobileOrTablet && 1}
          pr={!isMobileOrTablet && 11}
      >
        <LeaderBoard />
      </Box>
    </Box>
  );
}

export default Leaders;
