import { Box } from '@material-ui/core';
import s from '../styles.module.scss';
import Link from 'next/link';
import cn from 'classnames';
import React, { useEffect } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { useSkins } from '../../../../lib/api/skins';
import PropTypes from 'prop-types';
import {
  getCurrentExchange,
  removeCurrentExchange,
} from '../../../../utils/LocalStorage';
import { useAuth } from '../../../../lib/api/auth';

function ExchangeSkin({ handleChangeRate }) {
  const theme = useTheme();
  const auth = useAuth();
  const isMobile = useMediaQuery('(max-width: 600px)');
  const isMobileOrTablet = useMediaQuery('(max-width: 959px)');
  const isXsDesktop = useMediaQuery('(max-width: 1129px)');
  const isDesktop = useMediaQuery('(min-width: 1130px');
  const {
    skins,
    selectedSkinsPrice,
    exchangeSkin,
    setExchangeSkin,
  } = useSkins();

  useEffect(() => {
    if (exchangeSkin && selectedSkinsPrice > 0) {
      handleChangeRate((exchangeSkin.price / selectedSkinsPrice).toFixed(3));
    } else {
      handleChangeRate(1.01);
    }
  }, [exchangeSkin, selectedSkinsPrice]);

  useEffect(() => {
    setExchangeSkin(getCurrentExchange());
  }, []);

  const cancelSkin = () => {
    removeCurrentExchange();
    setExchangeSkin(null);
  };

  const renderSkin = () => {
    if (!auth.user || Object.keys(skins).length === 0) {
      return '';
    }

    if (!exchangeSkin) {
      return (
        <Link href="/store?type=game" w={isMobile ? '100px' : ''}>
          <Box
            className={cn(s.button, s.shop, s.chooseSkinBtn)}
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize={isMobileOrTablet ? 10 : 14}
          >
            {isMobileOrTablet ? 'Выбрать скин' : 'Выбрать скин в магазине'}
          </Box>
        </Link>
      );
    }

    return (
      <Box width={isMobile ? '77%' : '100%'} mr={isDesktop && 4} mt={isMobile && '10px' || isXsDesktop && '27px'}>
        <Box display="flex" alignItems="center">
          {!exchangeSkin?.is_star === 1 && (
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
            {exchangeSkin.name_of_weapon}
          </Box>
          {!!exchangeSkin.wear_level && (
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
              {exchangeSkin.wear_level}
            </Box>
          )}
          {(!!exchangeSkin.is_souvenir || !!exchangeSkin.is_statTrack) && (
            <Box
              bgcolor={exchangeSkin.is_souvenir ? '#FADB35' : '#8842A8'}
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
              {!exchangeSkin.is_souvenir && 'Souvenir'}
              {!!exchangeSkin.is_statTrack && 'StatTrack'}
            </Box>
          )}
          <Box color="#fff" fontSize={13} fontWeight={500} ml="auto">
            {exchangeSkin.price.toFixed(3)} $
          </Box>
        </Box>
        <Box
          color="#f2f2f2"
          fontSize={11}
          fontWeight={400}
          className={s.ellipsis}
        >
          {exchangeSkin.name}
        </Box>
      </Box>
    );
  };

  return (
    <Box
      height={(isMobileOrTablet && 185) || '72%'}
      width={(isMobileOrTablet && 299) || (isXsDesktop && 250) || 299}
      bgcolor={theme.background.primary}
      padding={isMobile && '0' || isMobileOrTablet ? '0' : '41px'}
      pb={isMobile && '0' || isDesktop && '20px' || isXsDesktop && '15px' || isMobileOrTablet && 0}
      pl={isMobile ? 0 : isMobileOrTablet ? '30px' : isXsDesktop ? '28px' : '41px'}
      pr={isMobile && '0' || isMobileOrTablet && '10px' || isXsDesktop && '28px'}
      mb={isDesktop && '10px'}
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="start"
      position={isMobileOrTablet ? 'inherit' : 'relative'}
      className="exchange-skin__block"
    >
      {!!exchangeSkin && (
        <button onClick={cancelSkin} className={s.cancelEgg}>
          x
        </button>
      )}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={isMobileOrTablet ? 85 : 0.9}
        height={isMobileOrTablet ? 90 : isXsDesktop ? 200 : 240}
        className={s.eggWrapper}
      >
        {!!exchangeSkin && (
          <img
            src={`https://api.skinbomb.gg${exchangeSkin.icon}`}
            alt="gloves"
            className={s.winWeapon}
          />
        )}
        <img
          src={exchangeSkin ? '/sphere.gif' : '/sphere.png'}
          alt="sphere"
          className={s.sphere}
        />
        <img
          src="/line.png"
          alt="line"
          className={exchangeSkin ? s.none : s.line}
        />
      </Box>
      {renderSkin()}
    </Box>
  );
}

ExchangeSkin.propTypes = {
  handleChangeRate: PropTypes.func,
};

export default ExchangeSkin;
